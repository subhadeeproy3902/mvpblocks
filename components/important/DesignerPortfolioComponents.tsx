'use client';

import { useState } from 'react';
import { BuyDialog } from '@/components/important/BuyButton';
import LiveDemo from '@/components/important/LiveDemo';
import { type PortfolioTheme } from '@/components/important/ThemeSelector';
import InternationalBuyButton from './InternationalBuyButton';

export default function DesignerPortfolioComponents() {
  const [selectedTheme, setSelectedTheme] = useState<PortfolioTheme>('rose');

  const themeUrls = {
    rose: 'https://fiona-designer-rose.vercel.app/',
    green: 'https://fiona-designer-green.vercel.app/',
    blue: 'https://fiona-designer-blue.vercel.app/',
  };

  const themePrices = {
    rose: 3400,
    green: 3500,
    blue: 3500,
  };

  const themeImages = {
    rose: '/designer-portfolio-rose.png',
    green: '/designer-portfolio-green.png',
    blue: '/designer-portfolio-blue.png',
  };

  const themeDownloadUrls = {
    rose: process.env.NEXT_PUBLIC_DESIGNER_PORTFOLIO_ROSE_DOWNLOAD_URL || '',
    green: process.env.NEXT_PUBLIC_DESIGNER_PORTFOLIO_GREEN_DOWNLOAD_URL || '',
    blue: process.env.NEXT_PUBLIC_DESIGNER_PORTFOLIO_BLUE_DOWNLOAD_URL || '',
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <LiveDemo
        url=""
        themeSelector={{
          selectedTheme,
          onThemeChange: setSelectedTheme,
          urls: themeUrls,
        }}
      />

      <BuyDialog
        title="Fiona's Portfolio"
        price={3400}
        currency="INR"
        image="/designer-portfolio-rose.png"
        productId="Fiona's Portfolio"
        downloadUrl=""
        themeSelector={{
          selectedTheme,
          onThemeChange: setSelectedTheme,
          prices: themePrices,
          images: themeImages,
          downloadUrls: themeDownloadUrls,
        }}
      />

      <InternationalBuyButton />
    </div>
  );
}
