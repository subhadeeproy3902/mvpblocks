'use client';

import { useState, useEffect, ReactNode } from 'react';

interface DeferredComponentProps {
  children: ReactNode;
  delay?: number;
  fallback?: ReactNode;
}

export function DeferredComponent({
  children,
  delay = 1000,
  fallback = null,
}: DeferredComponentProps) {
  const [isClient, setIsClient] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Use requestIdleCallback if available, otherwise setTimeout
    const renderTimeout =
      'requestIdleCallback' in window
        ? window.requestIdleCallback(() => setShouldRender(true), {
            timeout: delay,
          })
        : setTimeout(() => setShouldRender(true), delay);

    return () => {
      if (
        'requestIdleCallback' in window &&
        typeof renderTimeout === 'number'
      ) {
        window.cancelIdleCallback(renderTimeout);
      } else if (typeof renderTimeout === 'number') {
        clearTimeout(renderTimeout);
      }
    };
  }, [delay]);

  // Server-side or before delay: render fallback
  if (!isClient || !shouldRender) {
    return <>{fallback}</>;
  }

  // Client-side after delay: render actual component
  return <>{children}</>;
}
