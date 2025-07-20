'use client';

import { cn } from '@/lib/utils';
import { AnimationPlaybackControls, motion, useAnimate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Bricolage_Grotesque } from 'next/font/google';

const space = Bricolage_Grotesque({
  subsets: ['latin'],
});

export default function EndSlider() {
  const animation = useRef<AnimationPlaybackControls | null>(null);
  const [scope, animate] = useAnimate();

  const [slowDownAnimation, setSlowDownAnimation] = useState(false);

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: '-50%' },
      { duration: 30, ease: 'linear', repeat: Infinity },
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (slowDownAnimation) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [slowDownAnimation]);

  return (
    <section className="pb-10">
      <div className="flex overflow-x-clip p-4">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl font-medium md:text-8xl"
          onMouseEnter={() => setSlowDownAnimation(true)}
          onMouseLeave={() => setSlowDownAnimation(false)}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={cn(
                'from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 flex items-center gap-4 bg-gradient-to-r bg-clip-text text-center font-semibold text-transparent',
                space.className,
              )}
            >
              <img
                src="/metalrose.webp"
                alt="Metal Rose"
                className="mr-4 h-32 w-32"
              />
              <span className={cn(slowDownAnimation && 'text-primary')}>
                Ready. Set. Ship.
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
