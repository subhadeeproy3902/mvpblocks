import {NextRequest} from 'next/server';
import {UIMessage, streamUI} from 'ai/rsc';
import {ReactNode} from 'react';
import {chatLogic} from '../chat/logic';
import {planLogic} from '../plan/logic';
import {registryLogic} from '../registry/logic';
import {selectComponentsLogic} from '../select-components/logic';
import {getCodeLogic} from '../get-code/logic';
import {editCodeLogic} from '../edit-code/logic';
import {generateCodeLogic} from '../generate-code/logic';
import {colorPaletteLogic} from '../color-palette/logic';

// Helper components to be rendered on the client
function PlanComponent({data}: {data: any}) {
  return (
    <div>
      <h2>Plan</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

function CodeComponent({data}: {data: any}) {
  return (
    <div>
      <h2>Code</h2>
      <pre>{data}</pre>
    </div>
  );
}

async function* orchestrator(
  uiMessages: UIMessage[],
): AsyncGenerator<ReactNode> {
  const prompt = uiMessages[uiMessages.length - 1].parts[0].text;

  // 1. Chat API
  const chatResult = chatLogic(uiMessages);
  for await (const delta of chatResult.textStream) {
    yield delta;
  }

  // 2. Plan API
  const plan = await planLogic(prompt);
  yield <PlanComponent data={plan} />;

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
                id: '1',
                role: 'user',
                parts: [
                  {
                    type: 'text',
                    text: `## Original Code:
                      \`\`\`tsx
                      ${componentCode.code}
                      \`\`\`

                      ## Website Requested by user:
                      ${prompt}

                      ## Component: ${selectedComponentName}

                      ## Instructions:
                      Please enhance the above code according to the enhancement request. Follow all the rules in the system prompt.`,
                  },
                ],
              },
            ];
            const editResult = editCodeLogic(editMessages);
            let code = '';
            for await (const delta of editResult.textStream) {
              code += delta;
            }
            yield <CodeComponent data={code} />;
          }
        }
      } else {
        const generateMessages: UIMessage[] = [
          {
            id: '1',
            role: 'user',
            parts: [
              {
                type: 'text',
                text: `## Component Generation Request:

                  **Category**: ${category}

                  **Website generation Prompt**: ${prompt}

                  ## Requirements:
                  Generate a complete React/Next.js component for the "${category}" category.`,
              },
            ],
          },
        ];
        const generateResult = generateCodeLogic(generateMessages);
        let code = '';
        for await (const delta of generateResult.textStream) {
          code += delta;
        }
        yield <CodeComponent data={code} />;
      }
    } else {
        const generateMessages: UIMessage[] = [
            {
              id: '1',
              role: 'user',
              parts: [
                {
                  type: 'text',
                  text: `## Component Generation Request:

                    **Category**: ${category}

                    **Website generation Prompt**: ${prompt}

                    ## Requirements:
                    Generate a complete React/Next.js component for the "${category}" category.`,
                },
              ],
            },
          ];
          const generateResult = generateCodeLogic(generateMessages);
          let code = '';
          for await (const delta of generateResult.textStream) {
            code += delta;
          }
          yield <CodeComponent data={code} />;
    }
  }

  // 4. Color Palette API
  if (plan.colorThemePrompt) {
    const colorPalette = await colorPaletteLogic(plan.colorThemePrompt);
    yield <CodeComponent data={colorPalette} />;
  }
}

export async function POST(req: NextRequest) {
  const {messages} = await req.json();
  const stream = streamUI({
    model: 'openai/gpt-oss-20b', // This model is not used, but required by streamUI
    messages,
    async *render() {
      yield* orchestrator(messages);
    },
  });

  return new Response(stream.value, {
    headers: {'Content-Type': 'text/html; charset=utf-8'},
  });
}
