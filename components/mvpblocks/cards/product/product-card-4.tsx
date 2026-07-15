'use client';

import { cn } from '@/lib/utils';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardRatingProps {
  className?: string;
}

const defaultProduct = {
  title: 'Mechanical Keyboard',
  category: 'Accessories',
  price: 149.99,
  rating: 4.5,
  reviewCount: 324,
  image:
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
};

export default function ProductCardRating({
  className,
}: ProductCardRatingProps) {
  const product = defaultProduct;

  return (
    <article
      className={cn(
        'group w-full max-w-sm rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-md',
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-3 p-4">
        <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
          {product.category}
        </span>
        <h3 className="text-base font-semibold text-foreground">
          {product.title}
        </h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => {
              const filled = star <= Math.floor(product.rating);
              const half =
                !filled && star === Math.ceil(product.rating) && product.rating % 1 !== 0;
              return (
                <Star
                  key={star}
                  className={cn(
                    'h-4 w-4',
                    filled
                      ? 'fill-yellow-400 text-yellow-400'
                      : half
                        ? 'fill-yellow-400/50 text-yellow-400'
                        : 'fill-none text-zinc-300 dark:text-zinc-600',
                  )}
                  aria-hidden="true"
                />
              );
            })}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="text-xl font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
