'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="mx-auto mb-24 flex w-full max-w-7xl flex-col items-center justify-center">
      <div className="w-full">
        <div className="border-border bg-primary relative z-20 h-[400px] w-full overflow-hidden rounded-xl border shadow-xl md:h-[400px]">
          <Image
            fill
            alt="Agent CTA Background"
            className="absolute inset-0 object-cover object-right md:object-center"
            sizes="(max-width: 768px) 100vw, 1280px"
            src="https://i.postimg.cc/15qzD9gF/cta-bg.png"
          />
          <div className="absolute inset-0 -top-32 flex flex-col items-center justify-center md:-top-40">
            <h1 className="max-w-xs bg-gradient-to-r from-zinc-200/60 via-zinc-50 to-zinc-200/60 bg-clip-text text-center text-4xl font-medium tracking-tighter text-transparent md:max-w-xl md:text-7xl">
              Build. Customize. Deploy Quickly.
            </h1>
            <div className="absolute bottom-16 flex flex-col items-center justify-center gap-2">
              <Link
                prefetch={false}
                className="flex h-10 w-fit items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-black shadow-md"
                href="/docs/introduction"
              >
                Start with Mvpblocks Today
              </Link>
              <span className="text-sm text-white">
                Built to keep you hooked.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
