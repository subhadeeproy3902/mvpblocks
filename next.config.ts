import createBundleAnalyzer from '@next/bundle-analyzer';
import { createMDX } from 'fumadocs-mdx/next';
import { NextConfig } from 'next';

const withAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const config: NextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Optimizes for Docker containers
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react', 'next-themes'],
  },
  serverExternalPackages: ['ts-morph', 'typescript', 'twoslash'],
  images: {
    remotePatterns: [{ hostname: '*' }],
    unoptimized: true, // <--- disables Next.js image optimizer as per your current config
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/:path*',
      },
    ];
  },
};

const withMDX = createMDX();

export default withAnalyzer(withMDX(config));
