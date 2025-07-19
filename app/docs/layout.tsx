import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { RootProvider } from 'fumadocs-ui/provider';
import dynamic from 'next/dynamic';
import { Banner } from 'fumadocs-ui/components/banner';
import Link from 'next/link';

const Assistant = dynamic(() => import('@/components/assistant'));

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner
        variant="rainbow"
        rainbowColors={[
          'rgba(165, 50, 90, 0.5)',
          'rgba(165, 50, 90, 0.5)',
          'transparent',
          'rgba(165, 50, 90, 0.5)',
          'transparent',
          'rgba(165, 50, 90, 0.5)',
          'transparent',
        ]}
      >
        <Link href="/docs/developer-portfolio" className="font-medium">
          Launched Developer Portfolio Template just for $5 —{' '}
          <span className="underline">Check out</span>
        </Link>{' '}
      </Banner>

      <RootProvider>
        <div className="min-h-screen" vaul-drawer-wrapper="">
          <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
            <div className="absolute top-0 left-1/2 ml-[-30rem] h-[27rem] w-[85rem] dark:[mask-image:linear-gradient(white,transparent)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#b43666] to-[#ff759a] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-40 dark:from-[#c43b69]/30 dark:to-[#ff75a1]/30 dark:opacity-100">
                <svg
                  aria-hidden="true"
                  className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
                >
                  <defs>
                    <pattern
                      id=":r26:"
                      width="72"
                      height="56"
                      patternUnits="userSpaceOnUse"
                      x="-12"
                      y="4"
                    >
                      <path d="M.5 56V.5H72" fill="none"></path>
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth="0"
                    fill="url(#:r26:)"
                  ></rect>
                  <svg x="-12" y="4" className="overflow-visible">
                    <rect
                      strokeWidth="0"
                      width="73"
                      height="57"
                      x="288"
                      y="168"
                    ></rect>
                    <rect
                      strokeWidth="0"
                      width="73"
                      height="57"
                      x="144"
                      y="56"
                    ></rect>
                    <rect
                      strokeWidth="0"
                      width="73"
                      height="57"
                      x="504"
                      y="168"
                    ></rect>
                    <rect
                      strokeWidth="0"
                      width="73"
                      height="57"
                      x="720"
                      y="336"
                    ></rect>
                  </svg>
                </svg>
              </div>
              <svg
                viewBox="0 0 1113 440"
                aria-hidden="true"
                className="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
              >
                <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
              </svg>
            </div>
          </div>
          <DocsLayout
            {...baseOptions}
            tree={source.pageTree}
            sidebar={{
              defaultOpenLevel: 1,
              tabs: {
                transform(option, node) {
                  const meta = source.getNodeMeta(node);
                  if (!meta) return option;

                  return {
                    ...option,
                    icon: (
                      <div
                        className="from-fd-background/80 rounded-md border bg-gradient-to-t p-1 shadow-md [&_svg]:size-5"
                        style={{
                          color: `hsl(var(--${meta.file.dirname}-color))`,
                          backgroundColor: `hsl(var(--${meta.file.dirname}-color)/.3)`,
                        }}
                      >
                        {node.icon}
                      </div>
                    ),
                  };
                },
              },
            }}
          >
            {children}
            <Assistant />
          </DocsLayout>
        </div>
      </RootProvider>
    </>
  );
}
