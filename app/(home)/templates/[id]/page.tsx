import { products } from "@/constants/templates";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { bricolage } from "@/lib/fonts";

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
      title: "Product not found",
    };
  }

  return {
    title: product.name + " - Aurasites",
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
    <div className="min-h-screen overflow-hidden relative pt-20 flex flex-col justify-end items-center mb-32">
      <video width={1400}
        height={900} autoPlay muted preload="auto" className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none">
        <source src={product.video} type="video/webm" />
      </video>
      <div className="absolute inset-0 size-full bg-linear-to-b from-black via-transparent to-background to-95% pointer-events-none select-none"></div>

      {/* <div className="absolute top-0 left-1/4 w-125 h-125 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-150 h-150 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" /> */}

      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-24 relative">
          <div className="flex flex-col gap-2 md:gap-4 items-start justify-start z-20">
            {/* Title */}
            <h1
              className={cn(
                bricolage.className,
                "text-5xl md:text-8xl tracking-tighter text-white uppercase"
              )}
            >
              {product.name.split(" ")[0]}
            </h1>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 animate-fade-in-up">
              <div className="w-4 h-4 rounded-full bg-linear-to-br from-yellow-500 via-pink-500 to-indigo-500" />
              <span className="text-xs font-bold tracking-wider text-white/70 uppercase">
                Made for {product.source}
              </span>
            </div>
          </div>

          <div className="space-y-4 z-20 animate-fade-in-up delay-300">
            {/* Actions */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-200">
              <Button
                asChild
                variant="outline"
                className="rounded-full sm:px-8 sm:py-4 h-auto text-xs font-bold tracking-widest  border-white/10 hover:bg-white/10 transition-all uppercase bg-transparent backdrop-blur-sm"
              >
                <a target="_blank" href={product.previewLink}>
                  Preview
                </a>
              </Button>
              <Button
                asChild
                className="rounded-full sm:px-8 sm:py-4 h-auto text-xs font-bold tracking-widest  bg-white text-black hover:bg-zinc-200 transition-all uppercase"
              >
                <a target="_blank" href={product.buyLink}>
                  Get the remix link
                </a>
              </Button>
            </div>
            <p className="text-sm sm:text-lg lg:text-xl text-white/50 max-w-lg lg:ml-auto pb-6">
              {product.description}
            </p>
          </div>
        </div>
      </main>

      {/* Decorative dots/stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-40 blur-[1px]" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-60 blur-[1px]" />
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-purple-400 rounded-full opacity-20" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-yellow-200 rounded-full opacity-40" />
      </div>
    </div>
  );
}