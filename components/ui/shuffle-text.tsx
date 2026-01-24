'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface ShuffleTextProps {
  text: string;
  trigger?: 'hover' | 'mount' | 'scroll';
  className?: string;
  characterSet?: string;
  scrambleSpeed?: number;
  revealDelay?: number;
  onComplete?: () => void;
}

const DEFAULT_CHARACTER_SET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export const ShuffleText = ({
  text,
  trigger = 'mount',
  className = '',
  characterSet = DEFAULT_CHARACTER_SET,
  scrambleSpeed = 50,
  revealDelay = 100,
  onComplete,
}: Readonly<ShuffleTextProps>) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scrollRevealedCount, setScrollRevealedCount] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const scrambleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const revealTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll-based animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.3'],
  });

  const getRandomChar = useCallback(() => {
    return characterSet[Math.floor(Math.random() * characterSet.length)];
  }, [characterSet]);

  const getScrambledText = useCallback(
    (revealed: number) => {
      return text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < revealed) return char;
          return getRandomChar();
        })
        .join('');
    },
    [text, getRandomChar],
  );

  // Scroll-based reveal effect
  useEffect(() => {
    if (trigger !== 'scroll') return;

    let scrambleInterval: NodeJS.Timeout | null = null;

    // Start scramble effect
    scrambleInterval = setInterval(() => {
      setDisplayText(getScrambledText(scrollRevealedCount));
    }, scrambleSpeed);

    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const totalChars = text.length;
      const newRevealedCount = Math.floor(progress * totalChars);
      setScrollRevealedCount(newRevealedCount);

      if (progress >= 1 && !hasAnimated) {
        setHasAnimated(true);
        setDisplayText(text);
        onComplete?.();
      }
    });

    return () => {
      unsubscribe();
      if (scrambleInterval) clearInterval(scrambleInterval);
    };
  }, [
    trigger,
    scrollYProgress,
    text,
    scrambleSpeed,
    getScrambledText,
    scrollRevealedCount,
    hasAnimated,
    onComplete,
  ]);

  // Mount/Hover animation
  const animate = useCallback(() => {
    if (isAnimating || trigger === 'scroll') return;

    setIsAnimating(true);
    setHasAnimated(true);

    let currentRevealed = 0;

    // Scramble effect - continuously randomize unrevealed characters
    scrambleIntervalRef.current = setInterval(() => {
      setDisplayText(getScrambledText(currentRevealed));
    }, scrambleSpeed);

    // Reveal characters one by one
    const revealNext = () => {
      // Skip spaces
      while (currentRevealed < text.length && text[currentRevealed] === ' ') {
        currentRevealed++;
      }

      if (currentRevealed < text.length) {
        currentRevealed++;
        setDisplayText(getScrambledText(currentRevealed));

        revealTimeoutRef.current = setTimeout(revealNext, revealDelay);
      } else {
        // Animation complete
        if (scrambleIntervalRef.current) {
          clearInterval(scrambleIntervalRef.current);
        }
        setDisplayText(text);
        setIsAnimating(false);
        onComplete?.();
      }
    };

    // Start with scrambled text, then begin revealing
    setDisplayText(getScrambledText(0));
    revealTimeoutRef.current = setTimeout(revealNext, revealDelay);
  }, [
    text,
    scrambleSpeed,
    revealDelay,
    isAnimating,
    trigger,
    getScrambledText,
    onComplete,
  ]);

  const reset = useCallback(() => {
    if (scrambleIntervalRef.current) {
      clearInterval(scrambleIntervalRef.current);
    }
    if (revealTimeoutRef.current) {
      clearTimeout(revealTimeoutRef.current);
    }
    setDisplayText(text);
    setIsAnimating(false);
  }, [text]);

  // Mount trigger
  useEffect(() => {
    if (trigger === 'mount' && !hasAnimated) {
      animate();
    }
  }, [trigger, hasAnimated, animate]);

  // Initialize display text for hover/scroll
  useEffect(() => {
    if (trigger === 'hover') {
      setDisplayText(text);
    }
    if (trigger === 'scroll') {
      setDisplayText(getScrambledText(0));
    }
  }, [text, trigger, getScrambledText]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current);
      }
      if (revealTimeoutRef.current) {
        clearTimeout(revealTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setHasAnimated(false);
      animate();
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      reset();
    }
  };

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {displayText.split('').map((char, index) => (
        <motion.span
          key={`${index}-${char}`}
          className="inline-block"
          style={{
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default ShuffleText;
