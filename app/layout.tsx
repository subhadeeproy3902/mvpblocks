import type { Metadata, Viewport } from 'next';
import { dm } from '@/lib/fonts';
import './globals.css';
import { ThemeProvider } from '@/components/important/theme-provider';
import { PreviewPageDetector } from '@/components/important/preview-page-detector';
import { Toaster } from '@/components/ui/sonner';
import Clarity from '@/components/important/Clarity';
import Script from 'next/script';
import ScrollToTop from "../components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Mvpblocks",
  description:
    "Copy, paste, customize—and launch your idea faster than ever. Mvpblocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS.",

  keywords: [
    "UI blocks",
    "Templates",
    "Tailwind CSS",
    "Motion",
    "Landing Page",
    "Components",
    "Next.js",
    "React",
    "MVP",
    "Component Library",
    "Open Source",
  ],

  authors: [{ name: "Subhadeep Roy" }],
  creator: "Subhadeep Roy",
  publisher: "Subhadeep Roy",

  metadataBase: new URL("https://blocks.mvp-subha.me"),

  openGraph: {
    title: "Mvpblocks",
    description:
      "Copy, paste, customize—and launch your idea faster than ever. Mvpblocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS.",
    url: "https://blocks.mvp-subha.me",
    siteName: "Mvpblocks",
    images: [
      {
        url: "https://i.postimg.cc/Wz9JFxdW/mvpblocksog.webp",
        width: 1200,
        height: 630,
        alt: "Mvpblocks Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mvpblocks",
    description:
      "Copy, paste, customize—and launch your idea faster than ever. Mvpblocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS.",
    images: ["https://i.postimg.cc/Wz9JFxdW/mvpblocksog.webp"],
    creator: "@mvp_Subha", // optional
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
        <ScrollToTop />
      </body>
    </html>
  );
}
