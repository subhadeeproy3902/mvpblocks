import type React from 'react';
import { motion } from 'framer-motion';
import { NumberTicker } from './counter';
import { VARIANTS } from './pulse-card';
import Image from 'next/image';

// Define TypeScript interfaces for better type safety
interface PixelCanvasProps {
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
}

interface CardProps {
  icon: string | undefined;
  label: string;
  color: string;
  canvasProps?: PixelCanvasProps;
  desc: string;
  number?: number;
}

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'pixel-canvas': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const PixelCanvas: React.FC<PixelCanvasProps> = ({
  gap = 5,
  speed = 30,
  colors = '#e0f2fe, #7dd3fc, #0ea5e9',
  noFocus = false,
}) => {
  return (
    // @ts-ignore
    <pixel-canvas
      data-gap={gap}
      data-speed={speed}
      data-colors={colors}
      {...(noFocus ? { 'data-no-focus': '' } : {})}
      className="absolute inset-0 z-10 size-full"
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
  );
};

export const PixelCard: React.FC<CardProps> = ({
  icon,
  label,
  color,
  number,
  desc,
  canvasProps = {},
}) => {
  const variantConfig = VARIANTS['rose'];
  // Hover animation configuration
  const hoverTransition = {
    duration: 0.8,
    ease: 'easeInOut' as const,
  };

  return (
    <motion.div className="light:border-gray-900 !dark:border-gray-[900] group relative isolate flex aspect-4/5 h-full place-items-center items-center justify-center overflow-hidden rounded-xl border transition-all duration-200 select-none hover:text-black dark:hover:text-white">
      <PixelCanvas {...{ ...canvasProps }} />

      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,transparent_55%,#ffffff)] shadow-[-0.5cqi_0.5cqi_2.5cqi_inset_#f3f4f6] dark:bg-[radial-gradient(circle_at_bottom_left,transparent_55%,#101012)] dark:shadow-[-0.5cqi_0.5cqi_2.5cqi_inset_#09090b]"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={hoverTransition}
      />

      <motion.div
        className="absolute inset-0 m-auto aspect-square bg-[radial-gradient(circle,#f3f4f6,transparent_65%)] dark:bg-[radial-gradient(circle,#09090b,transparent_65%)]"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={hoverTransition}
      />
      {icon === 'Blocks' ? (
        <Image
          src="https://i.postimg.cc/bJh9tJ96/components.webp"
          draggable={false}
          alt={label}
          width={112}
          height={112}
          className="z-50 mb-4 h-28 w-28 opacity-30 select-none group-hover:opacity-80"
        />
      ) : (
        <Image
          src="https://i.postimg.cc/hj1bbBCK/category.webp"
          draggable={false}
          alt={label}
          width={128}
          height={128}
          className="z-50 mb-4 h-32 w-32 opacity-30 select-none group-hover:opacity-80"
        />
      )}

      {icon === 'Blocks' ? (
        <div className="absolute inset-0 z-20 overflow-hidden rounded-[inherit] opacity-100 transition-all duration-500">
          <div
            className="absolute bottom-[55%] left-1/2 aspect-square w-[200%] rounded-[50%]"
            style={{
              background: `conic-gradient(from ${variantConfig.shine}, transparent 360deg)`,
              filter: 'blur(40px)',
              transform: 'translateX(-50%) scaleX(-1)',
            }}
          />
        </div>
      ) : (
        <div className="absolute inset-0 z-20 overflow-hidden rounded-[inherit] opacity-100 transition-all duration-500">
          <div
            className="absolute right-1/2 bottom-[55%] aspect-square w-[200%] translate-x-1/2 rounded-[50%]"
            style={{
              background: `conic-gradient(from ${variantConfig.shine}, transparent 360deg)`,
              filter: 'blur(40px)',
            }}
          />
        </div>
      )}

      <span className="sr-only">{label}</span>

      <div className="bg-background absolute bottom-0 z-10 w-full">
        <div className="from-background via-background to-primary/20 w-full bg-gradient-to-b px-4 pt-2 pb-4 text-left">
          <h2 className="text-foreground/80 text-2xl font-bold tracking-tight">
            <span className="inline-block tracking-wider tabular-nums">
              {number ? (
                <>
                  <NumberTicker value={number} /> +
                </>
              ) : (
                <span>{label}</span>
              )}
            </span>
          </h2>
          <div className="flex items-end justify-between">
            <p className="text-muted-foreground/80 max-w-[16rem] text-base">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
