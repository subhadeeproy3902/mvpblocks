import type { Metadata } from 'next';
import AboutUsComponent from '@/components/about';
import { createMetadata } from '@/lib/metadata';
import { JsonLd, breadcrumbSchema } from '@/lib/jsonld';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

const TITLE = 'About MVPBlocks — Our Mission & Story';
const DESCRIPTION =
  'Learn about MVPBlocks: an open-source UI library for developers building MVPs, landing pages, and SaaS products. Discover our mission, story, and the people behind the project.';

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  pathname: '/about',
  extraKeywords: ['about MVPBlocks', 'MVPBlocks team', 'MVPBlocks story'],
});

export default function AboutUsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'About', url: `${siteConfig.url}/about` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <AboutUsComponent />
    </>
  );
}
