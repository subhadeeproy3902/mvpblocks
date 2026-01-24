'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface WaveTextProps {
  text: string;
  className?: string;
  amplitude?: number;
  frequency?: number;
  speed?: number;
  direction?: 'up' | 'down' | 'both';
  trigger?: 'mount' | 'hover' | 'inView' | 'continuous';
  duration?: number;
}

export const WaveText = ({
  text,
  className = '',
  amplitude = 20,
  frequency = 0.3,
  speed = 2,
  direction = 'both',
  trigger = 'continuous',
  duration = 3,
}: Readonly<WaveTextProps>) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const shouldAnimate = () => {
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
  };

  useEffect(() => {
    if (trigger === 'mount' && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [trigger, hasTriggered]);

  const characters = text.split('');

  const getYAnimation = (index: number) => {
    const baseY = Math.sin(index * frequency) * amplitude;

    if (direction === 'up') {
      return [0, -Math.abs(baseY), 0];
    } else if (direction === 'down') {
      return [0, Math.abs(baseY), 0];
    } else {
      return [0, baseY, 0, -baseY, 0];
    }
  };

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          style={{
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
          animate={
            shouldAnimate() && char !== ' '
              ? {
                  y: getYAnimation(index),
                }
              : {}
          }
          transition={
            shouldAnimate()
              ? {
                  duration: speed,
                  ease: 'easeInOut',
                  repeat: trigger === 'continuous' ? Infinity : 0,
                  repeatType: 'loop',
                  delay: index * (frequency / 2),
                }
              : {}
          }
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default WaveText;
