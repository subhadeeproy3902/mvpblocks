'use client';

import { VerifiedIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ReplyProps {
  authorName: string;
  authorHandle: string;
  authorImage: string;
  content: string;
  isVerified?: boolean;
  timestamp: string;
}

interface TweetCardProps {
  authorName: string;
  authorHandle: string;
  authorImage: string;
  content: string[];
  isVerified?: boolean;
  timestamp: string;
  reply?: ReplyProps;
}

export default function TweetCard({
  authorName = 'Subhadeep',
  authorHandle = 'mvp_Subha',
  authorImage = 'https://pbs.twimg.com/profile_images/1763223695898681344/2mvSadJl_400x400.jpg',
  content = [
    'Mvpblocks is the best ever UI component collection library 🎉',
    '1. Can be opened in v0',
    '2. Can be installed with CLI',
    '3. Deploy to your app',
  ],
  isVerified = true,
  timestamp = 'Mar 3, 2025',
  reply = {
    authorName: 'shadcn',
    authorHandle: 'shadcn',
    authorImage:
      'https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg',
    content: 'Awesome.',
    isVerified: true,
    timestamp: 'March 3',
  },
}: TweetCardProps) {
  return (
    <Link href="https://x.com/mvp_Subha" target="_blank">
      <div
        className={cn(
          'relative isolate w-full max-w-xl min-w-[400px] overflow-hidden rounded-2xl p-1.5 md:min-w-[500px]',
          'bg-white/5 dark:bg-black/90',
          'bg-linear-to-br from-black/5 to-black/[0.02] dark:from-white/5 dark:to-white/[0.02]',
          'backdrop-blur-xl backdrop-saturate-[180%]',
          'border border-black/10 dark:border-white/10',
          'shadow-[0_8px_16px_rgb(0_0_0_/_0.15)] dark:shadow-[0_8px_16px_rgb(0_0_0_/_0.25)]',
          'translate-z-0 will-change-transform',
        )}
      >
        <div
          className={cn(
            'relative w-full rounded-xl p-5',
            'bg-linear-to-br from-black/[0.05] to-transparent dark:from-white/[0.08] dark:to-transparent',
            'backdrop-blur-md backdrop-saturate-150',
            'border border-black/[0.05] dark:border-white/[0.08]',
            'text-black/90 dark:text-white',
            'shadow-xs',
            'translate-z-0 will-change-transform',
            'before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-br before:from-black/[0.02] before:to-black/[0.01] before:opacity-0 before:transition-opacity dark:before:from-white/[0.03] dark:before:to-white/[0.01]',
            'hover:before:opacity-100',
          )}
        >
          <div className="flex gap-3">
            <div className="shrink-0">
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <img
                  src={authorImage}
                  alt={authorName}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="cursor-pointer font-semibold text-black hover:underline dark:text-white/90">
                      {authorName}
                    </span>
                    {isVerified && (
                      <VerifiedIcon className="h-4 w-4 text-blue-400" />
                    )}
                  </div>
                  <span className="text-sm text-black dark:text-white/60">
                    @{authorHandle}
                  </span>
                </div>
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-lg p-1 text-black hover:bg-black/5 hover:text-black dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1200"
                    height="1227"
                    fill="none"
                    viewBox="0 0 1200 1227"
                    className="h-4 w-4"
                  >
                    <title>X</title>
                    <path
                      fill="currentColor"
                      d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-2">
            {content.map((item, index) => (
              <p
                key={index}
                className="text-base text-black dark:text-white/90"
              >
                {item}
              </p>
            ))}
            <span className="mt-2 block text-sm text-black dark:text-white/50">
              {timestamp}
            </span>
          </div>

          {reply && (
            <div className="mt-4 border-t border-black/[0.08] pt-4 dark:border-white/[0.08]">
              <div className="flex gap-3">
                <div className="shrink-0">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <img
                      src={reply.authorImage}
                      alt={reply.authorName}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="cursor-pointer font-semibold text-black hover:underline dark:text-white/90">
                      {reply.authorName}
                    </span>
                    {reply.isVerified && (
                      <VerifiedIcon className="h-4 w-4 text-blue-400" />
                    )}
                    <span className="text-sm text-black dark:text-white/60">
                      @{reply.authorHandle}
                    </span>
                    <span className="text-sm text-black dark:text-white/60">
                      ·
                    </span>
                    <span className="text-sm text-black dark:text-white/60">
                      {reply.timestamp}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-black dark:text-white/80">
                    {reply.content}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
