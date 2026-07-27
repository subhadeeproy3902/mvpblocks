/**
 * @author: @fridsonfirmino
 * @description: Product Card Premium - MVP Development Theme
 * @version: 1.1.0
 * @date: 2026-07-27
 * @license: MIT
 * @github: https://github.com/fridsonfirmino
 */

'use client';

import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface ProductCardPremiumProps {
  className?: string;
  title?: string;
  reference?: string;
  category?: string;
  description?: string;
  price?: number;
  image?: string;
  isPremium?: boolean;
}

export default function ProductCardPremium({
  className,
  title = 'Heritage Chronograph',
  reference = 'Ref. 5172G-001',
  category = 'Luxury Watches',
  description = 'Swiss-made automatic movement with sapphire crystal, genuine leather strap, and a refined sunburst dial. Water-resistant to 100 meters.',
  price = 1250.0,
  image = 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80',
  isPremium = true,
}: ProductCardPremiumProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group w-full max-w-sm overflow-hidden rounded-sm border border-zinc-200 bg-white transition-all duration-700 ease-out hover:border-zinc-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700',
        className,
      )}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-80 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {isPremium && (
          <span className="absolute top-5 left-5 border border-white/40 px-3 py-1 text-[10px] font-light tracking-[0.25em] text-white uppercase">
            Limited Edition
          </span>
        )}

        {/* Reference number surfaces only on hover — a quiet, catalog-like detail */}
        <span
          className={cn(
            'absolute right-5 bottom-5 text-[11px] font-light tracking-wider text-white/90 transition-all duration-700',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0',
          )}
        >
          {reference}
        </span>
      </div>

      <div className="space-y-5 px-7 py-8">
        <div className="space-y-2">
          <span className="text-[10px] font-medium tracking-[0.25em] text-zinc-400 uppercase dark:text-zinc-500">
            {category}
          </span>
          <h3 className="font-serif text-2xl leading-snug font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h3>
        </div>

        <div className="h-px w-8 bg-zinc-300 transition-all duration-700 group-hover:w-16 dark:bg-zinc-700" />

        <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
          {description}
        </p>

        <div className="flex items-end justify-between pt-3">
          <span className="text-lg font-light tracking-tight text-zinc-900 dark:text-zinc-50">
            $
            {price.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          <button
            type="button"
            className="group/btn flex items-center gap-1.5 border-b border-zinc-900 pb-1 text-[13px] font-medium tracking-wide text-zinc-900 transition-all duration-300 hover:gap-2.5 hover:border-zinc-400 focus-visible:outline-none dark:border-zinc-50 dark:text-zinc-50"
          >
            Discover
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </article>
  );
}
