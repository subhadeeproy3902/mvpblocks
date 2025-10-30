'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export type PortfolioTheme = 'rose' | 'green' | 'blue';

interface ThemeSelectorProps {
  selectedTheme: PortfolioTheme;
  onThemeChange: (theme: PortfolioTheme) => void;
  className?: string;
  buttonClassName?: string;
}

const themeConfig = {
  rose: {
    label: 'Rose',
    colorClass: 'bg-rose-500 hover:bg-rose-600',
    ringClass: 'ring-rose-500',
  },
  green: {
    label: 'Green',
    colorClass: 'bg-green-500 hover:bg-green-600',
    ringClass: 'ring-green-500',
  },
  blue: {
    label: 'Blue',
    colorClass: 'bg-blue-500 hover:bg-blue-600',
    ringClass: 'ring-blue-500',
  },
};

export function ThemeSelector({
  selectedTheme,
  onThemeChange,
  className,
  buttonClassName
}: ThemeSelectorProps) {
  return (
    <div className="flex flex-col gap-2 pt-3">
      <div className={cn("flex gap-6 justify-center items-center", className)}>
        {(Object.keys(themeConfig) as PortfolioTheme[]).map((theme) => {
          const config = themeConfig[theme];
          const isSelected = selectedTheme === theme;

          return (
            <button
              key={theme}
              onClick={() => onThemeChange(theme)}
              className={cn(
                'relative flex h-8 w-8 items-center justify-center rounded-lg transition-all',
                buttonClassName,
                config.colorClass,
                isSelected && `ring-2 ${config.ringClass} ring-offset-2 ring-offset-background`
              )}
              aria-label={`Select ${config.label} theme`}
            >
              {isSelected && (
                <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-background shadow-md">
                  <Check className="h-3 w-3 text-foreground" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
