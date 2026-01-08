// source.config.ts
import {
  defineDocs,
  defineConfig,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { remarkInstall } from "fumadocs-docgen";
import remarkGfm from "remark-gfm";
import { z } from "zod";
var { docs, meta } = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      new: z.boolean().default(false),
      pro: z.boolean().default(false),
      updated: z.boolean().default(false)
    })
  }
});
var source_config_default = defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    remarkPlugins: [remarkInstall, remarkGfm]
  }
});
export {
  source_config_default as default,
  docs,
  meta
};
