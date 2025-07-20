'use client';

import type React from 'react';
import { cn } from '@/lib/utils';
import {
  Home,
  MapPin,
  Compass,
  Building,
  Heart,
  HomeIcon,
  Camera,
} from 'lucide-react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { motion } from 'framer-motion';

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

const itemsSample: BentoItem[] = [
  {
    title: 'Component Library',
    meta: '100+ components',
    description:
      'Explore our extensive collection of ready-to-use UI components built with Next.js and Tailwind CSS. Perfect for quickly building beautiful, responsive websites.',
    icon: <Home className="text-primary h-4 w-4" />,
    status: 'Popular',
    tags: ['UI', 'Components', 'Tailwind'],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: 'Responsive Design',
    meta: 'All devices',
    description:
      'Every component is fully responsive and works beautifully on all screen sizes, from mobile to desktop.',
    icon: <Building className="text-primary h-4 w-4" />,
    status: 'Essential',
    tags: ['Mobile', 'Desktop'],
  },
  {
    title: 'Theme Support',
    description:
      'All components support both light and dark modes out of the box, with seamless transitions.',
    icon: <MapPin className="text-primary h-4 w-4" />,
    status: 'New',
  },
  {
    title: 'Performance Optimized',
    description:
      'Built with performance in mind, ensuring fast load times and smooth interactions.',
    icon: <HomeIcon className="text-primary h-4 w-4" />,
    meta: 'Lighthouse 100',
    tags: ['Speed', 'Optimization'],
  },
  {
    title: 'Accessibility',
    description:
      'All components follow WCAG guidelines and are fully accessible to all users.',
    icon: <Heart className="text-primary h-4 w-4" />,
    meta: 'WCAG 2.1 AA',
    tags: ['A11y', 'Inclusive'],
  },
  {
    title: 'Developer Experience',
    meta: 'TypeScript',
    description:
      'Clean, well-documented code with TypeScript support for a seamless development experience.',
    icon: <Compass className="text-primary h-4 w-4" />,
    status: 'Featured',
    tags: ['DX', 'TypeScript'],
  },
  {
    title: 'Open Source',
    meta: 'MIT License',
    description:
      'MVPBlocks is completely free and open-source. Use it for personal and commercial projects without any restrictions or attribution requirements.',
    icon: <Camera className="text-primary h-4 w-4" />,
    status: 'Free',
    tags: ['Open Source', 'MIT'],
    colSpan: 2,
  },
];

export default function BentoGrid({ items = itemsSample }: BentoGridProps) {
  return (
    <section className="relative overflow-hidden py-12">
      {/* Decorative elements */}
      <div className="bg-primary/5 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-primary/5 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.a
            href="#"
            key={`${item.title}-${item.status || item.meta}`}
            className={cn(
              item.colSpan || 'col-span-1',
              item.colSpan === 2 ? 'md:col-span-2' : '',
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card
              className={cn(
                'group bg-card/40 relative h-full transition-all duration-300 hover:shadow-md',
                'will-change-transform hover:-translate-y-1',
                'border-border/60 overflow-hidden',
                {
                  '-translate-y-1 shadow-md': item.hasPersistentHover,
                },
              )}
            >
              <div
                className={cn(
                  'absolute inset-0',
                  item.hasPersistentHover
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100',
                  'transition-opacity duration-300',
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:4px_4px] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
              </div>

              <CardHeader className="relative space-y-0 p-4">
                <div className="flex items-center justify-between">
                  <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg">
                    {item.icon}
                  </div>
                  <span className="bg-secondary text-secondary-foreground rounded-md px-2 py-1 text-xs font-medium">
                    {item.status || 'Active'}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-2 p-4 pt-0">
                <h3 className="text-foreground text-[15px] font-medium tracking-tight">
                  {item.title}
                  {item.meta && (
                    <span className="text-muted-foreground ml-2 text-xs font-normal">
                      {item.meta}
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>

              <CardFooter className="relative p-4">
                <div className="flex w-full items-center justify-between">
                  <div className="text-muted-foreground flex flex-wrap gap-2 text-xs">
                    {item.tags?.map((tag) => (
                      <span
                        key={`${item.title}-${tag}`}
                        className="bg-secondary/50 rounded-md px-2 py-1 backdrop-blur-xs transition-all duration-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-primary text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                    {item.cta || 'Explore →'}
                  </span>
                </div>
              </CardFooter>

              <div
                className={cn(
                  'via-primary/10 absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-transparent to-transparent p-px',
                  item.hasPersistentHover
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100',
                  'transition-opacity duration-300',
                )}
              />
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
