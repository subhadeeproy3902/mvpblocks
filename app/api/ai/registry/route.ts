import { NextRequest, NextResponse } from 'next/server';
import { registry } from '@/registry';
import type { 
  RegistryComponentDetails,
  RegistryComponentBasic,
  RegistryErrorResponse
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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const REGISTRY_CATEGORIES = getAllCategories();

    if (category) {
      if (!REGISTRY_CATEGORIES.includes(category)) {
        return NextResponse.json(
          { error: `Invalid category: ${category}` } satisfies RegistryErrorResponse,
          { status: 400 }
        );
      }

      const filteredItems: RegistryComponentBasic[] = registry
        .filter((item) => item.categories?.includes(category))
        .map((item) => ({
          name: item.name,
          description: item.description || '',
          type: item.type,
          categories: item.categories || [],
        }));

      return NextResponse.json(filteredItems);
    }

    // Case 5: No parameters -> Return empty array
    return NextResponse.json([]);

  } catch (error) {
    console.error('Error fetching registry items:', error);
    return NextResponse.json(
      { error: 'Internal server error' } satisfies RegistryErrorResponse,
      { status: 500 },
    );
  }
}
