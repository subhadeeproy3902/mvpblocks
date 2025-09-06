// Auto-generated file - DO NOT EDIT MANUALLY
// Generated on: 2025-09-05T21:10:22.031Z
// Total categories: 86

import { registry } from '@/registry';

/**
 * All categories available in the MVPBlocks registry
 */
export const REGISTRY_CATEGORIES = [
  '3d',
  'about',
  'accordion',
  'ai',
  'alert',
  'animation',
  'authentication',
  'avatar',
  'background',
  'badge',
  'branding',
  'breadcrumb',
  'button',
  'calendar',
  'card',
  'carousel',
  'chart',
  'chatbot',
  'checkbox',
  'code',
  'collapsible',
  'command-palette',
  'confirmation',
  'contact',
  'context-menu',
  'cta',
  'dashboard',
  'data-visualization',
  'date-picker',
  'design',
  'dialog',
  'drawer',
  'dropdown',
  'faq',
  'features',
  'footer',
  'form',
  'form-element',
  'grid',
  'header',
  'hero',
  'hover-card',
  'input',
  'interactive',
  'label',
  'layout',
  'loader',
  'loading',
  'logo-cloud',
  'mainsection',
  'menu',
  'menubar',
  'mockup',
  'modal',
  'navigation',
  'navigation-menu',
  'notification',
  'page',
  'pagination',
  'popover',
  'pricing',
  'pricing-section',
  'progress',
  'radio',
  'required',
  'scroll-animation',
  'scrollbar',
  'select',
  'separator',
  'shadcn',
  'sheet',
  'shimmer',
  'sidebar',
  'skeleton',
  'slider',
  'switch',
  'table',
  'tabs',
  'team',
  'technical',
  'testimonials',
  'text-animation',
  'textarea',
  'toast',
  'toggle',
  'tooltip',
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
  ].filter((cat: string): cat is RegistryCategory => REGISTRY_CATEGORIES.includes(cat as RegistryCategory)),
  
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
  ].filter((cat: string): cat is RegistryCategory => REGISTRY_CATEGORIES.includes(cat as RegistryCategory)),
  
  // Animations & Effects
  ANIMATION: [
    'animation',
    'background',
    'scroll-animation',
    'text-animation',
  ].filter((cat: string): cat is RegistryCategory => REGISTRY_CATEGORIES.includes(cat as RegistryCategory)),
  
  // Business Components
  BUSINESS: [
    'authentication',
    'pricing',
    'pricing-section',
  ].filter((cat: string): cat is RegistryCategory => REGISTRY_CATEGORIES.includes(cat as RegistryCategory)),
  
  // Interactive Elements
  INTERACTIVE: [
    'interactive',
    'modal',
  ].filter((cat: string): cat is RegistryCategory => REGISTRY_CATEGORIES.includes(cat as RegistryCategory)),
  
  // Technical & Development
  TECHNICAL: [
    'code',
    'technical',
    'mockup',
  ].filter((cat: string): cat is RegistryCategory => REGISTRY_CATEGORIES.includes(cat as RegistryCategory)),
  
  // Design & Visual
  DESIGN: [
    'design',
    'grid',
  ].filter((cat: string): cat is RegistryCategory => REGISTRY_CATEGORIES.includes(cat as RegistryCategory)),
  
  // External Libraries
  SHADCN: [
    'shadcn',
  ].filter((cat: string): cat is RegistryCategory => REGISTRY_CATEGORIES.includes(cat as RegistryCategory)),
  
  // Miscellaneous
  OTHER: REGISTRY_CATEGORIES.filter((cat: RegistryCategory) => 
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
