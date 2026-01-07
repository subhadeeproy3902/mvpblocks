'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Settings,
  Github,
  ChevronDown,
  Lock,
  ChevronUp,
  UploadCloudIcon,
  Upload,
  Globe,
} from 'lucide-react';
import Image from 'next/image';

export function TopNav() {
  return (
    <header
      className="bg-background text-foreground fixed top-0 z-40 w-full border-b"
      role="banner"
    >
      <div className="mx-auto flex h-12 items-center justify-between gap-2 px-3 md:h-12 md:px-4">
        <div className="flex min-w-0 items-center gap-2 md:gap-3">
          <Link
            prefetch={false}
            href="/"
            className="z-50 flex items-center justify-center gap-2"
          >
            <Image
              width={32}
              height={32}
              src="https://i.postimg.cc/j5dW4vFd/Mvpblocks.webp"
              alt="logo"
              className="h-6 w-6 rounded-full"
            />
            <span className="bg-primary from-foreground to-primary hidden via-rose-200 bg-clip-text font-semibold text-transparent md:block md:text-xl dark:bg-gradient-to-b">
              Mvpblocks
            </span>
          </Link>

          <span className="text-foreground/40">/</span>

          <div className="hidden items-center gap-1 sm:flex">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc" alt="Workspace avatar" />
              <AvatarFallback>WS</AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="icon"
              className="flex h-6 w-6 flex-col items-center justify-center gap-0 p-0"
              aria-label="Open workspace switcher"
            >
              <ChevronUp className="h-3.5 w-3.5" />
              <ChevronDown className="h-3.5 w-3.5" />
            </Button>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <h1 className="line-clamp-1 truncate text-xs font-semibold text-balance break-words md:text-sm">
                Dashboard redesign
              </h1>
              <Lock
                aria-label="Private project"
                className="text-foreground/60 bg-secondary size-5 rounded-full p-1"
              />
            </div>
            <p className="text-foreground/60 text-xs">View Project</p>
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            aria-label="Settings"
          >
            <Settings />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hidden h-7 w-7 md:inline-flex"
            aria-label="GitHub"
          >
            <Github />
          </Button>

          <Button variant="outline" className="hidden h-7 md:inline-flex">
            Share
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="inline-flex h-7 w-7 md:hidden"
            aria-label="Share"
          >
            <Upload />
          </Button>

          <Button className="hidden h-8 md:inline-flex">Publish</Button>

          <Button
            size="icon"
            className="inline-flex h-7 w-7 md:hidden"
            aria-label="Publish"
          >
            <Globe />
          </Button>

          <Avatar className="ml-1 h-8 w-8">
            <AvatarImage alt="Your profile" src="https://i.pravatar.cc" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
