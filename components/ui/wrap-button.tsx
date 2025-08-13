import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe } from 'lucide-react';

import { cn } from '@/lib/utils';

interface WrapButtonProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
}

const WrapButtonDemo: React.FC<WrapButtonProps> = ({
  className,
  children,
  href,
}) => {
  return (
    <div className="flex items-center justify-center">
      {href ? (
        <Link prefetch={false} href={href}>
          <div
            className={cn(
              'group border-border bg-secondary/70 flex h-[64px] cursor-pointer items-center gap-2 rounded-full border p-[11px]',
              className,
            )}
          >
            <div className="border-border bg-primary flex h-[43px] items-center justify-center rounded-full border">
              <p className="mr-3 ml-2 flex items-center justify-center gap-2 font-medium tracking-tight text-white">
                {children}
              </p>
            </div>
            <div className="border-border flex size-[26px] items-center justify-center rounded-full border-2 transition-all ease-in-out group-hover:ml-2">
              <ArrowRight
                size={18}
                className="transition-all ease-in-out group-hover:rotate-45"
              />
            </div>
          </div>
        </Link>
      ) : (
        <div
          className={cn(
            'group border-border bg-secondary/70 flex h-[64px] cursor-pointer items-center gap-2 rounded-full border p-[11px]',
            className,
          )}
        >
          <div className="border-border bg-primary flex h-[43px] items-center justify-center rounded-full border text-white">
            <Globe className="mx-2 animate-spin" />
            <p className="mr-3 font-medium tracking-tight">
              {children ? children : 'Get Started'}
            </p>
          </div>
          <div className="border-border text-border flex size-[26px] items-center justify-center rounded-full border-2 transition-all ease-in-out group-hover:ml-2">
            <ArrowRight
              size={18}
              className="transition-all ease-in-out group-hover:rotate-45"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WrapButtonDemo;
