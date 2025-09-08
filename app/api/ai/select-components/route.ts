import { NextResponse } from 'next/server';
import { selectComponentsLogic } from './logic';

export const maxDuration = 30;

interface SelectComponentRequest {
  prompt: string;
  selectionCategory: string;
  components: Array<{
    name: string;
    description: string;
    categories: string[];
  }>
}

export async function POST(req: Request) {
  try {
    const { 
      prompt, 
      selectionCategory, 
      components
    }: SelectComponentRequest = await req.json();

    const result = await selectComponentsLogic({
      prompt,
      selectionCategory,
      components,
    });

    if (!result.success) {
      return NextResponse.json(result, { status: 500 });
    }

    return NextResponse.json(result);

  } catch (error) {
    console.error('Error in select-components route:', error);
    return NextResponse.json({
      success: false,
      message: "Manually make it using shadcn components",
      selectedComponent: null,
      reason: "An error occurred while processing your request"
    }, { status: 500 });
  }
}
