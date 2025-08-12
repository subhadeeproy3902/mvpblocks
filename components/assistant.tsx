'use client';

import { useChat } from 'ai/react';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { MemoizedMarkdown } from '@/components/memoized-markdown';
import {
  CornerDownLeftIcon,
  FileCodeIcon,
  GlobeIcon,
  Loader2Icon,
  MousePointerClickIcon,
  SparklesIcon,
  TrashIcon,
  UserIcon,
  ZapIcon,
  SquareIcon,
  AlertTriangleIcon,
  RefreshCwIcon,
} from 'lucide-react';
import { Button } from './ui/button';

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});

export default function AssistantDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });
  const [tokenUsage, setTokenUsage] = useState(0);

  const {
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    setInput,
    stop,
    error,
    reload,
  } = useChat({
    experimental_throttle: 50,
    onFinish: ({}, { usage }) => {
      setTokenUsage(usage.totalTokens);
    },
  });
  const isLoading = status === 'submitted' || status === 'streaming';

  // Simple pass-through handler without token limit check
  const handleSubmitWithTokenCheck = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      handleSubmit(e);
    },
    [handleSubmit],
  );

  const viewportRef = useRef<HTMLDivElement>(null);

  const formatTime = useCallback((date: Date) => {
    return timeFormatter.format(date);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToBottom = useCallback(() => {
    if (viewportRef.current) {
      const scrollElement = viewportRef.current;
      scrollElement.scrollTo({
        top: scrollElement.scrollHeight,
      });
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();

      if (status === 'streaming') {
        const interval = setInterval(scrollToBottom, 100);
        return () => clearInterval(interval);
      }
    }
  }, [messages, scrollToBottom, status]);

  const submitExample = useCallback(
    (text: string) => {
      setInput(text);
      setTimeout(() => {
        const formEvent = new Event('submit', { bubbles: true });
        const form = document.querySelector('form');
        if (form) form.dispatchEvent(formEvent);
      }, 0);
    },
    [setInput],
  );

  const clearChat = useCallback(() => {
    setTokenUsage(0);
    setMessages([]);
  }, [setTokenUsage, setMessages]);

  const TriggerButton = useMemo(
    () => (
      <Button
        aria-label="Trigger Assistant"
        className="fixed right-3 bottom-3 h-12 w-12 cursor-pointer rounded-full bg-gradient-to-b from-rose-500 to-rose-700 p-0 text-3xl text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] focus-visible:outline-none sm:right-5 sm:bottom-5"
      >
        <SparklesIcon />
      </Button>
    ),
    [],
  );

  const TokenUsageFooter = useMemo(
    () => (
      <div className="flex w-full items-center justify-between">
        <div className="text-fd-muted-foreground flex items-center gap-1 text-xs">
          <ZapIcon className="size-3.5" />
          <span>{tokenUsage} tokens used</span>
        </div>
        <button
          aria-label="Clear chat history"
          onClick={clearChat}
          className="text-fd-muted-foreground hover:text-fd-foreground flex items-center gap-1 text-xs transition-colors"
        >
          <TrashIcon className="size-3.5" />
          Clear chat
        </button>
      </div>
    ),
    [tokenUsage, clearChat],
  );

  const EmptyChatState = useMemo(
    () => (
      <div className="flex items-start justify-center p-4 sm:mt-8">
        <div className="space-y-4 text-center">
          <h3 className="text-lg font-medium">
            Welcome to the mvp.ai Assistant
          </h3>
          <p className="text-fd-muted-foreground text-balance">
            Ask me anything about MVPBlocks components, UI design, or
            implementation details.
            <br /> Your chat history is not saved between sessions.
          </p>
          <p className="text-fd-muted-foreground hidden text-xs sm:block">
            Tip: Press{' '}
            <kbd className="bg-fd-muted rounded px-1 py-0.5">Ctrl+/</kbd>{' '}
            anytime to open this assistant
          </p>
          <div className="right-0 bottom-0 w-full sm:absolute">
            <div className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
              <button
                aria-label="Example: Button component"
                className="border-fd-muted flex items-center gap-2 rounded-lg border p-2 shadow-sm hover:cursor-pointer"
                onClick={() =>
                  submitExample('Show me how to use the button component')
                }
              >
                <MousePointerClickIcon className="size-4" />
                Button component
              </button>
              <button
                aria-label="Example: Hero section"
                className="border-fd-muted flex items-center gap-2 rounded-lg border p-2 shadow-sm hover:cursor-pointer"
                onClick={() =>
                  submitExample('Create a hero section for my landing page')
                }
              >
                <GlobeIcon className="size-4" />
                Hero section
              </button>
              <button
                aria-label="Example: Form validation"
                className="border-fd-muted flex items-center gap-2 rounded-lg border p-2 shadow-sm hover:cursor-pointer"
                onClick={() =>
                  submitExample(
                    'How to implement form validation with MVPBlocks',
                  )
                }
              >
                <FileCodeIcon className="size-4" />
                Form validation
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
    [submitExample],
  );

  const ChatUI = useMemo(
    () => (
      <ScrollArea
        ref={viewportRef}
        className="mb-4 h-[512px] flex-1 overflow-y-auto px-4 sm:mb-0 sm:px-0"
      >
        {messages.length === 0 ? (
          EmptyChatState
        ) : (
          <div className="space-y-4">
            {messages.map((message) => {
              const timestamp: Date = message.createdAt || new Date();
              const isUser: boolean = message.role === 'user';

              return (
                <div
                  key={message.id}
                  className={cn(
                    'flex items-start gap-3',
                    isUser ? 'justify-end' : 'justify-start',
                  )}
                >
                  {!isUser && (
                    <div className="bg-fd-accent hidden h-min rounded-full p-2 sm:block">
                      <SparklesIcon className="size-4" />
                    </div>
                  )}
                  <div
                    className={cn(
                      'flex max-w-full flex-col sm:max-w-[calc(100%-3.75rem)]',
                      isUser ? 'items-end' : 'items-start',
                    )}
                  >
                    <div
                      className={cn(
                        'block w-full rounded-lg px-4 py-2 text-sm',
                        isUser
                          ? 'bg-fd-primary text-fd-primary-foreground'
                          : 'dark:prose-dark prose bg-fd-muted prose-code:bg-fd-card prose-code:px-1 prose-code:font-mono prose-code:text-fd-accent-foreground',
                      )}
                    >
                      <MemoizedMarkdown
                        id={message.id}
                        content={message.content}
                      />
                    </div>
                    <div className="text-fd-muted-foreground mt-1 text-xs">
                      {formatTime(timestamp)}{' '}
                      <span>· {isUser ? 'User' : 'Assistant'}</span>
                    </div>
                  </div>
                  {isUser && (
                    <div className="bg-fd-accent hidden h-min rounded-full p-2 sm:block">
                      <UserIcon className="size-4" />
                    </div>
                  )}
                </div>
              );
            })}
            {error && (
              <div className="flex items-start justify-start gap-3">
                <div className="hidden h-min rounded-full bg-red-500 p-2 sm:block">
                  <AlertTriangleIcon className="size-4 text-white" />
                </div>
                <div className="flex max-w-full flex-col items-start sm:max-w-[calc(100%-3.75rem)]">
                  <div className="block w-full rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-200">
                    <div className="font-medium">Error</div>
                    <p className="mt-1">
                      {error.message ||
                        'Something went wrong with your request.'}
                    </p>
                    <button
                      aria-label="Try request again"
                      onClick={() => reload()}
                      className="mt-2 inline-flex items-center text-xs font-medium text-red-700 hover:text-red-800 dark:text-red-300 dark:hover:text-red-200"
                    >
                      <RefreshCwIcon className="mr-1 size-3" /> Try again
                    </button>
                  </div>
                  <div className="text-fd-muted-foreground mt-1 text-xs">
                    {formatTime(new Date())} <span>· System</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </ScrollArea>
    ),
    [messages, formatTime, EmptyChatState, error, reload],
  );

  const chatFooter = useMemo(
    () => (
      <div className="w-full space-y-2">
        {messages.length > 0 && TokenUsageFooter}
        <form
          onSubmit={handleSubmitWithTokenCheck}
          className="border-fd-border flex w-full flex-row items-center gap-2 rounded-lg border px-3 shadow-sm"
        >
          <div className="relative size-4">
            {isLoading ? (
              <Loader2Icon className="text-fd-muted-foreground absolute size-full animate-spin" />
            ) : (
              <SparklesIcon className="text-fd-muted-foreground absolute size-full" />
            )}
          </div>
          <Input
            disabled={isLoading}
            value={input}
            onChange={handleInputChange}
            maxLength={100}
            placeholder="Ask about MVPBlocks components..."
            className="h-11 w-0 flex-1 border-0 py-3 text-base shadow-none outline-none focus-visible:ring-0"
          />
          {isLoading ? (
            <button
              type="button"
              aria-label="Stop generating response"
              onClick={stop}
              className="text-fd-destructive hover:text-fd-destructive hover:bg-fd-accent hover:text-fd-accent-foreground inline-flex items-center justify-center rounded-md border p-1.5 text-xs font-medium transition-colors duration-100"
            >
              <SquareIcon className="size-4" />
            </button>
          ) : (
            <button
              type="submit"
              aria-label="Send message"
              className="hover:bg-fd-accent hover:text-fd-accent-foreground inline-flex items-center justify-center rounded-md border p-1.5 text-xs font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50"
              disabled={isLoading || !input.trim()}
            >
              <CornerDownLeftIcon className="size-4" />
            </button>
          )}
        </form>
      </div>
    ),
    [
      handleSubmitWithTokenCheck,
      input,
      handleInputChange,
      isLoading,
      messages.length,
      TokenUsageFooter,
      stop,
    ],
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{TriggerButton}</DialogTrigger>
        <DialogContent className="bg-fd-popover rounded-xl sm:max-w-screen-sm">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/dtyc0ob4r/image/upload/v1754994617/logo_bkqfei.webp"
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="bg-primary from-foreground to-primary via-rose-200 bg-clip-text text-2xl font-semibold text-transparent md:text-xl dark:bg-gradient-to-b">
                Mvpblocks
              </span>
            </div>
            <DialogDescription className="leading-relaxed">
              Answers may be inaccurate, please verify information.
            </DialogDescription>
          </DialogHeader>
          {ChatUI}
          <DialogFooter>{chatFooter}</DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{TriggerButton}</DrawerTrigger>
      <DrawerContent className="bg-fd-popover">
        <DrawerHeader>
          <div className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/dtyc0ob4r/image/upload/v1754994617/logo_bkqfei.webp" alt="logo" className="h-8 w-8 rounded-full" />
            <span className="bg-primary from-foreground to-primary via-rose-200 bg-clip-text text-2xl font-semibold text-transparent md:text-xl dark:bg-gradient-to-b">
              Mvpblocks
            </span>
          </div>
          <DrawerDescription className="leading-relaxed">
            Answers may be inaccurate, please verify information.
          </DrawerDescription>
        </DrawerHeader>
        {ChatUI}
        <DrawerFooter className="pt-0">{chatFooter}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
