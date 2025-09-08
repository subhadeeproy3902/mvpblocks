import { NextRequest, NextResponse } from 'next/server';
import { colorPaletteLogic } from './logic';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const cssText = await colorPaletteLogic(prompt);

    return new NextResponse(cssText, {
      status: 200,
      headers: { 'Content-Type': 'text/css; charset=utf-8' },
    });

  } catch (error) {
    console.error('Color palette generation error:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate color palette',
        message:
          error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
