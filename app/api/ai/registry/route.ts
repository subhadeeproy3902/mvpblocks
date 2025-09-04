import { NextRequest, NextResponse } from 'next/server';
import { registry } from '@/registry';

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
          { error: `Component with name '${name}' not found` },
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
      });
    }

    // Case 2: Request by both category and type -> Return desc, name, categories
    if (category && type) {
      // Validate if the category exists in our registry
      if (!REGISTRY_CATEGORIES.includes(category)) {
        return NextResponse.json(
          { error: `Invalid category: ${category}` },
          { status: 400 }
        );
      }

      const filteredItems = registry
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
      const filteredItems = registry
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
          { error: `Invalid category: ${category}` },
          { status: 400 }
        );
      }

      const filteredItems = registry
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
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

// Optional: Handle POST requests for more complex filtering
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { categories, includeType } = body;
    const REGISTRY_CATEGORIES = getAllCategories();

    if (!categories || !Array.isArray(categories)) {
      return NextResponse.json(
        { error: 'Categories array is required in request body' },
        { status: 400 },
      );
    }

    // Validate all categories exist
    const invalidCategories = categories.filter(
      (cat: string) => !REGISTRY_CATEGORIES.includes(cat),
    );

    if (invalidCategories.length > 0) {
      return NextResponse.json(
        {
          error: `Invalid categories: ${invalidCategories.join(', ')}`,
          availableCategories: REGISTRY_CATEGORIES,
        },
        { status: 400 },
      );
    }

    // Filter registry items by multiple categories
    const filteredItems = registry
      .filter((item) =>
        categories.some((category) => item.categories?.includes(category)),
      )
      .map((item) => ({
        name: item.name,
        description: item.description || '',
        dependencies: item.dependencies || [],
        registryDependencies: item.registryDependencies || [],
        ...(includeType && { type: item.type }),
      }));

    return NextResponse.json({
      categories,
      items: filteredItems,
      count: filteredItems.length,
    });
  } catch (error) {
    console.error('Error fetching registry items:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
