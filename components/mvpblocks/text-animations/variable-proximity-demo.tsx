'use client';

import { useRef } from 'react';
import { VariableProximityText } from '@/components/ui/variable-proximity-text';

export default function VariableProximityDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Load Roboto Flex variable font */}
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
            label="Hover over me!"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 900, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </p>
      </div>
    </>
  );
}
