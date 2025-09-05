/**
 * API Types for /api/ai/registry endpoint
 */

// ========== REQUEST TYPES ==========

export interface RegistryGetParams {
  /** Filter by component name (returns detailed info) */
  name?: string;
  /** Filter by category */
  category?: string;
  /** Filter by component type */
  type?: 'registry:ui' | 'registry:block' | 'registry:hook' | 'registry:lib';
}

// ========== RESPONSE TYPES ==========

/** File information in detailed component response */
export interface RegistryFileInfo {
  /** File path */
  path: string;
  /** Target path for installation */
  target?: string;
  /** Registry item type */
  type: string;
  /** File content */
  content: string;
}

/** Detailed component information (when requesting by name) */
export interface RegistryComponentDetails {
  /** Component name */
  name: string;
  /** Component description */
  description: string;
  /** NPM dependencies */
  dependencies: string[];
  /** Registry dependencies (other components) */
  registryDependencies: string[];
  /** Component files */
  files: RegistryFileInfo[];
}

/** Basic component information (when filtering by category/type) */
export interface RegistryComponentBasic {
  /** Component name */
  name: string;
  /** Component description */
  description: string;
  /** Component type */
  type: string;
  /** Component categories */
  categories: string[];
}

/** Error response */
export interface RegistryErrorResponse {
  /** Error message */
  error: string;
}

// ========== UNION TYPES ==========

/** All possible GET response types */
export type RegistryGetResponse = 
  | RegistryComponentDetails          // When requesting by name
  | RegistryComponentBasic[]          // When filtering by category/type
  | []                               // When no parameters provided
  | RegistryErrorResponse;           // When error occurs

// ========== TYPE GUARDS ==========

export function isRegistryError(response: any): response is RegistryErrorResponse {
  return response && typeof response.error === 'string';
}

export function isRegistryComponentDetails(response: any): response is RegistryComponentDetails {
  return response && typeof response.name === 'string' && Array.isArray(response.files);
}

export function isRegistryComponentBasicArray(response: any): response is RegistryComponentBasic[] {
  return Array.isArray(response) && response.length > 0 && typeof response[0]?.name === 'string';
}
