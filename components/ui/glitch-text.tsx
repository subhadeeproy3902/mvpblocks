'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: number;
  colors?: [string, string];
  duration?: number;
  glitchInterval?: number;
  trigger?: 'mount' | 'hover' | 'inView' | 'continuous';
}

export const GlitchText = ({
  text,
  className = '',
  intensity = 5,
  colors = ['#ff0000', '#00ffff'],
  duration = 0.2,
  glitchInterval = 3000,
  trigger = 'continuous',
}: Readonly<GlitchTextProps>) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const shouldAnimate = useCallback(() => {
    switch (trigger) {
      case 'continuous':
        return true;
      case 'mount':
        return true;
      case 'inView':
        return isInView;
      case 'hover':
        return isHovering;
      default:
        return false;
    }
  }, [trigger, isInView, isHovering]);

  useEffect(() => {
    if (!shouldAnimate()) {
      setIsGlitching(false);
      return;
    }

    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), duration * 1000);
    };

    // Initial glitch
    triggerGlitch();

    // Set up interval for continuous glitching
    if (trigger === 'continuous' || trigger === 'inView') {
      glitchTimeoutRef.current = setInterval(triggerGlitch, glitchInterval);
    }

    return () => {
      if (glitchTimeoutRef.current) {
        clearInterval(glitchTimeoutRef.current);
      }
    };
  }, [shouldAnimate, duration, glitchInterval, trigger]);

  const glitchAnimation = {
    x: isGlitching
      ? [0, -intensity, intensity, -intensity / 2, intensity / 2, 0]
      : 0,
    y: isGlitching ? [0, intensity / 2, -intensity / 2, 0] : 0,
  };

  return (
    <motion.span
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ position: 'relative' }}
    >
      {/* Red/Cyan offset layers for RGB split effect */}
      <motion.span
        className="pointer-events-none absolute inset-0"
        style={{
          color: colors[0],
          clipPath: isGlitching
            ? 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
            : 'none',
          opacity: isGlitching ? 0.8 : 0,
        }}
        animate={{
          x: isGlitching ? [-intensity, intensity, -intensity / 2] : 0,
        }}
        transition={{ duration: duration / 3, ease: 'linear' }}
      >
        {text}
      </motion.span>

      <motion.span
        className="pointer-events-none absolute inset-0"
        style={{
          color: colors[1],
          clipPath: isGlitching
            ? 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)'
            : 'none',
          opacity: isGlitching ? 0.8 : 0,
        }}
        animate={{
          x: isGlitching ? [intensity, -intensity, intensity / 2] : 0,
        }}
        transition={{ duration: duration / 3, ease: 'linear' }}
      >
        {text}
      </motion.span>

      {/* Main text with position glitch */}
      <motion.span
        className="relative z-10"
        animate={glitchAnimation}
        transition={{
          duration: duration,
          ease: 'linear',
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        }}
        style={{
          textShadow: isGlitching
            ? `${intensity / 2}px 0 ${colors[0]}, ${-intensity / 2}px 0 ${colors[1]}`
            : 'none',
        }}
      >
        {text}
      </motion.span>

      {/* Scanline effect */}
      {isGlitching && (
        <motion.span
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.1) 2px,
              rgba(0, 0, 0, 0.1) 4px
            )`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: duration }}
        />
      )}
    </motion.span>
  );
};

export default GlitchText;
