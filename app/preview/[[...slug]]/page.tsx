import { ComponentLoader } from '@/components/preview/component-loader';
import { notFound } from 'next/navigation';
import { registry } from "@/registry";

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (!slug.length) return notFound();
  const componentName = slug.join('/');

  try {
    return (
      <section className="min-h-screen rounded-md" id="preview">
        <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden">
          <ComponentLoader
            name={componentName}
            hasReTrigger={false}
            classNameComponentContainer="min-h-screen"
            previewMode
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

export const dynamic = "force-static"