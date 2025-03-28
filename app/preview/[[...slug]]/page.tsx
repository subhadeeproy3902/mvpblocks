import { ComponentLoader } from "@/components/preview/component-loader";
import { Button } from "@/components/ui/button";
import { registry } from "@/registry";
import Link from "next/link";
import { notFound } from "next/navigation";

const NOT_CENTERED_COMPONENTS: string[] = [];

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (!slug.length) return notFound();
  const componentName = slug.join("/");

  try {
    const shouldNotCenter = NOT_CENTERED_COMPONENTS.some((component) =>
      componentName.startsWith(component),
    );

    return shouldNotCenter ? (
      <ComponentLoader name={componentName} hasReTrigger={false} />
    ) : (
      <>
        <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between gap-4 border-b border-neutral-800 p-4 shadow-md">
          <div>
            <Button asChild size="sm" variant="default">
              <Link href={`/docs`}>Back to Docs</Link>
            </Button>
          </div>

          <div className="grow-0">
            <p className="font-mono">{componentName}</p>
          </div>

          <p>Mvpblocks</p>
        </header>
        <div className="h-screen" style={{ height: "100vh" }}>
          <div className="container flex h-full items-center justify-center">
            <ComponentLoader name={componentName} hasReTrigger={false} />
          </div>
        </div>
      </>
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
