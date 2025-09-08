import { NextRequest } from 'next/server';
import { chatLogic } from '../chat/logic';
import { planLogic } from '../plan/logic';
import { registryLogic } from '../registry/logic';
import { selectComponentsLogic } from '../select-components/logic';
import { getCodeLogic } from '../get-code/logic';
import { editCodeLogic } from '../edit-code/logic';
import { generateCodeLogic } from '../generate-code/logic';
import { colorPaletteLogic } from '../color-palette/logic';
import { UIMessage } from 'ai';

// Helper to pipe AI streams to our response stream
async function pipeStream(stream: ReadableStream<any>, writer: WritableStreamDefaultWriter<Uint8Array>, type: string, encoder: TextEncoder) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value, { stream: true });
    writer.write(encoder.encode(JSON.stringify({ type, data: chunk }) + '\n'));
  }
}

export async function POST(req: NextRequest) {
  const { messages: uiMessages }: { messages: UIMessage[] } = await req.json();
  const lastMessage = uiMessages[uiMessages.length - 1];
  const prompt = lastMessage.text;

  const stream = new ReadableStream({
    async start(controller) {
      const writer = controller.writable.getWriter();
      const encoder = new TextEncoder();

      try {
        // 1. Chat API
        const chatStream = chatLogic(uiMessages);
        await pipeStream(chatStream.textStream, writer, 'chat', encoder);

        // 2. Plan API
        const plan = await planLogic(prompt);
        writer.write(encoder.encode(JSON.stringify({ type: 'plan', data: plan }) + '\n'));

        // 3. Orchestration Logic
        for (const category of plan.categories) {
          const components = registryLogic(category);

          if (!('error' in components) && components.length > 0) {
            const selectionResult = await selectComponentsLogic({
              prompt,
              selectionCategory: category,
              components,
            });

            if (selectionResult.success && selectionResult.selectedComponents) {
              for (const selectedComponentName of selectionResult.selectedComponents) {
                const componentCode = await getCodeLogic(selectedComponentName);
                if (!('error' in componentCode)) {
                  const editMessages: UIMessage[] = [
                    {
                      role: 'user',
                      text: `## Original Code:
                      \`\`\`tsx
                      ${componentCode.code}
                      \`\`\`

                      ## Website Requested by user:
                      ${prompt}

                      ## Component: ${selectedComponentName}

                      ## Instructions:
                      Please enhance the above code according to the enhancement request. Follow all the rules in the system prompt, especially:
                      - Only modify hardcoded color values (hex, rgb, hsl, named colors)
                      - Never change CSS custom properties or theme variables
                      - Improve content and structure as requested
                      - Ensure the component is more polished and professional
                      - Maintain all original functionality
                      - Make the UI design absolutely aesthetic with nice gradient blurry blobs, nice content and ensure responsiveness

                      Return only the enhanced code without any explanations or markdown formatting.`,
                    },
                  ];
                  const editStream = editCodeLogic(editMessages);
                  await pipeStream(editStream.textStream, writer, 'code', encoder);
                }
              }
            } else {
              const generateMessages: UIMessage[] = [
                {
                  role: 'user',
                  text: `## Component Generation Request:

                  **Category**: ${category}

                  **Website generation Prompt**: ${prompt}

                  ## Requirements:
                  1. Generate a complete React/Next.js component for the "${category}" category
                  2. Follow the prompt requirements closely while staying within the category scope
                  3. Use Shadcn/ui components and theme variables whenever possible
                  4. Create an aesthetically pleasing design with gradients, blur effects, or modern visual elements
                  5. Ensure responsive design that works on all screen sizes
                  6. Include proper TypeScript types and interfaces
                  7. Add subtle animations or hover effects where appropriate
                  8. Use semantic HTML and accessibility best practices
                  9. Make the UI design absolutely aesthetic with nice gradient blurry blobs, nice content and ensure responsiveness

                  Return only the complete component code with proper imports and TypeScript types. Make it production-ready and visually stunning with modern design patterns.`,
                },
              ];
              const generateStream = generateCodeLogic(generateMessages);
              await pipeStream(generateStream.textStream, writer, 'code', encoder);
            }
          } else {
            const generateMessages: UIMessage[] = [
                {
                  role: 'user',
                  text: `## Component Generation Request:

                  **Category**: ${category}

                  **Website generation Prompt**: ${prompt}

                  ## Requirements:
                  1. Generate a complete React/Next.js component for the "${category}" category
                  2. Follow the prompt requirements closely while staying within the category scope
                  3. Use Shadcn/ui components and theme variables whenever possible
                  4. Create an aesthetically pleasing design with gradients, blur effects, or modern visual elements
                  5. Ensure responsive design that works on all screen sizes
                  6. Include proper TypeScript types and interfaces
                  7. Add subtle animations or hover effects where appropriate
                  8. Use semantic HTML and accessibility best practices
                  9. Make the UI design absolutely aesthetic with nice gradient blurry blobs, nice content and ensure responsiveness

                  Return only the complete component code with proper imports and TypeScript types. Make it production-ready and visually stunning with modern design patterns.`,
                },
              ];
            const generateStream = generateCodeLogic(generateMessages);
            await pipeStream(generateStream.textStream, writer, 'code', encoder);
          }
        }

        // 4. Color Palette API
        if (plan.colorThemePrompt) {
            const colorPalette = await colorPaletteLogic(plan.colorThemePrompt);
            writer.write(encoder.encode(JSON.stringify({ type: 'color-palette', data: colorPalette }) + '\n'));
        }

        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
