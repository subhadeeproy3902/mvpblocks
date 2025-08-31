#!/usr/bin/env node
import { intro, outro, spinner, cancel, select, text, confirm, isCancel } from "@clack/prompts";
import { format } from "prettier/standalone";
import babel from "prettier/plugins/babel";
import estree from "prettier/plugins/estree";
import ts from "typescript";
import colors from "picocolors";
import fs from "fs";
import path from "path";
import { execa } from "execa";
import fetch from "node-fetch";
import chalk from "chalk";
import gradient from "gradient-string";

// MVPBlocks Configuration - Simple and direct!
const MVPBLOCKS_BASE_URL = "https://blocks.mvp-subha.me";
const COMPONENTS_BASE_URL = `${MVPBLOCKS_BASE_URL}/r`;

// CLI args
const [command, componentName, ...additionalArgs] = process.argv.slice(2);

const logoLines = [
  "███╗   ███╗██╗   ██╗██████╗ ██████╗ ██╗      ██████╗  ██████╗██╗  ██╗███████╗",
  "████╗ ████║██║   ██║██╔══██╗██╔══██╗██║     ██╔═══██╗██╔════╝██║ ██╔╝██╔════╝",
  "██╔████╔██║██║   ██║██████╔╝██████╔╝██║     ██║   ██║██║     █████╔╝ ███████╗",
  "██║╚██╔╝██║╚██╗ ██╔╝██╔═══╝ ██╔══██╗██║     ██║   ██║██║     ██╔═██╗ ╚════██║",
  "██║ ╚═╝ ██║ ╚████╔╝ ██║     ██████╔╝███████╗╚██████╔╝╚██████╗██║  ██╗███████║",
  "╚═╝     ╚═╝  ╚═══╝  ╚═╝     ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝"
];

// Rose color shades (top → bottom)
const roseColors = [
  "#fecdd3", // light rose
  "#f9a8d4",
  "#f472b6",
  "#ff4f97",
  "#ff1f7a",
  "#e60a64"  // deep rose
];

// Helper: pick a solid color for the line
function createGradientText(text, index, total) {
  const colorIndex = Math.round((index / (total - 1)) * (roseColors.length - 1));
  return gradient([roseColors[colorIndex], roseColors[colorIndex]])(text);
}

const gradientLogo = `

   ${createGradientText(logoLines[0], 0, logoLines.length)}  
   ${createGradientText(logoLines[1], 1, logoLines.length)}  
   ${createGradientText(logoLines[2], 2, logoLines.length)}   
   ${createGradientText(logoLines[3], 3, logoLines.length)}   
   ${createGradientText(logoLines[4], 4, logoLines.length)}   
   ${createGradientText(logoLines[5], 5, logoLines.length)}   
                                                          
   ${createGradientText("✨ Copy, paste, customize—and launch your idea faster than ever! ✨", 3, 6)}   

`;

// Don't show logo by default - only on help and add commands

// Enhanced help message
function showHelp() {
  intro(gradientLogo); // Show beautiful gradient logo only on help
  
  console.log(`
${colors.bold(colors.cyan("📚 MVPBlocks CLI Usage:"))}

${colors.bold("Commands:")}
  ${colors.green("list")}              List all available components
  ${colors.green("add <component>")}   Add a component to your project
  ${colors.green("search <query>")}    Search for components
  ${colors.green("info <component>")}  Get detailed information about a component
  ${colors.green("help")}              Show this help message

${colors.bold("Examples:")}
  ${colors.dim("npx mvpblocks list")}
  ${colors.dim("npx mvpblocks add button")}
  ${colors.dim("npx mvpblocks search hero")}
  ${colors.dim("npx mvpblocks info hero-1")}

${colors.bold("Options:")}
  ${colors.yellow("--ts, --typescript")}   Force TypeScript output
  ${colors.yellow("--js, --javascript")}   Force JavaScript output
  ${colors.yellow("--help, -h")}           Show help

${colors.dim("💡 Visit")} ${colors.underline(colors.cyan("https://blocks.mvp-subha.me"))} ${colors.dim("for documentation and examples")}
`);
}

// Handle help command and flags
if (command === "help" || process.argv.includes("--help") || process.argv.includes("-h")) {
  showHelp();
  process.exit(0);
}

// Handle different commands
if (command === "search") {
  if (!componentName) {
    cancel(colors.red("❌ Please provide a search query. Usage: npx mvpblocks search <query>"));
    process.exit(1);
  }
  
  try {
    await searchComponents(componentName);
    console.log(colors.bold(colors.green("\n✨ Search completed!")));
    process.exit(0);
  } catch (err) {
    console.error(colors.red("❌ Search failed:"), err.message);
    process.exit(1);
  }
}

if (command === "info") {
  if (!componentName) {
    cancel(colors.red("❌ Please provide a component name. Usage: npx mvpblocks info <component>"));
    process.exit(1);
  }
  
  try {
    await showComponentInfo(componentName);
    console.log(colors.bold(colors.green("\n✨ Info displayed!")));
    process.exit(0);
  } catch (err) {
    console.error(colors.red("❌ Failed to get component info:"), err.message);
    process.exit(1);
  }
}

if (command === "list") {
  const s = spinner();
  s.start(colors.white("🔍 Fetching available components..."));
  try {
    const registry = await fetchRegistry();
    s.stop();
    console.log(colors.green(`\n📁 Found ${registry.items.length} components:\n`));
    
    // Group components by type for better organization
    const componentsByType = {};
    registry.items.forEach(item => {
      const type = item.type || "other";
      if (!componentsByType[type]) {
        componentsByType[type] = [];
      }
      componentsByType[type].push(item);
    });
    
    // Display components grouped by type
    Object.entries(componentsByType).forEach(([type, components]) => {
      console.log(colors.bold(colors.cyan(`\n${type.toUpperCase()}:`)));
      components.forEach(item => {
        console.log(`${colors.green("*")} ${colors.bold(item.name)} ${item.description ? colors.dim(`- ${item.description}`) : ''}`);
      });
    });
    
    console.log(colors.dim(`\n💡 Use 'npx mvpblocks add <component-name>' to add a component`));
    console.log(colors.dim(`💡 Use 'npx mvpblocks info <component-name>' for detailed information`));
    
    console.log(colors.bold(colors.green("\n✨ Complete list displayed!")));
    process.exit(0);
  } catch (err) {
    s.stop();
    console.error(colors.red("❌ Failed to fetch registry."));
    console.error(err.message);
    process.exit(1);
  }
}
if (command !== "add" || !componentName) {
  console.log(colors.yellow("⚠️  No command specified or invalid usage."));
  showHelp();
  process.exit(0);
}

// Show gradient logo for add command
intro(gradientLogo);

// Check for language flags
let language;
if (process.argv.includes("--ts") || process.argv.includes("--typescript")) {
  language = "ts";
} else if (process.argv.includes("--js") || process.argv.includes("--javascript")) {
  language = "js";
} else {
  // Interactive language selection
  language = await select({
    message: `${colors.cyan("🎨")} Select the language for ${colors.bold(componentName)}:`,
    options: [
      { 
        label: `${colors.green("⚡")} TypeScript (.tsx)`, 
        value: "ts",
        hint: "Recommended for type safety"
      },
      { 
        label: `${colors.yellow("⚡")} JavaScript (.jsx)`, 
        value: "js",
        hint: "Simpler setup"
      },
    ],
  });
  
  if (isCancel(language)) {
    cancel(colors.red("Operation cancelled."));
    process.exit(0);
  }
}

// Simple registry fetching - using only /r/ endpoints!
async function fetchRegistry() {
  // Get list of all available components from the public/r directory
  // We'll maintain this list based on what's actually available
  const availableComponents = [
    // UI Components
    'button', 'input', 'card', 'badge', 'avatar', 'alert', 'alert-dialog', 
    'accordion', 'aspect-ratio', 'breadcrumb', 'calendar', 'carousel', 
    'chart', 'checkbox', 'collapsible', 'command', 'context-menu', 
    'dialog', 'drawer', 'dropdown-menu', 'form', 'hover-card', 'input-otp',
    'label', 'menubar', 'navigation-menu', 'pagination', 'popover', 
    'progress', 'radio-group', 'resizable', 'scroll-area', 'select',
    'separator', 'sheet', 'skeleton', 'slider', 'sonner', 'switch',
    'table', 'tabs', 'textarea', 'toast', 'toggle', 'toggle-group', 'tooltip',
    
    // Block Components  
    'hero-1', 'pricing-card', 'pricing-2', 'pricing-3', 'pricing-4', 'pricing-5',
    'footer-4col', 'footer-glow', 'footer-newsletter', 'contact-us-1', 'contact-us-2',
    'team-1', 'team-2', 'team-3', 'team-4', 'team-5', 'team-6', 'team-7', 'team-8', 'team-9', 'team-10',
    'feature-1', 'feature-2', 'feature-3', 'testimonials-carousel', 'testimonials-marquee',
    'cta-1', 'cta-2', 'cta-3', 'login-form1', 'login-form-2', 'login-form-3',
    'signup-modal', 'signin-modal', 'about-us-1', 'about-us-2', 'faq-1', 'faq-2', 'faq-3',
    'bento-grid-1', 'bento-grid-2', 'masonry-grid-1', 'header-1', 'header-2',
    'admin-dashboard-1', 'admin-sidebar', 'dashboard-card', 'dashboard-header',
    'revenue-chart', 'users-table', 'recent-activity', 'system-status',
    'quick-actions', 'skeleton-card-one', 'skeleton-table-one', 'skeleton-table-two',
    'trading', 'payment-modal', 'delete-project', 'multi-step-form', 'waitlist',
    
    // Animated Components
    'animated-ai-chat', 'animated-btn1', 'btn-gradient1', 'download-animated-btn',
    'gradient-bars', 'sparkles', 'sparkles-logo', 'text-reveal', 'text-reveal-1', 'text-reveal-2',
    'typewriter', 'gradient-typewriter', 'marquee', 'spotlight', 'globe', 'globe1', 'globe2', '3dglobe',
    'particles', 'border-beam', 'glow-card', 'pulse-card', 'retro-card', 'flip-card', 'dot-card', 'meshy-cards',
    
    // Loaders
    'bouncing-loader', 'classic-loader', 'modified-classic-loader', 'concentric-loader',
    'pulsating-loader', 'ripple-loader', 'spiral-loader',
    
    // Heroes
    'app-hero', 'fitness-hero', 'geometric-hero', 'gradient-hero', 'minimal-hero', 'mockup-hero', 'web3-hero',
    
    // Pricing
    'simple-pricing', 'congusted-pricing', 'designer-pricing', 'technical-pricing', 'pricing-glassmorphism', 'pricing-with-modals',
    
    // Special
    'notebook', 'phone-mockup', 'twittercard', 'star-on-github', 'v0-chat', 'working-chatbot',
    'conversation1', 'circular-text', 'ellipsis-block', 'interactive-tooltip', 'toc-dialog',
    'scrollbasedvelocity', 'code-block-1', 'product-1',
    
    // Hooks
    'use-auto-resize-textarea', 'use-mobile', 'use-toast',
    
    // Utils
    'utils'
  ];

  const validComponents = [];
  
  // Test each component to see if it exists and fetch its data
  for (const componentName of availableComponents) {
    try {
      const response = await fetch(`${COMPONENTS_BASE_URL}/${componentName}.json`);
      if (response.ok) {
        const data = await response.json();
        validComponents.push({
          name: data.name || componentName,
          type: data.type || 'registry:ui',
          description: data.description || '',
          dependencies: data.dependencies || [],
          registryDependencies: data.registryDependencies || [],
          categories: data.categories || [],
          files: data.files || []
        });
      }
    } catch (error) {
      // Component doesn't exist or network error, skip it silently
    }
  }
  
  return { items: validComponents };
}

// Remove all the complex parsing functions - we don't need them anymore!

async function fetchComponentData(componentName) {
  const url = `${COMPONENTS_BASE_URL}/${componentName}.json`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Component '${componentName}' not found. Use 'npx mvpblocks list' to see available components.`);
  }
  
  return await response.json();
}

async function searchComponents(query) {
  const s = spinner();
  s.start(colors.white(`🔍 Searching for "${query}"...`));
  
  try {
    const registry = await fetchRegistry();
    const results = registry.items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
    );
    
    s.stop();
    console.log(colors.green(`\n🎯 Found ${results.length} components matching "${query}":`));
    
    if (results.length === 0) {
      console.log(colors.yellow("No components found. Try a different search term."));
      return;
    }
    
    for (const item of results) {
      console.log(`${colors.green("*")} ${colors.bold(item.name)} ${item.description ? colors.dim(`- ${item.description}`) : ''}`);
    }
    
    return results;
  } catch (err) {
    s.stop();
    console.error(colors.red("❌ Search failed:"), err.message);
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
${colors.bold("Name:")} ${componentData.name}
${colors.bold("Type:")} ${colors.cyan(componentData.type)}
${componentData.description ? `${colors.bold("Description:")} ${componentData.description}` : ''}
${componentData.dependencies?.length ? `${colors.bold("Dependencies:")} ${componentData.dependencies.join(", ")}` : ''}
${componentData.registryDependencies?.length ? `${colors.bold("Registry Dependencies:")} ${componentData.registryDependencies.join(", ")}` : ''}
${colors.bold("Files:")} ${componentData.files?.length || 0} file(s)
`);
    
    if (componentData.files) {
      console.log(colors.bold("📁 Files included:"));
      componentData.files.forEach(file => {
        console.log(`  ${colors.green("*")} ${file.target || file.path}`);
      });
    }
    
  } catch (err) {
    s.stop();
    console.error(colors.red(`❌ Failed to fetch info for "${componentName}".`));
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
    fileName: "component.tsx",
  }).outputText;
  return await format(transpiled, {
    parser: "babel",
    plugins: [babel, estree],
    singleQuote: false,
    semi: true,
    trailingComma: "all",
    tabWidth: 2,
    printWidth: 80,
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: "always",
    endOfLine: "lf",
    bracketSameLine: true,
  });
}

async function downloadFileFromGitHub(file, componentData) {
  const fileContent = file.content;
  const targetPath = file.target || file.path;
  
  if (!fileContent) {
    throw new Error(`No content found for file: ${targetPath}`);
  }

  const fileName = path.basename(targetPath);
  const isCss = fileName.endsWith(".css");
  const isHook = targetPath.includes("/hooks/");
  const isLib = targetPath.includes("/lib/");

  // Determine target directory based on file type and path
  let targetDir;
  if (isCss) {
    targetDir = path.join(process.cwd(), "components", "mvpblocks", "styles");
  } else if (isHook) {
    targetDir = path.join(process.cwd(), "hooks");
  } else if (isLib) {
    targetDir = path.join(process.cwd(), "lib");
  } else if (targetPath.includes("/ui/")) {
    targetDir = path.join(process.cwd(), "components", "ui");
  } else {
    // For block components, use a more organized structure
    const componentType = componentData.type === "registry:block" ? "mvpblocks" : "ui";
    targetDir = path.join(process.cwd(), "components", componentType);
  }

  const finalTargetPath = path.join(targetDir, fileName);

  // Convert .tsx to .jsx if JS mode and it's a .tsx file
  if (!isCss && language === "js" && fileName.endsWith(".tsx")) {
    const jsx = await convertTsxToJsx(fileContent);
    const newPath = finalTargetPath.replace(/\.tsx$/, ".jsx");
    await fs.promises.mkdir(path.dirname(newPath), { recursive: true });
    await fs.promises.writeFile(newPath, jsx.trim(), "utf8");
    console.log(colors.cyan(`📦 Saved: ${colors.dim(path.relative(process.cwd(), newPath))}`));
  } else {
    await fs.promises.mkdir(targetDir, { recursive: true });
    await fs.promises.writeFile(finalTargetPath, fileContent, "utf8");
    console.log(colors.cyan(`📦 Saved: ${colors.dim(path.relative(process.cwd(), finalTargetPath))}`));
  }
}

function detectPackageManager() {
  const cwd = process.cwd();
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) return "yarn";
  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(cwd, "bun.lockb"))) return "bun";
  return "npm";
}

// Main component installation logic
const s = spinner();
s.start(colors.white(`🚀 Installing ${colors.bold(componentName)}...`));

try {
  const componentData = await fetchComponentData(componentName);

  if (!componentData) {
    s.stop(colors.red(`❌ Component '${componentName}' not found.`));
    console.log(colors.yellow(`💡 Use 'npx mvpblocks list' to see available components`));
    console.log(colors.yellow(`💡 Use 'npx mvpblocks search <query>' to search for components`));
    process.exit(1);
  }

  // Create utils file if it doesn't exist
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

  const utilsPath = path.join(process.cwd(), "lib");
  const cnPath = path.join(utilsPath, `utils.${language === "js" ? "js" : "ts"}`);

  if (!fs.existsSync(cnPath)) {
    await fs.promises.mkdir(utilsPath, { recursive: true });
    await fs.promises.writeFile(cnPath, cnContent[language], "utf8");
    console.log(colors.green(`🛠️  Created ${colors.dim(`lib/utils.${language === "js" ? "js" : "ts"}`)}`));
  }

  // Download component files
  if (componentData.files && componentData.files.length > 0) {
    for (const file of componentData.files) {
      await downloadFileFromGitHub(file, componentData);
    }
  } else {
    console.log(colors.yellow("⚠️  No files found for this component."));
  }

  s.stop(colors.green(`✅ ${colors.bold(componentName)} installed successfully!`));

  // Install dependencies
  if (componentData.dependencies?.length || componentData.registryDependencies?.length) {
    const allDependencies = [
      ...(componentData.dependencies || []),
      ...(componentData.registryDependencies || [])
    ].filter(Boolean);

    if (allDependencies.length > 0) {
      const pm = detectPackageManager();
      const s2 = spinner();
      s2.start(colors.white(`📦 Installing dependencies with ${colors.bold(pm)}: ${colors.dim(allDependencies.join(", "))}`));

      try {
        const cmd = pm === "npm" ? ["install", ...allDependencies] : ["add", ...allDependencies];
        await execa(pm, cmd, { stdio: "inherit" });
        s2.stop(colors.green("✅ Dependencies installed successfully!"));
      } catch (err) {
        s2.stop(colors.red("❌ Failed to install dependencies."));
        console.error(colors.dim("You may need to install them manually:"));
        console.error(colors.yellow(`${pm} ${pm === "npm" ? "install" : "add"} ${allDependencies.join(" ")}`));
      }
    }
  }

  // Success message with additional info
  console.log(`
${colors.bold(colors.green("🎉 Installation Complete!"))}

${colors.bold("What's next?")}
${colors.green("*")} Import and use ${colors.bold(componentName)} in your project
${colors.green("*")} Check the component files in your ${colors.dim("components/")} directory
${colors.green("*")} Visit ${colors.underline(colors.cyan("https://blocks.mvp-subha.me"))} for documentation

${colors.dim("Happy coding! 🚀")}
`);

  console.log(colors.bold(colors.green("✨ Done!")));
} catch (err) {
  s.stop(colors.red("❌ Installation failed."));
  console.error(colors.red("Error:"), err.message);
  
  if (err.message.includes("not found")) {
    console.log(colors.yellow(`\n💡 Suggestions:`));
    console.log(colors.yellow(`  • Check the component name spelling`));
    console.log(colors.yellow(`  • Use 'npx mvpblocks list' to see available components`));
    console.log(colors.yellow(`  • Use 'npx mvpblocks search <query>' to find similar components`));
  }
  
  process.exit(1);
}