import { groq } from '@ai-sdk/groq';
import { smoothStream, streamText } from 'ai';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;
export const runtime = 'nodejs';
// Reduce function invocations with rate limiting
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: groq('meta-llama/llama-4-scout-17b-16e-instruct'),
      messages,
      maxSteps: 6,
      maxRetries: 3,
      maxTokens: 4096,
      experimental_transform: smoothStream({
        chunking: 'word',
      }),
    });
    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Unhandled error in chat API:', error);
    throw error;
  }
}
