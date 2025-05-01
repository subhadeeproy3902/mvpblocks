"use client";
import avatar1 from "@/assets/avatar-1.webp";
import avatar2 from "@/assets/avatar-2.webp";
import avatar3 from "@/assets/avatar-3.webp";
import avatar4 from "@/assets/avatar-4.webp";
import avatar5 from "@/assets/avatar-5.webp";
import avatar6 from "@/assets/avatar-6.webp";
import avatar7 from "@/assets/avatar-7.webp";
import avatar8 from "@/assets/avatar-8.webp";
import avatar9 from "@/assets/avatar-9.webp";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const space = Geist({
  subsets: ["latin"],
  variable: "--font-carlito",
  weight: "400",
});

const testimonials = [
  {
    text: "Mvpblocks has completely changed the way I build UIs. Copy-paste, done. No more design stress.",
    imageSrc: avatar1.src,
    name: "Arjun Mehta",
    username: "@arjdev",
  },
  {
    text: "Honestly shocked at how smooth the animations and styling are out of the box. Just works.",
    imageSrc: avatar2.src,
    name: "Sara Lin",
    username: "@sara.codes",
  },
  {
    text: "Our team launched a client site in 2 days using Mvpblocks. Saved so much time.",
    imageSrc: avatar3.src,
    name: "Devon Carter",
    username: "@devninja",
  },
  {
    text: "Plugged a few blocks into our existing codebase and everything blended perfectly. Massive W.",
    imageSrc: avatar4.src,
    name: "Priya Shah",
    username: "@priyacodes",
  },
  {
    text: "Found a beautiful hero section, dropped it into V0, tweaked copy, and shipped in 15 minutes.",
    imageSrc: avatar5.src,
    name: "Leo Martin",
    username: "@leobuilds",
  },
  {
    text: "Mvpblocks helped us prototype multiple landing pages without writing CSS once.",
    imageSrc: avatar6.src,
    name: "Chloe Winters",
    username: "@chloewinters",
  },
  {
    text: "As a solo founder, Mvpblocks lets me move fast without sacrificing design quality.",
    imageSrc: avatar7.src,
    name: "Ayaan Malik",
    username: "@ayaan_dev",
  },
  {
    text: "Can’t believe how polished the components look. Clients are impressed every time.",
    imageSrc: avatar8.src,
    name: "Monica Reeves",
    username: "@monicareeves",
  },
  {
    text: "This tool is a lifesaver when deadlines are tight. Drop in a block, tweak, and deploy.",
    imageSrc: avatar9.src,
    name: "James Roy",
    username: "@jamesrdev",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6"
    >
      {[
        ...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name, username }) => (
              <div
                key={text}
                className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-secondary/10 to-card p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]"
              >
                {/* rose color gradient */}
                <div className="absolute -left-5 -top-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
                <div>{text}</div>
                <div className="mt-5 flex items-center gap-2">
                  <Image
                    src={imageSrc}
                    alt={name}
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        )),
      ]}
    </motion.div>
  </div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section id="reviews" className="mb-32 bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="mx-auto max-w-[540px]"
        >
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-zinc-500/80 bg-background/50 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/[0.1] active:scale-100 dark:border-border md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative">Testimonials</span>
            </button>
          </div>
          <h2
            className={cn(
              "mt-5 bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 md:text-[54px] md:leading-[60px]",
              space.className,
            )}
          >
            What our users say
          </h2>
          <p className="mt-5 text-center text-lg text-zinc-500">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </motion.div>
        <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;