'use client';

import { useRef, useEffect, useCallback, RefObject } from 'react';

interface VariableProximityTextProps {
  label: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  containerRef: RefObject<HTMLElement | null>;
  radius?: number;
  falloff?: 'linear' | 'exponential' | 'gaussian';
  className?: string;
  style?: React.CSSProperties;
}

export function VariableProximityText({
  label,
  fromFontVariationSettings = "'wght' 400, 'opsz' 9",
  toFontVariationSettings = "'wght' 900, 'opsz' 40",
  containerRef,
  radius = 100,
  falloff = 'linear',
  className = '',
  style,
}: VariableProximityTextProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const rafId = useRef<number>(0);

  // Parse font variation settings
  const parseSettings = useCallback((settingsStr: string) => {
    const map = new Map<string, number>();
    settingsStr.split(',').forEach((s) => {
      const trimmed = s.trim();
      const match = trimmed.match(/['"]?(\w+)['"]?\s+([\d.]+)/);
      if (match) {
        map.set(match[1], parseFloat(match[2]));
      }
    });
    return map;
  }, []);

  const fromSettings = parseSettings(fromFontVariationSettings);
  const toSettings = parseSettings(toFontVariationSettings);

  const calculateFalloff = useCallback(
    (distance: number) => {
      const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
      switch (falloff) {
        case 'exponential':
          return norm ** 2;
        case 'gaussian':
          return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
        case 'linear':
        default:
          return norm;
      }
    },
    [radius, falloff],
  );

  const updateLetters = useCallback(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    letterRefs.current.forEach((letterEl) => {
      if (!letterEl) return;

      const rect = letterEl.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

      const dx = mousePos.current.x - letterCenterX;
      const dy = mousePos.current.y - letterCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance >= radius) {
        letterEl.style.fontVariationSettings = fromFontVariationSettings;
      } else {
        const falloffValue = calculateFalloff(distance);
        const newSettings: string[] = [];

        fromSettings.forEach((fromValue, axis) => {
          const toValue = toSettings.get(axis) ?? fromValue;
          const interpolated = fromValue + (toValue - fromValue) * falloffValue;
          newSettings.push(`'${axis}' ${interpolated}`);
        });

        letterEl.style.fontVariationSettings = newSettings.join(', ');
      }
    });

    rafId.current = requestAnimationFrame(updateLetters);
  }, [
    containerRef,
    radius,
    fromFontVariationSettings,
    fromSettings,
    toSettings,
    calculateFalloff,
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      mousePos.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    // Start animation loop
    rafId.current = requestAnimationFrame(updateLetters);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [containerRef, updateLetters]);

  // Split into words and letters
  const words = label.split(' ');
  let globalIndex = 0;

  return (
    <span
      ref={spanRef}
      className={className}
      style={{
        display: 'inline',
        fontFamily: "'Roboto Flex', sans-serif",
        ...style,
      }}
    >
      {words.map((word, wordIdx) => (
        <span
          key={wordIdx}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {word.split('').map((letter) => {
            const idx = globalIndex++;
            return (
              <span
                key={idx}
                ref={(el) => {
                  letterRefs.current[idx] = el;
                }}
                style={{
                  display: 'inline-block',
                  fontVariationSettings: fromFontVariationSettings,
                }}
              >
                {letter}
              </span>
            );
          })}
          {wordIdx < words.length - 1 && (
            <span style={{ display: 'inline-block' }}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}

export default VariableProximityText;
