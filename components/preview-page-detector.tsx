'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function PreviewPageDetector() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if the current path is a preview page
    const isPreviewPage = pathname.startsWith('/preview');

    // Add or remove the class based on the current path
    if (isPreviewPage) {
      document.documentElement.classList.add('preview-page');
    } else {
      document.documentElement.classList.remove('preview-page');
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.documentElement.classList.remove('preview-page');
    };
  }, [pathname]);

  // This component doesn't render anything
  return null;
}
