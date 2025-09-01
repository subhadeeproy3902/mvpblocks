import { groq } from '@ai-sdk/groq';
import {
  convertToModelMessages,
  smoothStream,
  stepCountIs,
  streamText,
  tool,
} from 'ai';
import { promises as fs } from 'fs';
import path from 'path';
import { registry } from '@/registry';
import { z } from 'zod';

export const maxDuration = 30;
export const revalidate = false;

const getComponentCode = async (item: any) => {
  if (!item || !item.files || item.files.length === 0) {
    return null;
  }

  const filePath = item.files[0].path;
  const normalizedPath = filePath.replace(/^@\//, '').replace(/^\//, '');
  const fullPath = path.join(process.cwd(), normalizedPath);

  try {
    const code = await fs.readFile(fullPath, 'utf-8');

    return {
      name: item.name,
      type: item.type,
      path: filePath,
      code: code,
      dependencies: item.dependencies || [],
      registryDependencies: item.registryDependencies || [],
      link: `https://blocks.mvp-subha.me/r/${item.name}.json`,
      installCommand: `npx shadcn@latest add https://blocks.mvp-subha.me/r/${item.name}.json`,
    };
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
    return null;
  }
};

const findSimilarComponents = (name: string, maxResults = 5) => {
  const searchTerm = name.toLowerCase();

  const typeDescriptions = {
    'registry:block': 'Block Component',
    'registry:ui': 'UI Component',
    'registry:hook': 'Hook',
    'registry:lib': 'Utility Library',
  };

  const extractCategories = () => {
    const categories = new Set<string>();

    registry.forEach((item) => {
      const nameParts = item.name.split(/[-_]/);
      nameParts.forEach((part) => {
        if (part.length > 3) {
          categories.add(part.toLowerCase());
        }
      });

      if (item.files && item.files.length > 0) {
        const pathParts = item.files[0].path.split(/[\/\\]/);
        pathParts.forEach((part) => {
          if (part.length > 3 && !part.includes('.')) {
            categories.add(part.toLowerCase());
          }
        });
      }

      if (item.categories) {
        item.categories.forEach((category) => {
          categories.add(category.toLowerCase());
        });
      }
    });

    return Array.from(categories);
  };

  const allCategories = extractCategories();

  const matchingCategories = allCategories.filter(
    (category) =>
      searchTerm.includes(category) || category.includes(searchTerm),
  );

  const calculateSimilarity = (str1: string, str2: string): number => {
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();

    if (s1 === s2) return 1;
    if (s1.includes(s2)) return 0.9;
    if (s2.includes(s1)) return 0.8;

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

    let commonChars = 0;
    for (const char of s1) {
      if (s2.includes(char)) commonChars++;
    }

    return (commonChars / Math.max(s1.length, s2.length)) * 0.5;
  };

  const componentsWithScores = registry.map((item) => {
    const itemName = item.name.toLowerCase();
    const itemPath =
      item.files && item.files.length > 0
        ? item.files[0].path.toLowerCase()
        : '';

    const nameSimilarity = calculateSimilarity(searchTerm, itemName);
    const pathSimilarity = itemPath
      ? calculateSimilarity(searchTerm, itemPath)
      : 0;
    const categoryMatch = matchingCategories.some(
      (category) =>
        itemName.includes(category) ||
        (itemPath && itemPath.includes(category)),
    );
    const score =
      nameSimilarity * 10 + pathSimilarity * 5 + (categoryMatch ? 3 : 0);

    return {
      item,
      score,
      hasMatch: score > 0,
    };
  });

  const results = componentsWithScores
    .filter(({ hasMatch }) => hasMatch)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(({ item }) => ({
      name: item.name,
      type:
        typeDescriptions[item.type as keyof typeof typeDescriptions] ||
        item.type,
      path: item.files && item.files.length > 0 ? item.files[0].path : null,
      dependencies: item.dependencies || [],
      registryDependencies: item.registryDependencies || [],
      link: `https://blocks.mvp-subha.me/r/${item.name}.json`,
    }));

  return results.length > 0 ? results : null;
};

const createSystemPrompt = async () => {
  return `You are mvp.ai, the official AI assistant for MVPBlocks — a fully open-source, developer-first component library built using Next.js and TailwindCSS. You can even generate a high-quality UI design with modern aesthetics just like v0.dev only if the user asks for it and you dont find any context of that in Mvpblocks. Be frank and use emojis a bit.

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


✅ For existing components, provide:
  - 📌 What it does
  - 📁 Correct import path
  - 💡 Usage example in a React component
  - 📦 Dependencies (if any)
  - 🔧 Available props (if applicable)
  - 💬 Related components
  - 🔗 Direct link to the component on MVPBlocks website
  - 🧩 The actual implementation code with proper indentation

📦 For Dependencies:
  - NPM dependencies: Install via package manager (e.g., \`npm install [dependency-name]\`)
  - Registry dependencies: Reference by URL in component registration (e.g., \`https://blocks.mvp-subha.me/r/[component-name].json\`)

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
  - Make sure the design is way better than v0.dev

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
      model: groq('meta-llama/llama-4-scout-17b-16e-instruct'),
      system: systemPrompt,
      messages: convertToModelMessages(messages),
      maxRetries: 3,
      stopWhen: stepCountIs(6),
      maxOutputTokens: 8192,
      tools: {
        fetchComponent: tool({
          description:
            'Fetch the required component asked by the user from the registry',
          inputSchema: z.object({
            name: z.string().describe('The name of the component to fetch'),
          }),
          execute: async ({ name }) => {
            const component = registry.find((item) => item.name === name);

            if (component) {
              // Get the component code
              const componentWithCode = await getComponentCode(component);
              return componentWithCode
                ? JSON.stringify(componentWithCode)
                : null;
            } else {
              // If component not found, find similar components
              const similarComponents = findSimilarComponents(name);
              return JSON.stringify({
                found: false,
                message: `Component "${name}" not found.`,
                similarComponents,
              });
            }
          },
        }),
        searchComponents: tool({
          description: 'Search for components by keyword',
          inputSchema: z.object({
            keyword: z.string().describe('The keyword to search for'),
          }),
          execute: async ({ keyword }) => {
            const similarComponents = findSimilarComponents(keyword);
            return JSON.stringify({
              results: similarComponents || [],
              message: similarComponents
                ? `Found ${similarComponents.length} components matching "${keyword}".`
                : `No components found matching "${keyword}".`,
            });
          },
        }),
        getDependencyCode: tool({
          description: 'Get the code for a registry dependency',
          inputSchema: z.object({
            url: z
              .string()
              .describe('The URL of the registry dependency to fetch'),
          }),
          execute: async ({ url }) => {
            try {
              // Extract component name from URL
              const componentName = url.split('/').pop()?.replace('.json', '');

              if (!componentName) {
                return JSON.stringify({
                  error: 'Invalid URL format',
                  message: 'Could not extract component name from URL',
                });
              }

              // Find the component in the registry
              const component = registry.find(
                (item) => item.name === componentName,
              );

              if (!component) {
                return JSON.stringify({
                  error: 'Component not found',
                  message: `Component "${componentName}" not found in the registry`,
                });
              }

              // Get the component code
              const componentWithCode = await getComponentCode(component);

              return componentWithCode
                ? JSON.stringify({
                    component: componentWithCode,
                    message: `Successfully retrieved code for dependency "${componentName}"`,
                  })
                : JSON.stringify({
                    error: 'Code not found',
                    message: `Could not retrieve code for component "${componentName}"`,
                  });
            } catch (error) {
              console.error('Error fetching dependency code:', error);
              return JSON.stringify({
                error: 'Failed to fetch dependency',
                message: 'An error occurred while fetching the dependency code',
              });
            }
          },
        }),
        generateComponent: tool({
          description:
            'Generate a new component by combining existing components',
          inputSchema: z.object({
            componentName: z
              .string()
              .describe('The name of the component to generate'),
            componentType: z
              .string()
              .describe(
                'The type of component to generate (e.g., chatbot, form, card)',
              ),
            buildingBlocks: z
              .array(z.string())
              .describe('Array of component names to use as building blocks'),
          }),
          execute: async ({ componentName, componentType, buildingBlocks }) => {
            try {
              // Get the building block components
              const components = await Promise.all(
                buildingBlocks.map(async (name) => {
                  const component = registry.find((item) => item.name === name);
                  if (!component) return null;
                  return await getComponentCode(component);
                }),
              );

              // Filter out null components
              const validComponents = components.filter((c) => c !== null);

              // Get all dependencies from the building blocks
              const allDependencies = new Set<string>();
              const allRegistryDependencies = new Set<string>();

              validComponents.forEach((component) => {
                if (component?.dependencies) {
                  component.dependencies.forEach((dep: string) =>
                    allDependencies.add(dep),
                  );
                }
                if (component?.registryDependencies) {
                  component.registryDependencies.forEach((dep: string) =>
                    allRegistryDependencies.add(dep),
                  );
                }
              });

              return JSON.stringify({
                componentName,
                componentType,
                buildingBlocks: validComponents,
                dependencies: Array.from(allDependencies),
                registryDependencies: Array.from(allRegistryDependencies),
                message: `Generated component information for "${componentName}" of type "${componentType}" using ${validComponents.length} building blocks.`,
              });
            } catch (error) {
              console.error('Error generating component:', error);
              return JSON.stringify({
                error: 'Failed to generate component',
                message: 'An error occurred while generating the component',
              });
            }
          },
        }),
        listComponents: tool({
          description: 'List all components by type or category',
          inputSchema: z.object({
            type: z
              .enum(['ui', 'block', 'hook', 'lib', 'all'])
              .describe(
                'The type of components to list: ui, block, hook, lib, or all',
              ),
            category: z
              .string()
              .optional()
              .describe(
                'Optional category to filter by (e.g., buttons, loaders, cards)',
              ),
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
                if (path.includes('modals') || path.includes('dialogs'))
                  categories.add('dialog');
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
                ui: 'registry:ui',
                block: 'registry:block',
                hook: 'registry:hook',
                lib: 'registry:lib',
              };

              filteredComponents = filteredComponents.filter(
                (item) => item.type === typeMapping[type],
              );
            }

            // Filter by category if provided
            if (category) {
              const categoryLower = category.toLowerCase();

              filteredComponents = filteredComponents.filter((item) => {
                // Get all categories for this component
                const componentCategories = extractComponentCategories(item);

                // Check if any category matches
                if (
                  componentCategories.some(
                    (cat) =>
                      cat.includes(categoryLower) ||
                      categoryLower.includes(cat),
                  )
                ) {
                  return true;
                }

                // Additional check for name and path
                const itemName = item.name.toLowerCase();
                const itemPath = item.files?.[0]?.path?.toLowerCase() || '';

                return (
                  itemName.includes(categoryLower) ||
                  categoryLower.includes(itemName) ||
                  itemPath.includes(categoryLower)
                );
              });
            }

            // Enhance components with detected categories
            const components = filteredComponents.map((item) => {
              const detectedCategories = extractComponentCategories(item);

              return {
                name: item.name,
                type: item.type,
                path: item.files?.[0]?.path || null,
                categories: detectedCategories,
                link: `https://blocks.mvp-subha.me/r/${item.name}.json`,
                installCommand: `npx shadcn@latest add https://blocks.mvp-subha.me/r/${item.name}.json`,
                dependencies: item.dependencies || [],
                registryDependencies: item.registryDependencies || [],
              };
            });

            // Group by type for better organization
            const groupedByType: Record<string, any[]> = {
              'registry:ui': [],
              'registry:block': [],
              'registry:hook': [],
              'registry:lib': [],
            };

            components.forEach((component) => {
              if (groupedByType[component.type]) {
                groupedByType[component.type].push(component);
              }
            });

            // Sort each group alphabetically by name
            Object.keys(groupedByType).forEach((key) => {
              groupedByType[key].sort((a, b) => a.name.localeCompare(b.name));
            });

            // If category is provided, also group by detected categories
            let groupedByCategory: Record<string, any[]> | null = null;
            if (category) {
              groupedByCategory = {} as Record<string, any[]>;

              components.forEach((component) => {
                component.categories.forEach((cat) => {
                  if (!groupedByCategory![cat]) {
                    groupedByCategory![cat] = [];
                  }
                  groupedByCategory![cat].push(component);
                });
              });

              // Sort categories and components within categories
              Object.keys(groupedByCategory).forEach((cat) => {
                groupedByCategory![cat].sort((a: any, b: any) =>
                  a.name.localeCompare(b.name),
                );
              });
            }

            return JSON.stringify({
              total: components.length,
              components: type === 'all' ? groupedByType : components,
              categorized: groupedByCategory,
              message: `Found ${components.length} ${type} components${category ? ` in category "${category}"` : ''}.`,
            });
          },
        }),
      },
      experimental_transform: smoothStream({
        chunking: 'word',
      }),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Unhandled error in chat API:', error);
    throw error;
  }
}
