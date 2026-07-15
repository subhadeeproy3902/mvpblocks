'use client';

import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

interface ProductCardPremiumProps {
  className?: string;
}

const defaultProduct = {
  title: 'Heritage Chronograph',
  category: 'Luxury Watches',
  description:
    'Swiss-made automatic movement with sapphire crystal, genuine leather strap, and a refined sunburst dial. Water-resistant to 100 meters.',
  price: 1250.0,
  image:
    'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80',
  isPremium: true,
};

export default function ProductCardPremium({
  className,
}: ProductCardPremiumProps) {
  const product = defaultProduct;

  return (
    <article
      className={cn(
        'group w-full max-w-sm rounded-xl border bg-card shadow-sm transition-all duration-500 hover:shadow-lg',
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.title}
          className="h-72 w-full object-cover transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {product.isPremium && (
          <span className="absolute right-3 bottom-3 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-medium tracking-wider uppercase text-white backdrop-blur-md">
            Premium
          </span>
        )}
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-1.5">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
            {product.category}
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {product.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-foreground">
            ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
