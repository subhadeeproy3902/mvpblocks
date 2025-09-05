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
    const type = searchParams.get('type');
    const name = searchParams.get('name');
    const REGISTRY_CATEGORIES = getAllCategories();

    // Case 1: Request by name -> Return detailed info with files.content
    if (name) {
      const item = registry.find((item) => item.name === name);
      
      if (!item) {
        return NextResponse.json(
          { error: `Component with name '${name}' not found` } satisfies RegistryErrorResponse,
          { status: 404 }
        );
      }

      return NextResponse.json({
        name: item.name,
        description: item.description || '',
        dependencies: item.dependencies || [],
        registryDependencies: item.registryDependencies || [],
        files: item.files?.map(file => ({
          path: file.path,
          target: file.target,
          type: file.type,
          content: file.content || ''
        })) || []
      } satisfies RegistryComponentDetails);
    }

    // Case 2: Request by both category and type -> Return desc, name, categories
    if (category && type) {
      // Validate if the category exists in our registry
      if (!REGISTRY_CATEGORIES.includes(category)) {
        return NextResponse.json(
          { error: `Invalid category: ${category}` } satisfies RegistryErrorResponse,
          { status: 400 }
        );
      }

      const filteredItems: RegistryComponentBasic[] = registry
        .filter((item) => 
          item.categories?.includes(category) && item.type === type
        )
        .map((item) => ({
          name: item.name,
          description: item.description || '',
          type: item.type,
          categories: item.categories || [],
        }));

      return NextResponse.json(filteredItems);
    }

    // Case 3: Request by type only -> Return desc, name, categories
    if (type) {
      const filteredItems: RegistryComponentBasic[] = registry
        .filter((item) => item.type === type)
        .map((item) => ({
          name: item.name,
          description: item.description || '',
          type: item.type,
          categories: item.categories || [],
        }));

      return NextResponse.json(filteredItems);
    }

    // Case 4: Request by category only -> Return desc, name, categories
    if (category) {
      // Validate if the category exists in our registry
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
