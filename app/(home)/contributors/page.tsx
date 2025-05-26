"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink, Github, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Contributor, fetchContributors } from "@/actions/fetchContributors";
import Image from "next/image";
import WorldMap from "@/components/ui/world-map";

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
            <h1 className="group inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25">
              {contributors.length} Contributors
            </h1>
            <h1 className="group inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25">
              {totalContributions} Contributions
            </h1>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="group relative transform cursor-pointer transition-all duration-500 hover:scale-105"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-red-500 via-pink-500 to-red-400 opacity-30 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 "></div>

              <div className="relative rounded-2xl border border-red-200/30 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-red-900/20 p-4 backdrop-blur-sm group-hover:border-red-400/60">
                {/* Floating particles effect */}
                <div className="absolute right-2 top-2 h-2 w-2 animate-ping rounded-full bg-red-400 opacity-75"></div>
                <div className="absolute right-6 top-4 h-1 w-1 animate-pulse rounded-full bg-pink-400"></div>

                <div className="flex flex-col items-center space-y-3 text-center">
                  {/* Avatar with glow effect */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-500 to-pink-500 opacity-0 blur transition duration-500 group-hover:opacity-75"></div>
                    <Image
                      src={contributor.avatar_url}
                      height="1000"
                      width="1000"
                      alt="thumbnail"
                      className="border-3 relative h-16 w-16 transform rounded-full border-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:border-red-400"
                    />
                    <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-900 bg-green-500">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white"></div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 text-lg font-bold text-white transition-colors duration-300 group-hover:text-red-300">
                      {contributor.name}
                    </h3>
                    <p className="mb-2 text-xs text-gray-400 transition-colors group-hover:text-red-400">
                      @{contributor.login}
                    </p>

                    <div className="flex items-center justify-center space-x-1">
                      <Zap className="h-3 w-3 text-yellow-400" />
                      <span className="text-xs font-bold text-red-400">
                        {contributor.contributions}
                      </span>
                      <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Link href={contributor.html_url} target="_blank">
                          <ExternalLink className="h-3 w-3 animate-bounce text-red-400" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-white pt-40 dark:bg-[#0B0A09] ">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xl font-bold text-black dark:text-white md:text-4xl">
            Want to Contribute{" "}
            <span className="text-neutral-400">
              {"Connectivity".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="mx-auto max-w-2xl py-4 text-sm text-neutral-500 md:text-lg">
            We welcome contributions from the community! If you have ideas or
            implementations for pagination components, consider contributing to
            MVPBlocks.
          </p>
        </div>
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </div>

    </div>
  );
}
