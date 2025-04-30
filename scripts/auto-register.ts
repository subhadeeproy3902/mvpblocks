import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import * as z from 'zod';
import { registryItemTypeSchema } from '@/registry/schema';

type ComponentType = z.infer<typeof registryItemTypeSchema>;

// Known npm package dependencies that might be used in components
const KNOWN_NPM_DEPENDENCIES = [
  '@ai-sdk/groq',
  '@hookform/resolvers',
  '@mdx-js/loader',
  '@mdx-js/react',
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
  '@tailwindcss/typography',
  '@tsparticles/engine',
  '@tsparticles/react',
  '@tsparticles/slim',
  '@types/mdx',
  '@vercel/speed-insights',
  'ai',
  'class-variance-authority',
  'clsx',
  'cmdk',
  'cobe',
  'critters',
  'date-fns',
  'dotted-map',
  'embla-carousel-autoplay',
  'embla-carousel-react',
  'framer-motion',
  'fumadocs-core',
  'fumadocs-mdx',
  'fumadocs-twoslash',
  'fumadocs-typescript',
  'fumadocs-ui',
  'input-otp',
  'lenis',
  'lucide-react',
  'mini-svg-data-uri',
  'mongoose',
  'motion',
  'next',
  'next-themes',
  'react',
  'react-day-picker',
  'react-dom',
  'react-hook-form',
  'react-resizable-panels',
  'recharts',
  'resend',
  'sonner',
  'swiper',
  'tailwind-merge',
  'tailwindcss-animate',
  'vaul',
  'verifymailjs',
  'zod',
  '@eslint/eslintrc',
  '@next/bundle-analyzer',
  '@types/node',
  '@types/react',
  '@types/react-dom',
  'autoprefixer',
  'eslint',
  'eslint-config-next',
  'postcss',
  'prettier',
  'prettier-plugin-tailwindcss',
  'sharp',
  'tailwindcss',
  'typescript'
];

// Known registry dependencies mapping
const REGISTRY_DEPENDENCIES: Record<string, string> = {
  // UI components
  '@/components/ui/accordion': 'https://mvpblocks.vercel.app/r/accordion.json',
  '@/components/ui/alert-dialog': 'https://mvpblocks.vercel.app/r/alert-dialog.json',
  '@/components/ui/alert': 'https://mvpblocks.vercel.app/r/alert.json',
  '@/components/ui/aspect-ratio': 'https://mvpblocks.vercel.app/r/aspect-ratio.json',
  '@/components/ui/author-badge': 'https://mvpblocks.vercel.app/r/author-badge.json',
  '@/components/ui/avatar': 'https://mvpblocks.vercel.app/r/avatar.json',
  '@/components/ui/badge': 'https://mvpblocks.vercel.app/r/badge.json',
  '@/components/ui/border-beam': 'https://mvpblocks.vercel.app/r/border-beam.json',
  '@/components/ui/breadcrumb': 'https://mvpblocks.vercel.app/r/breadcrumb.json',
  '@/components/ui/button': 'https://mvpblocks.vercel.app/r/button.json',
  '@/components/ui/calendar': 'https://mvpblocks.vercel.app/r/calendar.json',
  '@/components/ui/card-carousel': 'https://mvpblocks.vercel.app/r/card-carousel.json',
  '@/components/ui/card': 'https://mvpblocks.vercel.app/r/card.json',
  '@/components/ui/carousel': 'https://mvpblocks.vercel.app/r/carousel.json',
  '@/components/ui/chart': 'https://mvpblocks.vercel.app/r/chart.json',
  '@/components/ui/checkbox': 'https://mvpblocks.vercel.app/r/checkbox.json',
  '@/components/ui/collapsible': 'https://mvpblocks.vercel.app/r/collapsible.json',
  '@/components/ui/command': 'https://mvpblocks.vercel.app/r/command.json',
  '@/components/ui/compare': 'https://mvpblocks.vercel.app/r/compare.json',
  '@/components/ui/container-scroll-animation': 'https://mvpblocks.vercel.app/r/container-scroll-animation.json',
  '@/components/ui/context-menu': 'https://mvpblocks.vercel.app/r/context-menu.json',
  '@/components/ui/counter': 'https://mvpblocks.vercel.app/r/counter.json',
  '@/components/ui/deferred-component': 'https://mvpblocks.vercel.app/r/deferred-component.json',
  '@/components/ui/dialog': 'https://mvpblocks.vercel.app/r/dialog.json',
  '@/components/ui/drawer': 'https://mvpblocks.vercel.app/r/drawer.json',
  '@/components/ui/dropdown-menu': 'https://mvpblocks.vercel.app/r/dropdown-menu.json',
  '@/components/ui/form': 'https://mvpblocks.vercel.app/r/form.json',
  '@/components/ui/globe': 'https://mvpblocks.vercel.app/r/globe.json',
  '@/components/ui/gridbeam': 'https://mvpblocks.vercel.app/r/gridbeam.json',
  '@/components/ui/home-badge': 'https://mvpblocks.vercel.app/r/home-badge.json',
  '@/components/ui/hover-card': 'https://mvpblocks.vercel.app/r/hover-card.json',
  '@/components/ui/input-otp': 'https://mvpblocks.vercel.app/r/input-otp.json',
  '@/components/ui/input': 'https://mvpblocks.vercel.app/r/input.json',
  '@/components/ui/label': 'https://mvpblocks.vercel.app/r/label.json',
  '@/components/ui/lazy-image': 'https://mvpblocks.vercel.app/r/lazy-image.json',
  '@/components/ui/marquee': 'https://mvpblocks.vercel.app/r/marquee.json',
  '@/components/ui/menubar': 'https://mvpblocks.vercel.app/r/menubar.json',
  '@/components/ui/minimal-card': 'https://mvpblocks.vercel.app/r/minimal-card.json',
  '@/components/ui/mode-toggle': 'https://mvpblocks.vercel.app/r/mode-toggle.json',
  '@/components/ui/mouse-trail': 'https://mvpblocks.vercel.app/r/mouse-trail.json',
  '@/components/ui/navigation-menu': 'https://mvpblocks.vercel.app/r/navigation-menu.json',
  '@/components/ui/pagination': 'https://mvpblocks.vercel.app/r/pagination.json',
  '@/components/ui/pixelcards': 'https://mvpblocks.vercel.app/r/pixelcards.json',
  '@/components/ui/popover': 'https://mvpblocks.vercel.app/r/popover.json',
  '@/components/ui/progress': 'https://mvpblocks.vercel.app/r/progress.json',
  '@/components/ui/pulse-card': 'https://mvpblocks.vercel.app/r/pulse-card.json',
  '@/components/ui/radio-group': 'https://mvpblocks.vercel.app/r/radio-group.json',
  '@/components/ui/resizable-navbar': 'https://mvpblocks.vercel.app/r/resizable-navbar.json',
  '@/components/ui/resizable': 'https://mvpblocks.vercel.app/r/resizable.json',
  '@/components/ui/scramble': 'https://mvpblocks.vercel.app/r/scramble.json',
  '@/components/ui/scroll-area': 'https://mvpblocks.vercel.app/r/scroll-area.json',
  '@/components/ui/select': 'https://mvpblocks.vercel.app/r/select.json',
  '@/components/ui/separator': 'https://mvpblocks.vercel.app/r/separator.json',
  '@/components/ui/sheet': 'https://mvpblocks.vercel.app/r/sheet.json',
  '@/components/ui/sidebar': 'https://mvpblocks.vercel.app/r/sidebar.json',
  '@/components/ui/skeleton': 'https://mvpblocks.vercel.app/r/skeleton.json',
  '@/components/ui/slider': 'https://mvpblocks.vercel.app/r/slider.json',
  '@/components/ui/sonner': 'https://mvpblocks.vercel.app/r/sonner.json',
  '@/components/ui/sparkles': 'https://mvpblocks.vercel.app/r/sparkles.json',
  '@/components/ui/spotlight-cards': 'https://mvpblocks.vercel.app/r/spotlight-cards.json',
  '@/components/ui/spotlight': 'https://mvpblocks.vercel.app/r/spotlight.json',
  '@/components/ui/switch': 'https://mvpblocks.vercel.app/r/switch.json',
  '@/components/ui/table': 'https://mvpblocks.vercel.app/r/table.json',
  '@/components/ui/tabs': 'https://mvpblocks.vercel.app/r/tabs.json',
  '@/components/ui/textarea': 'https://mvpblocks.vercel.app/r/textarea.json',
  '@/components/ui/toast': 'https://mvpblocks.vercel.app/r/toast.json',
  '@/components/ui/toaster': 'https://mvpblocks.vercel.app/r/toaster.json',
  '@/components/ui/toggle-group': 'https://mvpblocks.vercel.app/r/toggle-group.json',
  '@/components/ui/toggle': 'https://mvpblocks.vercel.app/r/toggle.json',
  '@/components/ui/tooltip': 'https://mvpblocks.vercel.app/r/tooltip.json',
  '@/components/ui/world-map': 'https://mvpblocks.vercel.app/r/world-map.json',
  '@/components/ui/wrap-button': 'https://mvpblocks.vercel.app/r/wrap-button.json',

  // Hooks
  '@/hooks/use-auto-resize-textarea': 'https://mvpblocks.vercel.app/r/use-auto-resize-textarea.json',
  '@/hooks/use-media-query': 'https://mvpblocks.vercel.app/r/use-media-query.json',
  '@/hooks/use-mobile': 'https://mvpblocks.vercel.app/r/use-mobile.json',
  '@/hooks/use-toast': 'https://mvpblocks.vercel.app/r/use-toast.json',

  // Lib utilities
  '@/lib/code': 'https://mvpblocks.vercel.app/r/code.json',
  '@/lib/load-script': 'https://mvpblocks.vercel.app/r/load-script.json',
  '@/lib/metadata-image': 'https://mvpblocks.vercel.app/r/metadata-image.json',
  '@/lib/metadata': 'https://mvpblocks.vercel.app/r/metadata.json',
  '@/lib/source': 'https://mvpblocks.vercel.app/r/source.json',
  '@/lib/utils': 'https://mvpblocks.vercel.app/r/utils.json'
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
function detectRegistryDependencies(fileContent: string, filePath: string): string[] {
  const dependencies: string[] = [];

  // Check for known registry dependencies
  for (const [importPath, url] of Object.entries(REGISTRY_DEPENDENCIES)) {
    if (fileContent.includes(importPath)) {
      dependencies.push(url);
    }
  }

  // Detect local component imports (relative imports)
  const importRegex = /import\s+(?:(?:\{[^}]*\})|(?:[^\s{}]+))\s+from\s+['"]\.\/(.*?)['"];?/g;
  let match;
  while ((match = importRegex.exec(fileContent)) !== null) {
    const importedFile = match[1];
    // Get the directory of the current file
    const dirPath = path.dirname(filePath);
    // Construct the path to the imported file
    let importedFilePath = path.join(dirPath, importedFile);

    // Add .tsx extension if not present
    if (!importedFilePath.endsWith('.tsx') && !importedFilePath.endsWith('.ts')) {
      importedFilePath += '.tsx';
    }

    // Check if the file exists
    if (fs.existsSync(importedFilePath)) {
      // Get the component name from the file path
      const componentName = path.basename(importedFilePath, path.extname(importedFilePath));
      // Add as registry dependency
      dependencies.push(`https://mvpblocks.vercel.app/r/${componentName}.json`);

      // Recursively process the imported file to get its dependencies
      try {
        const importedFileContent = fs.readFileSync(importedFilePath, 'utf-8');
        // Detect dependencies of the imported file
        const importedFileDependencies = detectRegistryDependencies(importedFileContent, importedFilePath);
        // Add unique dependencies
        for (const dep of importedFileDependencies) {
          if (!dependencies.includes(dep)) {
            dependencies.push(dep);
          }
        }

        // Also register the imported component if it's not already in the registry
        addComponentToRegistryIfNeeded(importedFilePath);
      } catch (error) {
        console.warn(`Warning: Could not process imported file ${importedFilePath}`);
      }
    }
  }

  return dependencies;
}

// Function to check if a component is already in the registry
function isComponentInRegistry(componentName: string, componentType: ComponentType): boolean {
  const registryFilePath = getRegistryFilePath(componentType);
  const registryContent = fs.readFileSync(registryFilePath, 'utf-8');
  return registryContent.includes(`name: "${componentName}"`);
}

// Function to add a component to the registry if it's not already there
function addComponentToRegistryIfNeeded(filePath: string): void {
  // Normalize the file path to use forward slashes
  const normalizedPath = filePath.replace(/\\/g, '/');

  // Determine component type
  const componentType = determineComponentType(normalizedPath);

  // Generate component name
  const componentName = generateComponentName(normalizedPath);

  // Check if component already exists in registry
  if (isComponentInRegistry(componentName, componentType)) {
    console.log(`Component "${componentName}" already exists in registry.`);
    return;
  }

  // Add the component to the registry
  addComponentToRegistry(filePath);
}

// Function to add component to registry
function addComponentToRegistry(filePath: string): void {
  // Normalize the file path to use forward slashes
  const normalizedPath = filePath.replace(/\\/g, '/');

  // Read the file content
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Detect dependencies
  const npmDependencies = detectNpmDependencies(fileContent);
  const registryDependencies = detectRegistryDependencies(fileContent, filePath);

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

// Function to scan project directories and update dependencies
function updateDependenciesMappings() {
  console.log('Scanning project for components and dependencies...');

  // Paths to scan for components
  const componentPaths = [
    { dir: 'components/ui' },
    { dir: 'hooks' },
    { dir: 'lib' },
  ];

  // Scan each directory
  for (const { dir } of componentPaths) {
    if (!fs.existsSync(dir)) {
      continue;
    }

    // Get all files in the directory (recursively)
    const files = getAllFiles(dir);

    // Process each file
    for (const file of files) {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const normalizedPath = file.replace(/\\/g, '/');
        const componentName = path.basename(normalizedPath, path.extname(normalizedPath));

        // Add to REGISTRY_DEPENDENCIES if not already there
        const importPath = `@/${normalizedPath}`;
        const registryUrl = `https://mvpblocks.vercel.app/r/${componentName}.json`;

        if (!REGISTRY_DEPENDENCIES[importPath]) {
          REGISTRY_DEPENDENCIES[importPath] = registryUrl;
          console.log(`Added new component to registry dependencies: ${componentName}`);
        }
      }
    }
  }

  // Scan package.json for npm dependencies
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

    // Add all dependencies to KNOWN_NPM_DEPENDENCIES if not already there
    for (const dep of Object.keys(dependencies)) {
      if (!KNOWN_NPM_DEPENDENCIES.includes(dep)) {
        KNOWN_NPM_DEPENDENCIES.push(dep);
        console.log(`Added new npm dependency: ${dep}`);
      }
    }
  } catch (error) {
    console.warn('Could not read package.json to update npm dependencies');
  }
}

// Helper function to get all files in a directory recursively
function getAllFiles(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }

  return fileList;
}

// Main function
function main() {
  // Get the file path from command line arguments
  const args = process.argv.slice(2);

  // Update dependencies mappings first
  updateDependenciesMappings();

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
