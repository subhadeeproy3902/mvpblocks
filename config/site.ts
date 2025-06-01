export const siteLink =
  process.env.NODE_ENV !== 'development'
    ? 'https://blocks.mvp-subha.me'
    : 'http://localhost:3000';
export const siteName = 'MVPBlocks';
export const launched = true;
export const siteConfig = {
  name: 'MVPBlocks',
  url: 'https://blocks.mvp-subha.me',
  ogImage: 'https://i.postimg.cc/Wz9JFxdW/mvpblocksog.png',
  description:
    'Copy, paste, customize—and launch your idea faster than ever. MVPBlocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS.',
  links: {
    twitter: 'https://x.com/mvp_Subha',
    github: 'https://github.com/subhadeeproy3902/mvpblocks',
  },
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
    'UI Components',
    'Web Development',
    'Frontend',
    'Developer Tools',
  ],
  author: {
    name: 'Subhadeep Roy',
    url: 'https://github.com/subhadeeproy3902',
  },
  creator: 'MVPBlocks',
  publisher: 'MVPBlocks',
  locale: 'en-US',
  category: 'technology',
};

export type SiteConfig = typeof siteConfig;
