'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export type PortfolioTheme = 'rose' | 'green' | 'blue';

interface LiveDemoProps {
  url: string;
  themeSelector?: {
    selectedTheme: PortfolioTheme;
    onThemeChange: (theme: PortfolioTheme) => void;
    urls: Record<PortfolioTheme, string>;
  };
}

const themeColors: Record<PortfolioTheme, string> = {
  rose: 'bg-rose-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
};

export default function LiveDemo({ url, themeSelector }: LiveDemoProps) {
  const [open, setOpen] = useState(false);
  const currentUrl = themeSelector
    ? themeSelector.urls[themeSelector.selectedTheme]
    : url;

  if (!themeSelector) {
    return (
      <Link
        prefetch={false}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium no-underline shadow-sm"
      >
        Live Demo <LinkIcon className="ml-2 h-4 w-4" />
      </Link>
    );
  }

  return (
    <div className="relative inline-flex items-center overflow-visible rounded-lg border border-transparent shadow-md">
      {/* Left: Live Demo */}
      <Link
        prefetch={false}
        href={currentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-foreground text-background hover:bg-foreground! flex items-center gap-2 rounded-s-lg px-4 py-2 text-sm font-medium no-underline transition-colors"
      >
        Live Demo
        <LinkIcon className="h-4 w-4" />
      </Link>

      {/* Right: Theme Toggle */}
      <Button
        variant="outline"
        onClick={() => setOpen(!open)}
        aria-label="Select Theme"
        className="bg-foreground! text-background! hover:bg-foreground! flex items-center gap-1 rounded-none rounded-e-lg! border-0 py-2 pr-3! pl-0! transition-colors"
      >
        <span
          className={`h-4 w-4 rounded-full ${themeColors[themeSelector.selectedTheme]}`}
        />
        <ChevronDown
          className={`text-background! h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </Button>

      {/* Animated color selector */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="border-border bg-background absolute top-10 right-0 z-[9999] flex w-auto gap-3 rounded-lg border px-3 py-2 shadow-lg backdrop-blur-sm"
          >
            {(['rose', 'green', 'blue'] as PortfolioTheme[]).map((theme) => (
              <button
                key={theme}
                onClick={() => {
                  themeSelector.onThemeChange(theme);
                  setOpen(false);
                }}
                className={`h-5 w-5 rounded-full ${themeColors[theme]} transition-transform hover:scale-110 active:scale-95`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
