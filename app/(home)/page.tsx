import type { Metadata } from 'next';
import Features from '@/components/home/features';
import Gallery from '@/components/home/gallery';
import Hero from '@/components/home/hero';
import Testimonials from '@/components/home/testimonials';
import { createMetadata } from '@/lib/metadata';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
} from '@/lib/jsonld';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

const TITLE =
  'MVPBlocks — Open-Source UI Blocks for Next.js, React & Tailwind CSS';
const DESCRIPTION =
  'MVPBlocks is a free, open-source library of beautifully crafted, copy-paste UI blocks, sections, and templates built with Next.js, React, Tailwind CSS, and Framer Motion. Ship your MVP, landing page, or SaaS product in hours instead of weeks.';

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  pathname: '/',
  extraKeywords: [
    'free UI blocks',
    'copy paste components',
    'Next.js component library',
    'Tailwind CSS blocks',
    'shadcn ui blocks',
    'launch MVP fast',
    'SaaS landing page blocks',
  ],
});

const HOME_FAQS = [
  {
    question: 'What is MVPBlocks?',
    answer:
      'MVPBlocks is an open-source library of plug-and-play UI sections built with Next.js, React, Tailwind CSS, and Framer Motion. You can copy and paste any block into your MVP, landing page, or SaaS project and ship faster.',
  },
  {
    question: 'Is MVPBlocks free to use?',
    answer:
      'Yes. MVPBlocks is fully open-source and free for both personal and commercial projects under the BSD 3-Clause license. No attribution required.',
  },
  {
    question: 'Do I need Tailwind CSS to use MVPBlocks?',
    answer:
      'You only need Tailwind CSS if you want the out-of-the-box styling. The components are clean and readable, so you can adapt them to plain CSS or other frameworks if needed.',
  },
  {
    question: 'Are MVPBlocks components responsive and accessible?',
    answer:
      'Yes. Every block is designed to be fully responsive across mobile, tablet, and desktop, and follows accessibility best practices including semantic HTML and proper ARIA usage.',
  },
  {
    question: 'How do I add an MVPBlock to my project?',
    answer:
      'Open the docs, pick the block you want, copy the code, and paste it into your Next.js, Vite, or plain React project. Some blocks are also installable through the shadcn CLI registry.',
  },
];

export default function Homepage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
  ]);

  return (
    <>
      <JsonLd data={[faqSchema(HOME_FAQS), breadcrumb]} />

      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
    </>
  );
}
