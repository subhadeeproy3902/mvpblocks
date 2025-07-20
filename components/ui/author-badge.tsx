'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface AuthorBadgeProps {
  username: string;
  className?: string;
}

export function AuthorBadge({ username, className }: AuthorBadgeProps) {
  // Get initials for the fallback
  const initials = username
    .split(/[^a-zA-Z0-9]/)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Link
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'absolute right-2 bottom-2 z-50 flex items-center gap-1.5 no-underline',
        className,
      )}
    >
      <Badge
        variant="outline"
        className="border-secondary/50 bg-background/80 hover:bg-background/95 relative flex items-center gap-1.5 px-3.5 py-1.5 shadow-[0px_0px_10px_0px_#ff005c40_inset] backdrop-blur-sm transition-colors"
      >
        <Avatar className="border-secondary/50 h-5 w-5 border">
          <AvatarImage
            src={`https://github.com/${username}.png`}
            alt={username}
          />
          <AvatarFallback className="text-[8px]">{initials}</AvatarFallback>
        </Avatar>
        <span className="text-foreground text-xs font-medium">{username}</span>
      </Badge>
    </Link>
  );
}
