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
    metadataBase: new URL(siteConfig.url),
    creator: 'Subhadeep Roy',
    publisher: 'Subhadeep Roy',
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

export const baseUrl = "https://blocks.mvp-subha.me";
