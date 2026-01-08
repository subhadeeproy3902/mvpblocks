'use client';

import { FloatingDock } from '@/components/ui/floating-dock';
import {
  Github,
  Home,
  Layers,
  RefreshCw,
  Terminal,
  Twitter,
} from 'lucide-react';

export default function FloatingDockDemo() {
  const links = [
    {
      title: 'Home',
      icon: (
        <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Products',
      icon: (
        <Terminal className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Components',
      icon: (
        <Layers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'MVPBlocks',
      icon: (
        <img
          src="https://i.postimg.cc/j5dW4vFd/Mvpblocks.webp"
          width={20}
          height={20}
          alt="MVPBlocks Logo"
          className="rounded-full"
        />
      ),
      href: '#',
    },
    {
      title: 'Changelog',
      icon: (
        <RefreshCw className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Twitter',
      icon: (
        <Twitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'GitHub',
      icon: (
        <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
  ];
  return (
    <div className="flex h-[35rem] w-full items-center justify-center">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}