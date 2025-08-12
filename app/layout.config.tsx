import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookA, Film, Home } from 'lucide-react';

export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/subhadeeproy3902/mvpblocks',
  nav: {
    title: (
      <div className="flex items-center justify-center gap-2">
        <img src="https://res.cloudinary.com/dtyc0ob4r/image/upload/v1754994617/logo_bkqfei.webp" alt="logo" className="h-8 w-8 rounded-full" />
        <span className="bg-primary from-foreground to-primary via-rose-200 bg-clip-text text-2xl font-semibold text-transparent md:text-xl dark:bg-gradient-to-b">
          Mvpblocks
        </span>
      </div>
    ),
    transparentMode: 'top',
  },

  links: [
    {
      text: 'Home',
      url: '/',
      active: 'nested-url',
      icon: <Home />,
    },
    {
      text: 'About',
      url: '/about',
      active: 'nested-url',
      icon: <BookA />,
    },
    {
      text: 'Showcase',
      url: '/showcase',
      active: 'nested-url',
      icon: <Film />,
    },
  ],
};
