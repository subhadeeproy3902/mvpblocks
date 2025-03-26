import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import type { ReactNode } from "react";
import { RootProvider } from "fumadocs-ui/provider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <DocsLayout
        {...baseOptions}
        // the position of navbar
        nav={{ ...baseOptions.nav }}
        tree={source.pageTree}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
