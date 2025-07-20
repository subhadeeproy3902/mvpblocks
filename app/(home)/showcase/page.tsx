'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { ShowcaseGrid } from '@/components/showcase/showcase-grid';
import { Spotlight } from '@/components/ui/spotlight';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';

const space = Geist({
  subsets: ['latin'],
  variable: '--font-carlito',
  weight: '400',
});

export default function ShowcasePage() {
  return (
    <div className="relative min-h-screen overflow-hidden px-2 py-32 md:px-6">
      <Spotlight />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              'from-foreground via-foreground/90 to-foreground/70 mb-6 bg-gradient-to-b bg-clip-text text-4xl tracking-tight text-transparent sm:text-5xl lg:text-6xl',
              space.className,
            )}
          >
            Built with{' '}
            <span className="bg-primary from-foreground to-primary via-rose-200 bg-clip-text dark:bg-gradient-to-b">
              Mvpblocks
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground mx-auto mb-12 max-w-3xl text-lg sm:text-xl"
          >
            Discover amazing websites and applications built by our community
            using MVPBlocks components. Get inspired and see what&apos;s
            possible with our component library.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="https://github.com/subhadeeproy3902/mvpblocks/discussions/19"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/25 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Globe className="h-4 w-4" />
              Submit Your Site
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>

        <ShowcaseGrid />
      </div>
    </div>
  );
}
