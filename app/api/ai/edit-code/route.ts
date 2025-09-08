import { UIMessage } from 'ai';
import { editCodeLogic } from './logic';

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = editCodeLogic(messages);
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Error in edit-code route:', error);

    throw error;
  }
}
