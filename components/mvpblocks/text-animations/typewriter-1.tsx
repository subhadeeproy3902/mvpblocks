"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className = "",
}: {
  words: string;
  className?: string;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    words.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, words.length, {
      type: "tween",
      duration: 2.5, // Increased from 1 to 2.5 seconds
      ease: "easeInOut",
    });
    return controls.stop;
  }, [words]);

  return (
    <motion.span className={className}>
      {displayText}
    </motion.span>
  );
};