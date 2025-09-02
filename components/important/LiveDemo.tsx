import { LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function LiveDemo({ url }: { url: string }) {
  return (
    <Link
      prefetch={false}
      href={url}
      className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium no-underline shadow-sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo <LinkIcon className="ml-2 h-4 w-4" />
    </Link>
  );
}
