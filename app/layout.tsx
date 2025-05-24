import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "./scrollbar.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PreviewPageDetector } from "@/components/preview-page-detector";
import { Toaster } from "@/components/ui/sonner";
import Clarity from "@/components/Clarity";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const dm = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MVPBlocks",
  description:
    "Copy, paste, customize—and launch your idea faster than ever. MVPBlocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS.",
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
  alternates: {
    canonical: "https://blocks.mvp-subha.me",
  },
  openGraph: {
    title: "MVPBlocks",
    description:
      "Copy, paste, customize—and launch your idea faster than ever. MVPBlocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS.",
    url: "https://blocks.mvp-subha.me",
    siteName: "MVPBlocks",
    images: [
      {
        url: "https://i.postimg.cc/Wz9JFxdW/mvpblocksog.png",
        width: 1200,
        height: 630,
        alt: "MVPBlocks - The Ultimate Open Source Component Library for MVPs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVPBlocks",
    description:
      "Copy, paste, customize—and launch your idea faster than ever.",
    creator: "@mvp_Subha",
    images: ["https://i.postimg.cc/Wz9JFxdW/mvpblocksog.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      <head />
      <body className={`${dm.className}`}>
        {process.env.NODE_ENV === "production" ? <Clarity /> : null}
        {process.env.NODE_ENV === "production" ? <GoogleAnalytics /> : null}
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
        <SpeedInsights />
      </body>
    </html>
  );
}
