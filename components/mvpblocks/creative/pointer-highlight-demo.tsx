'use client';

import { PointerHighlight } from '@/components/ui/pointer-highlight';

export default function PointerHighlightDemo() {
  return (
    <div className="mx-auto max-w-lg py-20 text-center">
      <h1 className="text-foreground text-2xl font-bold tracking-tight md:text-4xl">
        The best way to grow is to{' '}
        <PointerHighlight>
          <span>collaborate</span>
        </PointerHighlight>
      </h1>
    </div>
  );
}