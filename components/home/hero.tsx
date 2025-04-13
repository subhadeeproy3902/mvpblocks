"use client";

import Image from "next/image";
import PixelCards from "../ui/pixelcards";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeBadge from "../ui/home-badge";

const space = Geist({
  subsets: ["latin"],
  variable: "--font-carlito",
  weight: "400",
});

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background py-32 md:px-6">
      <Image
        src="/vector1.png"
        alt="Vector"
        width={300}
        height={300}
        className="absolute right-0 top-0 z-[2] object-cover object-center"
        priority
      />
      <Image
        src="/vector2.png"
        alt="Vector"
        width={300}
        height={300}
        className="absolute left-0 top-0 z-[2] object-cover object-center"
        priority
      />
      <Image
        src="/vector5.png"
        alt="Vector"
        width={300}
        height={300}
        className="absolute -left-44 -rotate-90 bottom-0 z-[2] object-cover object-center"
        priority
      />
      <Image
        src="/vector6.png"
        alt="Vector"
        width={300}
        height={300}
        className="absolute -right-44 rotate-90 bottom-0 z-[2] object-cover object-center"
        priority
      />
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        <div className="flex justify-center">
          <HomeBadge />
        </div>
        <div className="mx-auto mt-5 max-w-3xl text-center">
          <h1
            className={cn(
              "text-3xl text-center max-w-5xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-clip-text text-transparent from-foreground/60 via-foreground to-foreground/60",
              space.className,
            )}
          >
            Prebuilt UI 
            <img src="/rose.png" alt="Logo" className="inline-block h-12 w-12 md:h-16 md:w-16 mx-4 mb-2" />
            blocks to ship beautiful MVPs fast.
          </h1>
        </div>
        <div className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-xl text-muted-foreground">
            Copy-paste beautiful, responsive components without worrying about
            styling or animations. Build faster, launch sooner.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <Button size={"lg"}>Get started</Button>
          <Button size={"lg"} variant={"outline"}>
            Learn more
          </Button>
        </div>
        <div className="mt-5 flex items-center justify-center gap-x-1">
        <img src="/vector4.png" alt="Next.js" className="w-96 mt-4 hidden xl:block mr-2 brightness-[4]" />
          <span className="text-sm text-gray-500">
            We use industry standards like{" "}
          </span>
          <img src="/nextjs.png" alt="Next.js" className="h-7 w-7" />
          <img src="/tailwind.png" alt="Next.js" className="h-7 w-7" />
          <img src="/framer.webp" alt="Next.js" className="h-6 w-6" />
          <img src="/vector3.png" alt="Next.js" className="w-96 mt-4 hidden xl:block ml-2 brightness-[4]" />
        </div>
      </div>
      {/* <PixelCards /> */}
    </div>
  );
}
