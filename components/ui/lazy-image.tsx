'use client';

import { useState, useEffect } from 'react';
import { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface LazyImageProps extends Omit<ImageProps, 'onLoad'> {
  threshold?: number;
  blurPlaceholder?: boolean;
}

export function LazyImage({
  src,
  alt,
  className,
  threshold = 0.1,
  blurPlaceholder = true,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!window.IntersectionObserver) {
      setIsInView(true);
      return;
    }

    const element = document.getElementById(
      `lazy-image-${alt.replace(/\s+/g, '-')}`,
    );
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [alt, threshold]);

  return (
    <div
      id={`lazy-image-${alt.replace(/\s+/g, '-')}`}
      className={cn('relative overflow-hidden', className)}
    >
      {isInView ? (
        <img
          src={src as string}
          alt={alt}
          className={cn(
            'transition-opacity duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0',
          )}
          onLoadingComplete={() => setIsLoaded(true)}
          {...props}
        />
      ) : (
        blurPlaceholder && (
          <div
            className="bg-muted/20 absolute inset-0 animate-pulse"
            style={{
              width: props.width ? `${props.width}px` : '100%',
              height: props.height ? `${props.height}px` : '100%',
            }}
          />
        )
      )}
    </div>
  );
}
