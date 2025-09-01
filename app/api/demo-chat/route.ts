import { groq } from '@ai-sdk/groq';
import {
  convertToModelMessages,
  smoothStream,
  stepCountIs,
  streamText,
} from 'ai';

export const maxDuration = 30;
export const revalidate = false;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: groq('meta-llama/llama-4-scout-17b-16e-instruct'),
      messages: convertToModelMessages(messages),
      maxRetries: 3,
      stopWhen: stepCountIs(6),
      maxOutputTokens: 8192,
      experimental_transform: smoothStream({
        chunking: 'word',
      }),
    });
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Unhandled error in chat API:', error);
    throw error;
  }
}
