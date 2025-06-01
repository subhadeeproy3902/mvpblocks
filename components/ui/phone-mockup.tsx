'use client';

import React, { useEffect, useState } from 'react';
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

interface PhoneMockupProps {
  className?: string;
  imageUrl: string;
  alt?: string;
  glowColor?: string;
}

export default function PhoneMockup({
  className,
  imageUrl,
  alt = 'Mobile screenshot',
  glowColor = 'rgba(229, 62, 62, 0.3)',
}: PhoneMockupProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const shadowX = useTransform(rotateY, [-15, 0, 15], [-25, 0, 25]);
  const shadowY = useTransform(rotateX, [-15, 0, 15], [25, 0, -25]);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 6,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    });
  }, [controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * 15;
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * -15;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className={cn('relative mx-auto w-full max-w-[320px]', className)}
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <motion.div
        className="absolute -inset-4 rounded-[50px] opacity-60 blur-xl"
        animate={{
          background: isDark
            ? [
                `radial-gradient(circle at 30% 30%, rgba(229, 62, 62, ${isHovered ? 0.25 : 0.15}) 0%, rgba(120, 119, 198, ${isHovered ? 0.1 : 0.05}) 50%, transparent 80%)`,
                `radial-gradient(circle at 70% 70%, rgba(229, 62, 62, ${isHovered ? 0.25 : 0.15}) 0%, rgba(120, 119, 198, ${isHovered ? 0.1 : 0.05}) 50%, transparent 80%)`,
                `radial-gradient(circle at 30% 30%, rgba(229, 62, 62, ${isHovered ? 0.25 : 0.15}) 0%, rgba(120, 119, 198, ${isHovered ? 0.1 : 0.05}) 50%, transparent 80%)`,
              ]
            : [
                `radial-gradient(circle at 30% 30%, ${isHovered ? glowColor.replace('0.2', '0.3') : glowColor} 0%, transparent 70%)`,
                `radial-gradient(circle at 70% 70%, ${isHovered ? glowColor.replace('0.2', '0.3') : glowColor} 0%, transparent 70%)`,
                `radial-gradient(circle at 30% 30%, ${isHovered ? glowColor.replace('0.2', '0.3') : glowColor} 0%, transparent 70%)`,
              ],
        }}
        transition={{
          duration: isHovered ? 4 : 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          zIndex: 0,
          opacity: isHovered ? 0.8 : 0.6,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        className="relative z-10 overflow-hidden rounded-[35px] border-[10px] border-foreground/5 bg-background shadow-lg dark:border-foreground/10"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          transform: `rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg) scale(${isHovered ? 1.03 : 1})`,
          transition: 'transform 0.2s ease-out',
          boxShadow: isDark
            ? `0 0 0 1px rgba(255, 255, 255, 0.05), ${shadowX.get()}px ${shadowY.get()}px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(120, 119, 198, 0.1)`
            : `0 0 0 1px rgba(229, 62, 62, 0.03), ${shadowX.get()}px ${shadowY.get()}px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(229, 62, 62, 0.05)`,
        }}
      >
        <div className="absolute left-1/2 top-0 z-20 h-7 w-28 -translate-x-1/2 rounded-b-xl bg-foreground/10 backdrop-blur-sm">
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/30"></div>
        </div>

        <div className="absolute -right-[14px] top-16 h-12 w-[4px] rounded-l-sm bg-foreground/20"></div>
        <div className="absolute -left-[14px] top-16 h-8 w-[4px] rounded-r-sm bg-foreground/20"></div>
        <div className="absolute -left-[14px] top-28 h-8 w-[4px] rounded-r-sm bg-foreground/20"></div>

        <div className="relative aspect-[9/16] w-full overflow-hidden bg-background">
          <motion.img
            src={imageUrl}
            alt={alt}
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: 1,
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              scale: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
              },
            }}
          />
          {isHovered && (
            <motion.div
              className="absolute inset-0"
              style={{
                background: isDark
                  ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 60%)`
                  : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 60%)`,
                mixBlendMode: 'overlay',
              }}
            />
          )}
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-xl"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
