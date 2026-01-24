'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface FadeInUpTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  split?: 'letter' | 'word' | 'none';
  trigger?: 'mount' | 'inView';
  once?: boolean;
}

export const FadeInUpText = ({
  text,
  className = '',
  duration = 0.5,
  delay = 0,
  stagger = 0.03,
  distance = 30,
  direction = 'up',
  split = 'word',
  trigger = 'mount',
  once = true,
}: Readonly<FadeInUpTextProps>) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once, amount: 0.3 });

  const shouldAnimate = () => {
    switch (trigger) {
      case 'mount':
        return true;
      case 'inView':
        return isInView;
      default:
        return false;
    }
  };

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      default:
        return { y: distance, x: 0 };
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: split === 'none' ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const getElements = () => {
    if (split === 'none') {
      return [text];
    } else if (split === 'word') {
      return text.split(' ');
    } else {
      return text.split('');
    }
  };

  const elements = getElements();

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={shouldAnimate() ? 'visible' : 'hidden'}
    >
      {elements.map((element, index) => (
        <motion.span
          key={`${element}-${index}`}
          className="inline-block"
          variants={itemVariants}
          style={{
            whiteSpace: element === ' ' ? 'pre' : 'normal',
          }}
        >
          {element}
          {split === 'word' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default FadeInUpText;
