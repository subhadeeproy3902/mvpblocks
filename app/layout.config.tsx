import { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { AlbumIcon, Heart, LayoutPanelTop, LayoutTemplate } from "lucide-react";
import { type LinkItemType } from "fumadocs-ui/layouts/docs";
import Image from "next/image";

export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/subhadeeproy3902/mvpblocks",
  nav: {
    title: (
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/logo.webp"
          alt="logo"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full"
        />
        <span className="bg-primary from-foreground via-rose-200 to-primary bg-clip-text text-2xl font-semibold text-transparent dark:bg-gradient-to-b md:text-xl">
          Mvpblocks
        </span>
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
