import { registry } from '@/registry';
import { readFile } from 'fs/promises';
import { join } from 'path';
import type { GetCodeResponse, GetCodeErrorResponse } from '@/types/api/get-code';

export async function getCodeLogic(name: string | null): Promise<GetCodeResponse | GetCodeErrorResponse> {
  if (!name) {
    return { error: 'Component name is required' };
  }

  // First, try to load from the public JSON files which contain the full content
  try {
    const jsonPath = join(process.cwd(), 'public', 'r', `${name}.json`);
    const jsonContent = await readFile(jsonPath, 'utf-8');
    const componentData = JSON.parse(jsonContent);

    // Extract code from the first file with content
    const mainFile = componentData.files?.find((file: any) => file.content) || componentData.files?.[0];
    const code = mainFile?.content || '';

    return {
      code,
      registryDependencies: componentData.registryDependencies || [],
      dependencies: componentData.dependencies || []
    };
  } catch (jsonError) {
    // If JSON file doesn't exist, fall back to registry
    const component = registry.find((item) => item.name === name);

    if (!component) {
      return { error: `Component with name '${name}' not found` };
    }

    // Try to read the actual component file from the file system
    let code = '';
    if (component.files?.[0]?.path) {
      try {
        const filePath = component.files[0].path.replace('@/', '');
        const fullPath = join(process.cwd(), filePath);
        code = await readFile(fullPath, 'utf-8');
      } catch (fileError) {
        console.warn(`Could not read file for component ${name}:`, fileError);
        code = component.files[0].content || '';
      }
    }

    return {
      code,
      registryDependencies: component.registryDependencies || [],
      dependencies: component.dependencies || []
    };
  }
}
