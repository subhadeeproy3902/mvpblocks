#!/usr/bin/env node
import {
  intro,
  spinner,
  cancel,
  select,
  text,
  confirm,
  isCancel,
} from '@clack/prompts';
import { format } from 'prettier/standalone';
import babel from 'prettier/plugins/babel';
import estree from 'prettier/plugins/estree';
import ts from 'typescript';
import { execSync } from 'child_process';
import colors from 'picocolors';
import fs from 'fs';
import path from 'path';
import { execa } from 'execa';
import fetch from 'node-fetch';
import gradient from 'gradient-string';
import { AVAILABLE_COMPONENTS, REGISTRY_METADATA, THEME_CONSTANT } from './constants.js';
import { Zinc, Red, Rose, Orange, Green, Blue, Yellow, Purple } from './colors.js';

// Project Management Class for Smart Detection and Initialization
class ProjectManager {
  constructor() {
    this.cwd = process.cwd();
    this.projectConfig = null;
  }

  // Detect project type and configuration
  async detectProject() {
    const packageJsonPath = path.join(this.cwd, 'package.json');
    const tsconfigPath = path.join(this.cwd, 'tsconfig.json');
    
    // Check if package.json exists
    const hasPackageJson = fs.existsSync(packageJsonPath);
    
    if (!hasPackageJson) {
      return {
        type: 'empty',
        hasPackageJson: false,
        hasTypeScript: false,
        paths: null,
        framework: null
      };
    }

    // Read package.json
    let packageJson = {};
    try {
      packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    } catch (error) {
      // Invalid package.json, treat as basic project
      packageJson = { name: 'unknown-project', version: '1.0.0' };
    }
    
    // Detect framework
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    let framework = 'unknown';
    
    if (dependencies.next) framework = 'nextjs';
    else if (dependencies.vite) framework = 'vite';
    else if (dependencies['react-scripts']) framework = 'cra';
    
    // Check TypeScript
    const hasTypeScript = fs.existsSync(tsconfigPath) || 
                         !!dependencies.typescript || 
                         !!dependencies['@types/react'];

    // Read tsconfig.json for path mappings
    let paths = null;
    if (fs.existsSync(tsconfigPath)) {
      try {
        const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
        paths = tsconfig.compilerOptions?.paths || null;
      } catch (e) {
        // Invalid tsconfig, ignore
      }
    }

    this.projectConfig = {
      type: 'existing',
      hasPackageJson: true,
      hasTypeScript,
      paths,
      framework,
      packageJson
    };

    return this.projectConfig;
  }

  // Initialize a new project
  async initializeProject(projectName, framework, useTypeScript) {
    console.log(`🚀 Creating ${framework} project with official tools...`);
    
    try {
      const pm = this.detectPackageManager();
      const cmd = this.getCreateCommand(pm, framework, projectName, useTypeScript);
      
      console.log('Running:', cmd);
      execSync(cmd, { stdio: 'inherit' });
      
      // Always change to the created project directory
      const projectPath = path.join(this.cwd, projectName);
      if (fs.existsSync(projectPath)) {
        this.cwd = projectPath;
        process.chdir(this.cwd);
        console.log(`� Changed to project directory: ${this.cwd}`);
      } else {
        throw new Error(`Project directory ${projectPath} was not created`);
      }
      
      if (framework === 'nextjs') {
        // Install additional dependencies
        console.log('📦 Installing additional dependencies...');
        const addCmd = pm === 'npm' ? 'npm install' : `${pm} add`;
        execSync(`${addCmd} class-variance-authority clsx tailwind-merge lucide-react tw-animate-css`, { stdio: 'inherit' });
        
        // Detect project structure
        const hasSrc = fs.existsSync(path.join(this.cwd, 'src'));
        const hasApp = fs.existsSync(path.join(this.cwd, 'app'));
        const configFile = useTypeScript ? 'tsconfig.json' : 'jsconfig.json';
        
        console.log(`📋 Detected Next.js structure: src=${hasSrc}, app=${hasApp}, config=${configFile}`);
        
        // Update config file with path aliases
        await this.updateProjectConfig(configFile, framework, useTypeScript);
        
        // Create components.json
        await this.createComponentsJson(framework, useTypeScript, hasSrc);
        
        // Setup theme
      const pm = this.detectPackageManager();
      const cmd = this.getCreateCommand(pm, framework, projectName, useTypeScript);
      
      console.log('Running:', cmd);
      execSync(cmd, { stdio: 'inherit' });
      
      // Always change to the created project directory
      const projectPath = path.join(this.cwd, projectName);
      if (fs.existsSync(projectPath)) {
        this.cwd = projectPath;
        process.chdir(this.cwd);
        console.log(`� Changed to project directory: ${this.cwd}`);
      } else {
        throw new Error(`Project directory ${projectPath} was not created`);
      }
      
      if (framework === 'nextjs') {
        // Install additional dependencies
        console.log('📦 Installing additional dependencies...');
        const addCmd = pm === 'npm' ? 'npm install' : `${pm} add`;
        execSync(`${addCmd} class-variance-authority clsx tailwind-merge lucide-react tw-animate-css`, { stdio: 'inherit' });
        
        // Detect project structure
        const hasSrc = fs.existsSync(path.join(this.cwd, 'src'));
        const hasApp = fs.existsSync(path.join(this.cwd, 'app'));
        const configFile = useTypeScript ? 'tsconfig.json' : 'jsconfig.json';
        
        console.log(`📋 Detected Next.js structure: src=${hasSrc}, app=${hasApp}, config=${configFile}`);
        
        // Update config file with path aliases
        await this.updateProjectConfig(configFile, framework, useTypeScript);
        
        // Create components.json
        await this.createComponentsJson(framework, useTypeScript, hasSrc);
        
        // Setup theme
        console.log('🎨 Setting up theme...');
        const selectedPalette = await selectColorPalette();
        const colorCSS = getColorPaletteCSS(selectedPalette);
        
        // Create/update CSS file
        await this.setupThemeCSS(framework, selectedPalette, colorCSS, hasSrc);
        
        // Create utils file
        await this.createUtilsFile(framework, useTypeScript, hasSrc);
        
      } else if (framework === 'vite') {
        // Install dependencies first
        console.log('Installing dependencies...');
        const installCmd = pm === 'npm' ? 'npm install' : `${pm} install`;
        execSync(installCmd, { stdio: 'inherit' });
        
        // Install additional dependencies
        console.log('Setting up Tailwind CSS and additional dependencies...');
        const addCmd = pm === 'npm' ? 'npm install' : `${pm} add`;
        execSync(`${addCmd} tailwindcss @tailwindcss/vite class-variance-authority clsx tailwind-merge lucide-react tw-animate-css`, { stdio: 'inherit' });
        
        // Update vite.config
        await this.updateViteConfig(useTypeScript);
        
        // Update tsconfig files
        const configFile = useTypeScript ? 'tsconfig.json' : 'jsconfig.json';
        await this.updateProjectConfig(configFile, framework, useTypeScript);
        
        if (useTypeScript && fs.existsSync(path.join(this.cwd, 'tsconfig.app.json'))) {
          await this.updateProjectConfig('tsconfig.app.json', framework, useTypeScript);
        }
        
        // Create components.json
        await this.createComponentsJson(framework, useTypeScript, true); // Vite always uses src
        
        // Setup theme
        console.log('🎨 Setting up theme...');
        const selectedPalette = await selectColorPalette();
        const colorCSS = getColorPaletteCSS(selectedPalette);
        
        // Create/update CSS files
        await this.setupThemeCSS(framework, selectedPalette, colorCSS, true);
        
        // Create utils file
        await this.createUtilsFile(framework, useTypeScript, true);
      }
      
      // Re-detect the project now that it's initialized
      await this.detectProject();
      
      return true;
    } catch (error) {
      console.error('❌ Error creating project:', error.message);
      throw error;
    }
  }

  // Detect package manager from current environment - respect how CLI was invoked
  detectPackageManager() {
    // First check if user is running with specific package manager (most accurate)
    if (process.env.npm_config_user_agent) {
      if (process.env.npm_config_user_agent.includes('bun')) return 'bun';
      if (process.env.npm_config_user_agent.includes('pnpm')) return 'pnpm';
      if (process.env.npm_config_user_agent.includes('yarn')) return 'yarn';
      if (process.env.npm_config_user_agent.includes('npm')) return 'npm';
    }
    
    // Check for lock files in current directory
    if (fs.existsSync(path.join(this.cwd, 'bun.lockb'))) return 'bun';
    if (fs.existsSync(path.join(this.cwd, 'pnpm-lock.yaml'))) return 'pnpm';
    if (fs.existsSync(path.join(this.cwd, 'yarn.lock'))) return 'yarn';
    
    // Only fallback to checking if bun is available if no other indicators
    try {
      execSync('bun --version', { stdio: 'pipe' });
      return 'bun';
    } catch (error) {
      // Bun not available, use npm as final fallback
    }
    
    return 'npm'; // fallback
  }

  // Get the appropriate create command for the package manager
  getCreateCommand(pm, framework, projectName, useTypeScript) {
    if (framework === 'nextjs') {
      const tsFlag = useTypeScript ? '--typescript' : '--javascript';
      if (pm === 'bun' || pm === 'bunx') {
        return `bunx create-next-app@latest ${projectName} ${tsFlag} --tailwind --eslint --app --src-dir --import-alias "@/*"`;
      } else if (pm === 'npm') {
        return `npx create-next-app@latest ${projectName} ${tsFlag} --tailwind --eslint --app --src-dir --import-alias "@/*"`;
      } else if (pm === 'pnpm') {
        return `pnpm create next-app@latest ${projectName} ${tsFlag} --tailwind --eslint --app --src-dir --import-alias "@/*"`;
      } else if (pm === 'yarn') {
        return `yarn create next-app@latest ${projectName} ${tsFlag} --tailwind --eslint --app --src-dir --import-alias "@/*"`;
      } else {
        // Fallback - assume npm if unknown package manager
        return `npx create-next-app@latest ${projectName} ${tsFlag} --tailwind --eslint --app --src-dir --import-alias "@/*"`;
      }
    } else if (framework === 'vite') {
      const template = useTypeScript ? 'react-ts' : 'react';
      if (pm === 'bun') {
        return `bun create vite ${projectName} --template ${template}`;
      } else if (pm === 'npm') {
        return `npm create vite@latest ${projectName} -- --template ${template}`;
      } else {
        return `${pm} create vite@latest ${projectName} -- --template ${template}`;
      }
    }
  }

  // Create components.json file
  async createComponentsJson(framework, useTypeScript, hasSrc = true) {
    const cssPath = hasSrc ? 'src/styles/globals.css' : 'styles/globals.css';
    
    const componentsConfig = {
      "$schema": "https://ui.shadcn.com/schema.json",
      "style": "new-york",
      "rsc": false,
      "tsx": useTypeScript,
      "tailwind": {
        "config": "",
        "css": cssPath,
        "baseColor": "neutral",
        "cssVariables": true,
        "prefix": ""
      },
      "aliases": {
        "components": "@/components",
        "utils": "@/lib/utils",
        "ui": "@/components/ui",
        "lib": "@/lib",
        "hooks": "@/hooks"
      },
      "iconLibrary": "lucide"
    };

    const componentsJsonPath = path.join(this.cwd, 'components.json');
    await fs.promises.writeFile(componentsJsonPath, JSON.stringify(componentsConfig, null, 2));
    console.log(`🔧 Created components.json`);
  }

  // Update project configuration file (tsconfig.json, jsconfig.json)
  async updateProjectConfig(configFile, framework, useTypeScript) {
    const configPath = path.join(this.cwd, configFile);
    const pathPrefix = framework === 'vite' ? './src/*' : './*';
    
    if (fs.existsSync(configPath)) {
      try {
        const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        
        if (!config.compilerOptions) {
          config.compilerOptions = {};
        }
        
        config.compilerOptions.baseUrl = '.';
        config.compilerOptions.paths = {
          '@/*': [pathPrefix]
        };
        
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        console.log(`🔧 Updated ${configFile} with path aliases`);
      } catch (error) {
        console.log(`⚠️  Could not update ${configFile}:`, error.message);
      }
    }
  }

  // Update Vite configuration
  async updateViteConfig(useTypeScript) {
    const viteConfigPath = useTypeScript 
      ? path.join(this.cwd, 'vite.config.ts')
      : path.join(this.cwd, 'vite.config.js');
    
    const viteConfigContent = `import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
        config.compilerOptions.baseUrl = '.';
        config.compilerOptions.paths = {
          '@/*': [pathPrefix]
        };
        
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        console.log(`🔧 Updated ${configFile} with path aliases`);
      } catch (error) {
        console.log(`⚠️  Could not update ${configFile}:`, error.message);
      }
    }
  }

  // Update Vite configuration
  async updateViteConfig(useTypeScript) {
    const viteConfigPath = useTypeScript 
      ? path.join(this.cwd, 'vite.config.ts')
      : path.join(this.cwd, 'vite.config.js');
    
    const viteConfigContent = `import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`;
    
    fs.writeFileSync(viteConfigPath, viteConfigContent);
    console.log(`🔧 Updated ${useTypeScript ? 'vite.config.ts' : 'vite.config.js'} with Tailwind CSS and path aliases`);
  }

  // Setup theme CSS
  async setupThemeCSS(framework, selectedPalette, colorCSS, hasSrc) {
    let cssPath;
    
    if (framework === 'nextjs') {
      // For Next.js, try to find existing globals.css or create one
      const possiblePaths = [
        path.join(this.cwd, 'src/app/globals.css'),
        path.join(this.cwd, 'app/globals.css'),
        path.join(this.cwd, 'src/styles/globals.css'),
        path.join(this.cwd, 'styles/globals.css')
      ];
      
      cssPath = possiblePaths.find(p => fs.existsSync(p));
      
      if (!cssPath) {
        // Create in appropriate location
        const stylesDir = hasSrc 
          ? path.join(this.cwd, 'src/styles')
          : path.join(this.cwd, 'styles');
        
        if (!fs.existsSync(stylesDir)) {
          fs.mkdirSync(stylesDir, { recursive: true });
        }
        cssPath = path.join(stylesDir, 'globals.css');
      }
    } else {
      // For Vite, always use src/styles/globals.css and also update index.css
      const stylesDir = path.join(this.cwd, 'src/styles');
      if (!fs.existsSync(stylesDir)) {
        fs.mkdirSync(stylesDir, { recursive: true });
      }
      cssPath = path.join(stylesDir, 'globals.css');
      
      // Also update index.css
      const indexCssPath = path.join(this.cwd, 'src/index.css');
      if (fs.existsSync(indexCssPath)) {
        const finalCSS = THEME_CONSTANT + '\n' + colorCSS;
        fs.writeFileSync(indexCssPath, finalCSS);
        console.log(`🎨 Updated ${path.relative(this.cwd, indexCssPath)} with ${selectedPalette} theme`);
      }
    }
    
    const finalCSS = THEME_CONSTANT + '\n' + colorCSS;
    fs.writeFileSync(cssPath, finalCSS);
    console.log(`🎨 Applied ${selectedPalette} theme to ${path.relative(this.cwd, cssPath)}`);
  }

  // Create utils file
  async createUtilsFile(framework, useTypeScript, hasSrc) {
    const utilsDir = hasSrc 
      ? path.join(this.cwd, 'src/lib') 
      : path.join(this.cwd, 'lib');
    
    if (!fs.existsSync(utilsDir)) {
      fs.mkdirSync(utilsDir, { recursive: true });
    }
    
    // Check for existing utils files (both .ts and .js)
    const tsUtilsPath = path.join(utilsDir, 'utils.ts');
    const jsUtilsPath = path.join(utilsDir, 'utils.js');
    
    if (fs.existsSync(tsUtilsPath) || fs.existsSync(jsUtilsPath)) {
      console.log(`🛠️  Utils file already exists, skipping creation`);
      return;
    }
    
    const utilsPath = path.join(utilsDir, useTypeScript ? 'utils.ts' : 'utils.js');
    
    const utilsContent = `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs${useTypeScript ? ': ClassValue[]' : ''}) {
  return twMerge(clsx(inputs))
}`;
    
    fs.writeFileSync(utilsPath, utilsContent);
    console.log(`🛠️  Created ${path.relative(this.cwd, utilsPath)}`);
    
    fs.writeFileSync(utilsPath, utilsContent);
    console.log(`🛠️  Created ${path.relative(this.cwd, utilsPath)}`);
  }

  // Get resolved path for components based on project structure
  getResolvedPath(type = 'components') {
    if (!this.projectConfig) {
      // Fallback to basic structure - check if src exists
      const srcPath = path.join(this.cwd, 'src', type);
      const rootPath = path.join(this.cwd, type);
      
      if (fs.existsSync(path.join(this.cwd, 'src'))) {
        return srcPath;
      }
      return rootPath;
      // Fallback to basic structure - check if src exists
      const srcPath = path.join(this.cwd, 'src', type);
      const rootPath = path.join(this.cwd, type);
      
      if (fs.existsSync(path.join(this.cwd, 'src'))) {
        return srcPath;
      }
      return rootPath;
    }

    const { framework, paths } = this.projectConfig;
    
    // Check for custom paths in tsconfig.json/jsconfig.json
    // Check for custom paths in tsconfig.json/jsconfig.json
    if (paths) {
      if (type === 'components' && paths['@/components/*']) {
        const pathPattern = paths['@/components/*'][0];
        return path.join(this.cwd, pathPattern.replace('/*', ''));
      }
      if (type === 'lib' && paths['@/lib/*']) {
        const pathPattern = paths['@/lib/*'][0];
        return path.join(this.cwd, pathPattern.replace('/*', ''));
      }
      if (type === 'hooks' && paths['@/hooks/*']) {
        const pathPattern = paths['@/hooks/*'][0];
        return path.join(this.cwd, pathPattern.replace('/*', ''));
      }
    }

    // Check for existing directories first
    // Check for existing directories first
    const possiblePaths = [
      path.join(this.cwd, 'src', type),
      path.join(this.cwd, type),
      path.join(this.cwd, 'app', type),
    ];

    for (const possiblePath of possiblePaths) {
      if (fs.existsSync(possiblePath)) {
        return possiblePath;
      }
    }

    // Default based on framework and existing structure
    const hasSrc = fs.existsSync(path.join(this.cwd, 'src'));
    const hasApp = fs.existsSync(path.join(this.cwd, 'app'));
    
    // Default based on framework and existing structure
    const hasSrc = fs.existsSync(path.join(this.cwd, 'src'));
    const hasApp = fs.existsSync(path.join(this.cwd, 'app'));
    
    if (framework === 'nextjs') {
      if (hasSrc) {
      if (hasSrc) {
        return path.join(this.cwd, 'src', type);
      } else if (hasApp) {
        return path.join(this.cwd, type); // Place at root for App Router without src
      } else if (hasApp) {
        return path.join(this.cwd, type); // Place at root for App Router without src
      }
    } else if (framework === 'vite') {
      // Vite projects almost always use src
      return path.join(this.cwd, 'src', type);
    }

    // Final fallback
    return hasSrc ? path.join(this.cwd, 'src', type) : path.join(this.cwd, type);
    } else if (framework === 'vite') {
      // Vite projects almost always use src
      return path.join(this.cwd, 'src', type);
    }

    // Final fallback
    return hasSrc ? path.join(this.cwd, 'src', type) : path.join(this.cwd, type);
  }

  // Auto-detect TypeScript preference
  shouldUseTypeScript() {
    if (!this.projectConfig) return false;
    return this.projectConfig.hasTypeScript;
  }
}

// Standalone package manager detection function
function detectPackageManager() {
  const cwd = process.cwd();
  
  // First check if user is running with specific package manager (most accurate)
  if (process.env.npm_config_user_agent) {
    if (process.env.npm_config_user_agent.includes('bun')) return 'bun';
    if (process.env.npm_config_user_agent.includes('pnpm')) return 'pnpm';
    if (process.env.npm_config_user_agent.includes('yarn')) return 'yarn';
    if (process.env.npm_config_user_agent.includes('npm')) return 'npm';
  }
  
  // Check for lock files in current directory
  if (fs.existsSync(path.join(cwd, 'bun.lockb'))) return 'bun';
  if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) return 'pnpm';
  if (fs.existsSync(path.join(cwd, 'yarn.lock'))) return 'yarn';
  
  // Only fallback to checking if bun is available if no other indicators
  try {
    execSync('bun --version', { stdio: 'pipe' });
    return 'bun';
  } catch (error) {
    // Bun not available, use npm as final fallback
  }
  
  return 'npm'; // fallback
}

// Color palette selection function
async function selectColorPalette() {
  const colorPalette = await select({
    message: `${colors.cyan('🎨')} Choose your color palette:`,
    options: [
      {
        label: `${colors.dim('⚫')} Zinc (Default)`,
        value: 'zinc',
        hint: 'Clean neutral gray theme',
      },
      {
        label: `${colors.red('🔴')} Red`,
        value: 'red', 
        hint: 'Bold red accent theme',
      },
      {
        label: `${colors.magenta('🌹')} Rose`,
        value: 'rose',
        hint: 'Elegant rose accent theme',
      },
      {
        label: `${colors.yellow('🟠')} Orange`,
        value: 'orange',
        hint: 'Warm orange accent theme',
      },
      {
        label: `${colors.green('🟢')} Green`,
        value: 'green',
        hint: 'Fresh green accent theme',
      },
      {
        label: `${colors.blue('🔵')} Blue`,
        value: 'blue',
        hint: 'Professional blue accent theme',
      },
      {
        label: `${colors.cyan('🟡')} Yellow`,
        value: 'yellow',
        hint: 'Bright yellow accent theme',
      },
      {
        label: `${colors.magenta('🟣')} Purple`,
        value: 'purple',
        hint: 'Vibrant purple accent theme',
      }
      {
        label: `${colors.cyan('🟡')} Yellow`,
        value: 'yellow',
        hint: 'Bright yellow accent theme',
      },
      {
        label: `${colors.magenta('🟣')} Purple`,
        value: 'purple',
        hint: 'Vibrant purple accent theme',
      }
    ],
  });

  if (isCancel(colorPalette)) {
    return 'zinc'; // default fallback
  }

  return colorPalette;
}

// Get color palette CSS
function getColorPaletteCSS(palette) {
  switch (palette) {
    case 'red': return Red;
    case 'rose': return Rose;
    case 'orange': return Orange;
    case 'green': return Green;
    case 'blue': return Blue;
    case 'yellow': return Yellow;
    case 'purple': return Purple;
    case 'zinc':
    default: return Zinc;
  }
}

// MVPBlocks Configuration - Simple and direct!
const MVPBLOCKS_BASE_URL = 'https://blocks.mvp-subha.me';
const COMPONENTS_BASE_URL = `${MVPBLOCKS_BASE_URL}/r`;

// CLI args
const [command, componentName, ...additionalArgs] = process.argv.slice(2);

const logoLines = [
  '███╗   ███╗██╗   ██╗██████╗ ██████╗ ██╗      ██████╗  ██████╗██╗  ██╗███████╗',
  '████╗ ████║██║   ██║██╔══██╗██╔══██╗██║     ██╔═══██╗██╔════╝██║ ██╔╝██╔════╝',
  '██╔████╔██║██║   ██║██████╔╝██████╔╝██║     ██║   ██║██║     █████╔╝ ███████╗',
  '██║╚██╔╝██║╚██╗ ██╔╝██╔═══╝ ██╔══██╗██║     ██║   ██║██║     ██╔═██╗ ╚════██║',
  '██║ ╚═╝ ██║ ╚████╔╝ ██║     ██████╔╝███████╗╚██████╔╝╚██████╗██║  ██╗███████║',
  '╚═╝     ╚═╝  ╚═══╝  ╚═╝     ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝',
];

// Rose color shades (top → bottom)
const roseColors = [
  '#fecdd3', // light rose
  '#f9a8d4',
  '#f472b6',
  '#ff4f97',
  '#ff1f7a',
  '#e60a64', // deep rose
];

// Helper: pick a solid color for the line
function createGradientText(text, index, total) {
  const colorIndex = Math.round(
    (index / (total - 1)) * (roseColors.length - 1),
  );
  return gradient([roseColors[colorIndex], roseColors[colorIndex]])(text);
}

const gradientLogo = `

   ${createGradientText(logoLines[0], 0, logoLines.length)}  
   ${createGradientText(logoLines[1], 1, logoLines.length)}  
   ${createGradientText(logoLines[2], 2, logoLines.length)}   
   ${createGradientText(logoLines[3], 3, logoLines.length)}   
   ${createGradientText(logoLines[4], 4, logoLines.length)}   
   ${createGradientText(logoLines[5], 5, logoLines.length)}   
                                                          
   ${createGradientText('✨ Copy, paste, customize—and launch your idea faster than ever! ✨', 3, 6)}   

`;

// Don't show logo by default - only on help and add commands

// Enhanced help message
function showHelp() {
  intro(gradientLogo); // Show beautiful gradient logo only on help

  console.log(`
${colors.bold(colors.cyan('📚 MVPBlocks CLI Usage:'))}

${colors.bold('Commands:')}
  ${colors.green('list')}              List all available components
  ${colors.green('add <component>')}   Add a component to your project
  ${colors.green('search <query>')}    Search for components
  ${colors.green('info <component>')}  Get detailed information about a component
  ${colors.green('help')}              Show this help message

${colors.bold('Examples:')}
  ${colors.dim('mvpblocks list')}
  ${colors.dim('mvpblocks add button')}
  ${colors.dim('mvpblocks search hero')}
  ${colors.dim('mvpblocks info hero-1')}

${colors.dim('💡 Run with your preferred package manager:')}
  ${colors.dim('npx mvpblocks add button')}     ${colors.dim('# npm')}
  ${colors.dim('bun x mvpblocks add button')}    ${colors.dim('# bun (or bunx)')}
  ${colors.dim('yarn dlx mvpblocks add button')} ${colors.dim('# yarn')}
  ${colors.dim('pnpm dlx mvpblocks add button')} ${colors.dim('# pnpm')}

${colors.bold('Options:')}
  ${colors.yellow('--ts, --typescript')}   Force TypeScript output
  ${colors.yellow('--js, --javascript')}   Force JavaScript output
  ${colors.yellow('--help, -h')}           Show help

${colors.bold('Registry Info:')}
  ${colors.cyan('📦 Total Components:')} ${REGISTRY_METADATA.totalComponents}
  ${colors.cyan('🎨 UI Components:')} ${REGISTRY_METADATA.uiComponents}
  ${colors.cyan('🧱 Block Components:')} ${REGISTRY_METADATA.blockComponents}
  ${colors.cyan('🪝 Hooks:')} ${REGISTRY_METADATA.hooks}
  ${colors.cyan('🛠️  Utils:')} ${REGISTRY_METADATA.utils}
  ${colors.cyan('📅 Last Updated:')} ${colors.dim(new Date(REGISTRY_METADATA.lastUpdated).toLocaleDateString())}

${colors.dim('💡 Visit')} ${colors.underline(colors.cyan('https://blocks.mvp-subha.me'))} ${colors.dim('for documentation and examples')}
`);
}

// Handle help command and flags
if (
  command === 'help' ||
  process.argv.includes('--help') ||
  process.argv.includes('-h')
) {
  showHelp();
  process.exit(0);
}

// Handle different commands
if (command === 'search') {
  if (!componentName) {
    cancel(
      colors.red(
        '❌ Please provide a search query. Usage: mvpblocks search <query>',
      ),
    );
    process.exit(1);
  }

  try {
    await searchComponents(componentName);
    console.log(colors.bold(colors.green('\n✨ Search completed!')));
    process.exit(0);
  } catch (err) {
    console.error(colors.red('❌ Search failed:'), err.message);
    process.exit(1);
  }
}

if (command === 'info') {
  if (!componentName) {
    cancel(
      colors.red(
        '❌ Please provide a component name. Usage: mvpblocks info <component>',
      ),
    );
    process.exit(1);
  }

  try {
    await showComponentInfo(componentName);
    console.log(colors.bold(colors.green('\n✨ Info displayed!')));
    process.exit(0);
  } catch (err) {
    console.error(colors.red('❌ Failed to get component info:'), err.message);
    process.exit(1);
  }
}

if (command === 'list') {
  console.log(colors.green('🚀 Loading interactive components list...'));
  await showInteractiveComponentsList();
  process.exit(0);
  console.log(colors.green('🚀 Loading interactive components list...'));
  await showInteractiveComponentsList();
  process.exit(0);
}
if (command !== 'add' || !componentName) {
  console.log(colors.yellow('⚠️  No command specified or invalid usage.'));
  showHelp();
  process.exit(0);
}

// Show gradient logo for add command
intro(gradientLogo);

// Check for language flags
let language;
if (process.argv.includes('--ts') || process.argv.includes('--typescript')) {
  language = 'ts';
} else if (
  process.argv.includes('--js') ||
  process.argv.includes('--javascript')
) {
  language = 'js';
} else {
  // Interactive language selection
  language = await select({
    message: `${colors.cyan('🎨')} Select the language for ${colors.bold(componentName)}:`,
    options: [
      {
        label: `${colors.green('⚡')} TypeScript (.tsx)`,
        value: 'ts',
        hint: 'Recommended for type safety',
      },
      {
        label: `${colors.yellow('⚡')} JavaScript (.jsx)`,
        value: 'js',
        hint: 'Simpler setup',
      },
    ],
  });

  if (isCancel(language)) {
    cancel(colors.red('Operation cancelled.'));
    process.exit(0);
  }
}

// Initialize Project Manager and detect project  
const projectManager = new ProjectManager();
const projectInfo = await projectManager.detectProject();

console.log(colors.dim(`🔍 Debug: Project detection result:`));
console.log(colors.dim(`  - hasPackageJson: ${projectInfo.hasPackageJson}`));
console.log(colors.dim(`  - cwd: ${projectManager.cwd}`));
console.log(colors.dim(`  - files in cwd: ${fs.readdirSync(projectManager.cwd).join(', ')}`));

// Handle empty directory (no package.json)
if (!projectInfo.hasPackageJson) {
  console.log(colors.cyan('\n📂 No package.json found in current directory.'));
  console.log(colors.dim('Let\'s set up a new project for you!\n'));

  const shouldInitialize = await confirm({
    message: 'Would you like to start a new project?',
    initialValue: true,
  });

  if (isCancel(shouldInitialize) || !shouldInitialize) {
    cancel(colors.red('Cannot install components without a project. Please create a package.json or initialize a project first.'));
    process.exit(0);
  }

  // Select framework
  const framework = await select({
    message: 'Which framework would you like to use?',
    options: [
      {
        label: `${colors.green('⚡')} Next.js`,
        value: 'nextjs',
        hint: 'React framework with SSR/SSG',
      },
      {
        label: `${colors.cyan('⚡')} Vite + React`,
        value: 'vite',
        hint: 'Fast build tool with React',
      },
    ],
  });

  if (isCancel(framework)) {
    cancel(colors.red('Operation cancelled.'));
    process.exit(0);
  }

  // Get project name
  const currentDirName = path.basename(process.cwd());
  const isEmpty = fs.readdirSync(process.cwd()).length === 0;
  
  const projectName = await text({
    message: isEmpty ? 'What is your project named?' : 'What is your project named?',
    initialValue: isEmpty ? currentDirName : 'my-app',
    validate: (value) => {
      if (!value) return 'Project name is required';
      if (value === '.' || value === currentDirName) return undefined; // Allow '.' for current directory
      if (!/^[a-z0-9-]+$/.test(value)) return 'Project name must be lowercase, numbers, and dashes only';
      return undefined;
    },
  });

  if (isCancel(projectName)) {
    cancel(colors.red('Operation cancelled.'));
    process.exit(0);
  }

  // Auto-detect TypeScript preference if not specified
  let useTypeScript;
  if (language) {
    useTypeScript = language === 'ts';
  } else {
    useTypeScript = await confirm({
      message: 'Would you like to use TypeScript?',
      initialValue: true,
    });

    if (isCancel(useTypeScript)) {
      cancel(colors.red('Operation cancelled.'));
      process.exit(0);
    }

    // Set language based on choice
    language = useTypeScript ? 'ts' : 'js';
  }

  // Initialize the project
  await projectManager.initializeProject(projectName, framework, useTypeScript);
  
  console.log(colors.green('✅ Project created successfully!'));
  
  // Re-detect project after creation
  projectManager.cwd = process.cwd();
  await projectManager.detectProject();
}

// If language wasn't set yet, auto-detect or prompt
if (!language) {
  // Auto-detect based on project
  if (projectManager.shouldUseTypeScript()) {
    language = 'ts';
    console.log(colors.dim('🔍 Auto-detected TypeScript project'));
  } else {
    // Interactive language selection
    language = await select({
      message: `${colors.cyan('🎨')} Select the language for ${colors.bold(componentName)}:`,
      options: [
        {
          label: `${colors.green('⚡')} TypeScript (.tsx)`,
          value: 'ts',
          hint: 'Recommended for type safety',
        },
        {
          label: `${colors.yellow('⚡')} JavaScript (.jsx)`,
          value: 'js',
          hint: 'Simpler setup',
        },
      ],
    });

    if (isCancel(language)) {
      cancel(colors.red('Operation cancelled.'));
      process.exit(0);
    }
  }
}

// Fast Interactive Components List with Pagination
async function showInteractiveComponentsList() {
  // Prepare components data with categories (fast - no network requests!)
  const components = AVAILABLE_COMPONENTS.map(name => {
    let category = 'Other';
    
    // Categorize based on component name patterns (fast local categorization)
    if (['accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'avatar', 'badge', 'border-beam', 'breadcrumb', 'button', 'calendar', 'card', 'carousel', 'chart', 'checkbox', 'collapsible', 'command', 'context-menu', 'dialog', 'drawer', 'dropdown-menu', 'form', 'globe', 'gradient-bars', 'hover-card', 'input', 'input-otp', 'label', 'marquee', 'menubar', 'multi-step-form', 'navigation-menu', 'pagination', 'particles', 'payment-modal', 'phone-mockup', 'popover', 'pricing-card', 'progress', 'pulse-card', 'radio-group', 'resizable', 'scroll-area', 'scrollbasedvelocity', 'select', 'separator', 'sheet', 'sidebar', 'skeleton', 'slider', 'sonner', 'sparkles', 'spotlight', 'switch', 'table', 'tabs', 'text-reveal', 'textarea', 'toast', 'toggle', 'toggle-group', 'tooltip', 'typewriter'].includes(name)) {
      category = 'UI Components';
    } else if (['use-auto-resize-textarea', 'use-mobile', 'use-toast'].includes(name)) {
      category = 'Hooks';
    } else if (name === 'utils') {
      category = 'Utils/Lib';
    } else {
      category = 'Blocks';
    }
    
    return { name, category };
  });

  const ITEMS_PER_PAGE = 10;
  let currentPage = 0;
  const totalPages = Math.ceil(components.length / ITEMS_PER_PAGE);

  const displayPage = (page) => {
    // Clear the screen properly
    process.stdout.write('\x1bc'); // Reset terminal completely
    
    // Header
    console.log(colors.bold(colors.green('\n🎯 MVPBlocks Components Library')));
    console.log(colors.dim(`📦 ${components.length} components available\n`));
    
    // Table header
    console.log(colors.bold(colors.cyan('┌─────┬───────────────────────────────────┬─────────────────┐')));
    console.log(colors.bold(colors.cyan('│ No. │ Component Name                    │ Category        │')));
    console.log(colors.bold(colors.cyan('├─────┼───────────────────────────────────┼─────────────────┤')));
    
    // Table rows
    const startIdx = page * ITEMS_PER_PAGE;
    const endIdx = Math.min(startIdx + ITEMS_PER_PAGE, components.length);
    
    for (let i = startIdx; i < endIdx; i++) {
      const component = components[i];
      const rowNum = String(i + 1).padStart(3);
      const name = component.name.padEnd(33);
      const category = component.category.padEnd(15);
      
      console.log(colors.white(`│ ${colors.yellow(rowNum)} │ ${colors.green(name)} │ ${colors.blue(category)} │`));
    }
    
    // Fill empty rows if needed
    const remainingRows = ITEMS_PER_PAGE - (endIdx - startIdx);
    for (let i = 0; i < remainingRows; i++) {
      console.log(colors.dim('│     │                                   │                 │'));
    }
    
    // Table footer
    console.log(colors.bold(colors.cyan('└─────┴───────────────────────────────────┴─────────────────┘')));
    
    // Pagination info
    console.log(colors.dim(`\nPage ${page + 1} of ${totalPages} (showing ${startIdx + 1}-${endIdx} of ${components.length})`));
    
    // Controls
    console.log(colors.bold(colors.yellow('\n📋 Navigation:')));
    console.log(colors.dim('  A - Previous page, D - Next page, ESC - Exit'));
    console.log(colors.dim(`\n💡 Use 'mvpblocks add <component-name>' to install a component`));
  };

  displayPage(currentPage);

  // Simple single-character input handling
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  return new Promise((resolve) => {
    const handleInput = (chunk) => {
      const key = chunk.toString();
      
      // ESC key
      if (key === '\u001b') {
        process.stdin.setRawMode(false);
        process.stdin.removeListener('data', handleInput);
        process.stdout.write('\x1bc'); // Reset terminal
        resolve();
        return;
      }
      
      // Handle navigation - only accept single key presses
      if (key === 'a' || key === 'A') {
        if (currentPage > 0) {
          currentPage--;
          displayPage(currentPage);
        }
      } else if (key === 'd' || key === 'D') {
        if (currentPage < totalPages - 1) {
          currentPage++;
          displayPage(currentPage);
        }
      }
      // Ignore all other keys
    };

    process.stdin.on('data', handleInput);
  });
}

// Fast Interactive Components List with Pagination
async function showInteractiveComponentsList() {
  // Prepare components data with categories (fast - no network requests!)
  const components = AVAILABLE_COMPONENTS.map(name => {
    let category = 'Other';
    
    // Categorize based on component name patterns (fast local categorization)
    if (['accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'avatar', 'badge', 'border-beam', 'breadcrumb', 'button', 'calendar', 'card', 'carousel', 'chart', 'checkbox', 'collapsible', 'command', 'context-menu', 'dialog', 'drawer', 'dropdown-menu', 'form', 'globe', 'gradient-bars', 'hover-card', 'input', 'input-otp', 'label', 'marquee', 'menubar', 'multi-step-form', 'navigation-menu', 'pagination', 'particles', 'payment-modal', 'phone-mockup', 'popover', 'pricing-card', 'progress', 'pulse-card', 'radio-group', 'resizable', 'scroll-area', 'scrollbasedvelocity', 'select', 'separator', 'sheet', 'sidebar', 'skeleton', 'slider', 'sonner', 'sparkles', 'spotlight', 'switch', 'table', 'tabs', 'text-reveal', 'textarea', 'toast', 'toggle', 'toggle-group', 'tooltip', 'typewriter'].includes(name)) {
      category = 'UI Components';
    } else if (['use-auto-resize-textarea', 'use-mobile', 'use-toast'].includes(name)) {
      category = 'Hooks';
    } else if (name === 'utils') {
      category = 'Utils/Lib';
    } else {
      category = 'Blocks';
    }
    
    return { name, category };
  });

  const ITEMS_PER_PAGE = 10;
  let currentPage = 0;
  const totalPages = Math.ceil(components.length / ITEMS_PER_PAGE);

  const displayPage = (page) => {
    // Clear the screen properly
    process.stdout.write('\x1bc'); // Reset terminal completely
    
    // Header
    console.log(colors.bold(colors.green('\n🎯 MVPBlocks Components Library')));
    console.log(colors.dim(`📦 ${components.length} components available\n`));
    
    // Table header
    console.log(colors.bold(colors.cyan('┌─────┬───────────────────────────────────┬─────────────────┐')));
    console.log(colors.bold(colors.cyan('│ No. │ Component Name                    │ Category        │')));
    console.log(colors.bold(colors.cyan('├─────┼───────────────────────────────────┼─────────────────┤')));
    
    // Table rows
    const startIdx = page * ITEMS_PER_PAGE;
    const endIdx = Math.min(startIdx + ITEMS_PER_PAGE, components.length);
    
    for (let i = startIdx; i < endIdx; i++) {
      const component = components[i];
      const rowNum = String(i + 1).padStart(3);
      const name = component.name.padEnd(33);
      const category = component.category.padEnd(15);
      
      console.log(colors.white(`│ ${colors.yellow(rowNum)} │ ${colors.green(name)} │ ${colors.blue(category)} │`));
    }
    
    // Fill empty rows if needed
    const remainingRows = ITEMS_PER_PAGE - (endIdx - startIdx);
    for (let i = 0; i < remainingRows; i++) {
      console.log(colors.dim('│     │                                   │                 │'));
    }
    
    // Table footer
    console.log(colors.bold(colors.cyan('└─────┴───────────────────────────────────┴─────────────────┘')));
    
    // Pagination info
    console.log(colors.dim(`\nPage ${page + 1} of ${totalPages} (showing ${startIdx + 1}-${endIdx} of ${components.length})`));
    
    // Controls
    console.log(colors.bold(colors.yellow('\n📋 Navigation:')));
    console.log(colors.dim('  A - Previous page, D - Next page, ESC - Exit'));
    console.log(colors.dim(`\n💡 Use 'mvpblocks add <component-name>' to install a component`));
  };

  displayPage(currentPage);

  // Simple single-character input handling
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  return new Promise((resolve) => {
    const handleInput = (chunk) => {
      const key = chunk.toString();
      
      // ESC key
      if (key === '\u001b') {
        process.stdin.setRawMode(false);
        process.stdin.removeListener('data', handleInput);
        process.stdout.write('\x1bc'); // Reset terminal
        resolve();
        return;
      }
      
      // Handle navigation - only accept single key presses
      if (key === 'a' || key === 'A') {
        if (currentPage > 0) {
          currentPage--;
          displayPage(currentPage);
        }
      } else if (key === 'd' || key === 'D') {
        if (currentPage < totalPages - 1) {
          currentPage++;
          displayPage(currentPage);
        }
      }
      // Ignore all other keys
    };

    process.stdin.on('data', handleInput);
  });
}

// Simple registry fetching - using constants from auto-generated file!
// 🔄 Components are automatically synced by running: bun run build:registry
async function fetchRegistry() {
  console.log(
    colors.dim(
      `🔍 Loading ${AVAILABLE_COMPONENTS.length} components from registry...`,
    ),
  );

  const validComponents = [];

  // Test each component to see if it exists and fetch its data
  for (const componentName of AVAILABLE_COMPONENTS) {
    try {
      const response = await fetch(
        `${COMPONENTS_BASE_URL}/${componentName}.json`,
      );
      if (response.ok) {
        const data = await response.json();
        validComponents.push({
          name: data.name || componentName,
          type: data.type || 'registry:ui',
          description: data.description || '',
          dependencies: data.dependencies || [],
          registryDependencies: data.registryDependencies || [],
          categories: data.categories || [],
          files: data.files || [],
        });
      }
    } catch (error) {
      // Component doesn't exist or network error, skip it silently
    }
  }

  console.log(
    colors.dim(`✅ Successfully loaded ${validComponents.length} components`),
  );
  return { items: validComponents };
}
// Remove all the complex parsing functions - we don't need them anymore!

async function fetchComponentData(componentName) {
  const url = `${COMPONENTS_BASE_URL}/${componentName}.json`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Component '${componentName}' not found. Use 'mvpblocks list' to see available components.`,
    );
  }

  return await response.json();
}

// Helper function to process registry dependencies recursively
async function processRegistryDependencies(registryDependencies, projectManager, targetLanguage) {
  if (!registryDependencies?.length) return;
  
  console.log(colors.blue(`📦 Processing ${registryDependencies.length} registry dependencies...`));
  
  for (const registryItem of registryDependencies) {
    try {
      // Handle both full URLs and component names
      let registryUrl;
      let componentName;
      
      if (registryItem.startsWith('http')) {
        // Full URL like "https://blocks.mvp-subha.me/r/sidebar.json"
        registryUrl = registryItem;
        componentName = registryItem.split('/').pop().replace('.json', '');
      } else {
        // Component name like "button", "separator"
        componentName = registryItem;
        registryUrl = `${COMPONENTS_BASE_URL}/${componentName}.json`;
      }
      
      console.log(colors.dim(`  → Fetching ${registryUrl}`));
      const response = await fetch(registryUrl);
      if (!response.ok) {
        console.log(colors.yellow(`  ⚠️  Warning: Could not fetch ${registryUrl} (${response.status})`));
        continue;
      }
      
      const registryComponentData = await response.json();
      
      console.log(colors.dim(`  → Installing registry component: ${componentName}`));
      
      // Install files for this registry component
      if (registryComponentData.files?.length) {
        for (const file of registryComponentData.files) {
          await downloadFileFromGitHub(file, registryComponentData, projectManager);
        }
      }
      
      // Recursively process its registry dependencies
      if (registryComponentData.registryDependencies?.length) {
        await processRegistryDependencies(registryComponentData.registryDependencies, projectManager, targetLanguage);
      }
      
      // Install its npm dependencies
      if (registryComponentData.dependencies?.length) {
        const pm = detectPackageManager();
        console.log(colors.dim(`  → Installing npm dependencies for ${componentName}: ${registryComponentData.dependencies.join(', ')}`));
        
        try {
          const cmd = pm === 'npm' ? ['install', ...registryComponentData.dependencies] : ['add', ...registryComponentData.dependencies];
          await execa(pm, cmd, { stdio: 'pipe' }); // Use pipe to avoid spam
        } catch (err) {
          console.log(colors.yellow(`  ⚠️  Warning: Failed to install dependencies for ${componentName}`));
        }
      }
      
    } catch (error) {
      console.log(colors.yellow(`  ⚠️  Warning: Failed to process registry dependency ${registryItem}: ${error.message}`));
    }
  }
}

async function searchComponents(query) {
  const s = spinner();
  s.start(colors.white(`🔍 Searching for "${query}"...`));

  try {
    const registry = await fetchRegistry();
    const results = registry.items.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(query.toLowerCase())),
    );

    s.stop();
    console.log(
      colors.green(
        `\n🎯 Found ${results.length} components matching "${query}":`,
      ),
    );

    if (results.length === 0) {
      console.log(
        colors.yellow('No components found. Try a different search term.'),
      );
      return;
    }

    for (const item of results) {
      console.log(
        `${colors.green('*')} ${colors.bold(item.name)} ${item.description ? colors.dim(`- ${item.description}`) : ''}`,
      );
    }

    return results;
  } catch (err) {
    s.stop();
    console.error(colors.red('❌ Search failed:'), err.message);
    throw err;
  }
}

async function showComponentInfo(componentName) {
  const s = spinner();
  s.start(colors.white(`📋 Fetching info for "${componentName}"...`));

  try {
    const componentData = await fetchComponentData(componentName);
    s.stop();
    console.log(colors.green(`\n📋 Component: ${colors.bold(componentName)}`));

    console.log(`
${colors.bold('Name:')} ${componentData.name}
${colors.bold('Type:')} ${colors.cyan(componentData.type)}
${componentData.description ? `${colors.bold('Description:')} ${componentData.description}` : ''}
${componentData.dependencies?.length ? `${colors.bold('Dependencies:')} ${componentData.dependencies.join(', ')}` : ''}
${componentData.registryDependencies?.length ? `${colors.bold('Registry Dependencies:')} ${componentData.registryDependencies.join(', ')}` : ''}
${colors.bold('Files:')} ${componentData.files?.length || 0} file(s)
`);

    if (componentData.files) {
      console.log(colors.bold('📁 Files included:'));
      componentData.files.forEach((file) => {
        console.log(`  ${colors.green('*')} ${file.target || file.path}`);
      });
    }
  } catch (err) {
    s.stop();
    console.error(
      colors.red(`❌ Failed to fetch info for "${componentName}".`),
    );
    throw err;
  }
}

async function convertTsxToJsx(code) {
  const transpiled = ts.transpileModule(code, {
    compilerOptions: {
      jsx: ts.JsxEmit.Preserve,
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
      allowJs: true,
    },
    fileName: 'component.tsx',
  }).outputText;
  return await format(transpiled, {
    parser: 'babel',
    plugins: [babel, estree],
    singleQuote: false,
    semi: true,
    trailingComma: 'all',
    tabWidth: 2,
    printWidth: 80,
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'always',
    endOfLine: 'lf',
    bracketSameLine: true,
  });
}

async function downloadFileFromGitHub(file, componentData, projectManager) {
  const fileContent = file.content;
  const targetPath = file.target || file.path;

  if (!fileContent) {
    throw new Error(`No content found for file: ${targetPath}`);
  }

  const fileName = path.basename(targetPath);
  const isCss = fileName.endsWith('.css');
  const isHook = targetPath.includes('/hooks/') || fileName.startsWith('use-');
  const isLib = targetPath.includes('/lib/') || fileName === 'utils.ts' || fileName === 'utils.js';

  // Use ProjectManager for smart path resolution
  let targetDir;
  if (isCss) {
    const componentsDir = projectManager.getResolvedPath('components');
    targetDir = path.join(componentsDir, 'mvpblocks', 'styles');
  } else if (isHook) {
    targetDir = projectManager.getResolvedPath('hooks');
  } else if (isLib) {
    targetDir = projectManager.getResolvedPath('lib');
    
    // Skip utils.ts/utils.js if it already exists
    const utilsPath = path.join(targetDir, fileName);
    if (fs.existsSync(utilsPath)) {
      console.log(colors.dim(`  → Skipping ${fileName} (already exists)`));
      return;
    }
  } else if (targetPath.includes('/ui/')) {
    const componentsDir = projectManager.getResolvedPath('components');
    targetDir = path.join(componentsDir, 'ui');
  } else {
    // For block components, use a more organized structure
    const componentsDir = projectManager.getResolvedPath('components');
    const componentType = componentData.type === 'registry:block' ? 'mvpblocks' : 'ui';
    targetDir = path.join(componentsDir, componentType);
  }

  const finalTargetPath = path.join(targetDir, fileName);

  // Convert .tsx to .jsx if JS mode and it's a .tsx file
  if (!isCss && language === 'js' && fileName.endsWith('.tsx')) {
    const jsx = await convertTsxToJsx(fileContent);
    const newPath = finalTargetPath.replace(/\.tsx$/, '.jsx');
    await fs.promises.mkdir(path.dirname(newPath), { recursive: true });
    await fs.promises.writeFile(newPath, jsx.trim(), 'utf8');
    console.log(
      colors.cyan(
        `📦 Saved: ${colors.dim(path.relative(process.cwd(), newPath))}`,
      ),
    );
  } else {
    await fs.promises.mkdir(targetDir, { recursive: true });
    await fs.promises.writeFile(finalTargetPath, fileContent, 'utf8');
    console.log(
      colors.cyan(
        `📦 Saved: ${colors.dim(path.relative(process.cwd(), finalTargetPath))}`,
      ),
    );
  }
}

// Main component installation logic
const s = spinner();
s.start(colors.white(`🚀 Installing ${colors.bold(componentName)}...`));

try {
  const componentData = await fetchComponentData(componentName);

  if (!componentData) {
    s.stop(colors.red(`❌ Component '${componentName}' not found.`));
    console.log(
      colors.yellow(`💡 Use 'mvpblocks list' to see available components`),
    );
    console.log(
      colors.yellow(
        `💡 Use 'mvpblocks search <query>' to search for components`,
      ),
    );
    process.exit(1);
  }

  // Create utils file if it doesn't exist using smart path resolution
  const cnContent = {
    ts: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
    js: `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}`,
  };

  const utilsPath = projectManager.getResolvedPath('lib');
  const tsUtilsPath = path.join(utilsPath, 'utils.ts');
  const jsUtilsPath = path.join(utilsPath, 'utils.js');
  
  // Check if any utils file already exists
  if (!fs.existsSync(tsUtilsPath) && !fs.existsSync(jsUtilsPath)) {
    const cnPath = path.join(utilsPath, `utils.${language === 'js' ? 'js' : 'ts'}`);
    await fs.promises.mkdir(utilsPath, { recursive: true });
    await fs.promises.writeFile(cnPath, cnContent[language], 'utf8');
    console.log(
      colors.green(
        `🛠️  Created ${colors.dim(path.relative(process.cwd(), cnPath))}`,
      ),
    );
  }

  // Download component files
  if (componentData.files && componentData.files.length > 0) {
    for (const file of componentData.files) {
      await downloadFileFromGitHub(file, componentData, projectManager);
    }
  } else {
    console.log(colors.yellow('⚠️  No files found for this component.'));
  }

  s.stop(
    colors.green(`✅ ${colors.bold(componentName)} installed successfully!`),
  );

  // Install registry dependencies first (recursively install other components)
  if (componentData.registryDependencies?.length) {
    await processRegistryDependencies(componentData.registryDependencies, projectManager, language);
  }

  // Install regular npm dependencies
  if (componentData.dependencies?.length) {
    const npmDependencies = componentData.dependencies.filter(Boolean);

    if (npmDependencies.length > 0) {
      const pm = detectPackageManager();
      const s2 = spinner();
      s2.start(
        colors.white(
          `📦 Installing npm dependencies with ${colors.bold(pm)}: ${colors.dim(npmDependencies.join(', '))}`,
        ),
      );

      try {
        const cmd =
          pm === 'npm'
            ? ['install', ...npmDependencies]
            : ['add', ...npmDependencies];
        await execa(pm, cmd, { stdio: 'inherit' });
        s2.stop(colors.green('✅ Dependencies installed successfully!'));
      } catch (err) {
        s2.stop(colors.red('❌ Failed to install dependencies.'));
        console.error(colors.dim('You may need to install them manually:'));
        console.error(
          colors.yellow(
            `${pm} ${pm === 'npm' ? 'install' : 'add'} ${npmDependencies.join(' ')}`,
          ),
        );
      }
    }
  }

  // Success message with additional info
  console.log(`
${colors.bold(colors.green('🎉 Installation Complete!'))}

${colors.bold("What's next?")}
${colors.green('*')} Import and use ${colors.bold(componentName)} in your project
${colors.green('*')} Check the component files in your ${colors.dim('components/')} directory
${colors.green('*')} Visit ${colors.underline(colors.cyan('https://blocks.mvp-subha.me'))} for documentation

${colors.dim('Happy coding! 🚀')}
`);

  console.log(colors.bold(colors.green('✨ Done!')));
} catch (err) {
  s.stop(colors.red('❌ Installation failed.'));
  console.error(colors.red('Error:'), err.message);

  if (err.message.includes('not found')) {
    console.log(colors.yellow(`\n💡 Suggestions:`));
    console.log(colors.yellow(`  • Check the component name spelling`));
    console.log(
      colors.yellow(`  • Use 'mvpblocks list' to see available components`),
    );
    console.log(
      colors.yellow(
        `  • Use 'mvpblocks search <query>' to find similar components`,
      ),
    );
  }

  process.exit(1);
}
