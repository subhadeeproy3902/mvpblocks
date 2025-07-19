"use client";

/**
 * @author: @nuelst
 * @description: Card Flip - MVP Development Theme
 * @version: 1.1.0
 * @date: 2025-01-14
 * @license: MIT
 * @website: https://nueslt.vercel.app
 * @github: https://github.com/nuelst
 */

import { cn } from "@/lib/utils";
import { ArrowRight, Code2, Copy, Rocket, Zap } from "lucide-react";
import { useState } from "react";

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
}

export default function CardFlip({
  title = "Build MVPs Fast",
  subtitle = "Launch your idea in record time",
  description = "Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library.",
  features = ["Copy & Paste Ready", "Developer-First", "MVP Optimized", "Zero Setup Required"],
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full max-w-[280px] h-[320px] group [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-2xl",
            "bg-gradient-to-br from-white via-slate-50 to-slate-100",
            "dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800",
            "border border-slate-200 dark:border-zinc-800/50",
            "shadow-lg dark:shadow-xl",
            "transition-all duration-700",
            "group-hover:shadow-xl dark:group-hover:shadow-2xl",
            "group-hover:border-primary/20 dark:group-hover:border-primary/30",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10" />

          {/* Animated code blocks */}
          <div className="absolute inset-0 flex items-center justify-center pt-16">
            <div className="relative w-[180px] h-[120px] flex flex-col items-center justify-center gap-2">
              {/* Code blocks animation */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-full h-3 rounded-sm",
                    "bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20",
                    "animate-[slideIn_2s_ease-in-out_infinite]",
                    "opacity-0"
                  )}
                  style={{
                    width: `${60 + Math.random() * 40}%`,
                    animationDelay: `${i * 0.2}s`,
                    marginLeft: `${Math.random() * 20}%`
                  }}
                />
              ))}

              {/* Central rocket icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={cn(
                  "w-12 h-12 rounded-xl",
                  "bg-gradient-to-br from-primary via-primary/90 to-primary/80",
                  "flex items-center justify-center",
                  "shadow-lg shadow-primary/25",
                  "animate-pulse",
                  "transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                )}>
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white leading-snug tracking-tight transition-all duration-500 ease-out group-hover:translate-y-[-4px]">
                  {title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2 tracking-tight transition-all duration-500 ease-out group-hover:translate-y-[-4px] delay-[50ms]">
                  {subtitle}
                </p>
              </div>
              <div className="relative group/icon">
                <div
                  className={cn(
                    "absolute inset-[-8px] rounded-lg transition-opacity duration-300",
                    "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent",
                    "opacity-0 group-hover/icon:opacity-100"
                  )}
                />
                <Zap className="relative z-10 w-5 h-5 text-primary transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:rotate-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "p-6 rounded-2xl",
            "bg-gradient-to-br from-white via-slate-50 to-slate-100",
            "dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800",
            "border border-slate-200 dark:border-zinc-800",
            "shadow-lg dark:shadow-xl",
            "flex flex-col",
            "transition-all duration-700",
            "group-hover:shadow-xl dark:group-hover:shadow-2xl",
            "group-hover:border-primary/20 dark:group-hover:border-primary/30",
            !isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-2xl" />

          <div className="relative z-10 flex-1 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-primary/90 to-primary/80 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white leading-snug tracking-tight transition-all duration-500 ease-out group-hover:translate-y-[-2px]">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 tracking-tight transition-all duration-500 ease-out group-hover:translate-y-[-2px] line-clamp-3">
                {description}
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => {
                const icons = [Copy, Code2, Rocket, Zap];
                const IconComponent = icons[index % icons.length];

                return (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 transition-all duration-500"
                    style={{
                      transform: isFlipped
                        ? "translateX(0)"
                        : "translateX(-10px)",
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 100 + 200
                        }ms`,
                    }}
                  >
                    <div className="w-5 h-5 rounded-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 pt-6 mt-6 border-t border-slate-200 dark:border-zinc-800">
            <div
              className={cn(
                "group/start relative",
                "flex items-center justify-between",
                "p-3 -m-3 rounded-xl",
                "transition-all duration-300",
                "bg-gradient-to-r from-slate-100 via-slate-100 to-slate-100",
                "dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800",
                "hover:from-primary/10 hover:via-primary/5 hover:to-transparent",
                "dark:hover:from-primary/20 dark:hover:via-primary/10 dark:hover:to-transparent",
                "hover:scale-[1.02] hover:cursor-pointer",
                "border border-transparent hover:border-primary/20"
              )}
            >
              <span className="text-sm font-semibold text-zinc-900 dark:text-white transition-colors duration-300 group-hover/start:text-primary">
                Start Building
              </span>
              <div className="relative group/icon">
                <div
                  className={cn(
                    "absolute inset-[-6px] rounded-lg transition-all duration-300",
                    "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent",
                    "opacity-0 group-hover/start:opacity-100 scale-90 group-hover/start:scale-100"
                  )}
                />
                <ArrowRight className="relative z-10 w-4 h-4 text-primary transition-all duration-300 group-hover/start:translate-x-1 group-hover/start:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
                @keyframes slideIn {
                    0% {
                        transform: translateX(-100px);
                        opacity: 0;
                    }
                    50% {
                        transform: translateX(0);
                        opacity: 0.8;
                    }
                    100% {
                        transform: translateX(100px);
                        opacity: 0;
                    }
                }
            `}</style>
    </div>
  );
}
