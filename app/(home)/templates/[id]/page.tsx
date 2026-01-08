import { products } from '@/constants/templates';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { bricolage } from '@/lib/fonts';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Product not found',
    };
  }

  return {
    title: product.name + ' - Aurasites',
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="relative mb-32 flex min-h-screen flex-col items-center justify-end overflow-hidden pt-20">
      <video
        width={1400}
        height={900}
        autoPlay
        muted
        preload="auto"
        className="pointer-events-none absolute inset-0 size-full object-cover object-center select-none"
      >
        <source src={product.video} type="video/webm" />
      </video>
      <div className="to-background pointer-events-none absolute inset-0 size-full bg-linear-to-b from-black via-transparent to-95% select-none"></div>

      {/* <div className="absolute top-0 left-1/4 w-125 h-125 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-150 h-150 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" /> */}

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-4 lg:px-12">
        <div className="relative grid gap-6 lg:grid-cols-2 lg:gap-24">
          <div className="z-20 flex flex-col items-start justify-start gap-2 md:gap-4">
            {/* Title */}
            <h1
              className={cn(
                bricolage.className,
                'text-5xl tracking-tighter text-white uppercase md:text-8xl',
              )}
            >
              {product.name.split(' ')[0]}
            </h1>

            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <div className="h-4 w-4 rounded-full bg-linear-to-br from-yellow-500 via-pink-500 to-indigo-500" />
              <span className="text-xs font-bold tracking-wider text-white/70 uppercase">
                Made for {product.source}
              </span>
            </div>
          </div>

          <div className="animate-fade-in-up z-20 space-y-4 delay-300">
            {/* Actions */}
            <div className="animate-fade-in-up flex flex-wrap gap-4 delay-200">
              <Button
                asChild
                variant="outline"
                className="h-auto rounded-full border-white/10 bg-transparent text-xs font-bold tracking-widest uppercase backdrop-blur-sm transition-all hover:bg-white/10 sm:px-8 sm:py-4"
              >
                <a target="_blank" href={product.previewLink}>
                  Preview
                </a>
              </Button>
              <Button
                asChild
                className="h-auto rounded-full bg-white text-xs font-bold tracking-widest text-black uppercase transition-all hover:bg-zinc-200 sm:px-8 sm:py-4"
              >
                <a target="_blank" href={product.buyLink}>
                  Get the remix link
                </a>
              </Button>
            </div>
            <p className="max-w-lg pb-6 text-sm text-white/50 sm:text-lg lg:ml-auto lg:text-xl">
              {product.description}
            </p>
          </div>
        </div>
      </main>

      {/* Decorative dots/stars */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/3 h-1.5 w-1.5 rounded-full bg-white opacity-40 blur-[1px]" />
        <div className="absolute top-1/2 right-1/4 h-1 w-1 rounded-full bg-blue-400 opacity-60 blur-[1px]" />
        <div className="absolute bottom-1/3 left-1/5 h-2 w-2 rounded-full bg-purple-400 opacity-20" />
        <div className="absolute top-2/3 right-1/3 h-1 w-1 rounded-full bg-yellow-200 opacity-40" />
      </div>
    </div>
  );
}