import { registry } from '@/registry';
import { promises as fs } from 'fs';
import type { z } from 'zod';
import type { registryItemFileSchema } from '@/registry/schema';
import path from 'path';

const REGISTRY_BASE_PATH = process.cwd();
const PUBLIC_FOLDER_BASE_PATH = 'public/r';

type File = z.infer<typeof registryItemFileSchema>;

async function shouldWriteFile(
  filePath: string,
  newContent: string,
): Promise<boolean> {
  try {
    const existingContent = await fs.readFile(filePath, 'utf-8');
    return existingContent !== newContent;
  } catch {
    return true;
  }
}

async function writeFileRecursive(filePath: string, data: string) {
  const dir = path.dirname(filePath);

  try {
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
    // Handle string file paths
    if (typeof file === 'string') {
      const normalizedPath = (file as string).startsWith('@/') 
        ? (file as string).replace('@/', '') 
        : file;
      const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const fileName = path.basename(normalizedPath);

      return {
        type: registryType,
        content: fileContent,
        path: normalizedPath,
        target: `components/mvpblocks/${fileName}`,
      };
    }

    // Handle file objects
    const normalizedPath = file.path.startsWith('@/')
      ? file.path.replace('@/', '')
      : file.path;
    const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const fileName = path.basename(normalizedPath);

    const getTargetPath = (type: string) => {
      if (type === 'registry:ui') return `components/ui/${fileName}`;
      if (type === 'registry:hook') return `hooks/${fileName}`;
      if (type === 'registry:lib') return `lib/${fileName}`;
      return `components/mvpblocks/${fileName}`;
    };

    const fileType = file.type || registryType;

    return {
      type: fileType,
      content: fileContent, // Don't modify the content
      path: normalizedPath,
      target: file.target || getTargetPath(fileType),
    };
  });

  return await Promise.all(filesArrayPromises);
};

const main = async () => {
  let changesCount = 0;

  for (const component of registry) {
    const { files, ...componentData } = component;
    if (!files) throw new Error('No files found for component');

    const filesArray = await getComponentFiles(files, componentData.type);
    const json = JSON.stringify(
      {
        ...componentData,
        files: filesArray,
      },
      null,
      2,
    );

    const jsonPath = path.join(PUBLIC_FOLDER_BASE_PATH, `${componentData.name}.json`);
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
    process.exit(1);
  });