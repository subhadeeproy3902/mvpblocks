'use client';

import { useRef } from 'react';
import { MagicTrail } from '../../ui/mouse-trail';

export function MagicTrailDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="border-border/40 relative min-h-[500px] w-full rounded-lg border bg-gray-100 p-10 dark:bg-zinc-950"
    >
      <div className="mb-4 cursor-pointer text-center text-lg font-medium text-black/40 dark:text-white/80">
        ✨ Move your mouse to cast magical trails! ✨
      </div>
      <MagicTrail
        containerRef={containerRef}
        colors={['#f59e0b', '#ec4899', '#8b5cf6', '#3b82f6', '#10b981']}
        trailLength={35}
        particleCount={75}
        decay={0.03}
        smoothing={0.65}
      />
    </div>
  );
}
