import { registry } from '@/registry';
import { promises as fs } from 'fs';
import type { z } from 'zod';
import type { registryItemFileSchema } from '@/registry/schema';
import path from 'path';

const REGISTRY_BASE_PATH = process.cwd();
const PUBLIC_FOLDER_BASE_PATH = 'public/r';
const CLI_CONSTANTS_PATH = 'cli/src/constants.js';

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
      .replace(
        /from\s+['"]@\/components\/ui\/(.+)['"]/g,
        "from '@/components/ui/$1'",
      )
      .replace(
        /from\s+['"]@\/components\/mvpblocks\/(.+)['"]/g,
        "from '@/components/mvpblocks/$1'",
      )
      .replace(/from\s+['"]@\/lib\/(.+)['"]/g, "from '@/lib/$1'")
      .replace(/from\s+['"]@\/hooks\/(.+)['"]/g, "from '@/hooks/$1'");

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

// Function to update CLI constants with available components
const updateCliConstants = async (): Promise<boolean> => {
  console.log('🔄 Updating CLI constants...');

  // Get all component names from the registry
  const componentNames = registry.map((item) => item.name).sort();

  // Group components by type for better organization in comments
  const componentsByType: {
    ui: string[];
    block: string[];
    hook: string[];
    lib: string[];
    other: string[];
  } = {
    ui: [],
    block: [],
    hook: [],
    lib: [],
    other: [],
  };

  // Categorize components
  componentNames.forEach((name) => {
    const component = registry.find((item) => item.name === name);
    if (!component) return;

    if (component.type === 'registry:ui') {
      componentsByType.ui.push(name);
    } else if (component.type === 'registry:block') {
      componentsByType.block.push(name);
    } else if (component.type === 'registry:hook') {
      componentsByType.hook.push(name);
    } else if (component.type === 'registry:lib') {
      componentsByType.lib.push(name);
    } else {
      componentsByType.other.push(name);
    }
  });

  // Generate the constants file content
  const constantsContent = `// Auto-generated file - DO NOT EDIT MANUALLY
// This file is updated automatically by the build-registry script
// Run 'bun run build:registry' to update this file

export const AVAILABLE_COMPONENTS = [
${componentsByType.ui.length > 0 ? `  // UI Components (${componentsByType.ui.length} items)\n  ${componentsByType.ui.map((name) => `'${name}'`).join(', ')},\n` : ''}${componentsByType.block.length > 0 ? `  \n  // Block Components (${componentsByType.block.length} items)\n  ${componentsByType.block.map((name) => `'${name}'`).join(', ')},\n` : ''}${componentsByType.hook.length > 0 ? `  \n  // Hooks (${componentsByType.hook.length} items)\n  ${componentsByType.hook.map((name) => `'${name}'`).join(', ')},\n` : ''}${componentsByType.lib.length > 0 ? `  \n  // Utils/Lib (${componentsByType.lib.length} items)\n  ${componentsByType.lib.map((name) => `'${name}'`).join(', ')},\n` : ''}${componentsByType.other.length > 0 ? `  \n  // Other Components (${componentsByType.other.length} items)\n  ${componentsByType.other.map((name) => `'${name}'`).join(', ')}\n` : ''}];

// Registry metadata
export const REGISTRY_METADATA = {
  totalComponents: ${componentNames.length},
  uiComponents: ${componentsByType.ui.length},
  blockComponents: ${componentsByType.block.length},
  hooks: ${componentsByType.hook.length},
  utils: ${componentsByType.lib.length},
  other: ${componentsByType.other.length},
  lastUpdated: '${new Date().toISOString()}'
};

// Legacy export for backward compatibility
export const REGISTRY_LAST_UPDATED = REGISTRY_METADATA.lastUpdated;
`;

  // Write the constants file
  const hasChanged = await shouldWriteFile(
    CLI_CONSTANTS_PATH,
    constantsContent,
  );
  if (hasChanged) {
    await writeFileRecursive(CLI_CONSTANTS_PATH, constantsContent);
    console.log(
      `✅ Updated CLI constants with ${componentNames.length} components`,
    );
    return true;
  } else {
    console.log('✅ CLI constants are already up to date');
    return false;
  }
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
  .then(async (changes: number) => {
    // Update CLI constants after building the registry
    const cliUpdated = await updateCliConstants();

    if (changes > 0 || cliUpdated) {
      console.log(
        `✅ Done - Updated ${changes} registry file(s)${cliUpdated ? ' and CLI constants' : ''}`,
      );
    } else {
      console.log('✅ Done - No changes needed');
    }
  })
  .catch((err: any) => {
    console.error(err);
  });
