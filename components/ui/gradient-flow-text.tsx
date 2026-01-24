'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface GradientFlowTextProps {
  text: string;
  className?: string;
  colors?: string[];
  speed?: number;
  angle?: number;
  trigger?: 'continuous' | 'hover' | 'inView';
}

export const GradientFlowText = ({
  text,
  className = '',
  colors = ['#ff0080', '#7928ca', '#ff0080'],
  speed = 3,
  angle = 90,
  trigger = 'continuous',
}: Readonly<GradientFlowTextProps>) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  const shouldAnimate = () => {
    switch (trigger) {
      case 'continuous':
        return true;
      case 'inView':
        return isInView;
      case 'hover':
        return isHovering;
      default:
        return false;
    }
  };

  const gradientColors = colors.join(', ');

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block bg-clip-text text-transparent ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${gradientColors})`,
        backgroundSize: '200% 200%',
      }}
      animate={
        shouldAnimate()
          ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }
          : { backgroundPosition: '0% 50%' }
      }
      transition={
        shouldAnimate()
          ? {
              duration: speed,
              ease: 'linear',
              repeat: Infinity,
            }
          : {}
      }
    >
      {text}
    </motion.span>
  );
};

export default GradientFlowText;
