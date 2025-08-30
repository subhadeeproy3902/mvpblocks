import createBundleAnalyzer from '@next/bundle-analyzer';
import { createMDX } from 'fumadocs-mdx/next';

const withAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react', 'next-themes'],
  },
  serverExternalPackages: ['ts-morph', 'typescript', 'twoslash', 'shiki'],
  images: {
    remotePatterns: [{ hostname: '*' }],
    unoptimized: true, // <--- disables Next.js image optimizer as per your current config
  },
  async headers() {
    return [
      {
        // Cache static assets (webp, png, jpg, svg, ico) for 1 year, immutable
        source: '/:path*\\.(webp|png|jpg|jpeg|svg|ico|gif|bmp|tiff|avif|woff|woff2|eot|ttf|otf)$',
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
