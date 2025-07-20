'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { ShowcaseItem } from '@/lib/showcase';
import { cn } from '@/lib/utils';

interface ShowcaseCardProps {
  item: ShowcaseItem;
  index: number;
}

export function ShowcaseCard({ item, index }: ShowcaseCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    window.open(item.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl"
    >
      <div
        onClick={handleClick}
        className={cn(
          'border-primary/20 bg-card/40 hover:border-primary hover:bg-card/10 relative cursor-pointer overflow-hidden rounded-xl border-b transition-all duration-300',
          'hover:shadow-primary/10 hover:-translate-y-1 hover:shadow-xl',
        )}
      >
        {/* Image container */}
        <div className="bg-muted relative aspect-video overflow-hidden">
          {/* Loading skeleton */}
          {!imageLoaded && !imageError && (
            <div className="from-muted via-muted/50 to-muted absolute inset-0 animate-pulse bg-gradient-to-r" />
          )}

          <img
            src={item.image}
            alt={item.name}
            className={cn(
              'overflow-hidden rounded-t-xl object-cover transition-all duration-300 group-hover:scale-105',
              imageLoaded ? 'opacity-100' : 'opacity-0',
            )}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
          />

          {/* Fallback for failed images */}
          {imageError && (
            <div className="bg-muted absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-2 text-2xl">🖼️</div>
                <p className="text-muted-foreground text-sm">
                  Image not available
                </p>
              </div>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* External link icon */}
          <div className="bg-background/80 absolute top-4 right-4 z-10 rounded-full p-2 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
            <ExternalLink className="text-foreground h-4 w-4" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-primary group-hover:text-primary mb-2 text-xl transition-colors duration-200">
            {item.name}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {item.about}
          </p>
        </div>

        {/* Hover effect overlay */}
        <div className="from-primary/5 absolute inset-0 rounded-xl bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}
