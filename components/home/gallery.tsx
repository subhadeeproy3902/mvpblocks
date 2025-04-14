"use client";

import { Marquee } from "../ui/marquee";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";
import LoginForm1 from "../mvpblocks/forms/login-form1";
import Globe1 from "../mvpblocks/creative/globe1";
import Globe2 from "../mvpblocks/creative/globe2";
import { MagicTrailDemo } from "../mvpblocks/trail";
import { CreativeOTPInputDemo } from "../otp";
import { AnimatedListDemo } from "../list-demo";

const space = Geist({
  subsets: ["latin"],
  variable: "--font-carlito",
  weight: "400",
});

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Gallery() {
  return (
    <section
      className="relative mb-32 min-h-screen overflow-hidden rounded-tl-[5rem] rounded-tr-[5rem] border-t border-b-0 border-secondary/50 bg-background pt-16"
      style={{
        boxShadow: "inset 0 20px 30px -12px rgba(244, 63, 94, 0.2)",
      }}
    >
      <Spotlight />
      <div className="mx-auto max-w-7xl">
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
              "mt-5 bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 bg-clip-text text-center text-3xl font-semibold tracking-tighter text-transparent dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 md:text-[54px] md:leading-[60px]",
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
        <div className="relative mt-16 flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            <div className="aspect-square h-full w-full rounded-xl border-2 p-2">
              <div className="h-full w-full overflow-hidden rounded-xl">
                <MagicTrailDemo />
              </div>
            </div>
            <div className="aspect-square h-full w-full rounded-xl border-2 p-2">
              <div className="h-full w-full">
                <CreativeOTPInputDemo />
              </div>
            </div>
            <div className="aspect-square h-full w-full rounded-xl border-2 p-2">
              <div className="h-full w-full overflow-hidden rounded-xl">
                <AnimatedListDemo />
              </div>
            </div>
            
            <div className="aspect-square h-full w-full rounded-xl border-2 p-2">
              <div className="h-full w-full overflow-hidden rounded-xl">
                <MagicTrailDemo />
              </div>
            </div>
            <div className="aspect-square h-full w-full rounded-xl border-2 p-2">
              <div className="h-full w-full">
                <CreativeOTPInputDemo />
              </div>
            </div>
            <div className="aspect-square h-full w-full rounded-xl border-2 p-2">
              <div className="h-full w-full overflow-hidden rounded-xl">
                <AnimatedListDemo />
              </div>
            </div>
            
            <div className="aspect-square h-full w-full rounded-xl border-2 p-2">
              <div className="h-full w-full overflow-hidden rounded-xl">
                <MagicTrailDemo />
              </div>
            </div>
            <div className="aspect-square h-full w-full rounded-xl border-2 p-2">
              <div className="h-full w-full">
                <CreativeOTPInputDemo />
              </div>
            </div>
            <div className="aspect-square h-full w-full rounded-xl border-2 p-2">
              <div className="h-full w-full overflow-hidden rounded-xl">
                <AnimatedListDemo />
              </div>
            </div>
            
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
