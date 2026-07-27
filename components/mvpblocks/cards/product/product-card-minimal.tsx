/**
 * @author: @fridsonfirmino
 * @description: Product Card Minimal - MVP Development Theme
 * @version: 1.1.0
 * @date: 2026-07-27
 * @license: MIT
 * @github: https://github.com/fridsonfirmino
 */

'use client';

import { cn } from '@/lib/utils';
import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardMinimalProps {
  className?: string;
  title?: string;
  category?: string;
  price?: number;
  image?: string;
  isNew?: boolean;
}

export default function ProductCardMinimal({
  className,
  title = 'Wireless Headphones',
  category = 'Audio',
  price = 79.99,
  image = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
  isNew = true,
}: ProductCardMinimalProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    window.setTimeout(() => setIsAdding(false), 400);
  };

  return (
    <article
      className={cn(
        'group bg-card w-full max-w-sm rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        {/* Placeholder pulse while image loads */}
        <div
          className={cn(
            'bg-muted absolute inset-0 animate-pulse transition-opacity duration-300',
            imgLoaded ? 'opacity-0' : 'opacity-100',
          )}
        />
        <img
          src={image}
          alt={title}
          onLoad={() => setImgLoaded(true)}
          className={cn(
            'h-64 w-full object-cover transition-all duration-500 group-hover:scale-105',
            imgLoaded ? 'opacity-100' : 'opacity-0',
          )}
          loading="lazy"
        />

        {isNew && (
          <span className="bg-primary text-primary-foreground absolute top-3 left-3 rounded-md px-2.5 py-1 text-xs font-medium shadow-sm">
            New
          </span>
        )}

        {/* Wishlist toggle — appears on hover, stays visible once saved */}
        <button
          type="button"
          onClick={() => setIsSaved((v) => !v)}
          aria-label={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
          className={cn(
            'absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-all duration-300',
            'opacity-0 group-hover:opacity-100',
            isSaved && 'opacity-100',
          )}
        >
          <Heart
            className={cn(
              'h-4 w-4 transition-all duration-200',
              isSaved
                ? 'scale-110 fill-red-500 text-red-500'
                : 'text-neutral-600',
            )}
          />
        </button>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            {category}
          </span>
          <span className="text-foreground text-lg font-bold">
            ${price.toFixed(2)}
          </span>
        </div>

        <h3 className="text-foreground text-base font-semibold">{title}</h3>

        <button
          type="button"
          onClick={handleAddToCart}
          className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95"
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
    </article>
  );
}
