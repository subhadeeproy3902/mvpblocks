import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...baseOptions}
  tree={source.pageTree}
  sidebar={{
    defaultOpenLevel: 1,
    tabs: {
      transform(option, node) {
        const meta = source.getNodeMeta(node);
        if (!meta) return option;

        return {
          ...option,
          icon: (
            <div
              className="rounded-md border bg-gradient-to-t from-fd-background/80 p-1 shadow-md [&_svg]:size-5"
              style={{
                color: `hsl(var(--${meta.file.dirname}-color))`,
                backgroundColor: `hsl(var(--${meta.file.dirname}-color)/.3)`,
              }}
            >
              {node.icon}
            </div>
          ),
        };
      },
    },
  }}>{children}</DocsLayout>;
}