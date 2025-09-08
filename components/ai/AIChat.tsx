'use client';

import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextarea,
} from '@/components/ai-elements/prompt-input';
import { useMemo, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import { Response } from '@/components/ai-elements/response';
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '../ai-elements/reasoning';
import { Loader } from '../ai-elements/loader';
import { DefaultChatTransport } from 'ai';
import { experimental_useObject as useObject } from '@ai-sdk/react';
import { Task, TaskTrigger, TaskContent } from '@/components/ai-elements/task';
import { planSchema } from '@/types/api/plan';
import {
  getColorPalette,
  getRegistryComponents,
  getComponentCode,
  selectComponents,
} from '@/utils/api';

export default function AIConversationPanel({ hide }: { hide: boolean }) {
  const [text, setText] = useState<string>('');

  const simpleChatTransport = useMemo(
    () =>
      new DefaultChatTransport({
        api: '/api/ai/chat',
      }),
    [],
  );

  const editChatTransport = useMemo(
    () =>
      new DefaultChatTransport({
        api: '/api/ai/edit-code',
      }),
    [],
  );

  const generateCodeTransport = useMemo(
    () =>
      new DefaultChatTransport({
        api: '/api/ai/generate-code',
      }),
    [],
  );

  const {
    messages: editMessages,
    sendMessage: editSendMessage,
    status: editStatus,
  } = useChat({
    transport: editChatTransport,
  });

  const {
    messages: generateCodeMessages,
    sendMessage: generateCodeSendMessage,
    status: generateCodeStatus,
  } = useChat({
    transport: generateCodeTransport,
  });

  const { object, submit } = useObject({
    api: '/api/ai/plan',
    schema: planSchema,
    onFinish: async (result) => {
      if (result.object?.categories) {
        try {
          await getColorPalette(text);

          for (const category of result.object.categories) {
            const components = await getRegistryComponents(
              category || 'shadcn',
            );

            // If components are found, use select-components API to choose the best ones
            if (
              components &&
              Array.isArray(components) &&
              components.length > 0
            ) {
              const selectionResult = await selectComponents(
                text, // the original prompt
                category || 'shadcn',
                components,
              );

              if (
                selectionResult.success &&
                selectionResult.selectedComponents &&
                selectionResult.selectedComponents.length > 0
              ) {
                for (const selectedComponentName of selectionResult.selectedComponents) {
                  const componentCode = await getComponentCode(
                    selectedComponentName,
                  );

                  editSendMessage({
                    text: `## Original Code:
                    \`\`\`tsx
                    ${componentCode}
                    \`\`\`

                    ## Website Requested by user:
                    ${text}

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
                  });

                  // Small delay between component code requests
                  await new Promise((resolve) => setTimeout(resolve, 500));
                }
              }
            } else {
              generateCodeSendMessage({
                text: `## Component Generation Request:

                **Category**: ${category}

                **Website generation Prompt**: ${text}

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
              });
            }

            await new Promise((resolve) => setTimeout(resolve, 1000));
          }
        } catch (error) { }
      }
    },
  });

  const { messages, status, sendMessage } = useChat({
    transport: simpleChatTransport,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage({ text: text });

    submit({
      prompt: text,
    });
    setText('');
  };

  console.log (
    editMessages
  )

  console.log (
    generateCodeMessages
  )

  return (
    <div className={`h-full w-full ${hide ? 'hidden' : 'block'}`}>
      <Conversation className="h-[calc(100vh-12rem)]">
        <ConversationContent>
          {messages.map((message) => (
            <Message from={message.role} key={message.id}>
              <MessageContent>
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case 'text':
                      return (
                        <Response key={`${message.id}-${i}`}>
                          {part.text.replace(/<\/?think>/g, '')}
                        </Response>
                      );
                    case 'reasoning':
                      return (
                        <Reasoning
                          key={`${message.id}-${i}`}
                          className="w-full"
                          isStreaming={status === 'streaming'}
                        >
                          <ReasoningTrigger />
                          <ReasoningContent>{part.text}</ReasoningContent>
                        </Reasoning>
                      );
                  }
                })}
              </MessageContent>
            </Message>
          ))}

          {editMessages.map((message) => (
            <Message from={message.role} key={message.id}>
              <MessageContent>
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case 'text':
                      return (
                        <Response key={`${message.id}-${i}`}>
                          {part.text.replace(/<\/?think>/g, '')}
                        </Response>
                      );
                    case 'reasoning':
                      return (
                        <Reasoning
                          key={`${message.id}-${i}`}
                          className="w-full"
                          isStreaming={editStatus === 'streaming'}
                        >
                          <ReasoningTrigger />
                          <ReasoningContent>{part.text}</ReasoningContent>
                        </Reasoning>
                      );
                  }
                })}
              </MessageContent>
            </Message>
          ))}

          {generateCodeMessages.map((message) => (
            <Message from={message.role} key={message.id}>
              <MessageContent>
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case 'text':
                      return (
                        <Response key={`${message.id}-${i}`}>
                          {part.text.replace(/<\/?think>/g, '')}
                        </Response>
                      );
                    case 'reasoning':
                      return (
                        <Reasoning
                          key={`${message.id}-${i}`}
                          className="w-full"
                          isStreaming={generateCodeStatus === 'streaming'}
                        >
                          <ReasoningTrigger />
                          <ReasoningContent>{part.text}</ReasoningContent>
                        </Reasoning>
                      );
                  }
                })}
              </MessageContent>
            </Message>
          ))}

          {object?.planSteps?.map((task, taskIndex: number) => (
            <Task key={taskIndex} defaultOpen={taskIndex === 0}>
              <TaskTrigger title={task?.task || 'Loading...'} />
              <TaskContent>{task?.description}</TaskContent>
            </Task>
          ))}

          {object?.colorThemePrompt && (
            <Reasoning>
              <ReasoningTrigger />
              <ReasoningContent>{object?.colorThemePrompt}</ReasoningContent>
            </Reasoning>
          )}

          {status === 'submitted' || 
            editStatus === 'submitted' ||
            generateCodeStatus === 'submitted'
          && <Loader />}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="px-4">
        <PromptInput onSubmit={handleSubmit} className="mt-4 h-fit w-full">
          <PromptInputTextarea
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <PromptInputSubmit
            disabled={!text}
            status={status || editStatus || generateCodeStatus}
          />
        </PromptInput>
      </div>
    </div>
  );
}
