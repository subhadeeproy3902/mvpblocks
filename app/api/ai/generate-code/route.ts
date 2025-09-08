import { UIMessage } from 'ai';
import { generateCodeLogic } from './logic';

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = generateCodeLogic(messages);

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Error in generate-code route:', error);

    throw error;
  }
}
