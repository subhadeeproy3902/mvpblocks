import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
  pageTree: {
    attachFile(node, file) {
      if (!file) return node;

      const data = file.data as {
        new: boolean;
        pro: boolean;
        updated: boolean;
      };

      if (data.new)
        node.name = (
          <>
            {node.name}
            <span className="py-0.2 border-primary bg-primary mx-[5px] ml-1 rounded-md border px-2 text-xs text-white">
              New
            </span>
          </>
        );
      else if (data.pro)
        node.name = (
          <>
            {node.name}
            <span className="py-0.2 mx-[5px] ml-1 rounded-md border border-yellow-600 bg-yellow-600 px-2 text-xs text-white">
              Pro
            </span>
          </>
        );
      else if (data.updated)
        node.name = (
          <>
            {node.name}
            <span className="py-0.2 mx-[5px] ml-1 rounded-md border border-green-500 bg-green-500 px-2 text-xs text-white">
              Updated
            </span>
          </>
        );

      return node;
    },
  },
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
});
