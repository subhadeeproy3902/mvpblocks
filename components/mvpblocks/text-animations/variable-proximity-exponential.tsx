'use client';

import { useRef } from 'react';
import { VariableProximityText } from '@/components/ui/variable-proximity-text';

export default function VariableProximityExponential() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
        rel="stylesheet"
      />
      <div
        ref={containerRef}
        className="relative flex min-h-[300px] w-full items-center justify-center p-8"
      >
        <p className="text-4xl md:text-6xl">
          <VariableProximityText
            label="Exponential Falloff"
            fromFontVariationSettings="'wght' 200, 'opsz' 9"
            toFontVariationSettings="'wght' 900, 'opsz' 40"
            containerRef={containerRef}
            radius={120}
            falloff="exponential"
          />
        </p>
      </div>
    </>
  );
}
