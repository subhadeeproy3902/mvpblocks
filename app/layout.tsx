import type { Metadata, Viewport } from 'next';
import { dm } from '@/lib/fonts';
import './globals.css';
import { ThemeProvider } from '@/components/important/theme-provider';
import { PreviewPageDetector } from '@/components/important/preview-page-detector';
import { Toaster } from '@/components/ui/sonner';
import Clarity from '@/components/important/Clarity';
import Script from 'next/script';
import { siteConfig } from '@/config/site';
import {
  JsonLd,
  organizationSchema,
  softwareAppSchema,
  websiteSchema,
} from '@/lib/jsonld';

const TITLE = `${siteConfig.name} — Open-Source UI Blocks for Next.js & Tailwind CSS`;
const DESCRIPTION =
  'Copy, paste, customize, and ship faster. MVPBlocks is an open-source, developer-first library of beautifully-crafted UI blocks, sections, and templates built with Next.js, React, Tailwind CSS, and Framer Motion — perfect for MVPs, landing pages, and SaaS products.';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: TITLE,
    template: `%s — ${siteConfig.name}`,
  },
  description: DESCRIPTION,
  applicationName: siteConfig.name,
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  category: siteConfig.category,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      'text/plain': `${siteConfig.url}/llms.txt`,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Open-source UI blocks for Next.js and Tailwind CSS`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [siteConfig.ogImage],
    site: siteConfig.twitter.site,
    creator: siteConfig.twitter.handle,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://i.postimg.cc" crossOrigin="" />
        <link rel="dns-prefetch" href="https://i.postimg.cc" />
      </head>
      <body className={`${dm.className}`}>
        <JsonLd
          data={[organizationSchema(), websiteSchema(), softwareAppSchema()]}
        />

        {/* LemonSqueezy Affiliate Script */}
        <Script id="lemon-affiliate-config" strategy="afterInteractive">
          {`window.lemonSqueezyAffiliateConfig = { store: "mvpblocks" };`}
        </Script>
        <Script
          src="https://lmsqueezy.com/affiliate.js"
          strategy="afterInteractive"
        />

        {process.env.NODE_ENV === 'production' ? <Clarity /> : null}
        <PreviewPageDetector />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
