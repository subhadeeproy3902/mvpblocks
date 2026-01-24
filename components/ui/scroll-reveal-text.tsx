'use client';

import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  revealType?: 'blur' | 'fade' | 'slide' | 'scale' | 'characters';
  scrollOffset?: ['start 0.9', 'start 0.3'] | readonly [string, string];
  staggerDelay?: number;
  blurAmount?: number;
  slideDistance?: number;
}

export const ScrollRevealText = ({
  text,
  className = '',
  revealType = 'blur',
  scrollOffset = ['start 0.9', 'start 0.3'],
  staggerDelay = 0.03,
  blurAmount = 10,
  slideDistance = 30,
}: Readonly<ScrollRevealTextProps>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: scrollOffset as any,
  });

  // For word/character-based reveals
  const words = useMemo(() => text.split(' '), [text]);
  const characters = useMemo(() => text.split(''), [text]);

  // Blur reveal transforms
  const blurValue = useTransform(
    scrollYProgress,
    [0, 1],
    [`blur(${blurAmount}px)`, 'blur(0px)'],
  );
  const blurOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 1]);

  // Fade reveal transforms
  const fadeOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Slide reveal transforms
  const slideY = useTransform(
    scrollYProgress,
    [0, 1],
    [slideDistance, 0],
  );
  const slideOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1]);

  // Scale reveal transforms
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scaleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  // Render based on reveal type
  if (revealType === 'blur') {
    return (
      <motion.div
        ref={containerRef}
        className={`relative ${className}`}
        style={{
          filter: blurValue,
          opacity: blurOpacity,
        }}
      >
        {text}
      </motion.div>
    );
  }

  if (revealType === 'fade') {
    return (
      <motion.div
        ref={containerRef}
        className={`relative ${className}`}
        style={{
          opacity: fadeOpacity,
        }}
      >
        {text}
      </motion.div>
    );
  }

  if (revealType === 'slide') {
    return (
      <motion.div
        ref={containerRef}
        className={`relative ${className}`}
        style={{
          y: slideY,
          opacity: slideOpacity,
        }}
      >
        {text}
      </motion.div>
    );
  }

  if (revealType === 'scale') {
    return (
      <motion.div
        ref={containerRef}
        className={`relative ${className}`}
        style={{
          scale,
          opacity: scaleOpacity,
        }}
      >
        {text}
      </motion.div>
    );
  }

  // Characters reveal - each character reveals based on scroll
  if (revealType === 'characters') {
    return (
      <div ref={containerRef} className={`relative ${className}`}>
        <span className="sr-only">{text}</span>
        <span aria-hidden>
          {characters.map((char, index) => (
            <CharacterReveal
              key={index}
              char={char}
              index={index}
              total={characters.length}
              scrollYProgress={scrollYProgress}
              staggerDelay={staggerDelay}
              blurAmount={blurAmount}
            />
          ))}
        </span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {text}
    </div>
  );
};

// Component for individual character reveal
interface CharacterRevealProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: any;
  staggerDelay: number;
  blurAmount: number;
}

const CharacterReveal = ({
  char,
  index,
  total,
  scrollYProgress,
  staggerDelay,
  blurAmount,
}: CharacterRevealProps) => {
  // Calculate when this character should start and end revealing
  const staggerOffset = index * staggerDelay;
  const startProgress = Math.min(staggerOffset, 0.5);
  const endProgress = Math.min(staggerOffset + 0.3, 1);

  const opacity = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [0, 1],
  );

  const blur = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [blurAmount, 0],
  );

  const y = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [10, 0],
  );

  // Handle the filter transform
  const filterBlur = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.span
      className="inline-block"
      style={{
        opacity,
        filter: filterBlur,
        y,
        display: char === ' ' ? 'inline' : 'inline-block',
        minWidth: char === ' ' ? '0.3em' : 'auto',
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};

export default ScrollRevealText;
