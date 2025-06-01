import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
  DocsCategory,
} from "fumadocs-ui/page";
import { notFound, redirect } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { createTypeTable } from "fumadocs-typescript/ui";
import { getLastModified } from "@/lib/github";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Callout } from "fumadocs-ui/components/callout";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { type ComponentProps, type FC } from "react";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { metadataImage } from "@/lib/metadata-image";
import { EditIcon, AlertCircle, Lightbulb } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Script from "next/script";
import { siteConfig } from "@/config/site";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) redirect("/docs/introduction");
  const MDX = page.data.body;

  const path = `content/docs/${page.file.path}`;
  const lastModified = await getLastModified(page);

  const footer = (
    <div className="flex flex-col space-y-2">
      <h3 className="mb-1 font-medium">Contribute</h3>
      <div className="flex flex-col space-y-2">
        <a
          href={`https://github.com/subhadeeproy3902/mvpblocks/issues/new?labels=bug&template=bug_report.md&title=[bug]:+${encodeURIComponent(`/docs/${params.slug?.join("/") || ""}`)}&body=${encodeURIComponent(`**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '${siteConfig.url}/docs/${params.slug?.join("/") || ""}'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.`)}`}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <AlertCircle className="size-4" />
          Report an issue
        </a>
        <a
          href={`https://github.com/subhadeeproy3902/mvpblocks/issues/new?labels=enhancement&template=feature_request.md&title=[feat]:+New+feature+request&body=${encodeURIComponent(`**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.`)}`}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Lightbulb className="size-4" />
          Request a feature
        </a>
        <a
          href={`https://github.com/subhadeeproy3902/mvpblocks/blob/main/${path}`}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <EditIcon className="size-4" />
          Edit this page
        </a>
      </div>
    </div>
  );

  const { AutoTypeTable } = createTypeTable();

  const breadcrumbItems = [{ name: "Home", url: siteConfig.url }];

  if (params.slug) {
    let currentPath = "/docs";
    breadcrumbItems.push({
      name: "Documentation",
      url: `${siteConfig.url}${currentPath}`,
    });

    for (let i = 0; i < params.slug.length; i++) {
      currentPath += `/${params.slug[i]}`;
      const pageAtPath = source.getPage(params.slug.slice(0, i + 1));
      if (pageAtPath) {
        breadcrumbItems.push({
          name: pageAtPath.data.title,
          url: `${siteConfig.url}${currentPath}`,
        });
      }
    }
  }

  return (
    <>
      <Script id="breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        })}
      </Script>
      <DocsPage
        article={{
          className: "max-w-6xl max-sm:pb-16",
        }}
        toc={page.data.toc}
        full={page.data.full}
        tableOfContent={{
          footer,
          single: false,
          style: "clerk",
        }}
        breadcrumb={{
          full: true,
        }}
        lastUpdate={lastModified ? new Date(lastModified) : undefined}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDX
            components={{
              ...defaultMdxComponents,
              ...((await import("lucide-react")) as unknown as MDXComponents),
              Tabs,
              Tab,
              TypeTable,
              AutoTypeTable,
              Accordion,
              a: ({ href, ...props }) => {
                return (
                  // Primary color not underlined
                  <a
                    href={href}
                    className="text-primary no-underline"
                    {...props}
                  />
                );
              },
              Accordions,
              File,
              Folder,
              Files,
              blockquote: Callout as unknown as FC<
                ComponentProps<"blockquote">
              >,
              DocsCategory: ({ slugs = params.slug }: { slugs?: string[] }) => (
                <DocsCategory page={source.getPage(slugs)!} from={source} />
              ),
            }}
          />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const description =
    page.data.description ?? "All your MVP blocks needs in one place!";

  return createMetadata(
    metadataImage.withImage(page.slugs, {
      title: page.data.title,
      description,
      alternates: {
        canonical: `https://blocks.mvp-subha.me/docs/${page.slugs.join("/")}`,
      },
      openGraph: {
        url: `/docs/${page.slugs.join("/")}`,
      },
    }),
  );
}
