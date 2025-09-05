/**
 * API Response Types for /api/ai/get-code endpoint
 */

export interface GetCodeRequest {
  /** The name of the component to retrieve */
  name: string;
}

export interface GetCodeResponse {
  /** The main component code content */
  code: string;
  /** Array of registry dependencies (URLs to other components) */
  registryDependencies: string[];
  /** Array of npm package dependencies */
  dependencies: string[];
}

export interface GetCodeErrorResponse {
  /** Error message describing what went wrong */
  error: string;
}

/**
 * Registry file structure for components
 */
export interface RegistryFile {
  /** The file path within the component structure */
  path: string;
  /** The target path where the file should be placed */
  target?: string;
  /** The type of registry item */
  type: string;
  /** The actual code content of the file */
  content?: string;
}

/**
 * Complete component data from registry
 */
export interface ComponentData {
  /** Component name/identifier */
  name: string;
  /** Component description */
  description?: string;
  /** Component type (registry:ui, registry:block, etc.) */
  type: string;
  /** Component categories */
  categories?: string[];
  /** NPM dependencies required by this component */
  dependencies?: string[];
  /** Registry dependencies (other components this depends on) */
  registryDependencies?: string[];
  /** Files that make up this component */
  files?: RegistryFile[];
  /** Component author */
  author?: string;
  /** Additional metadata */
  meta?: Record<string, any>;
}
