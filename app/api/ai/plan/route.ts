import { NextRequest, NextResponse } from 'next/server';
import { planLogic } from './logic';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const result = await planLogic(prompt);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Plan generation error:', error);
    throw error;
  }
}
