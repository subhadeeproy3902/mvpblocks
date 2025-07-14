import { registry } from '@/registry';
import { promises as fs } from 'fs';
import type { z } from 'zod';
import type { registryItemFileSchema } from '@/registry/schema';
import path from 'path';

const REGISTRY_BASE_PATH = process.cwd();
const PUBLIC_FOLDER_BASE_PATH = 'public/r';

/**
 * bun run ./scripts/build-registry.ts
 *
 */
type File = z.infer<typeof registryItemFileSchema>;

async function shouldWriteFile(
  filePath: string,
  newContent: string,
): Promise<boolean> {
  try {
    // Try to read existing file
    const existingContent = await fs.readFile(filePath, 'utf-8');
    // Only write if content is different
    return existingContent !== newContent;
  } catch {
    // If file doesn't exist, we should write it
    return true;
  }
}

async function writeFileRecursive(filePath: string, data: string) {
  const dir = path.dirname(filePath);

  try {
    // Check if we need to write the file
    if (await shouldWriteFile(filePath, data)) {
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(filePath, data, 'utf-8');
      console.log(`Updated ${filePath}`);
    }
  } catch (error) {
    console.error(`Error writing file ${filePath}`);
  }
}

const getComponentFiles = async (files: File[], registryType: string) => {
  const filesArrayPromises = (files ?? []).map(async (file) => {
    if (typeof file === 'string') {
      //@ts-ignore
      const normalizedPath = file.startsWith('/') ? file : `/${file}`;
      const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
      const fileContent = await fs.readFile(filePath, 'utf-8');

      const fileName = normalizedPath.split('/').pop() || '';

      return {
        type: registryType,
        content: fileContent,
        path: normalizedPath,
        target: `components/mvpblocks/${fileName}`,
      };
    }
    const normalizedPath = file.path.startsWith('/')
      ? file.path
      : `/${file.path}`.replace('@/', '');

    const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
    let fileContent = await fs.readFile(filePath, 'utf-8');

    const fileName = normalizedPath.split('/').pop() || '';

    const getTargetPath = (type: string) => {
      if (type === 'registry:ui') return `components/ui/${fileName}`;
      if (type === 'registry:hook') return `hooks/${fileName}`;
      if (type === 'registry:lib') return `lib/${fileName}`;
      return `components/mvpblocks/${fileName}`;
    };

    const fileType =
      typeof file === 'string' ? registryType : file.type || registryType;

    // Modify the import paths in the content
    fileContent = fileContent
      .replace(/@\/components\/ui\//g, '@/components/ui/')
      .replace(/@\/components\/mvpblocks\//g, '@/components/mvpblocks/')
      .replace(/@\/lib\//g, '@/lib/')
      .replace(/@\/hooks\//g, '@/hooks/');

    return {
      type: fileType,
      content: fileContent,
      path: normalizedPath,
      target:
        typeof file === 'string'
          ? getTargetPath(registryType)
          : file.target || getTargetPath(fileType),
    };
  });

  const filesArray = await Promise.all(filesArrayPromises);
  return filesArray;
};

const main = async () => {
  let changesCount = 0;

  for (let i = 0; i < registry.length; i++) {
    const component = { ...registry[i] };
    const files = component.files;
    delete component.component;
    if (!files) throw new Error('No files found for component');

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
    const hasChanged = await shouldWriteFile(jsonPath, json);
    if (hasChanged) {
      await writeFileRecursive(jsonPath, json);
      changesCount++;
    }
  }

  return changesCount;
};

main()
  .then((changes) => {
    if (changes > 0) {
      console.log(`✅ Done - Updated ${changes} registry file(s)`);
    } else {
      console.log('✅ Done - No changes needed');
    }
  })
  .catch((err) => {
    console.error(err);
  });