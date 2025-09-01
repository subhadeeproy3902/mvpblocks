'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { MouseEvent, useRef, useState } from 'react';

export default function SpotlightCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc?: string;
  href?: string;
}) {
  const boxWrapper = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const updateMousePosition = (e: globalThis.MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    let { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setOverlayColor({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={boxWrapper}
      className={cn(
        'group from-secondary/40 to-secondary/10 relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b p-[2px] shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]',
      )}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute h-full w-full rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `
            radial-gradient(
              250px circle at ${overlayColor.x}px ${overlayColor.y}px,
              #ffffff00 0%,
              transparent 80%
            )
          `,
          }}
        />
      )}

      <div
        className="absolute inset-0 rounded-lg bg-fixed"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #e60a6420 0%,transparent 20%,transparent) fixed`,
        }}
      ></div>

      {href ? (
        <Link
          prefetch={false}
          href={href}
          className="relative h-full w-full rounded-lg text-center no-underline"
        >
          <>
            <h1 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text pt-5 text-center text-2xl font-semibold tracking-tighter text-transparent">
              {title}
            </h1>
            {desc && (
              <p className="pt-2 text-gray-500 capitalize">
                {desc}
                <br />
              </p>
            )}
          </>
        </Link>
      ) : (
        <div className="relative h-full w-full rounded-lg text-center no-underline">
          <>
            <h1 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text pt-5 text-center text-2xl font-semibold tracking-tighter text-transparent">
              {title}
            </h1>
            {desc && (
              <p className="pt-2 text-gray-500 capitalize">
                {desc}
                <br />
              </p>
            )}
          </>
        </div>
      )}
    </div>
  );
}
