import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 flex h-20 w-full flex-col items-center justify-between gap-1 border-t p-5 text-center md:flex-row">
      <span className="text-muted-foreground text-xs">
        © {currentYear} FinDash Pro. All rights reserved.
      </span>
      <div className="flex justify-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="text-muted-foreground hover:!bg-primary rounded transition-all duration-500 hover:scale-105 hover:text-white"
        >
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="size-4" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="text-muted-foreground hover:!bg-primary rounded transition-all duration-500 hover:scale-105 hover:text-white"
        >
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="size-4" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="text-muted-foreground hover:!bg-primary rounded transition-all duration-500 hover:scale-105 hover:text-white"
        >
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </Link>
        </Button>
      </div>
    </footer>
  );
}
