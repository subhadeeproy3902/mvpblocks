/**
 * @author: @fridsonfirmino
 * @description: Product Card Modern - MVP Development Theme
 * @version: 1.1.0
 * @date: 2026-07-27
 * @license: MIT
 * @github: https://github.com/fridsonfirmino
 */

'use client';

import { cn } from '@/lib/utils';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

interface ProductCardModernProps {
  className?: string;
  title?: string;
  category?: string;
  description?: string;
  price?: number;
  previousPrice?: number;
  image?: string;
  rating?: number;
  reviewCount?: number;
  discount?: number;
}

export default function ProductCardModern({
  className,
  title = 'Running Shoes',
  category = 'Footwear',
  description = 'Lightweight and responsive running shoes with breathable mesh upper and cushioned sole for maximum comfort.',
  price = 89.99,
  previousPrice = 129.99,
  image = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
  rating = 4,
  reviewCount = 128,
  discount = 31,
}: ProductCardModernProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

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
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Wishlist — sole occupant of the image overlay now */}
        <button
          type="button"
          onClick={() => setIsWishlisted((prev) => !prev)}
          className="focus-visible:ring-ring absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-zinc-900/80 dark:hover:bg-zinc-900"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={cn(
              'h-5 w-5 transition-all duration-200',
              isWishlisted
                ? 'scale-110 fill-red-500 text-red-500'
                : 'text-zinc-700 dark:text-zinc-300',
            )}
          />
        </button>
      </div>

      <div className="space-y-3 p-4">
        <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
          {category}
        </span>

        <h3 className="text-foreground text-base font-semibold">{title}</h3>

        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed text-ellipsis">
          {description}
        </p>

        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={cn(
                'h-4 w-4 transition-transform duration-200 group-hover:scale-110',
                star <= rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-none text-zinc-300 dark:text-zinc-600',
              )}
              style={{ transitionDelay: `${star * 40}ms` }}
            />
          ))}
          <span className="text-muted-foreground ml-1 text-xs">
            ({reviewCount} reviews)
          </span>
        </div>

        {/* Price + discount now share one visual unit, same accent color */}
        <div className="flex items-baseline gap-2">
          <span className="text-foreground text-xl font-bold">
            ${price.toFixed(2)}
          </span>
          {previousPrice && (
            <span className="text-muted-foreground text-sm line-through">
              ${previousPrice.toFixed(2)}
            </span>
          )}
          {discount > 0 && (
            <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">
              -{discount}%
            </span>
          )}
        </div>

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
