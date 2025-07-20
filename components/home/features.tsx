'use client';

import { useTheme } from 'next-themes';
import Earth from '../ui/globe';
import ScrambleHover from '../ui/scramble';
import { motion, useInView } from 'framer-motion';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';

const space = Geist({
  subsets: ['latin'],
  variable: '--font-carlito',
  weight: '400',
});

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);

  const [baseColor, setBaseColor] = useState<[number, number, number]>(
    theme === 'dark' ? [1, 0, 0.3] : [1, 1, 1],
  );

  const [glowColor, setGlowColor] = useState<[number, number, number]>(
    theme === 'dark' ? [1, 0, 0.4] : [1, 0.3, 0.4],
  );

  const [dark, setDark] = useState<number>(theme === 'dark' ? 1 : 0);

  useEffect(() => {
    // Change the color of the globe based on the theme
    if (theme === 'dark') {
      setBaseColor([1, 0, 0.3]);
      setDark(1);
      setGlowColor([1, 0, 0.4]);
    } else {
      setBaseColor([1, 1, 1]);
      setDark(0);
      setGlowColor([1, 0.3, 0.4]);
    }
  }, [theme]);

  return (
    <section
      id="features"
      className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32"
    >
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-6 sm:gap-12"
      >
        <h2
          className={cn(
            'via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]',
            space.className,
          )}
        >
          Features
        </h2>
        <div className="grid grid-cols-12 gap-4">
          {/* Pixel */}
          <motion.div
            className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-4"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="z-10 flex flex-col gap-4">
              <h3 className="text-2xl leading-none font-semibold tracking-tight">
                🎨 Pixel-Perfect Styling
              </h3>
              <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                <p>
                  Every block comes perfectly styled and optimized for all
                  screen sizes — so your UI looks great out of the box.
                </p>
              </div>
            </div>
            <div className="pointer-events-none flex grow items-end justify-center select-none">
              <div className="min-h-[300px] w-full py-12">
                <div className="relative h-full w-full">
                  <div className="absolute top-0 left-[50%] z-10 flex w-full max-w-[366px] -translate-x-[50%] translate-y-0 overflow-hidden rounded-[56px] bg-neutral-800/20 p-2 transition-all duration-1000 ease-in-out group-hover:-translate-y-8 dark:bg-white/20">
                    <div className="border-border/70 dark:border-border/5 dark:border-t-border/15 relative z-10 flex max-w-[350px] overflow-hidden rounded-[48px] border shadow-2xl">
                      {theme === 'light' ? (
                        <img
                          alt="Mobile UI light theme"
                          width={350}
                          height={765}
                          draggable={false}
                          className="select-none"
                          src="/mobile-light.webp"
                        />
                      ) : (
                        <img
                          alt="Mobile UI dark theme"
                          width={350}
                          height={765}
                          src="/mobile-dark.webp"
                          draggable={false}
                          className="select-none"
                        />
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                    <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                    <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cli */}
          <motion.div
            className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-4"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl leading-none font-semibold tracking-tight">
                🛠️ CLI & Manual Support
              </h3>
              <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                <p className="max-w-[460px]">
                  Integrate your landing page directly in the product while
                  using your favorite tools.
                </p>
              </div>
            </div>
            <div className="pointer-events-none flex grow items-end justify-center select-none">
              <div className="-mr-32 -ml-40">
                <div className="relative grid h-[318px] w-[534px] grid-flow-col grid-cols-5 grid-rows-6 gap-6">
                  <div className="row-span-2 row-start-2"></div>
                  <div className="fade-left-lg bg-gradient z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
                  <div className="fade-top-lg z-1 row-span-2 rounded-xl bg-gradient-to-t from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5" />
                  <div className="glass rose outline-border/30 dark:outline-background/30 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-105">
                    <div className="after:from-primary-foreground/30 after:to-primary-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']">
                      <div className="text-light relative z-10">
                        {theme === 'dark' ? (
                          <img
                            src="/features-nextjs-dark.webp"
                            alt="Next.js logo dark"
                            width={32}
                            height={32}
                            className="h-8 w-8 select-none"
                            draggable={false}
                          />
                        ) : (
                          <img
                            src="/features-nextjs-light.webp"
                            alt="Next.js logo light"
                            width={32}
                            height={32}
                            className="h-8 w-8 select-none"
                            draggable={false}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="fade-bottom-lg z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
                  <div className="glass rose outline-border/30 dark:outline-background/30 relative z-10 row-span-2 row-start-2 flex items-center justify-center rounded-xl outline-4 transition-all duration-1000 ease-in-out group-hover:scale-90">
                    <div className="after:from-primary-foreground/30 after:to-primary-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']">
                      <div className="text-light relative z-10 flex h-8 w-8 items-center justify-center">
                        <img
                          src="/tailwind.webp"
                          alt="Tailwind CSS logo"
                          width={32}
                          height={32}
                          className="h-8 w-8 select-none"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="glass rose outline-border/30 dark:outline-background/30 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-90">
                    <div className="after:from-primary-foreground/30 after:to-primary-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']">
                      <div className="text-light relative z-10">
                        <img
                          src="/framer.webp"
                          alt="Framer logo"
                          width={32}
                          height={32}
                          className="h-8 w-8 select-none"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="fade-top-lg z-1 row-span-2 rounded-xl bg-gradient-to-t from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
                  <div className="glass rose outline-border/30 dark:outline-background/30 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-105">
                    <div className="after:from-primary-foreground/30 after:to-primary-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']">
                      <div className="text-light relative z-10">
                        <img
                          src="/typescript.webp"
                          alt="TypeScript logo"
                          width={32}
                          height={32}
                          className="h-8 w-8 select-none"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="fade-right-lg z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
                  <div className="glass rose outline-border/30 dark:outline-background/30 relative z-10 row-span-2 row-start-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-[.8]">
                    <div className="after:from-primary-foreground/30 after:to-primary-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']">
                      <div className="text-light relative z-10"></div>
                    </div>
                  </div>
                  <div className="fade-right-lg z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
                  <div className="absolute bottom-0 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                    <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                    <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Global */}
          <motion.div
            className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-4"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl leading-none font-semibold tracking-tight">
                🌍 Globally Usable
              </h3>
              <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                <p className="max-w-[460px]">
                  Blocks are available everywhere but ours are the best. Use
                  them in your favorite framework or even in plain HTML.
                </p>
              </div>
            </div>
            <div className="flex min-h-[300px] grow items-start justify-center select-none">
              <h1 className="mt-8 text-center text-5xl leading-[100%] font-semibold sm:leading-normal lg:mt-12 lg:text-6xl">
                <span className='bg-background relative mt-3 inline-block w-fit rounded-md border px-1.5 py-0.5 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url("/noise.gif")] before:opacity-[0.09] before:content-[""]'>
                  <ScrambleHover
                    text="Mvpblocks"
                    scrambleSpeed={70}
                    maxIterations={20}
                    useOriginalCharsOnly={false}
                    className="cursor-pointer bg-gradient-to-t from-[#faa2c4] to-[#ec337a] bg-clip-text text-transparent"
                    isHovering={isHovering}
                    setIsHovering={setIsHovering}
                    characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
                  />
                </span>
              </h1>
              <div className="absolute top-48 bottom-0 z-10">
                <Suspense
                  fallback={
                    <div className="bg-secondary/20 h-[300px] w-[300px] animate-pulse rounded-full"></div>
                  }
                >
                  <Earth
                    baseColor={baseColor}
                    markerColor={[0, 0, 0]}
                    glowColor={[1, 0.3, 0.4]}
                    dark={dark}
                  />
                </Suspense>
              </div>
              <div className="absolute top-1/2 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
