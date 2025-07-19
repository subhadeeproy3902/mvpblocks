import { MoveRight, X } from 'lucide-react';
import Link from 'next/link';
import { set } from 'zod';
import { Button } from './ui/button';

export default function Advertisement({
  setShow,
}: {
  setShow: (show: boolean) => void;
}) {
  return (
    <div className="bg-background/70 fixed inset-0 z-[1000] flex items-center justify-center backdrop-blur-sm">
      <div className="bg-background/80 relative w-[95%] max-w-2xl overflow-hidden rounded-2xl border shadow-2xl">
        <div className="bg-primary/30 absolute -top-10 left-0 h-16 w-full blur-2xl"></div>
        <div className="bg-primary/20 absolute right-0 -bottom-10 h-20 w-full blur-3xl"></div>

        <button
          onClick={() => {
            setShow(false);
          }}
          className="bg-background/50 hover:bg-background/70 focus:ring-primary/50 absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition focus:ring-2 focus:outline-none"
        >
          <X className="text-foreground h-4 w-4" />
        </button>

        <div className="flex flex-col gap-8 px-8 py-12 sm:px-16 sm:py-16">
          <h2 className="bg-primary from-foreground to-primary via-rose-200 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent sm:text-3xl dark:bg-gradient-to-b">
            Wanna bag up an aesthetic portfolio at a steal?
          </h2>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            <img
              src="/developer-portfolio.png"
              alt="Template preview"
              width={300}
              height={300}
              className="max-w-xs rounded-lg object-cover"
            />

            <div className="space-y-2 text-center sm:text-left">
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                Developer Portfolio
              </p>
              <p className="text-sm text-neutral-400">
                🔥 Only $5... ONLYYYY! (₹439 INR) The CHEAPEST Next.js Portfolio
                Template You’ll Ever Find!
              </p>
              <p className="text-3xl font-semibold tracking-tight">
                <span className="text-primary">$5</span>{' '}
                <span className="text-sm text-neutral-400">(₹439 INR)</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/docs/developer-portfolio">
              <Button className="rounded-lg cursor-pointer">
                Explore Docs
                <MoveRight className="ml-2 inline-block h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
