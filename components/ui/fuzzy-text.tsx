'use client';

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

interface FuzzyTextProps {
  text: string;
  className?: string;
  fontSize?: string;
  noiseIntensity?: number;
  enableHover?: boolean;
  baseColor?: string;
  glowColor?: string;
  speed?: number;
}

export const FuzzyText = ({
  text,
  className = '',
  fontSize = '4rem',
  noiseIntensity = 1,
  enableHover = true,
  baseColor = '#fff',
  glowColor = '#fff',
  speed = 50,
}: Readonly<FuzzyTextProps>) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Noise characters for the fuzzy effect
  const noiseChars = useMemo(
    () => '!<>-_\\/[]{}—=+*^?#_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    [],
  );

  const getRandomChar = useCallback(() => {
    return noiseChars[Math.floor(Math.random() * noiseChars.length)];
  }, [noiseChars]);

  // Apply noise to text when not hovered
  useEffect(() => {
    if (!enableHover) {
      // Always show noise when hover is disabled
      animationRef.current = setInterval(() => {
        const noisyText = text
          .split('')
          .map((char) => {
            if (char === ' ') return char;
            return Math.random() < noiseIntensity * 0.3 ? getRandomChar() : char;
          })
          .join('');
        setDisplayText(noisyText);
      }, speed);

      return () => {
        if (animationRef.current) clearInterval(animationRef.current);
      };
    }

    if (!isHovered) {
      // Apply noise effect when not hovered
      animationRef.current = setInterval(() => {
        const noisyText = text
          .split('')
          .map((char) => {
            if (char === ' ') return char;
            return Math.random() < noiseIntensity * 0.3 ? getRandomChar() : char;
          })
          .join('');
        setDisplayText(noisyText);
      }, speed);
    } else {
      // Show clear text when hovered
      setDisplayText(text);
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
    };
  }, [isHovered, text, noiseIntensity, enableHover, getRandomChar, speed]);

  const uniqueId = useMemo(
    () => `fuzzy-${Math.random().toString(36).substr(2, 9)}`,
    [],
  );

  return (
    <span
      ref={containerRef}
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        fontSize,
        fontWeight: 'bold',
      }}
    >
      {/* SVG Filter for noise effect */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id={`${uniqueId}-noise`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency={isHovered ? '0' : '0.8'}
              numOctaves="4"
              seed={Math.random() * 100}
              stitchTiles="stitch"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={isHovered ? 0 : 2 * noiseIntensity}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Main text with noise effect */}
      <motion.span
        className="relative inline-block"
        style={{
          color: baseColor,
          filter: `url(#${uniqueId}-noise)`,
          textShadow: `
            0 0 ${isHovered ? 20 : 5}px ${glowColor},
            0 0 ${isHovered ? 40 : 10}px ${glowColor},
            0 0 ${isHovered ? 60 : 15}px ${glowColor}
          `,
        }}
        animate={{
          x: isHovered ? 0 : [0, -1, 1, -1, 0],
          y: isHovered ? 0 : [0, 1, -1, 1, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: isHovered ? 0 : Infinity,
          repeatType: 'loop',
        }}
      >
        {displayText}
      </motion.span>

      {/* Chromatic aberration layers */}
      {!isHovered && (
        <>
          {/* Red channel offset */}
          <motion.span
            className="pointer-events-none absolute left-0 top-0"
            style={{
              color: 'transparent',
              textShadow: `0 0 2px rgba(255, 0, 0, ${0.4 * noiseIntensity})`,
              mixBlendMode: 'screen',
            }}
            animate={{
              x: [-2, 2, -2],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            {displayText}
          </motion.span>

          {/* Blue channel offset */}
          <motion.span
            className="pointer-events-none absolute left-0 top-0"
            style={{
              color: 'transparent',
              textShadow: `0 0 2px rgba(0, 100, 255, ${0.4 * noiseIntensity})`,
              mixBlendMode: 'screen',
            }}
            animate={{
              x: [2, -2, 2],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            {displayText}
          </motion.span>
        </>
      )}

      {/* Scanlines */}
      <motion.span
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, ${isHovered ? 0.05 : 0.15}) 2px,
            rgba(0, 0, 0, ${isHovered ? 0.05 : 0.15}) 4px
          )`,
        }}
        animate={{
          backgroundPosition: ['0 0', '0 4px'],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Occasional glitch flicker */}
      <motion.span
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
        }}
        animate={{
          opacity: isHovered ? 0 : [0, 1, 0, 0, 1, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          times: [0, 0.1, 0.12, 0.8, 0.82, 1],
        }}
      />
    </span>
  );
};

export default FuzzyText;
