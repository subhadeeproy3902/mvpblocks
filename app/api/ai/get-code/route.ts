import { NextRequest, NextResponse } from 'next/server';
import { getCodeLogic } from './logic';
import type { GetCodeErrorResponse } from '@/types/api/get-code';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');

    const result = await getCodeLogic(name);

    if ('error' in result) {
      if (result.error === 'Component name is required') {
        return NextResponse.json(
          result satisfies GetCodeErrorResponse,
          { status: 400 }
        );
      }
      return NextResponse.json(
        result satisfies GetCodeErrorResponse,
        { status: 404 }
      );
    }

    return NextResponse.json(result);

  } catch (error) {
    console.error('Error fetching component code:', error);
    return NextResponse.json(
      { error: 'Internal server error' } satisfies GetCodeErrorResponse,
      { status: 500 }
    );
  }
}
