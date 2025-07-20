'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function NotebookHero() {
  return (
    <div className="min-h-screen py-6 sm:py-14">
      {/* Add keyframes for the animation */}
      <style jsx global>{`
        @keyframes moveGradientLeft {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: -200% 0%;
          }
        }
        .animate-gradient-x {
          animation: moveGradientLeft 20s linear infinite;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 top-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-rose-500/30 via-rose-500/20 to-transparent opacity-50 blur-[100px]" />
        <div className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-red-500/30 via-red-500/20 to-transparent opacity-50 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-amber-500/20 via-amber-500/10 to-transparent opacity-30 blur-[80px]" />
      </div>

      <main className="relative container mt-4 max-w-[1100px] px-2 py-4 lg:py-8">
        <div className="relative sm:overflow-hidden">
          <div className="border-primary/20 bg-fd-background/70 shadow-primary/10 relative flex flex-col items-start justify-start rounded-xl border px-4 pt-12 shadow-xl backdrop-blur-md max-md:text-center md:px-12 md:pt-16">
            <div
              className="animate-gradient-x absolute inset-0 top-32 z-0 hidden blur-2xl dark:block"
              style={{
                maskImage:
                  'linear-gradient(to bottom, transparent, white, transparent)',
                background:
                  'repeating-linear-gradient(65deg, hsl(var(--primary)), hsl(var(--primary)/0.8) 12px, color-mix(in oklab, hsl(var(--primary)) 30%, transparent) 20px, transparent 200px)',
                backgroundSize: '200% 100%',
              }}
            />
            <div
              className="animate-gradient-x absolute inset-0 top-32 z-0 text-left blur-2xl dark:hidden"
              style={{
                maskImage:
                  'linear-gradient(to bottom, transparent, white, transparent)',
                background:
                  'repeating-linear-gradient(65deg, hsl(var(--primary)/0.9), hsl(var(--primary)/0.7) 12px, color-mix(in oklab, hsl(var(--primary)) 30%, transparent) 20px, transparent 200px)',
                backgroundSize: '200% 100%',
              }}
            />
            <h1 className="mb-4 flex flex-wrap gap-2 text-3xl leading-tight font-medium md:text-5xl">
              Build <span className="text-primary">Beautiful UI</span> with
              MVPBlocks
            </h1>
            <p className="text-muted-foreground mb-8 text-left md:max-w-[80%] md:text-xl">
              Your comprehensive library of ready-to-use UI components built
              with Next.js and Tailwind CSS. From simple buttons to complex
              layouts, MVPBlocks helps you create stunning interfaces with
              minimal effort.
            </p>
            <div className="mb-6 flex flex-wrap gap-4 md:flex-row">
              <div className="flex items-center gap-2">
                <svg
                  className="text-primary h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>100+ Components</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="text-primary h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Dark & Light Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="text-primary h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="text-primary h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Accessible Components</span>
              </div>
            </div>

            <div className="z-10 mt-2 inline-flex items-center justify-start gap-3">
              <a
                href="#"
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    className:
                      'from-primary to-primary/80 text-primary-foreground rounded-full bg-gradient-to-b',
                  }),
                )}
              >
                Getting Started <ArrowRight className="size-4" />
              </a>
              <a
                href="https://github.com/subhadeeproy3902/mvpblocks"
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    variant: 'outline',
                    className: 'bg-fd-background rounded-full',
                  }),
                )}
              >
                GitHub{' '}
                <svg
                  className="ml-1 inline size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>

            <div className="relative z-10 mt-16 w-full">
              <img
                src="https://blocks.mvp-subha.me/assets/bg.png"
                alt="MVPBlocks component library preview"
                width={1000}
                height={600}
                className="animate-in fade-in slide-in-from-bottom-12 z-10 mx-auto -mb-60 w-full rounded-lg border-6 border-neutral-100 object-cover shadow-2xl duration-1000 select-none lg:-mb-40 dark:border-neutral-600"
              />

              <div className="animate-in fade-in slide-in-from-left-4 absolute -top-6 -right-6 rotate-6 transform rounded-lg bg-white p-3 shadow-lg dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">Ready-to-Use Components</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
