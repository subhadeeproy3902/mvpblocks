'use client';

import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

interface ProductCardMinimalProps {
  className?: string;
}

const defaultProduct = {
  title: 'Wireless Headphones',
  category: 'Audio',
  price: 79.99,
  image:
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
  isNew: true,
};

export default function ProductCardMinimal({
  className,
}: ProductCardMinimalProps) {
  const product = defaultProduct;

  return (
    <article
      className={cn(
        'group bg-card w-full max-w-sm rounded-xl border shadow-sm transition-all duration-300 hover:shadow-md',
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
        {product.isNew && (
          <span className="bg-primary text-primary-foreground absolute top-3 left-3 rounded-md px-2.5 py-1 text-xs font-medium">
            New
          </span>
        )}
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            {product.category}
          </span>
          <span className="text-foreground text-lg font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <h3 className="text-foreground text-base font-semibold">
          {product.title}
        </h3>
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
