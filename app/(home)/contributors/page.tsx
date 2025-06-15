'use client';

import { motion } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Contributor, fetchContributors } from '@/actions/fetchContributors';
import WorldMap from '@/components/ui/world-map';

const space = Geist({
  subsets: ['latin'],
  variable: '--font-carlito',
  weight: '400',
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
                bio: detail.bio || '',
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
        console.error('Error fetching contributors:', error);
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
              'mb-6 bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-4xl tracking-tight text-transparent sm:text-5xl lg:text-6xl',
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
              className="group relative transform cursor-pointer transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-200/30 shadow-lg transition-all duration-300 hover:shadow-xl">
                {/* Full width image */}
                <div className="relative w-full overflow-hidden">
                  <img
                    src={contributor.avatar_url}
                    height={100}
                    width={330}
                    alt={`${contributor.name} avatar`}
                    className="w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-3 p-4">
                  <h3 className="text-center text-xl font-bold text-white">
                    {contributor.name}
                  </h3>

                  <p className="h-10 text-center text-sm text-gray-600">
                    {contributor.bio
                      ? contributor.bio.length < 70
                        ? contributor.bio
                        : contributor.bio.slice(0, 70) + '...'
                      : 'No bio available'}
                  </p>

                  <div className="flex items-center justify-center gap-6">
                    <Link
                      href={contributor.html_url}
                      target="_blank"
                      className="inline-flex items-center space-x-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub </span>
                    </Link>
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-gray-700">
                        {contributor.contributions}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-white pt-40 dark:bg-[#0B0A09]">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xl font-bold text-black dark:text-white md:text-4xl">
            Want to Contribute{' '}
            <span className="text-neutral-400">
              {'Connectivity'.split('').map((word, idx) => (
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
