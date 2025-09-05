import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function jsonToCss(
  json: Record<string, any>,
  selector: string = '',
  options: {
    indent?: string;
    prettify?: boolean;
    includeMediaQueries?: boolean;
  } = {}
): string {
  const { indent = '  ', prettify = true, includeMediaQueries = true } = options;
  
  const convertCamelToKebab = (str: string): string => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };

  const processValue = (value: any): string => {
    if (typeof value === 'number') {
      return value.toString();
    }
    if (typeof value === 'string') {
      return value;
    }
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return String(value);
  };

  const generateCssRules = (
    obj: Record<string, any>,
    currentSelector: string,
    depth: number = 0
  ): string[] => {
    const rules: string[] = [];
    const properties: string[] = [];
    const nestedSelectors: string[] = [];
    const mediaQueries: string[] = [];

    for (const [key, value] of Object.entries(obj)) {
      if (key.startsWith('@media') && includeMediaQueries) {
        // Handle media queries
        const mediaQuery = key;
        const mediaContent = generateCssRules(value, currentSelector, depth + 1);
        mediaQueries.push(`${mediaQuery} {\n${mediaContent.join('\n')}\n}`);
      } else if (key.startsWith('&') || key.startsWith(':') || key.startsWith('::')) {
        // Handle pseudo-selectors and nested selectors
        const nestedSelector = currentSelector + key;
        const nestedContent = generateCssRules(value, nestedSelector, depth + 1);
        nestedSelectors.push(...nestedContent);
      } else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        // Handle nested selectors
        const nestedSelector = currentSelector 
          ? `${currentSelector} ${key}` 
          : key;
        const nestedContent = generateCssRules(value, nestedSelector, depth + 1);
        nestedSelectors.push(...nestedContent);
      } else {
        // Handle regular CSS properties
        const cssProperty = convertCamelToKebab(key);
        const cssValue = processValue(value);
        const indentation = prettify ? indent.repeat(depth + 1) : '';
        const semicolon = prettify ? ';' : ';';
        properties.push(`${indentation}${cssProperty}: ${cssValue}${semicolon}`);
      }
    }

    // Generate the main rule
    if (properties.length > 0) {
      const openBrace = prettify ? ' {' : '{';
      const closeBrace = prettify ? '}' : '}';
      const newline = prettify ? '\n' : '';
      const ruleIndentation = prettify ? indent.repeat(depth) : '';
      
      const rule = currentSelector
        ? `${ruleIndentation}${currentSelector}${openBrace}${newline}${properties.join(newline)}${newline}${ruleIndentation}${closeBrace}`
        : properties.join(prettify ? '\n' : '');
      
      rules.push(rule);
    }

    // Add nested selectors
    rules.push(...nestedSelectors);

    // Add media queries
    rules.push(...mediaQueries);

    return rules;
  };

  const cssRules = generateCssRules(json, selector);
  const separator = prettify ? '\n\n' : '';
  
  return cssRules.join(separator);
}

export function jsonToInlineStyles(json: Record<string, any>): string {
  const convertCamelToKebab = (str: string): string => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };

  const processValue = (value: any): string => {
    if (typeof value === 'number') {
      return value.toString();
    }
    if (typeof value === 'string') {
      return value;
    }
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return String(value);
  };

  const styles: string[] = [];

  for (const [key, value] of Object.entries(json)) {
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      // Skip nested objects for inline styles
      continue;
    }
    
    const cssProperty = convertCamelToKebab(key);
    const cssValue = processValue(value);
    styles.push(`${cssProperty}: ${cssValue}`);
  }

  return styles.join('; ');
}
