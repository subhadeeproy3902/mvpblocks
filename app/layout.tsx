import type { Metadata, Viewport } from 'next';
import { dm } from '@/lib/fonts';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { PreviewPageDetector } from '@/components/preview-page-detector';
import { Toaster } from '@/components/ui/sonner';
import Clarity from '@/components/Clarity';

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
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dm.className}`}>
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
