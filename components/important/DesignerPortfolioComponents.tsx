'use client';

import { useState } from 'react';
import { BuyDialog } from '@/components/important/BuyButton';
import LiveDemo from '@/components/important/LiveDemo';
import { type PortfolioTheme } from '@/components/important/ThemeSelector';
import InternationalBuyButton from './InternationalBuyButton';

interface DesignerPortfolioComponentsProps {
  downloadUrls: {
    rose: string;
    green: string;
    blue: string;
  };
}

export default function DesignerPortfolioComponents({
  downloadUrls,
}: DesignerPortfolioComponentsProps) {
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
          downloadUrls: downloadUrls,
        }}
      />

      <InternationalBuyButton />
    </div>
  );
}
