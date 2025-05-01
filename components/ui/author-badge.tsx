"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AuthorBadgeProps {
  username: string;
  className?: string;
}

export function AuthorBadge({ username, className }: AuthorBadgeProps) {
  // Get initials for the fallback
  const initials = username
    .split(/[^a-zA-Z0-9]/)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Link
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "absolute bottom-2 right-2 z-10 flex items-center gap-1.5 no-underline",
        className,
      )}
    >
      <Badge
        variant="outline"
        className="relative flex items-center gap-1.5 border-secondary/50 bg-background/80 px-3.5 py-1.5 shadow-[0px_0px_10px_0px_#ff005c40_inset] backdrop-blur-sm transition-colors hover:bg-background/95"
      >
        <span className="text-xs font-medium text-foreground">{username}</span>
        <Avatar className="h-5 w-5 border border-secondary/50">
          <AvatarImage
            src={`https://github.com/${username}.webp`}
            alt={username}
          />
          <AvatarFallback className="text-[8px]">{initials}</AvatarFallback>
        </Avatar>
      </Badge>
    </Link>
  );
}
