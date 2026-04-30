import type { Metadata } from 'next';
import TemplateComponent from './TemplateComponent';
import { createMetadata } from '@/lib/metadata';
import {
  JsonLd,
  breadcrumbSchema,
  collectionPageSchema,
  itemListSchema,
} from '@/lib/jsonld';
import { siteConfig } from '@/config/site';
import { products } from '@/constants/templates';

const TITLE = 'Premium Templates — Production-Ready Next.js & React Templates';
const DESCRIPTION =
  'Browse premium, production-ready Next.js and React templates for AI SaaS, marketing sites, developer portfolios, designer portfolios, AI chatbots, and DevOps dashboards. Buy once, ship faster.';

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  pathname: '/templates',
  extraKeywords: [
    'Next.js templates',
    'React templates',
    'SaaS templates',
    'AI SaaS template',
    'AI chatbot template',
    'developer portfolio template',
    'designer portfolio template',
    'premium Next.js templates',
    'Tailwind CSS templates',
    'production ready templates',
  ],
});

export default function TemplatesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Templates', url: `${siteConfig.url}/templates` },
  ]);

  const collection = collectionPageSchema({
    name: 'MVPBlocks Templates',
    description: DESCRIPTION,
    pathname: '/templates',
  });

  const items = itemListSchema(
    products.map((p) => ({
      name: p.name,
      description: p.description,
      url: new URL(p.link, siteConfig.url).toString(),
      image: new URL(p.image, siteConfig.url).toString(),
    })),
    'MVPBlocks Templates',
  );

  return (
    <>
      <JsonLd data={[collection, items, breadcrumb]} />
      <TemplateComponent />
    </>
  );
}
