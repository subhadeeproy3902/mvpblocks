"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, Github, ChevronDown, Lock, ChevronUp, UploadCloudIcon, Upload, Globe } from "lucide-react"
import Image from "next/image"

export function TopNav() {
  return (
    <header className="fixed top-0 z-40 w-full border-b bg-background text-foreground" role="banner">
      <div className="mx-auto flex h-12 items-center justify-between gap-2 px-3 md:h-12 md:px-4">
        <div className="min-w-0 flex items-center gap-2 md:gap-3">
          <Link
            prefetch={false}
            href="/"
            className="z-50 flex items-center justify-center gap-2"
          >
            <Image
              width={32}
              height={32}
              src="https://i.postimg.cc/2SRcktkT/Mvpblocks.webp"
              alt="logo"
              className="h-6 w-6 rounded-full"
            />
            <span className="bg-primary from-foreground to-primary via-rose-200 bg-clip-text font-semibold text-transparent md:text-xl dark:bg-gradient-to-b hidden md:block">
              Mvpblocks
            </span>
          </Link>

          <span className="text-foreground/40">/</span>

          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <h1 className="truncate text-xs font-semibold md:text-sm text-balance break-words line-clamp-1">Dashboard redesign</h1>
              <Lock aria-label="Private project" className="size-5 p-1 text-foreground/60 bg-secondary rounded-full" />
            </div>
            <p className="text-xs text-foreground/60">View Project</p>
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
            className="h-7 w-7 hidden md:inline-flex"
            aria-label="GitHub"
          >
            <Github />
          </Button>

          <Button
            variant="outline"
            className="h-7 hidden md:inline-flex"
          >
            Share
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7 inline-flex md:hidden"
            aria-label="Share"
          >
            <Upload />
          </Button>

          <Button className="h-8 hidden md:inline-flex">Publish</Button>

          <Button
            size="icon"
            className="h-7 w-7 inline-flex md:hidden"
            aria-label="Publish"
          >
            <Globe />
          </Button>

          <Avatar className="ml-1 h-8 w-8">
            <AvatarImage alt="Your profile"
              src="https://i.pravatar.cc"
            />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
