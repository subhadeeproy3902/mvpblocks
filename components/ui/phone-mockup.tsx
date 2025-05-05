"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface PhoneMockupProps {
  className?: string;
  imageUrl: string;
  darkImageUrl?: string;
  alt?: string;
  glowColor?: string;
  floatingElements?: boolean;
  rotate3d?: boolean;
}

export default function PhoneMockup({
  className,
  imageUrl,
  darkImageUrl,
  alt = "Mobile screenshot",
  glowColor = "rgba(229, 62, 62, 0.3)",
  floatingElements = true,
  rotate3d = true,
}: PhoneMockupProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const displayImage = isDark && darkImageUrl ? darkImageUrl : imageUrl;

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
  }, [controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rotate3d) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * 5;
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * -5;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!rotate3d) return;

    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  const FloatingElements = () => {
    if (!floatingElements) return null;

    return (
      <>
        <motion.div
          className="absolute -right-3 top-20 h-3 w-3 rounded-full bg-primary shadow-lg"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.9, 0.7],
            boxShadow: isDark
              ? [
                  "0 0 0 0 rgba(229, 62, 62, 0.2)",
                  "0 0 0 4px rgba(229, 62, 62, 0)",
                  "0 0 0 0 rgba(229, 62, 62, 0.2)"
                ]
              : [
                  "0 0 0 0 rgba(229, 62, 62, 0.3)",
                  "0 0 0 4px rgba(229, 62, 62, 0)",
                  "0 0 0 0 rgba(229, 62, 62, 0.3)"
                ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -left-12 top-1/4 h-8 w-24 rounded-lg p-1 shadow-md overflow-hidden"
          animate={{
            y: [0, -8, 0],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <div className="absolute inset-0 dark:bg-background/30 bg-background/80 backdrop-blur-md border dark:border-white/5 border-primary/10 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r dark:from-blue-500/20 dark:via-primary/30 dark:to-indigo-500/20 from-rose-500/20 via-primary/30 to-rose-500/20"></div>

          <div className="relative h-full w-full rounded-md dark:bg-primary/10 bg-primary/5"></div>
        </motion.div>

        <motion.div
          className="absolute -right-12 bottom-1/3 h-10 w-10 rounded-full p-1 shadow-md overflow-hidden"
          animate={{
            y: [0, 10, 0],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="absolute inset-0 dark:bg-background/30 bg-background/80 backdrop-blur-md border dark:border-white/5 border-primary/10 rounded-full"></div>

          <div className="relative h-full w-full rounded-full dark:bg-indigo-500/10 bg-primary/5"></div>
        </motion.div>

        <motion.div
          className="absolute -left-8 bottom-1/4 h-5 w-5 rounded-full overflow-hidden"
          animate={{
            x: [0, 5, 0],
            y: [0, -5, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <div className="absolute inset-0 dark:bg-background/30 bg-background/80 backdrop-blur-md border dark:border-white/5 border-primary/10 rounded-full"></div>
          <div className="absolute inset-0 dark:bg-blue-500/10 bg-primary/5 rounded-full"></div>
        </motion.div>
      </>
    );
  };

  return (
    <motion.div
      className={cn("relative mx-auto w-full max-w-[320px]", className)}
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute -inset-4 rounded-[50px] opacity-60 blur-xl"
        animate={{
          background: isDark
            ? [
                `radial-gradient(circle at 30% 30%, rgba(229, 62, 62, 0.15) 0%, rgba(120, 119, 198, 0.05) 50%, transparent 80%)`,
                `radial-gradient(circle at 70% 70%, rgba(229, 62, 62, 0.15) 0%, rgba(120, 119, 198, 0.05) 50%, transparent 80%)`,
                `radial-gradient(circle at 30% 30%, rgba(229, 62, 62, 0.15) 0%, rgba(120, 119, 198, 0.05) 50%, transparent 80%)`,
              ]
            : [
                `radial-gradient(circle at 30% 30%, ${glowColor} 0%, transparent 70%)`,
                `radial-gradient(circle at 70% 70%, ${glowColor} 0%, transparent 70%)`,
                `radial-gradient(circle at 30% 30%, ${glowColor} 0%, transparent 70%)`,
              ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ zIndex: 0 }}
      />

      <div className="absolute -inset-6 rounded-[60px] opacity-20 backdrop-blur-sm z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className="relative z-10 overflow-hidden rounded-[35px] border-[10px] dark:border-foreground/10 border-foreground/5 bg-background shadow-lg"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          boxShadow: isDark
            ? "0 0 0 1px rgba(255, 255, 255, 0.05), 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(120, 119, 198, 0.1)"
            : "0 0 0 1px rgba(229, 62, 62, 0.03), 0 20px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(229, 62, 62, 0.05)"
        }}
      >
        <div className="absolute left-1/2 top-0 z-20 h-7 w-28 -translate-x-1/2 rounded-b-xl bg-foreground/10 backdrop-blur-sm">
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/30"></div>
        </div>

        <div className="absolute -right-[14px] top-16 h-12 w-[4px] rounded-l-sm bg-foreground/20"></div>

        <div className="absolute -left-[14px] top-16 h-8 w-[4px] rounded-r-sm bg-foreground/20"></div>
        <div className="absolute -left-[14px] top-28 h-8 w-[4px] rounded-r-sm bg-foreground/20"></div>

        <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-background">
          <motion.img
            src={displayImage}
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
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-foreground/5 to-foreground/10"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
          {isHovered && (
            <motion.div
              className="absolute inset-0"
              style={{
                background: isDark
                  ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 60%)`
                  : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 60%)`,
                mixBlendMode: "overlay",
              }}
            />
          )}
        </div>
      </motion.div>
      <FloatingElements />

      <motion.div
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-xl"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
          background: [
            "radial-gradient(circle at center, rgba(229, 62, 62, 0.3) 0%, rgba(229, 62, 62, 0.1) 70%, transparent 100%)",
            "radial-gradient(circle at center, rgba(229, 62, 62, 0.4) 0%, rgba(229, 62, 62, 0.15) 70%, transparent 100%)",
            "radial-gradient(circle at center, rgba(229, 62, 62, 0.3) 0%, rgba(229, 62, 62, 0.1) 70%, transparent 100%)",
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-primary/20 blur-xl"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
          background: [
            "radial-gradient(circle at center, rgba(229, 62, 62, 0.3) 0%, rgba(229, 62, 62, 0.1) 70%, transparent 100%)",
            "radial-gradient(circle at center, rgba(229, 62, 62, 0.4) 0%, rgba(229, 62, 62, 0.15) 70%, transparent 100%)",
            "radial-gradient(circle at center, rgba(229, 62, 62, 0.3) 0%, rgba(229, 62, 62, 0.1) 70%, transparent 100%)",
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute right-1/4 -bottom-6 h-16 w-16 rounded-full blur-xl"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
          background: [
            "radial-gradient(circle at center, rgba(255, 100, 150, 0.2) 0%, transparent 70%)",
            "radial-gradient(circle at center, rgba(255, 100, 150, 0.3) 0%, transparent 70%)",
            "radial-gradient(circle at center, rgba(255, 100, 150, 0.2) 0%, transparent 70%)",
          ]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </motion.div>
  );
}
