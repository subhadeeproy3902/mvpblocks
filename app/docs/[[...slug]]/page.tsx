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
// import { getGithubLastEdit } from "fumadocs-core/server";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Callout } from "fumadocs-ui/components/callout";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { type ComponentProps, type FC } from "react";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { metadataImage } from "@/lib/metadata-image";
import { EditIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  console.log(page);

  const MDX = page.data.body;

  // const time = await getGithubLastEdit({
  //   owner: "subhadeeproy3902",
  //   repo: "mvpblocks",
  //   path: `content/docs/${page.file.path}`,
  // });

  const path = `content/docs/${page.file.path}`;

  const footer = (
    <a
      href={`https://github.com/subhadeeproy3902/mvpblocks/blob/main/${path}`}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        buttonVariants({
          variant: "secondary",
          size: "sm",
          className: "gap-1.5 text-xs",
        }),
      )}
    >
      <EditIcon className="size-3" />
      Edit on Github
    </a>
  );

  const { AutoTypeTable } = createTypeTable();

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={
        page.url === "/docs/categories"
          ? undefined
          : params.slug &&
              (params.slug[1] == "loaders" || params.slug[1] == "buttons")
            ? undefined
            : {
                footer,
                single: false,
                style: "clerk",
              }
      }
      breadcrumb={{
        full: true,
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
            blockquote: Callout as unknown as FC<ComponentProps<"blockquote">>,
            DocsCategory: ({ slugs = params.slug }: { slugs?: string[] }) => (
              <DocsCategory page={source.getPage(slugs)!} from={source} />
            ),
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
    page.data.description ?? "All your MVP blocks needs in one place!";

  return createMetadata(
    metadataImage.withImage(page.slugs, {
      title: page.data.title,
      description,
      openGraph: {
        url: `/docs/${page.slugs.join("/")}`,
      },
    }),
  );
}
