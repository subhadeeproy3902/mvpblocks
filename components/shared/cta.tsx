import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center max-w-7xl mx-auto mb-24"
    >
      <div className="w-full">
        <div className="relative z-20 h-[400px] w-full overflow-hidden rounded-xl border border-border bg-primary shadow-xl md:h-[400px]">
          <img
            alt="Agent CTA Background"
            decoding="async"
            data-nimg="fill"
            className="absolute inset-0 h-full w-full object-cover object-right md:object-center"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: "0",
              top: "0",
              right: "0",
              bottom: "0",
              color: "transparent",
            }}
            sizes="100vw"
            src="/cta-bg.webp"
          />
          <div className="absolute inset-0 -top-32 flex flex-col items-center justify-center md:-top-40">
            <h1 className="max-w-xs text-4xl font-medium tracking-tighter bg-gradient-to-r from-zinc-200/60 via-zinc-50 to-zinc-200/60 text-transparent bg-clip-text text-center md:max-w-xl md:text-7xl">
            Build. Customize. Deploy Quickly.
            </h1>
            <div className="absolute bottom-16 flex flex-col items-center justify-center gap-2">
              <Link
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
