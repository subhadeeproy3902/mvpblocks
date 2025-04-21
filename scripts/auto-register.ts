import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import * as z from 'zod';
import { registryItemTypeSchema } from '@/registry/schema';

type ComponentType = z.infer<typeof registryItemTypeSchema>;

// Known npm package dependencies that might be used in components
const KNOWN_NPM_DEPENDENCIES = [
  'lucide-react',
  'framer-motion',
  'react-day-picker',
  'date-fns',
  'cmdk',
  'embla-carousel-react',
  'recharts',
  'cobe',
  'vaul',
  'zod',
  'react-hook-form',
  '@hookform/resolvers',
  '@radix-ui/react-accordion',
  '@radix-ui/react-alert-dialog',
  '@radix-ui/react-aspect-ratio',
  '@radix-ui/react-avatar',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-collapsible',
  '@radix-ui/react-context-menu',
  '@radix-ui/react-dialog',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-hover-card',
  '@radix-ui/react-label',
  '@radix-ui/react-menubar',
  '@radix-ui/react-navigation-menu',
  '@radix-ui/react-popover',
  '@radix-ui/react-progress',
  '@radix-ui/react-radio-group',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-select',
  '@radix-ui/react-separator',
  '@radix-ui/react-slider',
  '@radix-ui/react-slot',
  '@radix-ui/react-switch',
  '@radix-ui/react-tabs',
  '@radix-ui/react-toast',
  '@radix-ui/react-toggle',
  '@radix-ui/react-toggle-group',
  '@radix-ui/react-tooltip',
];

// Map of UI components to their registry dependency URLs
const UI_COMPONENT_TO_REGISTRY_DEPENDENCY = {
  'button': 'https://mvpblocks.vercel.app/r/button.json',
  'accordion': 'https://mvpblocks.vercel.app/r/accordion.json',
  'alert': 'https://mvpblocks.vercel.app/r/alert.json',
  'alert-dialog': 'https://mvpblocks.vercel.app/r/alert-dialog.json',
  'aspect-ratio': 'https://mvpblocks.vercel.app/r/aspect-ratio.json',
  'avatar': 'https://mvpblocks.vercel.app/r/avatar.json',
  'badge': 'https://mvpblocks.vercel.app/r/badge.json',
  'breadcrumb': 'https://mvpblocks.vercel.app/r/breadcrumb.json',
  'calendar': 'https://mvpblocks.vercel.app/r/calendar.json',
  'card': 'https://mvpblocks.vercel.app/r/card.json',
  'carousel': 'https://mvpblocks.vercel.app/r/carousel.json',
  'chart': 'https://mvpblocks.vercel.app/r/chart.json',
  'checkbox': 'https://mvpblocks.vercel.app/r/checkbox.json',
  'collapsible': 'https://mvpblocks.vercel.app/r/collapsible.json',
  'command': 'https://mvpblocks.vercel.app/r/command.json',
  'context-menu': 'https://mvpblocks.vercel.app/r/context-menu.json',
  'dialog': 'https://mvpblocks.vercel.app/r/dialog.json',
  'drawer': 'https://mvpblocks.vercel.app/r/drawer.json',
  'dropdown-menu': 'https://mvpblocks.vercel.app/r/dropdown-menu.json',
  'form': 'https://mvpblocks.vercel.app/r/form.json',
  'globe': 'https://mvpblocks.vercel.app/r/globe.json',
  'hover-card': 'https://mvpblocks.vercel.app/r/hover-card.json',
  'input': 'https://mvpblocks.vercel.app/r/input.json',
  'label': 'https://mvpblocks.vercel.app/r/label.json',
  'menubar': 'https://mvpblocks.vercel.app/r/menubar.json',
  'navigation-menu': 'https://mvpblocks.vercel.app/r/navigation-menu.json',
  'popover': 'https://mvpblocks.vercel.app/r/popover.json',
  'progress': 'https://mvpblocks.vercel.app/r/progress.json',
  'radio-group': 'https://mvpblocks.vercel.app/r/radio-group.json',
  'scroll-area': 'https://mvpblocks.vercel.app/r/scroll-area.json',
  'select': 'https://mvpblocks.vercel.app/r/select.json',
  'separator': 'https://mvpblocks.vercel.app/r/separator.json',
  'sheet': 'https://mvpblocks.vercel.app/r/sheet.json',
  'sidebar': 'https://mvpblocks.vercel.app/r/sidebar.json',
  'skeleton': 'https://mvpblocks.vercel.app/r/skeleton.json',
  'slider': 'https://mvpblocks.vercel.app/r/slider.json',
  'sonner': 'https://mvpblocks.vercel.app/r/sonner.json',
  'switch': 'https://mvpblocks.vercel.app/r/switch.json',
  'table': 'https://mvpblocks.vercel.app/r/table.json',
  'tabs': 'https://mvpblocks.vercel.app/r/tabs.json',
  'textarea': 'https://mvpblocks.vercel.app/r/textarea.json',
  'toast': 'https://mvpblocks.vercel.app/r/toast.json',
  'toggle': 'https://mvpblocks.vercel.app/r/toggle.json',
  'toggle-group': 'https://mvpblocks.vercel.app/r/toggle-group.json',
  'tooltip': 'https://mvpblocks.vercel.app/r/tooltip.json',
};

// Map of component paths to their registry dependency URLs
const COMPONENT_PATH_TO_REGISTRY_DEPENDENCY = {
  '@/components/ui/button': 'https://mvpblocks.vercel.app/r/button.json',
  '@/lib/utils': 'https://mvpblocks.vercel.app/r/utils.json',
  '@/hooks/use-toast': 'https://mvpblocks.vercel.app/r/use-toast.json',
  '@/hooks/use-mobile': 'https://mvpblocks.vercel.app/r/use-mobile.json',
  '@/hooks/use-auto-resize-textarea': 'https://mvpblocks.vercel.app/r/use-auto-resize-textarea.json',
};

// Map of hook components to their registry dependency URLs
const HOOK_TO_REGISTRY_DEPENDENCY = {
  'use-toast': 'https://mvpblocks.vercel.app/r/use-toast.json',
  'use-mobile': 'https://mvpblocks.vercel.app/r/use-mobile.json',
  'use-auto-resize-textarea': 'https://mvpblocks.vercel.app/r/use-auto-resize-textarea.json',
};

// Map of lib utilities to their registry dependency URLs
const LIB_TO_REGISTRY_DEPENDENCY = {
  'utils': 'https://mvpblocks.vercel.app/r/utils.json',
};

// Function to determine component type based on path
function determineComponentType(filePath: string): ComponentType {
  if (filePath.includes('/components/mvpblocks/')) {
    return 'registry:block';
  } else if (filePath.includes('/components/ui/')) {
    return 'registry:ui';
  } else if (filePath.includes('/hooks/')) {
    return 'registry:hook';
  } else if (filePath.includes('/lib/')) {
    return 'registry:lib';
  }

  // Default to block if can't determine
  return 'registry:block';
}

// Function to get registry file path based on component type
function getRegistryFilePath(componentType: ComponentType): string {
  switch (componentType) {
    case 'registry:block':
      return path.join(__dirname, '../registry/registry-blocks.ts');
    case 'registry:ui':
      return path.join(__dirname, '../registry/registry-ui.ts');
    case 'registry:hook':
      return path.join(__dirname, '../registry/registry-hooks.ts');
    case 'registry:lib':
      return path.join(__dirname, '../registry/registry-lib.ts');
    default:
      return path.join(__dirname, '../registry/registry-blocks.ts');
  }
}

// Function to generate component name from file path
function generateComponentName(filePath: string): string {
  // Extract the file name without extension
  const fileName = path.basename(filePath, path.extname(filePath));
  return fileName;
}

// Function to detect npm dependencies from file content
function detectNpmDependencies(fileContent: string): string[] {
  const dependencies: string[] = [];

  // Check for each known dependency in the file content
  for (const dependency of KNOWN_NPM_DEPENDENCIES) {
    // Check if the dependency is imported in the file
    if (fileContent.includes(`from "${dependency}"`) ||
        fileContent.includes(`from '${dependency}'`)) {
      dependencies.push(dependency);
    }
  }

  return dependencies;
}

// Function to detect registry dependencies from file content
function detectRegistryDependencies(fileContent: string): string[] {
  const dependencies: string[] = [];

  // Simple approach: check for specific import paths
  if (fileContent.includes('@/components/ui/button')) {
    dependencies.push('https://mvpblocks.vercel.app/r/button.json');
  }

  if (fileContent.includes('@/lib/utils')) {
    dependencies.push('https://mvpblocks.vercel.app/r/utils.json');
  }

  if (fileContent.includes('@/hooks/use-toast')) {
    dependencies.push('https://mvpblocks.vercel.app/r/use-toast.json');
  }

  if (fileContent.includes('@/hooks/use-mobile')) {
    dependencies.push('https://mvpblocks.vercel.app/r/use-mobile.json');
  }

  if (fileContent.includes('@/hooks/use-auto-resize-textarea')) {
    dependencies.push('https://mvpblocks.vercel.app/r/use-auto-resize-textarea.json');
  }

  // Add more checks for other components as needed

  return dependencies;
}

// Function to add component to registry
function addComponentToRegistry(filePath: string): void {
  // Normalize the file path to use forward slashes
  const normalizedPath = filePath.replace(/\\/g, '/');

  // Read the file content
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Detect dependencies
  const npmDependencies = detectNpmDependencies(fileContent);
  const registryDependencies = detectRegistryDependencies(fileContent);

  // Determine component type
  const componentType = determineComponentType(normalizedPath);

  // Get registry file path
  const registryFilePath = getRegistryFilePath(componentType);

  // Generate component name
  const componentName = generateComponentName(normalizedPath);

  // Read the registry file
  let registryContent = fs.readFileSync(registryFilePath, 'utf-8');

  // Check if component already exists in registry
  if (registryContent.includes(`name: "${componentName}"`)) {
    console.log(`Component "${componentName}" already exists in registry.`);
    return;
  }

  // Prepare the component path for registry
  let componentPath = normalizedPath;
  if (!componentPath.startsWith('@/')) {
    // If path doesn't start with @/, add it
    componentPath = `@/${componentPath}`;
  }

  // Prepare the import path for the component
  const importPath = componentPath.replace('@/', '../').replace(/\.tsx?$/, '');

  // Create the new component entry
  const registryArrayName = componentType === 'registry:block' ? 'blocks' :
                           componentType === 'registry:ui' ? 'ui' :
                           componentType === 'registry:hook' ? 'hooks' : 'lib';

  // Find the position to insert the new component
  const arrayStartRegex = new RegExp(`export const ${registryArrayName}[^\\[]*\\[`);
  const match = registryContent.match(arrayStartRegex);

  if (!match) {
    console.error(`Could not find the ${registryArrayName} array in the registry file.`);
    return;
  }

  const insertPosition = match.index! + match[0].length;

  // Create the component entry
  let componentEntry = `
  {
    name: "${componentName}",
    type: "${componentType}",
    dependencies: ${JSON.stringify(npmDependencies)},
    registryDependencies: ${JSON.stringify(registryDependencies)},
    files: [
      {
        path: "${componentPath}",
        type: "${componentType}",
      },
    ],`;

  // Add component lazy loading for blocks and UI components
  if (componentType === 'registry:block' || componentType === 'registry:ui') {
    componentEntry += `
    component: React.lazy(
      () => import("${importPath}"),
    ),`;
  }

  componentEntry += `
  },`;

  // Insert the component entry into the registry content
  const newRegistryContent =
    registryContent.slice(0, insertPosition) +
    componentEntry +
    registryContent.slice(insertPosition);

  // Write the updated registry content back to the file
  fs.writeFileSync(registryFilePath, newRegistryContent);

  console.log(`Added component "${componentName}" to ${registryArrayName} registry.`);
  console.log(`- NPM Dependencies: ${npmDependencies.length > 0 ? npmDependencies.join(', ') : 'None'}`);
  console.log(`- Registry Dependencies: ${registryDependencies.length > 0 ? registryDependencies.join(', ') : 'None'}`);
}

// Main function
function main() {
  // Get the file path from command line arguments
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Please provide a file path.');
    process.exit(1);
  }

  const filePath = args[0];

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.error(`File "${filePath}" does not exist.`);
    process.exit(1);
  }

  // Add component to registry
  addComponentToRegistry(filePath);

  // Run build and sort scripts
  console.log('Running build:registry script...');
  execSync('bun run build:registry', { stdio: 'inherit' });

  console.log('Running sort:registry script...');
  execSync('bun run sort:registry', { stdio: 'inherit' });

  console.log('All done! Component registered, built, and sorted.');
}

main();
