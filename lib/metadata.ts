import type { Metadata } from 'next/types';
import { siteConfig } from '@/config/site';

export function createMetadata(override: Metadata): Metadata {
  const titleStr = override.title
    ? typeof override.title === 'string'
      ? override.title
      : String(override.title)
    : siteConfig.name;
  const descriptionStr = override.description
    ? typeof override.description === 'string'
      ? override.description
      : String(override.description)
    : siteConfig.description;

  return {
    ...override,
    title: titleStr,
    description: descriptionStr,
    keywords: siteConfig.keywords,
    authors: [{ name: 'Subhadeep Roy' }],
    creator: 'Subhadeep Roy',
    publisher: 'Subhadeep Roy',
    openGraph: {
      title: titleStr,
      description: descriptionStr,
      url: siteConfig.url,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: String(titleStr),
        },
      ],
      siteName: siteConfig.name,
      locale: 'en_US',
      ...(override.openGraph || {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: titleStr,
      description: descriptionStr,
      creator: '@mvp_Subha',
      images: [siteConfig.ogImage],
      ...(override.twitter || {}),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
      ...((override.robots as object) || {}),
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL}`);
