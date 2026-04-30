import type { Metadata } from 'next/types';
import { siteConfig } from '@/config/site';
import { createMetadataImage } from "fumadocs-core/server";
import { source } from "@/lib/source";

interface CreateMetadataOptions extends Metadata {
  /**
   * Path (e.g. "/showcase") used to build the canonical URL. Optional;
   * if omitted, Next.js will fall back to its default canonical handling.
   */
  pathname?: string;
  /** Additional, page-specific keywords merged with the global keyword list. */
  extraKeywords?: string[];
}

export function createMetadata(override: CreateMetadataOptions): Metadata {
  const { pathname, extraKeywords, ...rest } = override;

  const titleStr = rest.title
    ? typeof rest.title === 'string'
      ? rest.title
      : String(rest.title)
    : siteConfig.name;
  const descriptionStr = rest.description
    ? typeof rest.description === 'string'
      ? rest.description
      : String(rest.description)
    : siteConfig.description;

  const mergedKeywords = Array.from(
    new Set([...(extraKeywords ?? []), ...siteConfig.keywords]),
  );

  const canonical = pathname
    ? new URL(pathname, siteConfig.url).toString()
    : undefined;

  return {
    ...rest,
    title: titleStr,
    description: descriptionStr,
    keywords: mergedKeywords,
    applicationName: siteConfig.name,
    authors: [{ name: 'Subhadeep Roy', url: siteConfig.author.url }],
    metadataBase: new URL(siteConfig.url),
    creator: 'Subhadeep Roy',
    publisher: 'Subhadeep Roy',
    category: siteConfig.category,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical,
      ...(rest.alternates ?? {}),
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
      ...((rest.robots as object) || {}),
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      locale: 'en_US',
      url: canonical ?? siteConfig.url,
      title: titleStr,
      description: descriptionStr,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: titleStr,
        },
      ],
      ...(rest.openGraph ?? {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: titleStr,
      description: descriptionStr,
      site: siteConfig.twitter.site,
      creator: siteConfig.twitter.handle,
      images: [siteConfig.ogImage],
      ...(rest.twitter ?? {}),
    },
  };
}

export const baseUrl = siteConfig.url;

export const metadataImage = createMetadataImage({
  imageRoute: "/api/dynamic-og",
  source,
});
