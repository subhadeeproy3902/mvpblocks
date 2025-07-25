'use client';

import Keyboard from '@/components/about/keyboard';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { Geist } from 'next/font/google';
import { Spotlight } from '@/components/ui/spotlight';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import LocData from '@/components/about/loc';
import { Card, CardHeader } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import CommitActivity from '@/components/about/commit-activity';
import Codefreq from '@/components/about/code-freq';
import AboutFeaturesSection from '@/components/about/about-features';
import { useRef, useEffect, useState } from 'react';
import { Compare } from '@/components/ui/compare';
import { useTheme } from 'next-themes';
import CTA from '@/components/shared/cta';
import Faqs from '@/components/shared/faq';

const space = Geist({
  subsets: ['latin'],
  variable: '--font-carlito',
  weight: '400',
});

export default function AboutUsPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <div className="bg-background relative min-h-screen w-full overflow-x-hidden px-2 py-32 md:px-6">
        <Spotlight />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="mx-auto max-w-2xl"
          >
            <div className="flex justify-center">
              <button
                type="button"
                className="group bg-background/50 hover:shadow-primary/[0.1] dark:border-border relative z-[60] mx-auto rounded-full border border-zinc-500/80 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
              >
                <div className="via-primary absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
                <div className="via-primary absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
                <span className="relative">About Us</span>
              </button>
            </div>
            <h2
              className={cn(
                'from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]',
                space.className,
              )}
            >
              More Than Just Components
            </h2>
            <p className="mt-5 text-center text-lg text-zinc-500">
              MVPBlocks helps startups quickly build and launch MVPs with
              easy-to-use tools, enabling fast testing and growth.
            </p>
          </motion.div>
          <ContainerScroll>
            <img
              src="/about.webp"
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto h-full rounded-2xl object-cover"
              draggable={false}
            />
          </ContainerScroll>

          <div className="relative overflow-hidden">
            <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
            <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
            <h2
              className={cn(
                'via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text pt-12 text-center text-4xl font-semibold tracking-tighter text-transparent sm:pt-24 md:pt-32 md:text-[54px] md:leading-[60px]',
                space.className,
              )}
            >
              What we provide
            </h2>
            <AboutFeaturesSection />
          </div>

          <div className="relative md:mb-20 xl:mb-28">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="flex max-w-[540px] flex-col items-start justify-start text-left md:mb-8"
            >
              <h2
                className={cn(
                  'from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]',
                  space.className,
                )}
              >
                How to use
              </h2>
              <p className="mt-5 text-lg text-zinc-500">
                Just Ctrl C + Ctrl V and you are ready to go. You can use our
                components in your own projects.
              </p>
            </motion.div>
            <div className="relative mx-auto h-full max-w-5xl flex-col items-center justify-start md:flex-row xl:mb-8 xl:flex xl:h-[400px]">
              <Keyboard />
              {mounted && (
                <Compare
                  firstImage={
                    theme === 'dark' ? '/abt2.webp' : '/abt2-dark.webp'
                  }
                  secondImage={
                    theme === 'dark' ? '/abt1-dark.webp' : '/abt1.webp'
                  }
                  firstImageClassName="object-cover object-left-top w-full"
                  secondImageClassname="object-cover object-left-top w-full"
                  className="absolute -top-16 -right-32 z-0 hidden rounded-[22px] md:rounded-lg xl:block"
                  slideMode="hover"
                  autoplay={true}
                />
              )}
            </div>
          </div>

          <Card
            className="bg-background relative overflow-hidden p-4 md:p-6"
            style={{ boxShadow: 'inset 0 0 30px 1px rgba(244, 63, 94, 0.1)' }}
          >
            <CardHeader className="mb-6 p-0">
              <h3 className="text-2xl leading-none font-semibold tracking-tight">
                Project Statistics
              </h3>
              <p className="text-muted-foreground text-sm">
                An overview of our Mvpblocks&apos; composition and activity
              </p>
            </CardHeader>

            <div className="grid auto-rows-auto grid-cols-1 gap-4 overflow-x-hidden md:grid-cols-6 md:gap-5 lg:grid-cols-12 lg:gap-6">
              <div className="col-span-12 md:col-span-5">
                <LocData />
              </div>
              <div className="col-span-12 overflow-x-hidden md:col-span-7">
                <CommitActivity />
              </div>
              <div className="col-span-12 overflow-x-hidden">
                <Codefreq />
              </div>
            </div>
            <BorderBeam
              duration={6}
              size={300}
              className="via-primary from-transparent to-transparent"
            />
            <BorderBeam
              duration={6}
              size={300}
              reverse
              className="via-destructive from-transparent to-transparent"
            />
          </Card>
        </div>
      </div>
      <CTA />
      <Faqs />
    </>
  );
}
