'use client';

import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextarea,
} from '@/components/ai-elements/prompt-input';
import { useEffect, useMemo, useState } from 'react';
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
import { DefaultChatTransport, UIMessage } from 'ai';
import { Task, TaskTrigger, TaskContent } from '@/components/ai-elements/task';
import { Plan } from '@/types/api/plan';

export default function AIConversationPanel({ hide }: { hide: boolean }) {
  const [text, setText] = useState<string>('');
  const [plan, setPlan] = useState<Plan | null>(null);
  const [code, setCode] = useState<string>('');
  const [colorPalette, setColorPalette] = useState<string>('');

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: '/api/ai/orchestration',
      }),
    [],
  );

  const { messages, status, sendMessage, setMessages } = useChat({
    transport
  });

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === 'assistant' && typeof lastMessage.content === 'string') {
        // Find the start of the JSON stream
        const jsonStartIndex = lastMessage.content.indexOf('{"type"');
        if (jsonStartIndex !== -1) {
          const jsonStream = lastMessage.content.substring(jsonStartIndex);
          const jsonObjects = jsonStream.split('\n').filter(s => s.trim().startsWith('{'));

          let chatContent = lastMessage.content.substring(0, jsonStartIndex);

          jsonObjects.forEach(jsonString => {
            try {
              const parsed = JSON.parse(jsonString);
              if (parsed.type === 'plan') {
                setPlan(parsed.data);
              } else if (parsed.type === 'code') {
                setCode(prev => prev + parsed.data);
              } else if (parsed.type === 'color-palette') {
                setColorPalette(parsed.data);
              } else if (parsed.type === 'chat') {
                chatContent += parsed.data;
              }
            } catch (e) {
              // Ignore parsing errors for incomplete JSON
            }
          });

          // Update the last message with just the chat content
          const updatedMessages = [...messages];
          updatedMessages[updatedMessages.length - 1] = { ...lastMessage, content: chatContent };
          setMessages(updatedMessages);
        }
      }
    }
  }, [messages, setMessages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage({
      role: 'user',
      content: text,
    });
    setText('');
  };

  return (
    <div className={`h-full w-full ${hide ? 'hidden' : 'block'}`}>
      <Conversation className="h-[calc(100vh-12rem)]">
        <ConversationContent>
          {messages.map((message) => (
            <Message from={message.role} key={message.id}>
              <MessageContent>
                 <Response>
                    {message.content}
                 </Response>
              </MessageContent>
            </Message>
          ))}

          {plan?.planSteps?.map((task, taskIndex: number) => (
            <Task key={taskIndex} defaultOpen={taskIndex === 0}>
              <TaskTrigger title={task?.task || 'Loading...'} />
              <TaskContent>{task?.description}</TaskContent>
            </Task>
          ))}

          {code && (
            <Message from="assistant">
                <MessageContent>
                    <Response>
                        ```tsx
                        {code}
                        ```
                    </Response>
                </MessageContent>
            </Message>
          )}

          {plan?.colorThemePrompt && (
            <Reasoning>
              <ReasoningTrigger />
              <ReasoningContent>{plan?.colorThemePrompt}</ReasoningContent>
            </Reasoning>
          )}

          {colorPalette && (
            <Message from="assistant">
                <MessageContent>
                    <Response>
                        ```css
                        {colorPalette}
                        ```
                    </Response>
                </MessageContent>
            </Message>
          )}

          {status === 'streaming' && <Loader />}
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
            status={status}
          />
        </PromptInput>
      </div>
    </div>
  );
}
