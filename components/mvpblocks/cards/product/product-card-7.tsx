'use client';

import { cn } from '@/lib/utils';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

interface ProductCardDarkProps {
  className?: string;
}

const defaultProduct = {
  title: 'Wireless Headphones',
  category: 'Audio',
  price: 299.99,
  rating: 4.7,
  reviewCount: 256,
  image:
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
};

export default function ProductCardDark({
  className,
}: ProductCardDarkProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const product = defaultProduct;

  return (
    <article
      className={cn(
        'group w-full max-w-sm overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-lg shadow-black/40 transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/50',
        className,
      )}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-full object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />

        <button
          type="button"
          onClick={() => setIsWishlisted((prev) => !prev)}
          className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 backdrop-blur-sm transition-all duration-300 hover:border-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={cn(
              'h-4 w-4 transition-colors duration-300',
              isWishlisted
                ? 'fill-red-500 text-red-500'
                : 'text-zinc-400',
            )}
          />
        </button>
      </div>
      <div className="space-y-3 p-5">
        <span className="text-xs font-medium tracking-wider uppercase text-zinc-500">
          {product.category}
        </span>
        <h3 className="text-base font-semibold text-zinc-100">
          {product.title}
        </h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={cn(
                  'h-4 w-4',
                  star <= Math.floor(product.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-zinc-800 text-zinc-700',
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-xs text-zinc-500">
            ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="text-xl font-bold text-zinc-100">
            ${product.price.toFixed(2)}
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-all duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
