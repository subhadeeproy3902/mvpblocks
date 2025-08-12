import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = siteConfig.url || 'https://blocks.mvp-subha.me';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/preview/',
        '/docs/',
        '/about',
        '/privacy',
        '/terms',
        '/showcase',
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
