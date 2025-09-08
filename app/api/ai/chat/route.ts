import { UIMessage } from 'ai';
import { chatLogic } from './logic';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = chatLogic(messages);

  return result.toUIMessageStreamResponse({
    sendReasoning: true,
  });
}
