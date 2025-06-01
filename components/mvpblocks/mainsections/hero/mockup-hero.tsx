'use client';

import React, { useRef, useEffect, useState } from 'react';
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import PhoneMockup from '@/components/ui/phone-mockup';
import { useTheme } from 'next-themes';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function LucyHero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const heroRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0, 0.5], [20, 0, -20]);
  const rotateY = useTransform(mouseX, [-0.5, 0, 0.5], [-20, 0, 20]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const GradientText = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <span
      className={cn(
        'bg-gradient-to-r from-primary via-rose-400 to-rose-300 bg-clip-text text-transparent dark:from-primary dark:via-rose-300 dark:to-red-400',
        className,
      )}
    >
      {children}
    </span>
  );

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-background py-16"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,62,62,0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,62,62,0.15),rgba(30,30,40,0))]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(229,62,62,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_10%_90%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(255,100,150,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_90%_20%,rgba(100,150,255,0.05),transparent_50%)]"></div>

        <div className="bg-noise absolute inset-0 opacity-[0.02]"></div>
        <div className="absolute inset-0 opacity-5 backdrop-blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(229,62,62,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(229,62,62,0.05)_1px,transparent_1px)] [background-size:40px_40px] dark:opacity-[0.02] dark:[background-image:linear-gradient(rgba(200,200,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(200,200,255,0.05)_1px,transparent_1px)]"></div>
      </motion.div>

      <motion.div
        className="container relative z-10 mx-auto max-w-7xl"
        style={{ y: contentY }}
      >
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate={controls}
            className="flex flex-col text-center md:text-left"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                LU-cy bridges <GradientText>Web3</GradientText> and{' '}
                <GradientText>AI</GradientText> platforms for dev teams
              </h2>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mb-8 text-lg leading-relaxed text-muted-foreground"
            >
              The future is a blend of intelligence and decentralization. LU-cy
              connects AI tools with Web3 infrastructure, giving developers the
              power to build beyond limits. One platform.{' '}
              <span className="font-semibold text-foreground">
                Endless potential.
              </span>
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button className="relative rounded-full">
                  Explore
                  <Sparkles className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 -z-10 rounded-full bg-background/50 backdrop-blur-sm"></div>
                <Button
                  variant="outline"
                  className="rounded-full border-primary/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start"
            >
              {['Web3 Ready', 'AI Powered', 'Developer First'].map(
                (feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative rounded-full px-4 py-1.5 text-sm font-medium text-foreground shadow-sm"
                  >
                    <div className="absolute inset-0 rounded-full border border-primary/10 bg-background/80 backdrop-blur-md dark:border-white/5 dark:bg-background/30"></div>
                    <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500/0 via-primary/20 to-rose-500/0 dark:from-blue-500/0 dark:via-primary/30 dark:to-indigo-500/0"></div>

                    <span className="relative z-10">{feature}</span>
                  </motion.div>
                ),
              )}
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
                  type: 'spring',
                  stiffness: 100,
                },
              },
            }}
            initial="hidden"
            animate={controls}
            ref={mockupRef}
            className="relative mx-auto flex justify-center"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              mouseX.set(x);
              mouseY.set(y);

              if (!isHovered) {
                setIsHovered(true);
              }
            }}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
              setIsHovered(false);
            }}
          >
            <motion.div
              className="relative z-10"
              style={{
                transformStyle: 'preserve-3d',
                rotateX: rotateX,
                rotateY: rotateY,
                scale: isHovered ? 1.05 : 1,
                transition: 'scale 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <PhoneMockup
                imageUrl={
                  isDark
                    ? 'https://blocks.mvp-subha.me/mobile-dark.webp'
                    : 'https://blocks.mvp-subha.me/mobile-light.webp'
                }
                alt="LU-cy mobile app"
                glowColor={
                  isDark ? 'rgba(229, 62, 62, 0.5)' : 'rgba(229, 62, 62, 0.25)'
                }
                className="max-w-[380px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
