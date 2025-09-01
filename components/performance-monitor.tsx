'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const measurePerformance = () => {
      try {
        // Get navigation timing
        const navigation = performance.getEntriesByType(
          'navigation',
        )[0] as PerformanceNavigationTiming;

        if (navigation) {
          const metrics: Partial<PerformanceMetrics> = {
            pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
          };

          // Get paint timing
          const paintEntries = performance.getEntriesByType('paint');
          paintEntries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              metrics.firstContentfulPaint = entry.startTime;
            }
          });

          // Get LCP
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            metrics.largestContentfulPaint = lastEntry.startTime;
          });

          observer.observe({ entryTypes: ['largest-contentful-paint'] });

          // Get CLS
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            metrics.cumulativeLayoutShift = clsValue;
          });

          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // Get FID
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              metrics.firstInputDelay =
                (entry as any).processingStart - entry.startTime;
            }
          });

          fidObserver.observe({ entryTypes: ['first-input'] });

          // Log metrics after 5 seconds
          setTimeout(() => {
            console.log('Performance Metrics:', metrics);

            // Send to analytics if needed (optional)
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'page_performance', {
                page_load_time: metrics.pageLoadTime,
                fcp: metrics.firstContentfulPaint,
                lcp: metrics.largestContentfulPaint,
                cls: metrics.cumulativeLayoutShift,
                fid: metrics.firstInputDelay,
              });
            }
          }, 5000);
        }
      } catch (error) {
        console.warn('Performance monitoring error:', error);
      }
    };

    // Measure performance when page is loaded
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return null; // This component doesn't render anything
}

// Hook for component-level performance monitoring
export function useComponentPerformance(componentName: string) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;

      if (renderTime > 100) {
        // Log if component takes more than 100ms
        console.warn(
          `Slow component render: ${componentName} took ${renderTime.toFixed(2)}ms`,
        );
      }
    };
  }, [componentName]);
}
