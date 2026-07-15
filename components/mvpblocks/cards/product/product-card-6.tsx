'use client';

import { cn } from '@/lib/utils';
import { ShoppingCart, Star, Trash2 } from 'lucide-react';

interface ProductCardHorizontalProps {
  className?: string;
}

const defaultProduct = {
  title: 'Smart Watch',
  category: 'Wearables',
  price: 249.99,
  rating: 4.3,
  reviewCount: 87,
  image:
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
};

export default function ProductCardHorizontal({
  className,
}: ProductCardHorizontalProps) {
  const product = defaultProduct;

  return (
    <article
      className={cn(
        'group bg-card flex w-full flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row',
        className,
      )}
    >
      <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden sm:aspect-square sm:w-44 md:w-52">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3 p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                {product.category}
              </span>
              <h3 className="text-foreground text-base font-semibold">
                {product.title}
              </h3>
            </div>
            <button
              type="button"
              className="text-muted-foreground hover:bg-secondary hover:text-destructive focus-visible:ring-ring flex size-8 shrink-0 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label="Remove item"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={cn(
                    'h-3.5 w-3.5',
                    star <= Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-none text-zinc-300 dark:text-zinc-600',
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-muted-foreground text-xs">
              ({product.reviewCount})
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-foreground text-xl font-bold">
            ${product.price.toFixed(2)}
          </span>
          <button
            type="button"
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
