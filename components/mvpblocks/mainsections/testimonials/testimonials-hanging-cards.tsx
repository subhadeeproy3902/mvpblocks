'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface TestimonialItem {
  quote: string;
  highlightedText?: string;
  name: string;
  role: string;
  image: string;
}

export interface TestimonialsHangingCardsProps {
  title?: string;
  subtitle?: string;
  highlightSubtitle?: string;
  badgeSymbol?: string;
  testimonials?: TestimonialItem[];
  speed?: number; // pixels per second
  className?: string;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    quote:
      "The sheer volume of deep-tech literature available physically is unparalleled. It's my absolute go-to sanctuary for researching",
    highlightedText: 'systems architecture away from distracting screens.',
    name: 'Alex Mercer',
    role: 'Computer Science Senior',
    image:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80',
  },
  {
    quote:
      'Having access to classic hardware manuals and modern robotics journals in one physical space has completely',
    highlightedText: 'transformed my thesis research.',
    name: 'Sarah Chen',
    role: 'Robotics Engineering',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
  {
    quote:
      "Libraria isn't just a library; it's a focus environment. Reserving highly sought-after O'Reilly physical books online and picking them up",
    highlightedText: 'effortlessly saves me hours.',
    name: 'David Kim',
    role: 'Software Developer',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
  {
    quote:
      "The curation here is phenomenal. It's incredibly refreshing to read complex ML mathematics on actual paper instead of",
    highlightedText: 'straining my eyes on a monitor all night.',
    name: 'Elena Rodriguez',
    role: 'AI Researcher',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
];

export default function TestimonialsHangingCards({
  title = 'Student Voices',
  subtitle = 'Hear from the engineers and researchers who use our physical library as their',
  highlightSubtitle = 'deep-work sanctuary.',
  badgeSymbol = '*',
  testimonials = defaultTestimonials,
  speed = 80,
  className,
}: TestimonialsHangingCardsProps) {
  const scrollX = useRef(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [dimensions, setDimensions] = useState({ w: 1920, cx: 960 });

  // Triple duplicated list ensures continuous seamless wrap on any screen width
  const duplicatedTestimonials = React.useMemo(() => {
    return [...testimonials, ...testimonials, ...testimonials];
  }, [testimonials]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        w: window.innerWidth,
        cx: window.innerWidth / 2,
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    const CARD_WIDTH = 450;
    const TOTAL_WIDTH = CARD_WIDTH * duplicatedTestimonials.length;

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      // Continuously advance position
      scrollX.current -= (speed * delta) / 1000;

      cardsRef.current.forEach((card, idx) => {
        if (!card) return;

        let x = (idx * CARD_WIDTH + scrollX.current) % TOTAL_WIDTH;
        if (x < -CARD_WIDTH) x += TOTAL_WIDTH;

        // Calculate parabolic hanging wire physics (Quadratic curve)
        const cardCenter = x + CARD_WIDTH / 2;
        const dipDepth = 120;
        const normalizedX = (cardCenter - dimensions.cx) / dimensions.cx;
        const y = dipDepth * (1 - Math.pow(normalizedX, 2));

        // Derivative tangent slope for realistic clip angle alignment
        const slope =
          ((-2 * dipDepth) / Math.pow(dimensions.cx, 2)) *
          (cardCenter - dimensions.cx);
        const physicsAngle = Math.atan(slope) * (180 / Math.PI);

        // Organic offset angle for natural imperfect hung note feel
        const organicRotations = [-2, 3, -1, 2];
        const finalAngle =
          physicsAngle + organicRotations[idx % organicRotations.length];

        card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${finalAngle}deg)`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [dimensions.cx, duplicatedTestimonials.length, speed]);

  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center overflow-hidden px-4 pt-20 pb-16 text-zinc-900 transition-colors dark:text-zinc-100 sm:px-6',
        className,
      )}
    >
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -top-12 -left-12 h-96 w-96 rounded-full bg-red-600/10 blur-[100px] dark:bg-red-600/15" />
      <div className="pointer-events-none absolute -right-12 -bottom-12 h-96 w-96 rounded-full bg-zinc-400/10 blur-[100px] dark:bg-zinc-800/20" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col">
        {/* Header */}
        <div className="mb-4">
          <h2 className="mb-3 flex items-center gap-2 text-4xl font-extrabold tracking-tight uppercase sm:text-5xl md:text-6xl">
            {badgeSymbol && (
              <span className="font-black text-red-600 dark:text-red-500">
                {badgeSymbol}
              </span>
            )}
            {title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
            {subtitle}{' '}
            {highlightSubtitle && (
              <span className="font-bold tracking-wider text-red-600 uppercase dark:text-red-500">
                {highlightSubtitle}
              </span>
            )}
          </p>
        </div>

        {/* Dynamic Physics Canvas */}
        <div className="group relative left-1/2 h-[560px] w-screen -translate-x-1/2 overflow-hidden">
          {/* Parabolic SVG Hanging String */}
          <svg
            className="pointer-events-none absolute top-0 left-0 z-10 h-[500px] w-full"
            preserveAspectRatio="none"
          >
            <path
              d={`M 0 10 Q ${dimensions.cx} 250 ${dimensions.w} 10`}
              fill="none"
              className="stroke-zinc-800/30 dark:stroke-zinc-300/30"
              strokeWidth="2.5"
            />
          </svg>

          {/* Cards Container */}
          <div className="absolute top-0 left-0 h-full w-full">
            {duplicatedTestimonials.map((testimonial, idx) => {
              const isRed = idx % 2 === 1;
              const cardBg = isRed
                ? 'bg-red-600 text-white shadow-red-950/20'
                : 'bg-white text-zinc-900 shadow-zinc-950/5 dark:bg-zinc-900 dark:text-zinc-100 border-zinc-200/80 dark:border-zinc-800';
              const quoteColor = isRed
                ? 'text-white/95'
                : 'text-zinc-700 dark:text-zinc-300';
              const hlColor = isRed
                ? 'text-white font-bold underline decoration-white/40 underline-offset-4'
                : 'text-red-600 dark:text-red-400 font-bold uppercase tracking-wider';
              const roleColor = isRed
                ? 'text-white/80'
                : 'text-red-600 dark:text-red-400';
              const clipBg = isRed ? 'bg-zinc-900' : 'bg-red-600';

              return (
                <div
                  key={`${testimonial.name}-${idx}`}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  className="will-change-transform pointer-events-auto absolute top-0 left-0 flex w-[450px] origin-[50%_15px] flex-col items-center"
                >
                  {/* The Hanging Clip / Peg */}
                  <div
                    className={cn(
                      'relative -mb-3 z-20 flex h-10 w-6 flex-col items-center rounded-md pt-2 shadow-md transition-transform hover:scale-105',
                      clipBg,
                    )}
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-zinc-100 shadow-inner dark:bg-zinc-200" />
                    <div className="absolute bottom-2 h-[2px] w-4 rounded-full bg-white/30" />
                  </div>

                  {/* Testimonial Card */}
                  <div
                    className={cn(
                      'relative z-10 flex min-h-[300px] w-[340px] flex-col justify-between rounded-3xl border p-7 shadow-xl transition-all duration-300 hover:shadow-2xl sm:w-[380px]',
                      cardBg,
                    )}
                  >
                    <p
                      className={cn(
                        'relative z-10 mb-6 text-base leading-relaxed font-medium sm:text-lg',
                        quoteColor,
                      )}
                    >
                      &ldquo;{testimonial.quote}{' '}
                      {testimonial.highlightedText && (
                        <span className={hlColor}>
                          {testimonial.highlightedText}
                        </span>
                      )}
                      &rdquo;
                    </p>

                    <div
                      className={cn(
                        'relative z-10 mt-auto flex items-center gap-4 border-t pt-5',
                        isRed
                          ? 'border-white/20'
                          : 'border-zinc-200/80 dark:border-zinc-800',
                      )}
                    >
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white/20 shadow-sm">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-bold tracking-tight uppercase leading-snug">
                          {testimonial.name}
                        </h4>
                        <p
                          className={cn(
                            'text-xs font-semibold tracking-wider uppercase',
                            roleColor,
                          )}
                        >
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
