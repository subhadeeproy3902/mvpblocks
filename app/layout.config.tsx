
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { AlbumIcon, LayoutPanelTop } from 'lucide-react';
import Image from 'next/image';
 
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center justify-center gap-2 font-semibold text-sm">
        Mvpblocks
      </div>
    ),
    transparentMode: "top",
  },

  links: [
    {
      text: "Get Started",
      url: "/docs/get-started",
      active: "nested-url",
      icon: <AlbumIcon />,
    },
    {
      text: "Components",
      url: "/docs/application/animated-dock",
      active: "nested-url",
      icon: <LayoutPanelTop />,
    },
  ],
};
