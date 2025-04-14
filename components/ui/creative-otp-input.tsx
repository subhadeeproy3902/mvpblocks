"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Variant = "default" | "neon" | "minimal" | "dots" | "underline";
type Status = "idle" | "success" | "error";

interface CreativeOTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
  className?: string;
  variant?: Variant;
  status?: Status;
}

const variants = {
  default: {
    input: {
      base: "h-16 w-12 rounded-lg text-center text-2xl font-bold border-2 transition-all duration-200",
      idle: "border-muted-foreground/20 dark:border-muted-foreground/10 bg-background dark:bg-background/80 focus:border-primary dark:focus:border-primary",
      success:
        "border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400",
      error:
        "border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400",
    },
    container: "gap-2",
    indicator: {
      idle: "-right-1 -top-1 h-3 w-3 rounded-full bg-primary dark:bg-primary",
      success:
        "-right-1 -top-1 h-3 w-3 rounded-full bg-green-500 dark:bg-green-400",
      error: "-right-1 -top-1 h-3 w-3 rounded-full bg-red-500 dark:bg-red-400",
    },
  },
  neon: {
    input: {
      base: "h-16 w-12 rounded-lg text-center text-2xl font-bold border-2 transition-all duration-300",
      idle: "border-primary/50 bg-primary/5 dark:border-primary/30 dark:bg-primary/10 shadow-[0_0_15px_rgba(var(--primary)/0.2)] dark:shadow-[0_0_15px_rgba(var(--primary)/0.3)] focus:border-primary focus:shadow-[0_0_25px_rgba(var(--primary)/0.5)] dark:focus:shadow-[0_0_25px_rgba(var(--primary)/0.6)]",
      success:
        "border-green-500/50 dark:border-green-400/30 bg-green-500/5 dark:bg-green-400/10 shadow-[0_0_15px_rgba(34,197,94,0.2)] dark:shadow-[0_0_15px_rgba(74,222,128,0.3)] text-green-600 dark:text-green-400",
      error:
        "border-red-500/50 dark:border-red-400/30 bg-red-500/5 dark:bg-red-400/10 shadow-[0_0_15px_rgba(239,68,68,0.2)] dark:shadow-[0_0_15px_rgba(248,113,113,0.3)] text-red-600 dark:text-red-400",
    },
    container: "gap-4",
    indicator: {
      idle: "right-0 top-0 h-full w-full rounded-lg bg-primary/10 dark:bg-primary/20",
      success:
        "right-0 top-0 h-full w-full rounded-lg bg-green-500/10 dark:bg-green-400/20",
      error:
        "right-0 top-0 h-full w-full rounded-lg bg-red-500/10 dark:bg-red-400/20",
    },
  },
  minimal: {
    input: {
      base: "h-14 w-10 rounded-md text-center text-xl font-medium border-b-2 transition-all duration-200 bg-transparent",
      idle: "border-muted-foreground/20 dark:border-muted-foreground/10 focus:border-primary",
      success:
        "border-green-500 dark:border-green-400 text-green-600 dark:text-green-400",
      error:
        "border-red-500 dark:border-red-400 text-red-600 dark:text-red-400",
    },
    container: "gap-3",
    indicator: {
      idle: "bottom-0 left-0 h-0.5 w-full bg-primary dark:bg-primary",
      success: "bottom-0 left-0 h-0.5 w-full bg-green-500 dark:bg-green-400",
      error: "bottom-0 left-0 h-0.5 w-full bg-red-500 dark:bg-red-400",
    },
  },
  dots: {
    input: {
      base: "h-12 w-12 rounded-full text-center text-xl font-bold border-2 transition-all duration-200",
      idle: "border-muted-foreground/20 dark:border-muted-foreground/10 bg-background dark:bg-background/80 focus:border-primary",
      success:
        "border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400",
      error:
        "border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400",
    },
    container: "gap-4",
    indicator: {
      idle: "left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 dark:bg-primary/30",
      success:
        "left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 dark:bg-green-400/30",
      error:
        "left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 dark:bg-red-400/30",
    },
  },
  underline: {
    input: {
      base: "h-16 w-12 text-center text-2xl font-bold border-b-4 transition-all duration-200 bg-transparent",
      idle: "border-muted-foreground/20 dark:border-muted-foreground/10 focus:border-primary",
      success:
        "border-green-500 dark:border-green-400 text-green-600 dark:text-green-400",
      error:
        "border-red-500 dark:border-red-400 text-red-600 dark:text-red-400",
    },
    container: "gap-6",
    indicator: {
      idle: "bottom-0 left-0 h-1 w-full bg-primary dark:bg-primary",
      success: "bottom-0 left-0 h-1 w-full bg-green-500 dark:bg-green-400",
      error: "bottom-0 left-0 h-1 w-full bg-red-500 dark:bg-red-400",
    },
  },
};

export function CreativeOTPInput({
  length = 6,
  onComplete,
  className,
  variant = "default",
  status = "idle",
}: CreativeOTPInputProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((val) => val !== "") && onComplete) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length);
    const newOtp = [...otp];

    pastedData.split("").forEach((char, index) => {
      if (index < length && !isNaN(Number(char))) {
        newOtp[index] = char;
      }
    });

    setOtp(newOtp);

    if (newOtp.every((val) => val !== "") && onComplete) {
      onComplete(newOtp.join(""));
    }
  };

  const getInputAnimation = (index: number) => {
    const baseAnimation = {
      scale: focusedIndex === index ? 1.1 : 1,
    };

    switch (variant) {
      case "neon":
        return {
          ...baseAnimation,
          boxShadow:
            focusedIndex === index
              ? status === "success"
                ? "0 0 25px rgba(34,197,94,0.5)"
                : status === "error"
                  ? "0 0 25px rgba(239,68,68,0.5)"
                  : "0 0 25px rgba(var(--primary)/0.5)"
              : undefined,
        };
      case "dots":
        return {
          ...baseAnimation,
          rotate: focusedIndex === index ? [0, -10, 10, 0] : 0,
        };
      case "minimal":
        return {
          y: focusedIndex === index ? -2 : 0,
        };
      case "underline":
        return {
          borderBottomWidth: focusedIndex === index ? "6px" : "4px",
        };
      default:
        return {
          ...baseAnimation,
          rotate: focusedIndex === index ? [0, -2, 2, 0] : 0,
        };
    }
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("flex", variants[variant].container)}>
        {otp.map((digit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              ...getInputAnimation(index),
            }}
            transition={{
              duration: 0.2,
              delay: index * 0.05,
            }}
            className="relative"
          >
            <input
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              className={cn(
                variants[variant].input.base,
                variants[variant].input[status],
                "focus:outline-hidden",
              )}
            />
            <AnimatePresence>
              {digit && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className={cn(
                    "absolute",
                    variants[variant].indicator[status],
                  )}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
