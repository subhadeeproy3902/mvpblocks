"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import PhoneMockup from "@/components/ui/phone-mockup";
import { useTheme } from "next-themes";
import { ArrowRight, Sparkles } from "lucide-react";

const FloatingParticles = ({ count = 20, isDark = false }) => {
  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    variant: Math.floor(Math.random() * 5),
  }));

  const getParticleStyle = (variant: number, isDark: boolean) => {
    switch(variant) {
      case 0:
        return isDark ? "bg-primary/15" : "bg-primary/10";
      case 1:
        return isDark ? "bg-blue-300/10" : "bg-rose-200/8";
      case 2:
        return isDark ? "bg-indigo-400/10" : "bg-rose-300/5";
      case 3:
        return isDark ? "bg-violet-300/10" : "bg-amber-200/8";
      case 4:
        return isDark ? "bg-sky-300/10" : "bg-orange-200/5";
      default:
        return isDark ? "bg-primary/15" : "bg-primary/10";
    }
  };

  const getGlowEffect = (variant: number, isDark: boolean) => {
    switch(variant) {
      case 0:
        return isDark ? '0 0 4px rgba(229, 62, 62, 0.1)' : '0 0 4px rgba(229, 62, 62, 0.05)';
      case 1:
        return isDark ? '0 0 4px rgba(100, 150, 255, 0.1)' : '0 0 4px rgba(229, 62, 62, 0.05)';
      case 2:
        return isDark ? '0 0 4px rgba(120, 119, 198, 0.1)' : '0 0 4px rgba(229, 62, 62, 0.05)';
      case 3:
        return isDark ? '0 0 4px rgba(150, 120, 220, 0.1)' : '0 0 4px rgba(251, 191, 36, 0.05)';
      case 4:
        return isDark ? '0 0 4px rgba(100, 200, 255, 0.1)' : '0 0 4px rgba(249, 115, 22, 0.05)';
      default:
        return isDark ? '0 0 4px rgba(229, 62, 62, 0.1)' : '0 0 4px rgba(229, 62, 62, 0.05)';
    }
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${getParticleStyle(particle.variant, isDark)}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: getGlowEffect(particle.variant, isDark),
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function LucyHero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const GradientText = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <span
      className={cn(
        "bg-gradient-to-r dark:from-primary dark:via-rose-400 dark:to-indigo-400 from-primary via-rose-400 to-rose-300 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-background px-4 py-16"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,62,62,0.15),rgba(30,30,40,0))] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,62,62,0.2),rgba(255,255,255,0))]"></div>

        <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_10%_90%,rgba(120,119,198,0.1),transparent_50%)] bg-[radial-gradient(circle_at_10%_90%,rgba(229,62,62,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_90%_20%,rgba(100,150,255,0.05),transparent_50%)] bg-[radial-gradient(circle_at_90%_20%,rgba(255,100,150,0.05),transparent_50%)]"></div>

        <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
        <div className="absolute inset-0 opacity-5 backdrop-blur-[100px]"></div>
        <div className="absolute inset-0 dark:opacity-[0.02] opacity-[0.03] dark:[background-image:linear-gradient(rgba(200,200,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(200,200,255,0.05)_1px,transparent_1px)] [background-image:linear-gradient(rgba(229,62,62,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(229,62,62,0.05)_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </motion.div>
      <FloatingParticles count={30} isDark={isDark} />
      <motion.div
        className="container relative z-10 mx-auto max-w-7xl"
        style={{ y: contentY }}
      >
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate={controls}
            className="flex flex-col"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h2 className=
                "mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                LU-cy bridges <GradientText>Web3</GradientText> and <GradientText>AI</GradientText> platforms for dev teams
              </h2>
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mb-8 text-lg text-muted-foreground leading-relaxed"
            >
              The future is a blend of intelligence and decentralization. LU-cy connects AI tools with Web3 infrastructure, giving developers the power to build beyond limits. One platform. <span className="font-semibold text-foreground">Endless potential.</span>
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 rounded-full bg-primary/20 blur-md"></div>
                <Button
                  className="relative rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[0_0_15px_rgba(229,62,62,0.3)]"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Explore
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full bg-background/50 backdrop-blur-sm -z-10"></div>
                <Button
                  variant="outline"
                  className="rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {["Web3 Ready", "AI Powered", "Developer First"].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="relative rounded-full px-4 py-1.5 text-sm font-medium text-foreground shadow-sm"
                >
                  <div className="absolute inset-0 rounded-full dark:bg-background/30 bg-background/80 backdrop-blur-md border dark:border-white/5 border-primary/10"></div>
                  <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r dark:from-blue-500/0 dark:via-primary/30 dark:to-indigo-500/0 from-rose-500/0 via-primary/20 to-rose-500/0"></div>

                  <span className="relative z-10">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }
              }
            }}
            initial="hidden"
            animate={controls}
            className="relative mx-auto flex justify-center"
          >
            <div className="absolute inset-0 z-0">
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{
                  opacity: [0, 0.2, 0.1],
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
              />

              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{
                  opacity: [0, 0.15, 0.05],
                  rotate: -360
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15"
              />
            </div>

            <PhoneMockup
              imageUrl="/mobile-light.webp"
              darkImageUrl="/mobile-dark.webp"
              alt="LU-cy mobile app"
              glowColor={isDark ? "rgba(229, 62, 62, 0.4)" : "rgba(229, 62, 62, 0.2)"}
              className="z-10"
              floatingElements={true}
              rotate3d={true}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
