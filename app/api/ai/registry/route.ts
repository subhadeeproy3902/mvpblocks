import { NextRequest, NextResponse } from 'next/server';
import { registryLogic } from './logic';
import type { RegistryErrorResponse } from '@/types/api/registry';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    const result = registryLogic(category);

    if ('error' in result) {
      return NextResponse.json(
        { error: result.error } satisfies RegistryErrorResponse,
        { status: 400 }
      );
    }

    return NextResponse.json(result);

  } catch (error) {
    console.error('Error fetching registry items:', error);
    return NextResponse.json(
      { error: 'Internal server error' } satisfies RegistryErrorResponse,
      { status: 500 },
    );
  }
}
