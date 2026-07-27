'use client';

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ProductCardCarrosselProps {
  className?: string;
}

const defaultProduct = {
  title: 'Mechanical Keyboard',
  category: 'Accessories',
  price: 149.99,
  rating: 4.5,
  reviewCount: 324,
  images: [
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80',
  ],
};

const AUTO_PLAY_INTERVAL = 1600;

export default function ProductCardCarrossel({
  className,
}: ProductCardCarrosselProps) {
  const product = defaultProduct;
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isAdding, setIsAdding] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const dragStartX = useRef<number | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => {
    setIndex((i + product.images.length) % product.images.length);
  };

  // Auto-advance only while hovered — the carousel "introduces itself"
  useEffect(() => {
    if (isHovered) {
      autoplayRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % product.images.length);
      }, AUTO_PLAY_INTERVAL);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isHovered, product.images.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -4, y: px * 6 });
  };

  const resetTilt = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(delta > 0 ? index - 1 : index + 1);
    }
    dragStartX.current = null;
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    window.setTimeout(() => setIsAdding(false), 400);
  };

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'bg-card w-full max-w-sm rounded-xl border shadow-sm transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:shadow-xl',
        className,
      )}
    >
      <div
        className="relative h-64 touch-pan-y overflow-hidden rounded-t-xl select-none"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {/* Slides — translateX with a slight overshoot easing, distinct from the scale hovers used elsewhere */}
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {product.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${product.title} — ${i + 1}`}
              className="h-64 w-full flex-shrink-0 object-cover"
              loading="lazy"
              draggable={false}
            />
          ))}
        </div>

        {/* Arrows fade in on hover only */}
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous image"
          className={cn(
            'absolute top-1/2 left-2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-sm transition-all duration-200',
            isHovered ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next image"
          className={cn(
            'absolute top-1/2 right-2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-sm transition-all duration-200',
            isHovered ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Dots — active one stretches into a pill instead of just changing color */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {product.images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={cn(
                'h-1.5 rounded-full bg-white/60 shadow-sm transition-all duration-300',
                i === index ? 'w-5 bg-white' : 'w-1.5 hover:bg-white/90',
              )}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3 p-4">
        <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
          {product.category}
        </span>
        <h3 className="text-foreground text-base font-semibold">
          {product.title}
        </h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => {
              const filled = star <= Math.floor(product.rating);
              const half =
                !filled &&
                star === Math.ceil(product.rating) &&
                product.rating % 1 !== 0;
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
          <span className="text-muted-foreground text-xs">
            ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="text-foreground text-xl font-bold">
            ${product.price.toFixed(2)}
          </span>
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
