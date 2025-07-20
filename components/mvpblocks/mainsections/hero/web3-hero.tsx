'use client';

import React, { useEffect } from 'react';

export default function Web3LandingPage() {
  useEffect(() => {
    const canvas = document.getElementById(
      'particle-bg',
    ) as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    type Particle = {
      hue: number;
      sat: number;
      lum: number;
      x: number;
      y: number;
      xLast: number;
      yLast: number;
      xSpeed: number;
      ySpeed: number;
      age: number;
      ageSinceStuck: number;
      attractor: { oldIndex: number; gridSpotIndex: number };
      name: string;
    };

    type Spot = {
      x: number;
      y: number;
      busyAge: number;
      spotIndex: number;
      isEdge: string | false;
      field: number;
    };

    const App = {
      width: canvas.width,
      height: canvas.height,
      ctx,
      dataToImageRatio: 1,
      particles: [] as Particle[],
      stepCount: 0,
      lifespan: 1000,
      popPerBirth: 1,
      maxPop: 300,
      birthFreq: 2,
      gridSize: 8,
      gridSteps: Math.floor(1000 / 8),
      grid: [] as Spot[],
      drawnInLastFrame: 0,
      deathCount: 0,
      xC: canvas.width / 2,
      yC: canvas.height / 2,
      gridMaxIndex: 0,
      birth() {
        const idx = Math.floor(Math.random() * this.gridMaxIndex);
        const spot = this.grid[idx];
        this.particles.push({
          hue: 276,
          sat: 95,
          lum: 60 + Math.floor(25 * Math.random()),
          x: spot.x,
          y: spot.y,
          xLast: spot.x,
          yLast: spot.y,
          xSpeed: 0,
          ySpeed: 0,
          age: 0,
          ageSinceStuck: 0,
          attractor: {
            oldIndex: idx,
            gridSpotIndex: idx,
          },
          name: `seed-${Math.ceil(Math.random() * 1e7)}`,
        });
      },
      kill(name: string) {
        this.particles = this.particles.filter(
          (p: { name: string }) => p.name !== name,
        );
      },
      move() {
        const k = 8,
          visc = 0.4;
        this.particles.forEach(
          (p: {
            xLast: any;
            x: number;
            yLast: any;
            y: number;
            attractor: { gridSpotIndex: any; oldIndex: any };
            ageSinceStuck: number;
            name: any;
            xSpeed: number;
            ySpeed: number;
            age: number;
          }) => {
            p.xLast = p.x;
            p.yLast = p.y;

            let idx = p.attractor.gridSpotIndex;
            let spot = this.grid[idx];

            if (Math.random() < 0.5 && !spot.isEdge) {
              const neighbours = [
                this.grid[idx - 1],
                this.grid[idx + 1],
                this.grid[idx - this.gridSteps],
                this.grid[idx + this.gridSteps],
              ];
              const chaos = 30;
              const best = neighbours.reduce((a, b) =>
                a.field + chaos * Math.random() >
                b.field + chaos * Math.random()
                  ? a
                  : b,
              );
              if (best.busyAge === 0 || best.busyAge > 15) {
                p.ageSinceStuck = 0;
                p.attractor.oldIndex = idx;
                p.attractor.gridSpotIndex = best.spotIndex;
                spot = best;
                spot.busyAge = 1;
              } else {
                p.ageSinceStuck++;
              }
            } else {
              p.ageSinceStuck++;
            }
            if (p.ageSinceStuck === 10) this.kill(p.name);

            const dx = p.x - spot.x,
              dy = p.y - spot.y,
              xAcc = -k * dx,
              yAcc = -k * dy;
            p.xSpeed = (p.xSpeed + xAcc) * visc;
            p.ySpeed = (p.ySpeed + yAcc) * visc;
            p.x += 0.1 * p.xSpeed;
            p.y += 0.1 * p.ySpeed;

            if (++p.age > this.lifespan) {
              this.kill(p.name);
              this.deathCount++;
            }
          },
        );
      },
      dataXYtoCanvasXY(x: number, y: number) {
        const z = 1.6;
        return {
          x: this.xC + x * z * this.dataToImageRatio,
          y: this.yC + y * z * this.dataToImageRatio,
        };
      },
      draw() {
        this.drawnInLastFrame = 0;
        if (!this.particles.length) return;
        const ctx = this.ctx;
        ctx.fillStyle = 'rgba(10,5,25,0.08)';
        ctx.fillRect(0, 0, this.width, this.height);

        this.particles.forEach(
          (p: {
            hue: number;
            sat: any;
            lum: any;
            xLast: any;
            yLast: any;
            x: any;
            y: any;
            attractor: {
              gridSpotIndex: string | number;
              oldIndex: string | number;
            };
          }) => {
            const h = p.hue + this.stepCount / 30,
              s = p.sat,
              l = p.lum,
              last = this.dataXYtoCanvasXY(p.xLast, p.yLast),
              now = this.dataXYtoCanvasXY(p.x, p.y),
              spot = this.grid[p.attractor.gridSpotIndex],
              spotXY = this.dataXYtoCanvasXY(spot.x, spot.y),
              old = this.grid[p.attractor.oldIndex],
              oldXY = this.dataXYtoCanvasXY(old.x, old.y);

            ctx.strokeStyle = `hsla(${h},${s}%,${l}%,1)`;
            ctx.lineWidth = 1.5 * this.dataToImageRatio;
            ctx.beginPath();
            ctx.moveTo(last.x, last.y);
            ctx.lineTo(now.x, now.y);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(oldXY.x, oldXY.y);
            ctx.lineTo(spotXY.x, spotXY.y);
            ctx.arc(
              spotXY.x,
              spotXY.y,
              1.5 * this.dataToImageRatio,
              0,
              Math.PI * 2,
            );
            ctx.stroke();
            this.drawnInLastFrame++;
          },
        );
      },
      evolve() {
        this.stepCount++;
        this.grid.forEach((s: { busyAge: number }) => {
          if (s.busyAge > 0) s.busyAge++;
        });
        if (
          this.stepCount % this.birthFreq === 0 &&
          this.particles.length + this.popPerBirth < this.maxPop
        )
          this.birth();
        this.move();
        this.draw();
      },
      initDraw() {
        this.ctx.fillStyle = '#050514';
        this.ctx.fillRect(0, 0, this.width, this.height);
      },
    } as any;

    (() => {
      let i = 0;
      for (let xx = -500; xx < 500; xx += 8) {
        for (let yy = -500; yy < 500; yy += 8) {
          const r = Math.sqrt(xx * xx + yy * yy),
            r0 = 100,
            field = r < r0 ? (255 / r0) * r : 255 - Math.min(255, (r - r0) / 2);
          App.grid.push({
            x: xx,
            y: yy,
            busyAge: 0,
            spotIndex: i,
            isEdge:
              xx === -500
                ? 'left'
                : xx === -500 + 8 * (App.gridSteps - 1)
                  ? 'right'
                  : yy === -500
                    ? 'top'
                    : yy === -500 + 8 * (App.gridSteps - 1)
                      ? 'bottom'
                      : false,
            field,
          });
          i++;
        }
      }
      App.gridMaxIndex = i;
    })();

    App.initDraw();

    const loop = () => {
      App.evolve();
      requestAnimationFrame(loop);
    };
    loop();

    setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>('.animate-seq')
        .forEach((el, idx) => {
          setTimeout(() => el.classList.add('visible'), idx * 120);
        });
    }, 100);

    const onResize = () => {
      resize();
      App.width = canvas.width;
      App.height = canvas.height;
      App.xC = App.width / 2;
      App.yC = App.height / 2;
    };
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div
      className="relative overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 antialiased selection:bg-fuchsia-400/30 selection:text-fuchsia-200"
      style={{ fontFamily: 'Inter, Roboto, sans-serif' }}
    >
      <canvas
        id="particle-bg"
        className="pointer-events-none fixed inset-0 h-full w-full"
        style={{ zIndex: -1 }}
      />

      <div className="pointer-events-none absolute -top-32 left-0 h-[350px] w-[350px] rounded-full bg-fuchsia-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[380px] w-[320px] rounded-full bg-fuchsia-600/20 blur-3xl" />

      <main className="container mx-auto mt-14 mb-10 max-w-7xl px-4 lg:mt-20">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16">
          <section className="animate-seq animate-delay-300 flex w-full max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
            <h1
              className="font-space-mono mb-5 text-4xl font-medium tracking-tighter text-white sm:text-5xl md:text-6xl"
              style={{ fontFamily: 'Inter, Roboto, sans-serif' }}
            >
              Unleash the Chain
              <br />
              Own the Future
            </h1>
            <p className="font-geist mr-auto mb-6 ml-auto max-w-2xl text-lg text-gray-300 sm:text-xl">
              Monitor your holdings in real time, swap at lightning speed and
              stake with a single click. Your hub for everything Web&nbsp;3.
            </p>
            <div className="mt-2 mb-1 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <button className="button font-geist" aria-label="Get Started">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cube icon"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                Start Building
              </button>
              <button
                className="button-secondary font-geist"
                aria-label="Learn More"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-info icon"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                Learn More
              </button>
            </div>
          </section>

          <section
            className="animate-seq animate-delay-500 glass-card-gaming relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-fuchsia-500/40 bg-gradient-to-br from-white/10 via-violet-900/40 to-white/5 shadow-2xl ring-1 ring-fuchsia-400/30 backdrop-blur-[18px]"
            style={{ fontFamily: 'Roboto, Inter, sans-serif' }}
          >
            <div
              className="relative items-center justify-center space-y-6 bg-gradient-to-b from-white/15 via-white/0 to-white/0 pt-6 pr-6 pb-6 pl-6"
              style={{
                backdropFilter: 'blur(25px)',
                borderBottom: '1px solid rgba(255,255,255,0.09)',
              }}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-400 to-violet-400 shadow-inner ring-2 ring-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-user h-5 w-5 text-white"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  <span className="font-space-mono text-2xl text-slate-50">
                    CryptoX
                  </span>
                </div>
                <span className="font-geist inline-flex items-center gap-1 rounded-full border border-fuchsia-400/50 bg-fuchsia-400/30 px-3 py-1 text-xs text-fuchsia-200 uppercase">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star h-3.5 w-3.5"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                  Genesis
                </span>
              </div>

              <div
                className="controller-animate-group relative mb-8 flex items-center justify-center"
                style={{ zIndex: 2 }}
              >
                <div
                  className="pointer-events-none absolute -inset-4 blur-[40px]"
                  style={{
                    zIndex: 1,
                    background:
                      'radial-gradient(circle at 70% 60%, rgba(232,121,249,0.12) 0%, rgba(168,85,247,0.14) 60%, transparent 100%)',
                  }}
                />
                <img
                  src="https://i.imgur.com/ckSgzLQ.png"
                  alt="Crypto wallet holographic card"
                  className="controller-img pointer-events-none relative z-10 h-auto w-[260px] object-contain drop-shadow-[0_8px_24px_rgba(232,121,249,0.18)] select-none md:w-[340px] lg:w-[390px]"
                  draggable={false}
                  loading="lazy"
                />
              </div>

              <div className="mb-7 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="font-space-mono text-2xl text-fuchsia-400">
                    $26k
                  </div>
                  <div className="font-geist text-xs text-slate-50 uppercase">
                    Portfolio
                  </div>
                </div>
                <div>
                  <div className="font-space-mono text-2xl text-fuchsia-400">
                    0.003
                  </div>
                  <div className="font-geist text-xs text-slate-50 uppercase">
                    Gas (ETH)
                  </div>
                </div>
                <div>
                  <div className="font-space-mono text-2xl text-fuchsia-400">
                    14%
                  </div>
                  <div className="font-geist text-xs text-slate-50 uppercase">
                    APY
                  </div>
                </div>
              </div>

              <div className="mb-6 h-px bg-gradient-to-r from-fuchsia-400/10 via-fuchsia-300/20 to-white/10" />

              <div className="mb-7 grid grid-cols-2 gap-x-4 gap-y-5">
                {[
                  { label: 'Layer‑2 Speed', icon: 'zap' },
                  { label: 'Immutable Ledger', icon: 'vibrate' },
                  { label: 'On‑chain Voice', icon: 'mic' },
                  { label: 'Fast Withdrawals', icon: 'usb' },
                ].map(({ label, icon }, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-fuchsia-400/30 bg-violet-800/30 text-fuchsia-100 shadow-inner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-${icon} h-5 w-5`}
                      >
                        {icon === 'zap' && (
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                        )}
                        {icon === 'vibrate' && (
                          <>
                            <path d="m2 8 2 2-2 2 2 2-2 2" />
                            <path d="m22 8-2 2 2 2-2 2 2 2" />
                            <rect width="8" height="14" x="8" y="5" rx="1" />
                          </>
                        )}
                        {icon === 'mic' && (
                          <>
                            <path d="M12 19v3" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                            <rect x="9" y="2" width="6" height="13" rx="3" />
                          </>
                        )}
                        {icon === 'usb' && (
                          <>
                            <circle cx="10" cy="7" r="1" />
                            <circle cx="4" cy="20" r="1" />
                            <path d="M4.7 19.3 19 5" />
                            <path d="m21 3-3 1 2 2Z" />
                            <path d="M9.26 7.68 5 12l2 5" />
                            <path d="m10 14 5 2 3.5-3.5" />
                            <path d="m18 12 1-1 1 1-1 1Z" />
                          </>
                        )}
                      </svg>
                    </span>
                    <span className="font-geist text-sm text-white/90">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-6 h-px bg-gradient-to-r from-fuchsia-400/10 via-fuchsia-300/20 to-white/10" />

              <div className="flex items-center justify-between gap-3">
                <button className="font-geist flex items-center gap-2 rounded-lg border border-fuchsia-400/40 bg-gradient-to-r from-fuchsia-400/90 to-fuchsia-400/80 px-4 py-2 text-white shadow-md transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-fuchsia-400 active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play-circle h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  Swap Now
                </button>
                <button className="font-geist flex items-center gap-2 rounded-lg border border-fuchsia-400/30 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 text-fuchsia-200 transition hover:bg-violet-900/15 focus-visible:ring-2 focus-visible:ring-fuchsia-400 active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bar-chart-3 h-5 w-5"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                  Stats
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        /* Entrance Animations */
        .animate-seq {
          opacity: 0;
          filter: blur(24px);
          transform: translateY(28px) scale(0.98);
          transition:
            opacity 0.8s cubic-bezier(0.44, 1.2, 0.6, 1.09),
            filter 0.8s cubic-bezier(0.33, 1.3, 0.7, 1.1),
            transform 0.8s cubic-bezier(0.44, 1.2, 0.6, 1.09);
          will-change: opacity, filter, transform;
        }
        .animate-seq.visible {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0) scale(1);
        }
        .animate-delay-100 {
          transition-delay: 0.1s;
        }
        .animate-delay-300 {
          transition-delay: 0.3s;
        }
        .animate-delay-500 {
          transition-delay: 0.5s;
        }

        /* Responsive tweaks mirroring original media queries */
        @media (max-width: 1024px) {
          .lg\:flex-row {
            flex-direction: column-reverse !important;
          }
          .lg\:items-start {
            align-items: center !important;
          }
          .lg\:text-left {
            text-align: center !important;
          }
          .controller-img {
            width: 260px !important;
          }
        }
        @media (max-width: 500px) {
          .max-w-md {
            max-width: 98vw !important;
          }
          .w-60 {
            width: 140px !important;
          }
          .px-6 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .max-w-xl {
            max-width: 98vw !important;
          }
          .px-4 {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .controller-img {
            width: 180px !important;
          }
        }

        /* Floating wallet (controller) animation */
        @keyframes controller-float {
          0% {
            transform: translateY(0) rotate(-10deg) scale(1);
          }
          60% {
            transform: translateY(-14px) rotate(-15deg) scale(1.06);
          }
          100% {
            transform: translateY(0) rotate(-10deg) scale(1);
          }
        }
        .controller-animate-group:focus-within .controller-img,
        .controller-animate-group:hover .controller-img {
          animation-play-state: paused !important;
          transform: translateY(-7px) rotate(-17deg) scale(1.1) !important;
          transition: transform 0.3s cubic-bezier(0.4, 2, 0.4, 1);
          filter: brightness(1.12) drop-shadow(0 12px 36px #e879f9cc);
        }
        .controller-img {
          will-change: transform, filter;
          transition:
            transform 0.3s cubic-bezier(0.4, 2, 0.4, 1),
            filter 0.3s cubic-bezier(0.4, 2, 0.4, 1);
          outline: none;
          cursor: pointer;
          animation: controller-float 2.7s ease-in-out infinite alternate;
        }

        /* Glass card shadow tweak for violet glow */
        .glass-card-gaming {
          box-shadow:
            0 8px 32px 0 rgba(232, 121, 249, 0.23),
            0 2px 8px 0 rgba(168, 85, 247, 0.09) inset;
        }

        /* Primary & secondary button styles (re‑using original classes but with purple accents) */
        .button {
          position: relative;
          transition: all 0.3s ease-in-out;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
          padding-block: 0.5rem;
          padding-inline: 1.25rem;
          background-color: rgb(139 92 246);
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #ffff;
          gap: 10px;
          font-weight: 600;
          border: 3px solid #a855f7;
          outline: none;
          overflow: hidden;
          font-size: 15px;
        }
        .button .icon {
          width: 24px;
          height: 24px;
          transition: all 0.3s ease-in-out;
        }
        .button:hover {
          transform: scale(1.05);
          border-color: #c084fc;
        }
        .button:hover .icon {
          transform: translate(4px);
        }
        .button:hover::before {
          animation: shine 1.5s ease-out infinite;
        }
        .button::before {
          content: '';
          position: absolute;
          width: 100px;
          height: 100%;
          background-image: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0) 70%
          );
          top: 0;
          left: -100px;
          opacity: 0.6;
        }
        @keyframes shine {
          0% {
            left: -100px;
          }
          60% {
            left: 100%;
          }
          to {
            left: 100%;
          }
        }
        .button-secondary {
          position: relative;
          transition: all 0.2s cubic-bezier(0.4, 2, 0.4, 1);
          box-shadow: none;
          padding-block: 0.5rem;
          padding-inline: 1.1rem;
          background: transparent;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #d8b4fe;
          gap: 10px;
          font-weight: 600;
          border: 3px solid #a855f7;
          outline: none;
          font-size: 15px;
        }
        .button-secondary .icon {
          width: 22px;
          height: 22px;
          transition: all 0.2s;
          stroke: #a855f7 !important;
        }
        .button-secondary:hover {
          background-color: rgba(232, 121, 249, 0.08);
          color: #d8b4fe;
          border-color: #d8b4fe;
        }
      `}</style>
    </div>
  );
}
