'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

interface DocsInstallationCardProps {
  light: string;
  dark: string;
  title: string;
  url: string;
}

export const DocsInstallationCard = ({
  light,
  dark,
  title,
  url,
}: DocsInstallationCardProps) => {
  const { theme } = useTheme();
  return (
    <>
      <Link
        prefetch={false}
        className="bg-secondary/50 group hover:text-foreground text-muted-foreground hover:bg-secondary/40 relative flex w-full flex-col items-center overflow-hidden rounded-xl p-6 no-underline transition-colors sm:p-10"
        href={url}
      >
        <div className="bg-primary/10 group-hover:bg-primary/30 absolute -top-10 left-0 h-16 w-full blur-2xl transition-all duration-500 ease-in-out group-hover:-top-6"></div>
        <Image
          src={theme === 'dark' || theme === undefined ? dark : light}
          alt={title}
          width={500}
          height={500}
          className="logoimg h-16 w-16"
        />
        <p className="simplep mt-2 font-medium">{title}</p>
      </Link>
    </>
  );
};
