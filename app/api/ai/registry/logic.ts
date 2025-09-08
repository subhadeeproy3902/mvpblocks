import { registry } from '@/registry';
import type {
  RegistryComponentBasic,
} from '@/types/api/registry';

// Extract categories directly from registry to avoid the broken categories file
const getAllCategories = () => {
  const allCategories = new Set<string>();
  registry.forEach((item) => {
    if (item.categories) {
      item.categories.forEach((category) => {
        allCategories.add(category);
      });
    }
  });
  return Array.from(allCategories).sort();
};

export function registryLogic(category: string | null): RegistryComponentBasic[] | { error: string } {
  const REGISTRY_CATEGORIES = getAllCategories();

  if (category) {
    if (!REGISTRY_CATEGORIES.includes(category)) {
      return { error: `Invalid category: ${category}` };
    }

    const filteredItems: RegistryComponentBasic[] = registry
      .filter((item) => item.categories?.includes(category))
      .map((item) => ({
        name: item.name,
        description: item.description || '',
        type: item.type,
        categories: item.categories || [],
      }));

    return filteredItems;
  }

  return [];
}
