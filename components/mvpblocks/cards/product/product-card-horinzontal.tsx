/**
 * @author: @fridsonfirmino
 * @description: Product Card Horizontal - MVP Development Theme
 * @version: 1.1.0
 * @date: 2026-07-27
 * @license: MIT
 * @github: https://github.com/fridsonfirmino
 */

'use client';

import { cn } from '@/lib/utils';
import { Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

interface ProductCardHorizontalProps {
  className?: string;
  showQuantity?: boolean;
  title?: string;
  category?: string;
  description?: string;
  price?: number;
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
  stockCount?: number;
  image?: string;
}

export default function ProductCardHorizontal({
  className,
  showQuantity = false,
  title = 'Smart Watch',
  category = 'Wearables',
  description = 'Track workouts, heart rate, and sleep with a bright always-on display and up to 5 days of battery life.',
  price = 249.99,
  rating = 4.3,
  reviewCount = 87,
  inStock = true,
  stockCount = 6,
  image = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
}: ProductCardHorizontalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    window.setTimeout(() => setIsAdding(false), 400);
  };

  const subtotal = (price * quantity).toFixed(2);
  const lowStock = inStock && stockCount <= 8;

  return (
    <article
      className={cn(
        'group bg-card grid max-h-[600px] w-full max-w-dvh translate-x-0 scale-100 grid-cols-1 overflow-hidden rounded-xl border opacity-100 shadow-sm transition-all duration-300 ease-out sm:grid-cols-[auto_1fr] sm:flex-row',
        className,
      )}
      style={{
        transitionProperty: 'max-height, opacity, transform, box-shadow',
      }}
    >
      <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden sm:aspect-square sm:w-44 md:w-52">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {lowStock && (
          <span className="absolute bottom-2 left-2 rounded-md bg-orange-500/90 px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm">
            Only {stockCount} left
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3 p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                  {category}
                </span>
                {inStock && (
                  <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    In stock
                  </span>
                )}
              </div>
              <h3 className="text-foreground text-base font-semibold">
                {title}
              </h3>
            </div>
          </div>

          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={cn(
                    'h-3.5 w-3.5',
                    star <= Math.floor(rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-none text-zinc-300 dark:text-zinc-600',
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-muted-foreground text-xs">
              ({reviewCount})
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {showQuantity && (
              <div className="border-input flex items-center rounded-lg border">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  className="text-muted-foreground hover:bg-secondary flex h-8 w-8 items-center justify-center rounded-l-lg transition-colors disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-7 text-center text-sm font-medium tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) => Math.min(stockCount, q + 1))
                  }
                  disabled={quantity >= stockCount}
                  className="text-muted-foreground hover:bg-secondary flex h-8 w-8 items-center justify-center rounded-r-lg transition-colors disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            <span className="text-foreground text-xl font-bold tabular-nums">
              ${showQuantity ? subtotal : price.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95"
          >
            <ShoppingCart
              className={cn(
                'h-4 w-4 transition-transform duration-300',
                isAdding && 'scale-125 -rotate-6',
              )}
              aria-hidden="true"
            />
            {isAdding ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}
