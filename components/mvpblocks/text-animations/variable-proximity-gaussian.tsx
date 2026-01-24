'use client';

import { useRef } from 'react';
import { VariableProximityText } from '@/components/ui/variable-proximity-text';

export default function VariableProximityGaussian() {
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
            label="Smooth Gaussian Falloff"
            fromFontVariationSettings="'wght' 300, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={150}
            falloff="gaussian"
          />
        </p>
      </div>
    </>
  );
}
