'use client';

import { Button } from '@/components/ui/button';
import { TargetCursor } from '@/components/ui/target-cursor';

export default function TargetCursorDemo() {
  return (
    <div className="relative min-h-[400px] p-8">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      <div className="mx-auto max-w-2xl space-y-8 text-center">
        <h1 className="text-foreground text-3xl font-bold md:text-4xl">
          Hover over the elements below
        </h1>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button className="cursor-target">Click me!</Button>
          <div className="cursor-target border-primary bg-secondary text-foreground flex h-20 w-40 items-center justify-center rounded-lg border-2">
            Hover target
          </div>
          <button
            type="button"
            className="cursor-target bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2"
          >
            Link target
          </button>
        </div>

        <p className="text-muted-foreground text-sm">
          Move your cursor over the elements above to see the custom cursor
          effect
        </p>
      </div>
    </div>
  );
}
