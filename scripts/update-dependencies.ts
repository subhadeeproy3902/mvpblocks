import fs from 'fs';
import path from 'path';

// Main function to update auto-register.ts with new dependencies
function main() {
  console.log('Updating auto-register.ts with new dependencies...');

  // Path to auto-register.ts
  const autoRegisterPath = path.join(__dirname, 'auto-register.ts');

  // Check if auto-register.ts exists
  if (!fs.existsSync(autoRegisterPath)) {
    console.error('auto-register.ts not found!');
    process.exit(1);
  }

  // Read auto-register.ts
  const autoRegisterContent = fs.readFileSync(autoRegisterPath, 'utf-8');

  // Extract KNOWN_NPM_DEPENDENCIES array
  const npmDepsMatch = autoRegisterContent.match(
    /const KNOWN_NPM_DEPENDENCIES = \[([\s\S]*?)\];/,
  );
  if (!npmDepsMatch) {
    console.error('Could not find KNOWN_NPM_DEPENDENCIES in auto-register.ts');
    process.exit(1);
  }

  // Extract REGISTRY_DEPENDENCIES object
  const registryDepsMatch = autoRegisterContent.match(
    /const REGISTRY_DEPENDENCIES: Record<string, string> = \{([\s\S]*?)\};/,
  );
  if (!registryDepsMatch) {
    console.error('Could not find REGISTRY_DEPENDENCIES in auto-register.ts');
    process.exit(1);
  }

  // Get all npm dependencies from package.json
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8'),
  );
  const npmDeps = Object.keys({
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  });

  // Get all UI components, hooks, and lib utilities
  const uiComponents = getAllComponents('components/ui');
  const hooks = getAllComponents('hooks');
  const libs = getAllComponents('lib');

  // Generate new KNOWN_NPM_DEPENDENCIES array
  const newNpmDeps = npmDeps.map((dep) => `  '${dep}'`).join(',\n');

  // Generate new REGISTRY_DEPENDENCIES object
  let newRegistryDeps = '';

  // Add UI components
  newRegistryDeps += '  // UI components\n';
  for (const component of uiComponents) {
    const componentName = path.basename(component, path.extname(component));
    newRegistryDeps += `  '@/components/ui/${componentName}': 'https://blocks.mvp-subha.me/r/${componentName}.json',\n`;
  }

  // Add hooks
  newRegistryDeps += '\n  // Hooks\n';
  for (const hook of hooks) {
    const hookName = path.basename(hook, path.extname(hook));
    newRegistryDeps += `  '@/hooks/${hookName}': 'https://blocks.mvp-subha.me/r/${hookName}.json',\n`;
  }

  // Add libs
  newRegistryDeps += '\n  // Lib utilities\n';
  for (const lib of libs) {
    const libName = path.basename(lib, path.extname(lib));
    newRegistryDeps += `  '@/lib/${libName}': 'https://blocks.mvp-subha.me/r/${libName}.json',\n`;
  }

  // Remove trailing comma
  newRegistryDeps = newRegistryDeps.replace(/,\n$/, '\n');

  // Replace KNOWN_NPM_DEPENDENCIES in auto-register.ts
  const newAutoRegisterContent = autoRegisterContent.replace(
    /const KNOWN_NPM_DEPENDENCIES = \[([\s\S]*?)\];/,
    `const KNOWN_NPM_DEPENDENCIES = [\n${newNpmDeps}\n];`,
  );

  // Replace REGISTRY_DEPENDENCIES in auto-register.ts
  const finalAutoRegisterContent = newAutoRegisterContent.replace(
    /const REGISTRY_DEPENDENCIES: Record<string, string> = \{([\s\S]*?)\};/,
    `const REGISTRY_DEPENDENCIES: Record<string, string> = {\n${newRegistryDeps}};`,
  );

  // Write updated auto-register.ts
  fs.writeFileSync(autoRegisterPath, finalAutoRegisterContent);

  console.log('auto-register.ts updated with new dependencies!');
}

// Helper function to get all components in a directory
function getAllComponents(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const components: string[] = [];

  function traverse(currentDir: string) {
    const files = fs.readdirSync(currentDir);

    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        // Get the relative path from the base directory
        const relativePath = path.relative(dir, filePath);
        components.push(relativePath.replace(/\\/g, '/'));
      }
    }
  }

  traverse(dir);
  return components;
}

main();
