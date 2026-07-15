'use client';

import { cn } from '@/lib/utils';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

interface ProductCardModernProps {
  className?: string;
}

const defaultProduct = {
  title: 'Running Shoes',
  category: 'Footwear',
  description:
    'Lightweight and responsive running shoes with breathable mesh upper and cushioned sole for maximum comfort.',
  price: 89.99,
  previousPrice: 129.99,
  image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
  rating: 4,
  reviewCount: 128,
  discount: 31,
};

export default function ProductCardModern({
  className,
}: ProductCardModernProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const product = defaultProduct;

  return (
    <article
      className={cn(
        'group bg-card w-full max-w-sm rounded-xl border shadow-sm transition-all duration-300 hover:shadow-lg',
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.title}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <button
          type="button"
          onClick={() => setIsWishlisted((prev) => !prev)}
          className="focus-visible:ring-ring absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-zinc-900/80 dark:hover:bg-zinc-900"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={cn(
              'h-5 w-5 transition-colors',
              isWishlisted
                ? 'fill-red-500 text-red-500'
                : 'text-zinc-700 dark:text-zinc-300',
            )}
          />
        </button>

        {product.discount > 0 && (
          <span className="absolute bottom-3 left-3 rounded-md bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white">
            -{product.discount}%
          </span>
        )}
      </div>

      <div className="space-y-3 p-4">
        <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
          {product.category}
        </span>

        <h3 className="text-foreground text-base font-semibold">
          {product.title}
        </h3>

        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={cn(
                'h-4 w-4',
                star <= product.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-none text-zinc-300 dark:text-zinc-600',
              )}
            />
          ))}
          <span className="text-muted-foreground ml-1 text-xs">
            ({product.reviewCount} reviews)
          </span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-foreground text-xl font-bold">
            ${product.price.toFixed(2)}
          </span>
          {product.previousPrice && (
            <span className="text-muted-foreground text-sm line-through">
              ${product.previousPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          type="button"
          className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
