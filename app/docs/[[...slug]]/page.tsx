import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
  DocsCategory,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { createTypeTable } from "fumadocs-typescript/ui";
import { UiOverview } from "@/components/ui-overview";
// import { getGithubLastEdit } from "fumadocs-core/server";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Callout } from "fumadocs-ui/components/callout";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { type ComponentProps, type FC } from "react";
import type { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata";
import { metadataImage } from "@/lib/metadata-image";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDX = page.data.body;

  // const time = await getGithubLastEdit({
  //   owner: "subhadeeproy3902",
  //   repo: "mvpblocks",
  //   path: `content/docs/${page.file.path}`,
  // });

  const { AutoTypeTable } = createTypeTable();

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
        single: false,
      }}
      breadcrumb={{
        full: true,
      }}
      footer={{
        enabled: true,
      }}
      editOnGithub={{
        owner: "subhadeeproy3902",
        repo: "mvpblocks",
        sha: "master",
        path: `content/docs/${page.file.path}`,
      }}
      article={{
        className: "max-sm:pb-16",
      }}
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
            Accordions,
            File,
            Folder,
            Files,
            blockquote: Callout as unknown as FC<ComponentProps<"blockquote">>,
            DocsCategory: ({ slugs = params.slug }: { slugs?: string[] }) => (
              <DocsCategory page={source.getPage(slugs)!} from={source} />
            ),
            UiOverview,
          }}
        />
      </DocsBody>
    </DocsPage>
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
    page.data.description ?? 'All your MVP blocks needs in one place!';

  return createMetadata(
    metadataImage.withImage(page.slugs, {
      title: page.data.title,
      description,
      openGraph: {
        url: `/docs/${page.slugs.join('/')}`,
      },
    }),
  );
}