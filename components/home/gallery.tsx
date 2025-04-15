"use client";

import { Marquee } from "../ui/marquee";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";
import Image from "next/image";
import { useTheme } from "next-themes";

const space = Geist({
  subsets: ["latin"],
  variable: "--font-carlito",
  weight: "400",
});

export default function Gallery() {
  const { theme } = useTheme();

  return (
    <section
      className="relative mb-32 min-h-screen overflow-hidden rounded-tl-3xl rounded-tr-3xl md:rounded-tl-[5rem] border-b-0 border-t border-secondary/50 bg-background pt-16 md:rounded-tr-[5rem]"
      style={{
        boxShadow: "inset 0 20px 30px -12px rgba(244, 63, 94, 0.2)",
      }}
    >
      <Spotlight />
      <div className="mx-auto">
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-zinc-500/80 bg-background/50 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/[0.1] active:scale-100 dark:border-border md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative">Gallery</span>
            </button>
          </div>
          <h2
            className={cn(
              "mt-5 bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 md:text-[54px] md:leading-[60px]",
              space.className,
            )}
          >
            Trending blocks
          </h2>
          <p className="mt-5 text-center text-lg text-zinc-500">
            Discover the most popular blocks used by our community and get
            inspired to build your own.
          </p>
        </div>
        <div className="relative mt-12 flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            <div className="mx-4 overflow-hidden rounded-lg">
              {theme === "dark" ? (
                <Image
                  src="/gallery1.png"
                  alt="Gallery Image 1"
                  width={800}
                  height={800}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <Image
                  src="/gallery1-light.png"
                  alt="Gallery Image 1"
                  width={800}
                  height={800}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
            </div>
            <div className="mx-4 overflow-hidden rounded-lg">
              {theme === "dark" ? (
                <Image
                  src="/gallery3.png"
                  alt="Gallery Image 1"
                  width={800}
                  height={800}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <Image
                  src="/gallery3-light.png"
                  alt="Gallery Image 1"
                  width={800}
                  height={800}
                  className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                />
              )}
            </div>
            <div className="mx-4">
              <Image
                src="/gallery2.png"
                alt="Gallery Image 1"
                width={800}
                height={800}
                className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
