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
  features = ['Smart Code Generation', 'Intelligent Layouts', 'Auto-Optimization'],
  className,
}: ComingSoonProps) {
  return (
    <div className={cn('flex min-h-[60vh] items-center justify-center p-4', className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card 
          className="bg-background/80 relative overflow-hidden backdrop-blur-sm border-primary/20 shadow-xl"
          style={{ 
            boxShadow: 'inset 0 0 30px 1px rgba(244, 63, 94, 0.1)' 
          }}
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
          
          {/* Floating sparkles */}
          <div className="absolute top-4 right-4 opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12 text-center">
            {/* Version badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <Badge 
                variant="outline" 
                className="bg-primary/10 text-primary border-primary/30 px-4 py-2 text-sm font-medium rounded"
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
                'mb-6 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-4xl font-semibold tracking-tighter text-transparent dark:from-zinc-100 dark:to-zinc-300 md:text-5xl',
                geist.className,
              )}
            >
              {title} 
              <span className="ml-2 text-primary">Coming Soon</span>
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
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
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
                      className="bg-secondary/50 hover:bg-secondary/70 transition-colors duration-200 px-3 py-1"
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
              <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
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
