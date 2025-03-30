import { ComponentLoader } from "@/components/preview/component-loader";
import { registry } from "@/registry";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (!slug.length) return notFound();
  const componentName = slug.join("/");

  try {
    return (
      <section className="min-h-screen rounded-md">
        <Link
          className="absolute left-4 top-4 z-50 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          href="/docs/introduction"
        >
          Docs <ArrowRight className="h-4 w-4" />
        </Link>
        <div className="w-full h-screen">
          <ComponentLoader name={componentName} hasReTrigger={false} />
        </div>
      </section>
    );
  } catch (error) {
    console.error("error", error);
    return notFound();
  }
}

export async function generateStaticParams() {
  const allComponents = registry.map((component) => {
    return { slug: [component.name] };
  });

  return allComponents;
}
