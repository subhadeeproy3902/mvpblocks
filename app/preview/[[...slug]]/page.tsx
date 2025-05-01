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
      <section className="min-h-screen rounded-md" id="preview">
        <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden">
          <ComponentLoader
            name={componentName}
            hasReTrigger={false}
            classNameComponentContainer="min-h-screen"
          />
        </div>
      </section>
    );
  } catch (error) {
    return notFound();
  }
}

export async function generateStaticParams() {
  const allComponents = registry.map((component) => {
    return { slug: [component.name] };
  });

  return allComponents;
}
