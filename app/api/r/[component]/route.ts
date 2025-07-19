import { registry } from '@/registry';
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const REGISTRY_BASE_PATH = process.cwd();

export async function GET(
  request: Request,
  { params }: { params: { component: string } }
) {
  const { component } = params;

  // Find the component in registry
  const registryItem = registry.find(item => item.name === component);
  
  if (!registryItem) {
    return NextResponse.json(
      { error: 'Component not found' },
      { status: 404 }
    );
  }

  try {
    // Process files
    const filesWithContent = await Promise.all(
      (registryItem.files ?? []).map(async (file) => {
        const normalizedPath = file.path.startsWith('/') 
          ? file.path 
          : `/${file.path}`.replace('@/', '');
        
        const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
        let content = await fs.readFile(filePath, 'utf-8');

        // Modify import paths to be consistent
        content = content
          .replace(/@\/components\/ui\//g, '@/components/ui/')
          .replace(/@\/components\/mvpblocks\//g, '@/components/mvpblocks/')
          .replace(/@\/lib\//g, '@/lib/')
          .replace(/@\/hooks\//g, '@/hooks/');

        return {
          type: file.type || registryItem.type,
          content: content,
          path: normalizedPath,
          target: file.target || `components/mvpblocks/${normalizedPath.split('/').pop()}`
        };
      })
    );

    // Prepare the response
    const response = {
      ...registryItem,
      // Remove the component reference to avoid circular references
      component: undefined,
      files: filesWithContent
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 's-maxage=3600, stale-while-revalidate'
      }
    });
  } catch (error) {
    console.error(`Error generating registry for ${component}:`, error);
    return NextResponse.json(
      { error: 'Failed to generate component registry' },
      { status: 500 }
    );
  }
}