#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { join } from 'path';
import { registry } from '../registry/index';

/**
 * Script to generate a constants file containing all categories from the registry
 */

function generateCategoriesConstant() {
  console.log('🚀 Extracting categories from registry...');
  
  // Extract all categories from registry items
  const allCategories = new Set<string>();
  
  registry.forEach((item) => {
    if (item.categories) {
      item.categories.forEach((category) => {
        allCategories.add(category);
      });
    }
  });
  
  // Convert to sorted array
  const sortedCategories = Array.from(allCategories).sort();
  
  console.log(`📊 Found ${sortedCategories.length} unique categories:`);
  sortedCategories.forEach((category) => {
    console.log(`  - ${category}`);
  });
  
  // Generate the constants file content
  const constantsContent = `// Auto-generated file - DO NOT EDIT MANUALLY
// Generated on: ${new Date().toISOString()}
// Total categories: ${sortedCategories.length}

import { registry } from '@/registry';

/**
 * All categories available in the MVPBlocks registry
 */
export const REGISTRY_CATEGORIES = [
${sortedCategories.map((category) => `  '${category}',`).join('\n')}
] as const;

/**
 * Type for registry categories
 */
export type RegistryCategory = typeof REGISTRY_CATEGORIES[number];

/**
 * Categories organized by type/domain
 */
export const CATEGORIES_BY_DOMAIN = {
  // UI Components
  UI: [
    'accordion',
    'alert',
    'avatar',
    'badge',
    'breadcrumb',
    'button',
    'calendar',
    'card',
    'carousel',
    'chart',
    'checkbox',
    'collapsible',
    'command',
    'context-menu',
    'data-table',
    'date-picker',
    'dialog',
    'drawer',
    'dropdown-menu',
    'form',
    'hover-card',
    'input',
    'input-otp',
    'label',
    'menubar',
    'navigation-menu',
    'pagination',
    'popover',
    'progress',
    'radio-group',
    'resizable',
    'scroll-area',
    'select',
    'separator',
    'sheet',
    'skeleton',
    'slider',
    'sonner',
    'switch',
    'table',
    'tabs',
    'textarea',
    'toast',
    'toggle',
    'toggle-group',
    'tooltip',
  ].filter(cat => sortedCategories.includes(cat)),
  
  // Layout & Structure
  LAYOUT: [
    'dashboard',
    'footer',
    'header',
    'hero',
    'layout',
    'mainsection',
    'navigation',
    'page',
    'sidebar',
  ].filter(cat => sortedCategories.includes(cat)),
  
  // Animations & Effects
  ANIMATION: [
    'animation',
    'background',
    'scroll-animation',
    'text-animation',
  ].filter(cat => sortedCategories.includes(cat)),
  
  // Business Components
  BUSINESS: [
    'authentication',
    'pricing',
    'pricing-section',
  ].filter(cat => sortedCategories.includes(cat)),
  
  // Interactive Elements
  INTERACTIVE: [
    'interactive',
    'modal',
  ].filter(cat => sortedCategories.includes(cat)),
  
  // Technical & Development
  TECHNICAL: [
    'code',
    'technical',
    'mockup',
  ].filter(cat => sortedCategories.includes(cat)),
  
  // Design & Visual
  DESIGN: [
    'design',
    'grid',
  ].filter(cat => sortedCategories.includes(cat)),
  
  // External Libraries
  SHADCN: [
    'shadcn',
  ].filter(cat => sortedCategories.includes(cat)),
  
  // Miscellaneous
  OTHER: sortedCategories.filter(cat => 
    ![
      'accordion', 'alert', 'avatar', 'badge', 'breadcrumb', 'button', 'calendar',
      'card', 'carousel', 'chart', 'checkbox', 'collapsible', 'command', 'context-menu',
      'data-table', 'date-picker', 'dialog', 'drawer', 'dropdown-menu', 'form',
      'hover-card', 'input', 'input-otp', 'label', 'menubar', 'navigation-menu',
      'pagination', 'popover', 'progress', 'radio-group', 'resizable', 'scroll-area',
      'select', 'separator', 'sheet', 'skeleton', 'slider', 'sonner', 'switch',
      'table', 'tabs', 'textarea', 'toast', 'toggle', 'toggle-group', 'tooltip',
      'dashboard', 'footer', 'header', 'hero', 'layout', 'mainsection', 'navigation',
      'page', 'sidebar', 'animation', 'background', 'scroll-animation', 'text-animation',
      'authentication', 'pricing', 'pricing-section', 'interactive', 'modal',
      'code', 'technical', 'mockup', 'design', 'grid', 'shadcn'
    ].includes(cat)
  ),
} as const;

/**
 * Get components by category
 */
export function getComponentsByCategory(category: RegistryCategory) {
  return registry.filter(item => item.categories?.includes(category));
}

/**
 * Get all categories for a component
 */
export function getCategoriesForComponent(componentName: string) {
  const component = registry.find(item => item.name === componentName);
  return component?.categories || [];
}

/**
 * Check if a category exists in the registry
 */
export function isCategoryValid(category: string): category is RegistryCategory {
  return REGISTRY_CATEGORIES.includes(category as RegistryCategory);
}
`;
  
  // Write the constants file
  const outputPath = join(process.cwd(), 'constants', 'categories.ts');
  writeFileSync(outputPath, constantsContent, 'utf-8');
  
  console.log(`✅ Categories constants file generated at: ${outputPath}`);
  console.log(`📝 File contains ${sortedCategories.length} categories`);
  
  return {
    categories: sortedCategories,
    outputPath,
    count: sortedCategories.length
  };
}

// Run the script if called directly
if (require.main === module) {
  try {
    generateCategoriesConstant();
  } catch (error) {
    console.error('❌ Error generating categories:', error);
    process.exit(1);
  }
}

export { generateCategoriesConstant };
