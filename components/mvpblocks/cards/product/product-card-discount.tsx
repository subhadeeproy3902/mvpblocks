/**
 * @author: @fridsonfirmino
 * @description: Product Card Discount - MVP Development Theme
 * @version: 1.1.0
 * @date: 2026-07-27
 * @license: MIT
 * @github: https://github.com/fridsonfirmino
 */

'use client';

import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardDiscountProps {
  className?: string;
  title?: string;
  category?: string;
  originalPrice?: number;
  discountedPrice?: number;
  discountPercent?: number;
  image?: string;
}

export default function ProductCardDiscount({
  className,
  title = 'Running Shoes',
  category = 'Footwear',
  originalPrice = 189.99,
  discountedPrice = 132.99,
  discountPercent = 31,
  image = 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
}: ProductCardDiscountProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    window.setTimeout(() => setIsAdding(false), 400);
  };

  return (
    <article
      className={cn(
        'group relative h-[520px] w-full max-w-sm overflow-hidden rounded-xl border p-2 shadow-sm transition-all duration-300 hover:shadow-xl',
        className,
      )}
    >
      {/* Full-bleed image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />

      {/* Gradient deepens slightly on hover so the copy stays readable as the image moves */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/50" />

      {/* Badges — discount pulses gently to draw the eye, sale badge stays still for contrast */}
      <div className="absolute top-4 left-4 flex flex-col gap-1.5">
        <span className="w-fit animate-[pulse_2.2s_ease-in-out_infinite] rounded-md bg-rose-600 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
          -{discountPercent}%
        </span>
        <span className="w-fit rounded-md bg-amber-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
          Sale
        </span>
      </div>

      {/* Content pinned to the bottom, over the gradient */}
      <div className="absolute inset-x-0 bottom-0 space-y-3 p-5">
        <span className="text-xs font-medium tracking-wider text-white/70 uppercase">
          {category}
        </span>
        <h3 className="text-lg leading-snug font-semibold text-white">
          {title}
        </h3>

        <div className="flex items-baseline gap-2.5">
          <span className="text-2xl font-bold text-white">
            ${discountedPrice.toFixed(2)}
          </span>
          <span className="text-sm text-white/60 line-through">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="rounded bg-green-500/20 px-1.5 py-0.5 text-xs font-semibold text-green-400">
            Save ${(originalPrice - discountedPrice).toFixed(0)}
          </span>
        </div>

        {/* Button sits low by default, rises into place on hover — reveals itself rather than always occupying space */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex w-full translate-y-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white/90 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none active:scale-95"
        >
          <ShoppingCart
            className={cn(
              'h-4 w-4 transition-transform duration-300',
              isAdding && 'scale-125 -rotate-6',
            )}
            aria-hidden="true"
          />
          {isAdding ? 'Added' : 'Shop Now'}
        </button>
      </div>
    </article>
  );
}
