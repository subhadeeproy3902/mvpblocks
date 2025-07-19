import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function LiveDemo({
  url
}: {
  url: string;
}) {
  return (
    <Link
      href={url}
      className="inline-flex items-center no-underline justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-sm bg-foreground text-background hover:bg-foreground/90 "
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo <LinkIcon className="ml-2 h-4 w-4" />
    </Link>
  )
}