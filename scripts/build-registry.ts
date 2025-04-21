import { registry } from "@/registry";
import { promises as fs } from "fs";
import type { z } from "zod";
import type { registryItemFileSchema } from "@/registry/schema";
import path from "path";

const REGISTRY_BASE_PATH = process.cwd();
const PUBLIC_FOLDER_BASE_PATH = "public/r";

/**
 * bun run ./scripts/build-registry.ts
 *
 */
type File = z.infer<typeof registryItemFileSchema>;

async function writeFileRecursive(filePath: string, data: string) {
  const dir = path.dirname(filePath);

  try {
    await fs.mkdir(dir, { recursive: true });

    await fs.writeFile(filePath, data, "utf-8");
    // console.log(`File written to ${filePath}`);
  } catch (error) {
    console.error(`Error writing file ${filePath}`);
  }
}

const getComponentFiles = async (files: File[], registryType: string) => {
  const filesArrayPromises = (files ?? []).map(async (file) => {
    if (typeof file === "string") {
      //@ts-ignore
      const normalizedPath = file.startsWith("/") ? file : `/${file}`;
      const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
      const fileContent = await fs.readFile(filePath, "utf-8");

      const fileName = normalizedPath.split("/").pop() || "";

      return {
        type: registryType,
        content: fileContent,
        path: normalizedPath,
        target: `/components/mvpblocks/${fileName}`,
      };
    }
    const normalizedPath = file.path.startsWith("/")
      ? file.path
      : `/${file.path}`.replace("@/", "");

    const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
    const fileContent = await fs.readFile(filePath, "utf-8");

    const fileName = normalizedPath.split("/").pop() || "";

    const getTargetPath = (type: string) => {
      if (type === "registry:ui") return `/components/ui/${fileName}`;
      if (type === "registry:hook") return `/hooks/${fileName}`;
      if (type === "registry:lib") return `/lib/${fileName}`;
      return `/components/mvpblocks/${fileName}`;
    };

    const fileType =
      typeof file === "string" ? registryType : file.type || registryType;

    // Modify the import paths in the content
    let modifiedContent = fileContent;
    if (fileContent.includes("@/components/mvpblocks/")) {
      modifiedContent = fileContent.replace(
        /@\/components\/mvpblocks\/.*?([^/]+)$/gm,
        "@/components/mvpblocks/$1",
      );
    }

    return {
      type: fileType,
      content: modifiedContent,
      path: normalizedPath,
      target:
        typeof file === "string"
          ? getTargetPath(registryType)
          : file.target || getTargetPath(fileType),
    };
  });

  const filesArray = await Promise.all(filesArrayPromises);
  return filesArray;
};

const main = async () => {
  for (let i = 0; i < registry.length; i++) {
    const component = registry[i];
    const files = component.files;
    delete component.component; // Delete `component` property since not needed in the public registry
    if (!files) throw new Error("No files found for component");

    const filesArray = await getComponentFiles(files, component.type);

    const json = JSON.stringify(
      {
        ...component,
        files: filesArray,
      },
      null,
      2,
    );
    const jsonPath = `${PUBLIC_FOLDER_BASE_PATH}/${component.name}.json`;
    await writeFileRecursive(jsonPath, json);
  }
};

main()
  .then(() => {
    console.log("✅ Done - Registry built");
  })
  .catch((err) => {
    console.error(err);
  });
