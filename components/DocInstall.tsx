'use client';

import { useTheme } from 'next-themes';
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
        className="bg-secondary/50 group overflow-hidden hover:text-foreground text-muted-foreground hover:bg-secondary/40 relative flex w-full flex-col items-center rounded-xl p-6 no-underline transition-colors sm:p-10"
        href={url}
      >
        <div className="bg-primary/10 absolute group-hover:bg-primary/30 group-hover:-top-6 transition-all duration-500 ease-in-out -top-10 left-0 h-16 w-full blur-2xl"></div>
        <img
          src={theme === 'dark' || theme === undefined ? dark : light}
          alt={title}
          className="w-16 h-16 logoimg"
        />
        <p
          className="mt-2 font-medium simplep"
        >
          {title}
        </p>
      </Link>
    </>
  );
};
