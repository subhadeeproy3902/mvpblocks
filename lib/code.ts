import { getComponentByName } from '@/registry';
import '../registry/';

// Check if we're in a Node.js environment (not edge runtime)
function isNodeEnvironment(): boolean {
  return (
    typeof window === 'undefined' &&
    typeof process !== 'undefined' &&
    !!process.versions &&
    !!process.versions.node &&
    process.env.NEXT_RUNTIME !== 'edge'
  );
}

// Dynamic import for Node.js modules to avoid edge runtime issues
async function readFileContent(filePath: string): Promise<string> {
  // Only attempt file reading in Node.js environment
  if (isNodeEnvironment()) {
    try {
      // Use eval to prevent bundlers from including these modules in edge runtime
      const fs = eval('require("fs").promises');
      const path = eval('require("path")');

      const basePath = process.cwd();
      const sanitizedFilePath = filePath.replace(/^@\//, '').replace(/^@/, '');
      const fullPath = path.join(basePath, sanitizedFilePath);

      return await fs.readFile(fullPath, 'utf8');
    } catch (error) {
      throw new Error(
        `Failed to read file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  } else {
    // In edge/browser environment, return a placeholder
    return `// Source code not available in this environment
// Component: ${filePath}
// This is likely running in edge runtime where file system access is not available`;
  }
}

export async function extractSourceCode(
  componentName: string,
): Promise<{ code: string }> {
  try {
    const component = getComponentByName(componentName);

    if (!component) {
      const errorMsg = '// Component not found in registry';
      return {
        code: errorMsg,
      };
    }

    if (!component.files || component.files.length === 0) {
      const errorMsg = '// No source files defined for this component';
      return {
        code: errorMsg,
      };
    }

    const componentFile = component.files[0];

    if (!componentFile || !componentFile.path) {
      const errorMsg = '// No valid source file found for this component';
      return {
        code: errorMsg,
      };
    }

    const code = await readFileContent(componentFile.path);
    return { code };
  } catch (error) {
    const errorMsg = `// Failed to read source code for ${componentName}\n// Error: ${
      error instanceof Error ? error.message : 'Unknown error'
    }`;
    return {
      code: errorMsg,
    };
  }
}
