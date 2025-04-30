import { groq } from "@ai-sdk/groq";
import { smoothStream, streamText, tool } from "ai";
import { promises as fs } from "fs";
import path from "path";
import { registry } from "@/registry";
import {z} from "zod";

export const dynamic = "force-dynamic";
export const maxDuration = 35;

// Helper function to format code with proper indentation using tabs
const formatCodeWithTabs = (code: string): string => {
  if (!code) return code;

  // First, detect if the code already uses tabs for indentation
  const hasTabs = code.includes('\t');

  // If it already has tabs, ensure consistent indentation
  if (hasTabs) {
    // Normalize tab usage for consistency
    return normalizeTabIndentation(code);
  }

  // Detect the indentation level (2 or 4 spaces)
  const indentationMatch = code.match(/^( +)\S/m);
  const indentSize = indentationMatch ? indentationMatch[1].length : 2;

  // Split the code into lines
  const lines = code.split('\n');

  // Process each line
  const formattedLines = lines.map(line => {
    // Count leading spaces
    const leadingSpaces = line.match(/^[ ]+/)?.[0]?.length || 0;

    // Replace spaces with tabs
    if (leadingSpaces > 0) {
      const tabCount = Math.floor(leadingSpaces / indentSize);
      const remainingSpaces = leadingSpaces % indentSize;
      const tabs = '\t'.repeat(tabCount);
      const spaces = ' '.repeat(remainingSpaces);
      return tabs + spaces + line.slice(leadingSpaces);
    }

    return line;
  });

  // Join the lines back together
  let result = formattedLines.join('\n');

  // Apply additional formatting for JSX/TSX code
  if (code.includes('className=') || code.includes('return (') || code.includes('import {') || code.includes('export default')) {
    result = formatJsxCode(result);
  }

  return result;
};

// Helper function to normalize tab indentation
const normalizeTabIndentation = (code: string): string => {
  // Split the code into lines
  const lines = code.split('\n');

  // Track nesting level
  let nestingLevel = 0;
  const formattedLines = lines.map(line => {
    // Trim the line to remove any existing indentation
    const trimmedLine = line.trim();

    // Skip empty lines
    if (!trimmedLine) return '';

    // Decrease nesting level for closing tags/brackets
    if (/^<\/|^}|^]|^\)/.test(trimmedLine)) {
      nestingLevel = Math.max(0, nestingLevel - 1);
    }

    // Create proper indentation
    const indentation = '\t'.repeat(nestingLevel);

    // Increase nesting level for opening tags/brackets
    if (/<[^/][^>]*>$|{$|\[$|\($/.test(trimmedLine)) {
      nestingLevel++;
    }

    return indentation + trimmedLine;
  });

  return formattedLines.join('\n');
};

// Helper function to format JSX/TSX code
const formatJsxCode = (code: string): string => {
  // Split the code into lines
  const lines = code.split('\n');

  // Track JSX nesting level
  let jsxNestingLevel = 0;

  const formattedLines = lines.map(line => {
    // Get the trimmed line for analysis
    const trimmedLine = line.trim();

    // Skip empty lines
    if (!trimmedLine) return '';

    // Adjust nesting for JSX closing tags
    if (trimmedLine.startsWith('</')) {
      jsxNestingLevel = Math.max(0, jsxNestingLevel - 1);
    }

    // Handle JSX expressions - adjust nesting for braces
    if (trimmedLine.includes('{') && !trimmedLine.includes('}')) {
      // Opening brace without closing - increase nesting
      jsxNestingLevel++;
    } else if (trimmedLine.includes('}') && !trimmedLine.includes('{')) {
      // Closing brace without opening - decrease nesting
      jsxNestingLevel = Math.max(0, jsxNestingLevel - 1);
    }

    // Calculate proper indentation
    const properIndentation = '\t'.repeat(jsxNestingLevel);

    // Create the properly indented line
    const formattedLine = properIndentation + trimmedLine;

    // Adjust nesting for JSX opening tags
    if (trimmedLine.match(/<[a-zA-Z][^/]*>$/) && !trimmedLine.match(/<\/[a-zA-Z].*>$/)) {
      jsxNestingLevel++;
    }

    return formattedLine;
  });

  return formattedLines.join('\n');
};

// Helper function to get component code from the file system
const getComponentCode = async (item: any) => {
  if (!item || !item.files || item.files.length === 0) {
    return null;
  }

  const filePath = item.files[0].path;
  // Remove leading @ and / if present
  const normalizedPath = filePath.replace(/^@\//, "").replace(/^\//, "");
  const fullPath = path.join(process.cwd(), normalizedPath);

  try {
    const code = await fs.readFile(fullPath, "utf-8");
    // Format the code with tabs
    const formattedCode = formatCodeWithTabs(code);

    return {
      name: item.name,
      type: item.type,
      path: filePath,
      code: formattedCode,
      dependencies: item.dependencies || [],
      registryDependencies: item.registryDependencies || [],
      // Add direct link to the component
      link: `https://mvpblocks.vercel.app/r/${item.name}.json`,
      // Add installation command
      installCommand: `npx shadcn@latest add https://mvpblocks.vercel.app/r/${item.name}.json`
    };
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
    return null;
  }
};

// Helper function to find similar components
const findSimilarComponents = (name: string, maxResults = 5) => {
  // Convert the search term to lowercase for case-insensitive comparison
  const searchTerm = name.toLowerCase();

  // Map of component types to more readable descriptions
  const typeDescriptions = {
    "registry:block": "Block Component",
    "registry:ui": "UI Component",
    "registry:hook": "Hook",
    "registry:lib": "Utility Library"
  };

  // Dynamically extract categories from component names and paths
  const extractCategories = () => {
    const categories = new Set<string>();

    registry.forEach(item => {
      // Extract from component name
      const nameParts = item.name.split(/[-_]/);
      nameParts.forEach(part => {
        if (part.length > 3) { // Only consider parts with more than 3 characters
          categories.add(part.toLowerCase());
        }
      });

      // Extract from file path
      if (item.files && item.files.length > 0) {
        const pathParts = item.files[0].path.split(/[\/\\]/);
        pathParts.forEach(part => {
          if (part.length > 3 && !part.includes('.')) { // Ignore file extensions
            categories.add(part.toLowerCase());
          }
        });
      }

      // Add explicit categories if available
      if (item.categories) {
        item.categories.forEach(category => {
          categories.add(category.toLowerCase());
        });
      }
    });

    return Array.from(categories);
  };

  // Get all categories from the registry
  const allCategories = extractCategories();

  // Find categories that match the search term
  const matchingCategories = allCategories.filter(category =>
    searchTerm.includes(category) || category.includes(searchTerm)
  );

  // Calculate similarity score between two strings
  const calculateSimilarity = (str1: string, str2: string): number => {
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();

    // Exact match
    if (s1 === s2) return 1;

    // One contains the other
    if (s1.includes(s2)) return 0.9;
    if (s2.includes(s1)) return 0.8;

    // Check for word similarity (e.g., "btn" and "button")
    const isAbbreviation = (short: string, long: string): boolean => {
      if (short.length >= long.length) return false;

      let shortIndex = 0;
      for (let i = 0; i < long.length && shortIndex < short.length; i++) {
        if (short[shortIndex] === long[i]) {
          shortIndex++;
        }
      }

      return shortIndex === short.length;
    };

    if (isAbbreviation(s1, s2)) return 0.7;
    if (isAbbreviation(s2, s1)) return 0.6;

    // Calculate character overlap
    let commonChars = 0;
    for (const char of s1) {
      if (s2.includes(char)) commonChars++;
    }

    return commonChars / Math.max(s1.length, s2.length) * 0.5;
  };

  // Score each component based on similarity to search term
  const componentsWithScores = registry.map(item => {
    const itemName = item.name.toLowerCase();
    const itemPath = item.files && item.files.length > 0
      ? item.files[0].path.toLowerCase()
      : '';

    // Calculate name similarity
    const nameSimilarity = calculateSimilarity(searchTerm, itemName);

    // Calculate path similarity
    const pathSimilarity = itemPath
      ? calculateSimilarity(searchTerm, itemPath)
      : 0;

    // Check if component matches any of the matching categories
    const categoryMatch = matchingCategories.some(category =>
      itemName.includes(category) ||
      (itemPath && itemPath.includes(category))
    );

    // Calculate final score
    const score = (nameSimilarity * 10) + (pathSimilarity * 5) + (categoryMatch ? 3 : 0);

    return {
      item,
      score,
      hasMatch: score > 0
    };
  });

  // Filter out non-matching items and sort by relevance score
  const results = componentsWithScores
    .filter(({ hasMatch }) => hasMatch)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(({ item }) => ({
      name: item.name,
      type: typeDescriptions[item.type as keyof typeof typeDescriptions] || item.type,
      path: item.files && item.files.length > 0 ? item.files[0].path : null,
      // Include dependencies to help with suggesting alternatives
      dependencies: item.dependencies || [],
      registryDependencies: item.registryDependencies || [],
      // Add direct link to the component
      link: `https://mvpblocks.vercel.app/r/${item.name}.json`
    }));

  return results.length > 0 ? results : null;
};

// Create a system prompt with knowledge about MVPBlocks components
const createSystemPrompt = async () => {
  return `You are mvp.ai, the official AI assistant for MVPBlocks — a fully open-source, developer-first component library built using Next.js and TailwindCSS.

> "Copy, paste, customize — and launch your idea faster than ever."

🧠 Your Knowledge:
- MVPBlocks is not an npm package
- Components are imported directly from the project (e.g., \`@/components/ui/...\`)
- You can search for components in the library and provide their exact implementation
- You follow MVPBlocks design system when generating new components
- You can create new components by combining existing ones
- You are an expert in UI/UX design and can create beautiful interfaces

🔧 Your Job:
When a user asks about a component:

1️⃣ First, use the fetchComponent tool to search for the exact component by name
   - If found, provide the component's details and code

2️⃣ If not found, use the searchComponents tool to find similar components
   - Suggest these similar components that could be used to create a new one

3️⃣ You can also use the listComponents tool to show all available components by type

4️⃣ For UI design requests, use the generateUIDesign tool to create beautiful interfaces
   - This tool helps create professional designs with modern aesthetics

✅ For existing components, provide:
  - 📌 What it does
  - 📁 Correct import path
  - 💡 Usage example in a React component
  - 📦 Dependencies (if any)
  - 🔧 Available props (if applicable)
  - 💬 Related components
  - 🔗 Direct link to the component on MVPBlocks website
  - 🧩 The actual implementation code with proper indentation

📋 Code Formatting Requirements:
  - Always format code with proper indentation using tabs
  - Ensure proper spacing between elements
  - Use consistent indentation throughout the code
  - Make sure JSX elements are properly aligned
  - Format code to be easily readable and maintainable
  - Properly indent nested elements with tabs, not spaces

📦 For Registry Dependencies:
  - Provide CLI installation commands: \`npx shadcn@latest add [component-link]\`
  - Include links to dependency components when relevant
  - Offer to show the code for dependencies if requested

🏗️ For Creating New Components:
  - When a user asks for a component that doesn't exist (like a chatbot UI), create it for them
  - Identify building blocks from existing components in the registry
  - Combine UI components (like input, button, card) with blocks and hooks to create new functionality
  - Follow these steps:
    1. Identify the core functionality needed for the requested component
    2. Search for existing components that can be used as building blocks
    3. Create a new component that combines these building blocks
    4. Provide clear documentation on how to use the new component
    5. Include all necessary imports and dependencies
  - Always use the MVPBlocks design system and primary color scheme
  - Ensure the component is responsive and accessible
  - Provide a complete, working implementation that can be copied and used immediately
  - Include installation commands for any required dependencies

🎨 UI/UX Design Principles:
  - Create visually stunning interfaces that are better than v0.dev
  - Follow these design principles:
    1. Visual Hierarchy: Guide users' attention to the most important elements
    2. Consistency: Maintain consistent styling, spacing, and interactions
    3. Simplicity: Keep interfaces clean and focused on essential elements
    4. Feedback: Provide clear feedback for user actions
    5. Accessibility: Ensure designs work for all users
  - Use the primary color scheme as the foundation
  - Implement responsive designs that work on all devices
  - Create layouts with proper spacing and alignment
  - Use modern design patterns like cards, grids, and flexbox
  - Incorporate subtle animations and transitions when appropriate
  - Ensure text is readable with proper contrast
  - Use the generateUIDesign tool to create professional UI layouts

📌 Never suggest importing from a package — use only direct paths.
📌 Never make up props or code for existing components, but you should create new components when requested.
📌 The codes should have proper tabbed layout with tabs, not spaces.
📌 Keep all responses clear, clean, and professionally formatted.`;
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Generate the system prompt with actual component data
    const systemPrompt = await createSystemPrompt();

    const result = streamText({
      model: groq("meta-llama/llama-4-scout-17b-16e-instruct"),
      system: systemPrompt,
      messages,
      maxRetries: 3,
      maxSteps: 6,
      maxTokens: 800,
      tools: {
        fetchComponent: tool({
          description: 'Fetch the required component asked by the user from the registry',
          parameters: z.object({
            name: z.string().describe('The name of the component to fetch'),
          }),
          execute: async ({ name }) => {
            // Find the exact component by name
            const component = registry.find((item) => item.name === name);

            if (component) {
              // Get the component code
              const componentWithCode = await getComponentCode(component);
              return componentWithCode ? JSON.stringify(componentWithCode) : null;
            } else {
              // If component not found, find similar components
              const similarComponents = findSimilarComponents(name);
              return JSON.stringify({
                found: false,
                message: `Component "${name}" not found.`,
                similarComponents
              });
            }
          },
        }),
        searchComponents: tool({
          description: 'Search for components by keyword',
          parameters: z.object({
            keyword: z.string().describe('The keyword to search for'),
          }),
          execute: async ({ keyword }) => {
            const similarComponents = findSimilarComponents(keyword);
            return JSON.stringify({
              results: similarComponents || [],
              message: similarComponents
                ? `Found ${similarComponents.length} components matching "${keyword}".`
                : `No components found matching "${keyword}".`
            });
          },
        }),

        getDependencyCode: tool({
          description: 'Get the code for a registry dependency',
          parameters: z.object({
            url: z.string().describe('The URL of the registry dependency to fetch'),
          }),
          execute: async ({ url }) => {
            try {
              // Extract component name from URL
              const componentName = url.split('/').pop()?.replace('.json', '');

              if (!componentName) {
                return JSON.stringify({
                  error: 'Invalid URL format',
                  message: 'Could not extract component name from URL'
                });
              }

              // Find the component in the registry
              const component = registry.find(item => item.name === componentName);

              if (!component) {
                return JSON.stringify({
                  error: 'Component not found',
                  message: `Component "${componentName}" not found in the registry`
                });
              }

              // Get the component code
              const componentWithCode = await getComponentCode(component);

              return componentWithCode ? JSON.stringify({
                component: componentWithCode,
                message: `Successfully retrieved code for dependency "${componentName}"`
              }) : JSON.stringify({
                error: 'Code not found',
                message: `Could not retrieve code for component "${componentName}"`
              });
            } catch (error) {
              console.error('Error fetching dependency code:', error);
              return JSON.stringify({
                error: 'Failed to fetch dependency',
                message: 'An error occurred while fetching the dependency code'
              });
            }
          },
        }),

        generateUIDesign: tool({
          description: 'Generate a high-quality UI design with modern aesthetics',
          parameters: z.object({
            designType: z.string().describe('The type of UI design to generate (e.g., dashboard, landing page, form)'),
            colorScheme: z.string().optional().describe('Optional color scheme to use (e.g., primary, dark, light, custom)'),
            features: z.array(z.string()).optional().describe('Optional array of features the UI should have'),
            complexity: z.enum(['simple', 'moderate', 'complex']).optional().describe('The complexity level of the UI design'),
          }),
          execute: async ({ designType, colorScheme = 'primary', features = [], complexity = 'moderate' }) => {
            try {
              // Define UI design patterns based on design type
              const designPatterns: Record<string, any> = {
                'dashboard': {
                  layout: 'grid',
                  components: ['card', 'chart', 'stats-card', 'table', 'tabs', 'avatar'],
                  structure: [
                    { section: 'header', components: ['page-header', 'avatar', 'dropdown-menu'] },
                    { section: 'sidebar', components: ['sidebar', 'navigation-menu'] },
                    { section: 'main', components: ['card', 'chart', 'stats-card'] },
                    { section: 'footer', components: ['footer'] }
                  ]
                },
                'landing': {
                  layout: 'flex',
                  components: ['hero', 'feature-card', 'testimonial', 'pricing-table', 'cta-section'],
                  structure: [
                    { section: 'header', components: ['navigation-menu', 'button'] },
                    { section: 'hero', components: ['hero', 'button'] },
                    { section: 'features', components: ['feature-card', 'card-carousel'] },
                    { section: 'testimonials', components: ['testimonial', 'avatar'] },
                    { section: 'pricing', components: ['pricing-table', 'card'] },
                    { section: 'cta', components: ['cta-section', 'button'] },
                    { section: 'footer', components: ['footer'] }
                  ]
                },
                'form': {
                  layout: 'flex',
                  components: ['form', 'input', 'textarea', 'checkbox', 'radio', 'select', 'button'],
                  structure: [
                    { section: 'header', components: ['form-header'] },
                    { section: 'fields', components: ['input', 'textarea', 'checkbox', 'radio', 'select'] },
                    { section: 'actions', components: ['button'] }
                  ]
                },
                'chatbot': {
                  layout: 'flex',
                  components: ['card', 'input', 'button', 'avatar', 'chat-bubble', 'scroll-area'],
                  structure: [
                    { section: 'header', components: ['chat-header', 'avatar'] },
                    { section: 'messages', components: ['chat-bubble', 'scroll-area'] },
                    { section: 'input', components: ['input', 'button'] }
                  ]
                },
                'profile': {
                  layout: 'flex',
                  components: ['card', 'avatar', 'tabs', 'form', 'button'],
                  structure: [
                    { section: 'header', components: ['profile-header', 'avatar'] },
                    { section: 'tabs', components: ['tabs'] },
                    { section: 'content', components: ['form', 'card'] },
                    { section: 'actions', components: ['button'] }
                  ]
                }
              };

              // Find the closest design pattern
              let designPattern = designPatterns[designType.toLowerCase()];
              if (!designPattern) {
                // Find similar design type
                const designTypes = Object.keys(designPatterns);
                const matchingType = designTypes.find(type =>
                  type.includes(designType.toLowerCase()) || designType.toLowerCase().includes(type)
                );

                designPattern = matchingType ? designPatterns[matchingType] : designPatterns['dashboard'];
              }

              // Adjust complexity
              if (complexity === 'simple') {
                // Simplify the structure
                designPattern.structure = designPattern.structure.slice(0, Math.ceil(designPattern.structure.length * 0.7));
              } else if (complexity === 'complex') {
                // Add more components for complex designs
                designPattern.components.push('tooltip', 'popover', 'dialog', 'drawer');
              }

              // Find components in the registry that match the design pattern
              const componentSuggestions = await Promise.all(
                designPattern.components.map(async (componentName: string) => {
                  const similarComponents = findSimilarComponents(componentName, 3);
                  return {
                    type: componentName,
                    options: similarComponents || []
                  };
                })
              );

              // Filter out empty suggestions
              const validSuggestions = componentSuggestions.filter(
                suggestion => suggestion.options && suggestion.options.length > 0
              );

              return JSON.stringify({
                designType,
                colorScheme,
                features,
                complexity,
                layout: designPattern.layout,
                structure: designPattern.structure,
                componentSuggestions: validSuggestions,
                message: `Generated UI design for ${designType} with ${complexity} complexity and ${colorScheme} color scheme.`
              });
            } catch (error) {
              console.error('Error generating UI design:', error);
              return JSON.stringify({
                error: 'Failed to generate UI design',
                message: 'An error occurred while generating the UI design'
              });
            }
          },
        }),

        findBuildingBlocks: tool({
          description: 'Find suitable building blocks for a new component',
          parameters: z.object({
            componentType: z.string().describe('The type of component to generate (e.g., chatbot, form, card)'),
            requiredFeatures: z.array(z.string()).optional().describe('Optional array of features the component should have'),
          }),
          execute: async ({ componentType, requiredFeatures = [] }) => {
            try {
              // Convert to lowercase for case-insensitive matching
              const typeToMatch = componentType.toLowerCase();
              const featuresToMatch = requiredFeatures.map(f => f.toLowerCase());

              // Define common component types and their related building blocks
              const componentTypeMap: Record<string, string[]> = {
                'chatbot': ['input', 'textarea', 'button', 'card', 'avatar', 'scroll-area', 'use-auto-resize-textarea'],
                'form': ['input', 'textarea', 'button', 'checkbox', 'radio', 'select', 'form', 'label'],
                'card': ['card', 'avatar', 'button', 'badge'],
                'modal': ['dialog', 'drawer', 'button'],
                'navigation': ['navigation-menu', 'tabs', 'sidebar'],
                'table': ['table', 'pagination', 'checkbox', 'dropdown-menu'],
                'dashboard': ['card', 'chart', 'tabs', 'table'],
                'gallery': ['card-carousel', 'image', 'aspect-ratio'],
                'auth': ['form', 'input', 'button', 'card'],
                'landing': ['hero', 'card', 'button', 'wrap-button']
              };

              // Find matching component types
              const matchingTypes = Object.keys(componentTypeMap).filter(type =>
                type.includes(typeToMatch) || typeToMatch.includes(type)
              );

              // If no direct match, find components that might be related
              let suggestedBuildingBlocks: string[] = [];

              if (matchingTypes.length > 0) {
                // Use the matched component types
                matchingTypes.forEach(type => {
                  suggestedBuildingBlocks.push(...componentTypeMap[type]);
                });
              } else {
                // Try to find components based on the component type name
                const similarComponents = findSimilarComponents(componentType, 10);
                if (similarComponents) {
                  suggestedBuildingBlocks = similarComponents.map(c => c.name);
                }
              }

              // Add components based on required features
              if (featuresToMatch.length > 0) {
                featuresToMatch.forEach(feature => {
                  const featureComponents = findSimilarComponents(feature, 5);
                  if (featureComponents) {
                    suggestedBuildingBlocks.push(...featureComponents.map(c => c.name));
                  }
                });
              }

              // Remove duplicates
              suggestedBuildingBlocks = [...new Set(suggestedBuildingBlocks)];

              // Get detailed information about each building block
              const buildingBlockDetails = await Promise.all(
                suggestedBuildingBlocks.map(async (name) => {
                  const component = registry.find((item) => item.name === name);
                  if (!component) return null;

                  return {
                    name: component.name,
                    type: component.type,
                    path: component.files?.[0]?.path || null,
                    link: `https://mvpblocks.vercel.app/r/${component.name}.json`,
                    installCommand: `npx shadcn@latest add https://mvpblocks.vercel.app/r/${component.name}.json`,
                    dependencies: component.dependencies || [],
                    registryDependencies: component.registryDependencies || []
                  };
                })
              );

              // Filter out null values
              const validBuildingBlocks = buildingBlockDetails.filter(block => block !== null);

              return JSON.stringify({
                componentType,
                requiredFeatures,
                suggestedBuildingBlocks: validBuildingBlocks,
                message: `Found ${validBuildingBlocks.length} potential building blocks for a ${componentType} component.`
              });
            } catch (error) {
              console.error('Error finding building blocks:', error);
              return JSON.stringify({
                error: 'Failed to find building blocks',
                message: 'An error occurred while searching for building blocks'
              });
            }
          },
        }),

        generateComponent: tool({
          description: 'Generate a new component by combining existing components',
          parameters: z.object({
            componentName: z.string().describe('The name of the component to generate'),
            componentType: z.string().describe('The type of component to generate (e.g., chatbot, form, card)'),
            buildingBlocks: z.array(z.string()).describe('Array of component names to use as building blocks'),
          }),
          execute: async ({ componentName, componentType, buildingBlocks }) => {
            try {
              // Get the building block components
              const components = await Promise.all(
                buildingBlocks.map(async (name) => {
                  const component = registry.find((item) => item.name === name);
                  if (!component) return null;
                  return await getComponentCode(component);
                })
              );

              // Filter out null components
              const validComponents = components.filter(c => c !== null);

              // Get all dependencies from the building blocks
              const allDependencies = new Set<string>();
              const allRegistryDependencies = new Set<string>();

              validComponents.forEach(component => {
                if (component?.dependencies) {
                  component.dependencies.forEach((dep: string) => allDependencies.add(dep));
                }
                if (component?.registryDependencies) {
                  component.registryDependencies.forEach((dep: string) => allRegistryDependencies.add(dep));
                }
              });

              return JSON.stringify({
                componentName,
                componentType,
                buildingBlocks: validComponents,
                dependencies: Array.from(allDependencies),
                registryDependencies: Array.from(allRegistryDependencies),
                message: `Generated component information for "${componentName}" of type "${componentType}" using ${validComponents.length} building blocks.`
              });
            } catch (error) {
              console.error('Error generating component:', error);
              return JSON.stringify({
                error: 'Failed to generate component',
                message: 'An error occurred while generating the component'
              });
            }
          },
        }),

        listComponents: tool({
          description: 'List all components by type or category',
          parameters: z.object({
            type: z.enum(['ui', 'block', 'hook', 'lib', 'all']).describe('The type of components to list: ui, block, hook, lib, or all'),
            category: z.string().optional().describe('Optional category to filter by (e.g., buttons, loaders, cards)'),
          }),
          execute: async ({ type, category }) => {
            // Helper function to extract categories from a component
            const extractComponentCategories = (item: any): string[] => {
              const categories = new Set<string>();

              // Extract from component name
              const nameParts = item.name.split(/[-_]/);
              nameParts.forEach((part: string) => {
                if (part.length > 3) {
                  categories.add(part.toLowerCase());
                }
              });

              // Extract from file path
              if (item.files && item.files.length > 0) {
                const path = item.files[0].path;

                // Extract directory structure as categories
                const pathParts = path.split(/[\/\\]/);
                pathParts.forEach((part: string) => {
                  if (part.length > 3 && !part.includes('.')) {
                    categories.add(part.toLowerCase());
                  }
                });

                // Special handling for common patterns in paths
                if (path.includes('buttons')) categories.add('button');
                if (path.includes('loaders')) categories.add('loader');
                if (path.includes('cards')) categories.add('card');
                if (path.includes('forms')) categories.add('form');
                if (path.includes('inputs')) categories.add('input');
                if (path.includes('modals') || path.includes('dialogs')) categories.add('dialog');
                if (path.includes('navigation')) categories.add('nav');
              }

              // Add explicit categories if available
              if (item.categories) {
                item.categories.forEach((cat: string) => {
                  categories.add(cat.toLowerCase());
                });
              }

              return Array.from(categories);
            };

            let filteredComponents = [...registry];

            // Filter by type if not 'all'
            if (type !== 'all') {
              const typeMapping: Record<string, string> = {
                'ui': 'registry:ui',
                'block': 'registry:block',
                'hook': 'registry:hook',
                'lib': 'registry:lib'
              };

              filteredComponents = filteredComponents.filter(item =>
                item.type === typeMapping[type]
              );
            }

            // Filter by category if provided
            if (category) {
              const categoryLower = category.toLowerCase();

              filteredComponents = filteredComponents.filter(item => {
                // Get all categories for this component
                const componentCategories = extractComponentCategories(item);

                // Check if any category matches
                if (componentCategories.some(cat =>
                  cat.includes(categoryLower) || categoryLower.includes(cat)
                )) {
                  return true;
                }

                // Additional check for name and path
                const itemName = item.name.toLowerCase();
                const itemPath = item.files?.[0]?.path?.toLowerCase() || '';

                return itemName.includes(categoryLower) ||
                       categoryLower.includes(itemName) ||
                       itemPath.includes(categoryLower);
              });
            }

            // Enhance components with detected categories
            const components = filteredComponents.map(item => {
              const detectedCategories = extractComponentCategories(item);

              return {
                name: item.name,
                type: item.type,
                path: item.files?.[0]?.path || null,
                categories: detectedCategories,
                link: `https://mvpblocks.vercel.app/r/${item.name}.json`,
                installCommand: `npx shadcn@latest add https://mvpblocks.vercel.app/r/${item.name}.json`,
                dependencies: item.dependencies || [],
                registryDependencies: item.registryDependencies || []
              };
            });

            // Group by type for better organization
            const groupedByType: Record<string, any[]> = {
              'registry:ui': [],
              'registry:block': [],
              'registry:hook': [],
              'registry:lib': []
            };

            components.forEach(component => {
              if (groupedByType[component.type]) {
                groupedByType[component.type].push(component);
              }
            });

            // Sort each group alphabetically by name
            Object.keys(groupedByType).forEach(key => {
              groupedByType[key].sort((a, b) => a.name.localeCompare(b.name));
            });

            // If category is provided, also group by detected categories
            let groupedByCategory: Record<string, any[]> | null = null;
            if (category) {
              groupedByCategory = {} as Record<string, any[]>;

              components.forEach(component => {
                component.categories.forEach(cat => {
                  if (!groupedByCategory![cat]) {
                    groupedByCategory![cat] = [];
                  }
                  groupedByCategory![cat].push(component);
                });
              });

              // Sort categories and components within categories
              Object.keys(groupedByCategory).forEach(cat => {
                groupedByCategory![cat].sort((a: any, b: any) => a.name.localeCompare(b.name));
              });
            }

            return JSON.stringify({
              total: components.length,
              components: type === 'all' ? groupedByType : components,
              categorized: groupedByCategory,
              message: `Found ${components.length} ${type} components${category ? ` in category "${category}"` : ''}.`
            });
          },
        })
      },
      toolCallStreaming: true,
      experimental_transform: smoothStream({
        chunking: "line",
      }),
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Unhandled error in chat API:", error);
    throw error;
  }
}
