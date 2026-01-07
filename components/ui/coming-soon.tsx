'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Sparkles, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { geist } from '@/lib/fonts';

interface ComingSoonProps {
  title?: string;
  description?: string;
  version?: string;
  features?: string[];
  className?: string;
}

export function ComingSoon({
  title = 'AI Features',
  description = 'Revolutionary AI-powered tools are on the way to supercharge your development workflow.',
  version = 'v4',
  features = [
    'Smart Code Generation',
    'Intelligent Layouts',
    'Auto-Optimization',
  ],
  className,
}: ComingSoonProps) {
  return (
    <div
      className={cn(
        'flex min-h-[60vh] items-center justify-center p-4',
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card
          className="bg-background/80 border-primary/20 relative overflow-hidden shadow-xl backdrop-blur-sm"
          style={{
            boxShadow: 'inset 0 0 30px 1px rgba(244, 63, 94, 0.1)',
          }}
        >
          {/* Background gradient effect */}
          <div className="from-primary/5 to-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />

          {/* Floating sparkles */}
          <div className="absolute top-4 right-4 opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="text-primary h-6 w-6" />
            </motion.div>
          </div>

          <div className="relative z-10 p-8 text-center md:p-12">
            {/* Version badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/30 rounded px-4 py-2 text-sm font-medium"
              >
                <Zap className="mr-2 h-4 w-4" />
                Coming in {version}
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={cn(
                'mb-6 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-4xl font-semibold tracking-tighter text-transparent md:text-5xl dark:from-zinc-100 dark:to-zinc-300',
                geist.className,
              )}
            >
              {title}
              <span className="text-primary ml-2">Coming Soon</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl"
            >
              {description}
            </motion.p>

            {/* Features preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8"
            >
              <div className="mb-4 flex items-center justify-center gap-2">
                <Clock className="text-primary h-5 w-5" />
                <span className="text-muted-foreground text-sm font-medium">
                  What&apos;s Coming
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary/70 px-3 py-1 transition-colors duration-200"
                    >
                      {feature}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Progress indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative"
            >
              <div className="bg-secondary/30 h-2 overflow-hidden rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
                  className="from-primary to-primary/80 h-full rounded-full bg-gradient-to-r"
                />
              </div>
              <p className="text-muted-foreground mt-3 text-sm">
                Development in progress...
              </p>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
