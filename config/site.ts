export const siteLink =
  process.env.NODE_ENV !== "development"
    ? "https://blocks.mvp-subha.me"
    : "http://localhost:3000";

export const siteName = "MVPBlocks";
export const launched = true;
export const v4 = false;

export const siteConfig = {
  name: "MVPBlocks",
  url: "https://blocks.mvp-subha.me",

  ogImage: "https://i.postimg.cc/Wz9JFxdW/mvpblocksog.webp",

  description:
    "Copy, paste, customize—and launch your idea faster than ever. MVPBlocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS.",

  links: {
    twitter: "https://x.com/mvp_Subha",
    github: "https://github.com/subhadeeproy3902/mvpblocks",
  },

  keywords: [
    "MVPBlocks",
    "MVP Blocks",
    "UI blocks",
    "React UI components",
    "Next.js components",
    "Tailwind CSS components",
    "shadcn ui blocks",
    "shadcn components",
    "Tailwind CSS templates",
    "Next.js templates",
    "React component library",
    "open source UI library",
    "free UI components",
    "free React templates",
    "landing page components",
    "SaaS landing page template",
    "developer portfolio template",
    "designer portfolio template",
    "AI SaaS template",
    "MVP template",
    "MVP starter kit",
    "copy paste components",
    "Framer Motion components",
    "animated UI components",
    "responsive UI components",
    "accessible React components",
    "TypeScript components",
    "frontend development",
    "developer tools",
    "indie hackers",
    "build MVP fast",
    "ship startup faster",
  ],

  author: {
    name: "Subhadeep Roy",
    url: "https://github.com/subhadeeproy3902",
  },

  creator: "MVPBlocks",
  publisher: "MVPBlocks",

  locale: "en-US",
  category: "technology",

  twitter: {
    handle: "@mvp_Subha",
    site: "@mvp_Subha",
    card: "summary_large_image",
  },

  openGraph: {
    type: "website",
    siteName: "MVPBlocks",
    title: "MVPBlocks",
    description:
      "Copy, paste, customize—and launch your idea faster than ever. MVPBlocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS.",
    url: "https://blocks.mvp-subha.me",
    images: [
      {
        url: "https://i.postimg.cc/Wz9JFxdW/mvpblocksog.webp",
        width: 1200,
        height: 630,
        alt: "MVPBlocks Open Graph Image",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
