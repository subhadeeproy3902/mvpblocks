'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface ColorPaletteProps {
  colors: Array<{ name: string; value: string; usage: string }>;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {colors.map((color) => (
        <ColorSwatch key={color.name} color={color} />
      ))}
    </div>
  );
};

const ColorSwatch: React.FC<{
  color: { name: string; value: string; usage: string };
}> = ({ color }) => {
  const swatchRef = useRef<HTMLDivElement>(null);
  const [hexValue, setHexValue] = useState<string>('');
  const { theme } = useTheme();

  useEffect(() => {
    if (swatchRef.current) {
      // Get the computed background color (which will be in rgb format)
      const computedColor = getComputedStyle(swatchRef.current).backgroundColor;

      // Convert the rgb string to hex
      const hex = rgbToHex(computedColor);
      setHexValue(hex);
    }
  }, [color.value, theme]);

  // Helper function to convert rgb string to hex
  const rgbToHex = (rgb: string): string => {
    // Extract the r, g, b values from the string
    const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    if (!match) return '#000000';

    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);

    // Convert each component to hex and pad with zero if needed
    const toHex = (c: number) => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  };

  return (
    <div className="bg-accent/10 group border-border relative flex flex-col items-start gap-2 overflow-hidden rounded-lg border p-4">
      <div className="bg-primary/10 group-hover:bg-primary/30 absolute -bottom-10 left-0 h-16 w-full blur-2xl transition-all duration-500 ease-in-out group-hover:-bottom-6"></div>
      <div
        ref={swatchRef}
        className="border-border relative flex h-32 w-full items-center justify-center overflow-hidden rounded-lg border"
        style={{ backgroundColor: color.value }}
      >
        {hexValue && (
          <span className="absolute top-0 right-0 rounded-bl-md bg-black/70 px-2 py-1 text-xs text-white">
            {hexValue}
          </span>
        )}
      </div>
      <div>
        <strong className="block">{color.name}</strong>
        <span className="text-muted-foreground text-sm">{color.usage}</span>
      </div>
    </div>
  );
};

export default ColorPalette;
