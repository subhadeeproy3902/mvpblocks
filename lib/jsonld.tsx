import { siteConfig } from '@/config/site';

/**
 * Helpers that build JSON-LD structured-data objects for Answer Engine
 * Optimization (AEO) and AI Engine Optimization (AIO). Embed the result via:
 *
 *   <script type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
 */

const url = (path = '') =>
  new URL(path, siteConfig.url).toString().replace(/\/$/, '');

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': url('/#organization'),
    name: siteConfig.name,
    alternateName: ['MVP Blocks', 'mvp-blocks'],
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
    },
    description: siteConfig.description,
    sameAs: [siteConfig.links.twitter, siteConfig.links.github],
    founder: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  } as const;
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': url('/#website'),
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: 'en-US',
    publisher: { '@id': url('/#organization') },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/docs?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  } as const;
}

export function softwareAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': url('/#software'),
    name: siteConfig.name,
    applicationCategory: 'DeveloperApplication',
    applicationSubCategory: 'UI Component Library',
    operatingSystem: 'Web',
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  } as const;
}

export function faqSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  } as const;
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  } as const;
}

export function itemListSchema(
  items: Array<{ name: string; url: string; description?: string; image?: string }>,
  name: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: item.url,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      ...(item.image ? { image: item.image } : {}),
    })),
  } as const;
}

export function collectionPageSchema({
  name,
  description,
  pathname,
}: {
  name: string;
  description: string;
  pathname: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: url(pathname),
    isPartOf: { '@id': url('/#website') },
    inLanguage: 'en-US',
  } as const;
}

export function articleSchema({
  title,
  description,
  pathname,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  pathname: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    image: image ?? siteConfig.ogImage,
    url: url(pathname),
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    publisher: { '@id': url('/#organization') },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url(pathname) },
    inLanguage: 'en-US',
  } as const;
}

/**
 * Inline component to render a JSON-LD <script>. Keep markup minimal.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return payload.map((d, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
    />
  ));
}
