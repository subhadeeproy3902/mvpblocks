import type { Metadata } from 'next';
import { dm } from '@/lib/fonts';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { PreviewPageDetector } from '@/components/preview-page-detector';
import { Toaster } from '@/components/ui/sonner';
import Clarity from '@/components/Clarity';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Mvpblocks',
  description:
    'Copy, paste, customize—and launch your idea faster than ever. Mvpblocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS.',
  keywords: [
    'UI blocks',
    'Templates',
    'Tailwind CSS',
    'Motion',
    'Landing Page',
    'Components',
    'Next.js',
    'React',
    'MVP',
    'Component Library',
    'Open Source',
  ],
  authors: [{ name: 'Subhadeep Roy' }],
  creator: 'Subhadeep Roy',
  publisher: 'Subhadeep Roy',
  metadataBase: new URL('https://blocks.mvp-subha.me'),
  alternates: {
    canonical: 'https://blocks.mvp-subha.me',
  },
  openGraph: {
    title: 'Mvpblocks',
    description:
      'Copy, paste, customize—and launch your idea faster than ever. Mvpblocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS.',
    url: 'https://blocks.mvp-subha.me',
    siteName: 'Mvpblocks',
    images: [
      {
        url: 'https://i.postimg.cc/Wz9JFxdW/mvpblocksog.webp',
        width: 1200,
        height: 630,
        alt: 'Mvpblocks - The Ultimate Open Source Component Library for MVPs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mvpblocks',
    description:
      'Copy, paste, customize—and launch your idea faster than ever.',
    creator: '@mvp_Subha',
    images: ['https://i.postimg.cc/Wz9JFxdW/mvpblocksog.webp'],
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dm.className}`}>
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
