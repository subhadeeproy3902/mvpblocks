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
import { Loader } from '../ai-elements/loader';
import { DefaultChatTransport } from 'ai';

export default function AIConversationPanel({ hide }: { hide: boolean }) {
  const [text, setText] = useState<string>('');

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: '/api/ai/orchestration',
      }),
    [],
  );

  const { messages, status, sendMessage } = useChat({
    transport
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage({ role: 'user', parts: [{ type: 'text', text: text }] });
    setText('');
  };

  return (
    <div className={`h-full w-full ${hide ? 'hidden' : 'block'}`}>
      <Conversation className="h-[calc(100vh-12rem)]">
        <ConversationContent>
          {messages.map((message) => (
            <Message from={message.role} key={message.id}>
              <MessageContent>
                {message.parts.map((part, i) => {
                  if (part.type === 'text') {
                    return (
                      <Response key={`${message.id}-${i}`}>
                        {part.text}
                      </Response>
                    );
                  }
                  if (part.type === 'ui') {
                    return <div key={`${message.id}-${i}`}>{part.ui}</div>;
                  }
                })}
              </MessageContent>
            </Message>
          ))}

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
