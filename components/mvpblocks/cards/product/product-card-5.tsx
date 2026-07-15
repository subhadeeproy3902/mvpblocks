'use client';

import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

interface ProductCardDiscountProps {
  className?: string;
}

const defaultProduct = {
  title: 'Running Shoes',
  category: 'Footwear',
  originalPrice: 189.99,
  discountedPrice: 132.99,
  discountPercent: 31,
  image:
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
};

export default function ProductCardDiscount({
  className,
}: ProductCardDiscountProps) {
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
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <span className="rounded-md bg-rose-600 px-2.5 py-1 text-xs font-bold text-white shadow-xs">
            -{product.discountPercent}%
          </span>
          <span className="rounded-md bg-amber-500 px-2.5 py-1 text-xs font-bold text-white shadow-xs">
            Sale
          </span>
        </div>
      </div>
      <div className="space-y-3 p-4">
        <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
          {product.category}
        </span>
        <h3 className="text-base font-semibold text-foreground">
          {product.title}
        </h3>
        <div className="flex items-baseline gap-2.5">
          <span className="text-2xl font-bold text-foreground">
            ${product.discountedPrice.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="rounded bg-green-100 px-1.5 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-400">
            Save ${(product.originalPrice - product.discountedPrice).toFixed(0)}
          </span>
        </div>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          Shop Now
        </button>
      </div>
    </article>
  );
}
