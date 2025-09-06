import { groq } from '@ai-sdk/groq';
import { streamText, UIMessage, convertToModelMessages } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: groq('openai/gpt-oss-20b'),
    messages: convertToModelMessages(messages),
    system: `
    You are the Basic Replier Phase of an AI Website Generator. Your role is to analyze the user's prompt and provide a basic reply. You do not write any code. You should give more time to thinking. Like what even the user is trying to accomplish, but alreay you should reply casually like yeah on it, awesome, I would do that. You should not include any technical terms as well.

    Respond the user a solid overview and vision for their site. Keep it clear, actionable, and engaging.

    Also do not reply too big. Keep it simple and under 70 words.

    At the end of your response, always include:
    "I will create a plan for you."
    `,
    maxRetries: 3,
  });

  return result.toUIMessageStreamResponse({
    sendReasoning: true,
  });
}
