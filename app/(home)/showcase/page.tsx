import type { Metadata } from 'next';
import ShowCaseComponent from './ShowcaseComponent';
import { createMetadata } from '@/lib/metadata';
import {
  JsonLd,
  breadcrumbSchema,
  collectionPageSchema,
  itemListSchema,
} from '@/lib/jsonld';
import { siteConfig } from '@/config/site';
import { showcaseData } from '@/lib/showcase';

const TITLE = 'Showcase — Real Products Built with MVPBlocks';
const DESCRIPTION =
  'Discover real-world products, SaaS apps, developer tools, and side projects built with MVPBlocks. See how teams and indie hackers ship faster using our open-source UI blocks.';

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  pathname: '/showcase',
  extraKeywords: [
    'MVPBlocks showcase',
    'sites built with MVPBlocks',
    'Next.js showcase',
    'Tailwind CSS showcase',
    'SaaS built with MVPBlocks',
    'indie hacker projects',
    'open source UI showcase',
  ],
});

export default function ShowcasePage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Showcase', url: `${siteConfig.url}/showcase` },
  ]);

  const collection = collectionPageSchema({
    name: 'MVPBlocks Showcase',
    description: DESCRIPTION,
    pathname: '/showcase',
  });

  const items = itemListSchema(
    showcaseData.map((s) => ({
      name: s.name,
      description: s.about,
      url: s.link,
      image: new URL(s.image, siteConfig.url).toString(),
    })),
    'Products built with MVPBlocks',
  );

  return (
    <>
      <JsonLd data={[collection, items, breadcrumb]} />
      <ShowCaseComponent />
    </>
  );
}
