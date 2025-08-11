import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MVPBlocks',
    short_name: 'MVPBlocks',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo.webp',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.webp',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
