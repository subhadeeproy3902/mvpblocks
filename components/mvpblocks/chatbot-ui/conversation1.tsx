'use client';

import { useState } from 'react';
import { Send, Mic, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const initialMessages = [
  {
    id: '1',
    content:
      'Hi there! Welcome to our new platform. How can I assist you today?',
    sender: 'ai',
    timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
  },
  {
    id: '2',
    content:
      "Hello! I'm looking for information about your premium subscription plans.",
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 9).toISOString(),
  },
  {
    id: '3',
    content:
      "Great question! Our premium plan offers unlimited access to all features, priority support, and advanced analytics. It's priced at $19.99/month with a 7-day free trial.",
    sender: 'ai',
    timestamp: new Date(Date.now() - 1000 * 60 * 8).toISOString(),
  },
  {
    id: '4',
    content:
      'That sounds interesting. Are there any discounts for annual subscriptions?',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 7).toISOString(),
  },
  {
    id: '5',
    content:
      'We offer a 20% discount on annual subscriptions, bringing the price down to $191.90 per year, which saves you about $48 compared to the monthly plan.',
    sender: 'ai',
    timestamp: new Date(Date.now() - 1000 * 60 * 6).toISOString(),
  },
];

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

function ChatBubble({ message, isUser, timestamp }: ChatBubbleProps) {
  const formattedTime = timestamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div
      className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}
    >
      <div
        className={cn(
          'flex max-w-[80%] items-start space-x-2',
          isUser && 'flex-row-reverse space-x-reverse',
        )}
      >
        <div
          className={cn(
            'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full',
            isUser ? 'bg-primary/10' : 'bg-muted',
          )}
        >
          {isUser ? (
            <User className="text-primary h-4 w-4" />
          ) : (
            <Bot className="text-muted-foreground h-4 w-4" />
          )}
        </div>

        <div className="flex flex-col">
          <div
            className={cn(
              'rounded-2xl px-4 py-2 shadow-sm',
              isUser
                ? 'bg-primary text-primary-foreground rounded-tr-none'
                : 'border-border bg-card text-card-foreground rounded-tl-none border',
            )}
          >
            <p className="whitespace-pre-wrap">{message}</p>
          </div>

          <span
            className={cn(
              'text-muted-foreground mt-1 text-xs',
              isUser ? 'text-right' : 'text-left',
            )}
          >
            {formattedTime}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Conversation1() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        content:
          "Thanks for your message! I'm here to help with any other questions you might have about our services or features.",
        sender: 'ai',
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center p-4">
      <div className="border-border bg-card w-full max-w-2xl overflow-hidden rounded-xl border shadow-lg">
        <div className="bg-primary p-4">
          <h1 className="text-primary-foreground text-lg font-semibold">
            AI Assistant
          </h1>
          <p className="text-primary-foreground/80 text-sm">
            Always here to help you
          </p>
        </div>

        <div className="flex h-[600px] flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                message={message.content}
                isUser={message.sender === 'user'}
                timestamp={new Date(message.timestamp)}
              />
            ))}

            {isTyping && (
              <div className="text-muted-foreground flex items-center space-x-2 text-sm">
                <div className="flex space-x-1">
                  <div
                    className="bg-muted-foreground/70 h-2 w-2 animate-bounce rounded-full"
                    style={{ animationDelay: '0ms' }}
                  ></div>
                  <div
                    className="bg-muted-foreground/70 h-2 w-2 animate-bounce rounded-full"
                    style={{ animationDelay: '150ms' }}
                  ></div>
                  <div
                    className="bg-muted-foreground/70 h-2 w-2 animate-bounce rounded-full"
                    style={{ animationDelay: '300ms' }}
                  ></div>
                </div>
                <span>AI is typing...</span>
              </div>
            )}
          </div>

          <div className="border-border border-t p-4">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
              <Button type="button" size="icon" variant="outline">
                <Mic className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
