"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";
import { Contributor, fetchContributors } from "@/actions/fetchContributors";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const space = Geist({
  subsets: ["latin"],
  variable: "--font-carlito",
  weight: "400",
});

export default function Contributors() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const getContributors = async () => {
      try {
        const data = await fetchContributors();

        const detailedContributors = await Promise.all(
          data.map(async (contributor) => {
            try {
              const res = await fetch(
                `https://api.github.com/users/${contributor.login}`,
              );
              const detail = await res.json();

              return {
                ...contributor,
                name: detail.name || contributor.login,
                bio: detail.bio || "",
              };
            } catch {
              return contributor;
            }
          }),
        );

        setContributors(detailedContributors);

        const total = detailedContributors.reduce(
          (acc, curr) => acc + curr.contributions,
          0,
        );
        setTotalContributions(total);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    getContributors();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden px-2 py-32 md:px-6">
      <Spotlight />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "mb-6 bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-4xl tracking-tight text-transparent sm:text-5xl lg:text-6xl",
              space.className,
            )}
          >
            <span className="bg-primary from-foreground via-rose-200 to-primary bg-clip-text dark:bg-gradient-to-b">
              Contributors
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground sm:text-xl"
          >
            Meet the amazing people who have contributed to MVPBlocks. Their
            dedication and hard work make this project possible.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <h1 className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 cursor-pointer">
              {contributors.length} Contributors
            </h1>
            <h1 className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 cursor-pointer">
              {totalContributions} Contributions
            </h1>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-8">
        {contributors.map((contributor) => (
          <CardContainer
            className="inter-var w-96 bg-transparent"
            key={contributor.login}
          >
            <CardBody className="group/card relative flex h-[32rem] w-auto flex-col justify-between rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
              <div>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {contributor.name || contributor.login}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 line-clamp-3 h-[4.5rem] max-w-sm overflow-hidden text-sm text-neutral-500 dark:text-neutral-300"
                >
                  {contributor.bio}
                </CardItem>

                <CardItem translateZ="100" className="mt-4 w-full">
                  <Image
                    src={contributor.avatar_url}
                    height="1000"
                    width="1000"
                    className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                >
                  {contributor.contributions} contributions
                </CardItem>

                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                >
                  <a href={contributor.html_url} target="__blank">
                    <Github className="h-4 w-4" />
                  </a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <section className="mx-auto mb-24 flex w-full max-w-7xl flex-col items-center justify-center">
        <div className="w-full">
          <div className="relative z-20 h-[400px] w-full overflow-hidden rounded-xl border border-border bg-primary shadow-xl md:h-[400px]">
            <Image
              alt="Agent CTA Background"
              fill
              priority
              className="absolute inset-0 object-cover object-right md:object-center"
              sizes="(max-width: 768px) 100vw, 1280px"
              src="/cta-bg.webp"
            />
            <div className="absolute inset-0 -top-32 flex flex-col items-center justify-center md:-top-40">
              <h1 className="max-w-xs bg-gradient-to-r from-zinc-200/60 via-zinc-50 to-zinc-200/60 bg-clip-text text-center text-4xl font-medium tracking-tighter text-transparent md:max-w-xl md:text-7xl">
                Want to contribute?
              </h1>
              <div className="absolute bottom-20 flex flex-col items-center justify-center gap-2">
                <span className="text-sm text-white">
                  We welcome contributions from the community! If you have ideas
                  or implementations for pagination components, consider
                  contributing to MVPBlocks.
                </span>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <Link
                    className="flex h-10 w-fit items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-black shadow-md cursor-pointer"
                    href="https://github.com/subhadeeproy3902/mvpblocks"
                    target="_blank"
                  >
                    Contribute on GitHub
                  </Link>
                  <Link
                    className="flex h-10 w-fit items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-black shadow-md cursor-pointer"
                    href="https://github.com/subhadeeproy3902/mvpblocks/issues"
                    target="_blank"
                  >
                    View Issues
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
