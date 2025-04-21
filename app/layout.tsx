import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "./scrollbar.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { PreviewPageDetector } from "@/components/preview-page-detector";

const dm = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MVPBlocks",
  description: "Copy, paste, customize—and launch your idea faster than ever. MVPBlocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS.",
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
    "Open Source"
  ],
  authors: [{ name: "Subhadeep Roy" }],
  creator: "Subhadeep Roy",
  publisher: "Subhadeep Roy",
  metadataBase: new URL("https://mvpblocks.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MVPBlocks",
    description: "Copy, paste, customize—and launch your idea faster than ever. MVPBlocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS.",
    url: "https://mvpblocks.vercel.app",
    siteName: "MVPBlocks",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "MVPBlocks - The Ultimate Open Source Component Library for MVPs"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVPBlocks",
    description: "Copy, paste, customize—and launch your idea faster than ever.",
    creator: "@mvp_Subha",
    images: ["/og.png"],
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
        <PreviewPageDetector />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
