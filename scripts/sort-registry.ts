import fs from "fs";
import path from "path";
import { blocks } from "@/registry/registry-blocks";

// Sort the blocks alphabetically by name
const sortedBlocks = [...blocks].sort((a, b) => a.name.localeCompare(b.name));

// Generate the new file content
const newFileContent = `import type { Registry } from "@/registry/schema";
import * as React from "react";

export const blocks: Registry = [
${sortedBlocks
  .map((block) => {
    const componentPath = (block.files?.[0]?.path ?? "")
      .replace("@", "..")
      .replace(/\.tsx$/, "");
    return `  {
    name: "${block.name}",
    type: "${block.type}",
    dependencies: ${JSON.stringify(block.dependencies)},
    registryDependencies: ${block.registryDependencies ? JSON.stringify(block.registryDependencies) : "[]"},
    files: [
      {
        path: "${block.files?.[0]?.path ?? ""}",
        type: "${block.files?.[0]?.type ?? ""}",
      },
    ],
    component: React.lazy(
      () => import("${componentPath}"),
    ),
  }`;
  })
  .join(",\n")}
];`;

// Write to the file
const registryFilePath = path.join(__dirname, "../registry/registry-blocks.ts");
fs.writeFileSync(registryFilePath, newFileContent);

console.log("Successfully sorted blocks in registry-blocks.ts");
