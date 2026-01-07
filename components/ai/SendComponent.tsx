'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import {
  Sparkles,
  Loader,
  FileUp,
  Terminal,
  Monitor as MonitorIcon,
  Figma,
  Send,
} from 'lucide-react';

const EXAMPLE_ACTIONS = [
  {
    icon: <Terminal className="h-4 w-4" />,
    text: 'Summarize a Slack thread using AI',
  },
  {
    icon: <MonitorIcon className="h-4 w-4" />,
    text: 'Generate a daily standup summary for Slack',
  },
  {
    icon: <FileUp className="h-4 w-4" />,
    text: 'Convert a meeting transcript into a Slack update',
  },
  {
    icon: <Figma className="h-4 w-4" />,
    text: 'Draft an announcement for a Slack channel',
  },
  {
    icon: <Terminal className="h-4 w-4" />,
    text: 'Translate Slack messages into different languages',
  },
];

export default function SendComponent({
  setGenerating,
  setShowModal,
  loggedIn,
}: {
  setGenerating: (generating: boolean) => void;
  setShowModal: (show: boolean) => void;
  loggedIn: boolean;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="relative flex h-full w-full flex-grow flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="from-primary/20 to-background/50 absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-gradient-to-br blur-3xl" />
        <div className="from-primary/20 to-background/50 absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-gradient-to-br blur-3xl" />
        <div className="bg-primary/20 text-foreground absolute -top-10 left-1/2 flex h-24 w-1/2 -translate-x-1/2 overflow-hidden rounded-full blur-3xl" />
        <div className="mx-4 flex flex-col items-center">
          <div className="mb-12 text-center">
            <h1 className="from-foreground to-muted/70 via-foreground/80 mb-6 bg-gradient-to-br bg-clip-text text-5xl font-medium tracking-tight text-transparent md:text-6xl">
              What do you want to send today?
            </h1>
            <p className="text-muted-foreground/50 mx-auto max-w-xl text-lg">
              {/* Slack message sending bot */}
              Type your message below and let our AI assistant help you craft
              the perfect response.
            </p>
          </div>

          <div className="mx-auto mb-6 w-full max-w-xl">
            <div className="dark:shadow-primary/20 relative rounded-lg shadow-xl dark:shadow-2xl">
              <div className="from-secondary/40 to-background relative flex flex-col overflow-hidden rounded-lg border bg-gradient-to-b p-3 pb-6">
                <div className="via-primary pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent select-none"></div>
                <div className="via-primary pointer-events-none absolute bottom-0 left-0 h-3 w-full bg-gradient-to-r from-transparent to-transparent blur-2xl select-none"></div>
                <textarea
                  placeholder="Type your message here..."
                  className="h-32 w-full resize-none text-sm outline-none"
                />
                <div className="absolute right-2 bottom-2 z-10 mt-auto flex gap-2">
                  <Button
                    size="sm"
                    className="hover:shadow-primary cursor-pointer transition-all duration-300 ease-in hover:shadow-2xl"
                    onClick={() => {
                      // If not logged in, show login modal
                      if (!loggedIn) {
                        setShowModal(true);
                      } else {
                        setGenerating(true);
                      }
                    }}
                  >
                    Send <Send />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 flex w-full max-w-4xl flex-wrap justify-center gap-2">
            {EXAMPLE_ACTIONS.map((action, index) => (
              <Button
                key={index}
                size="sm"
                variant="outline"
                className="rounded-full px-4 py-0.5 text-xs"
              >
                {action.icon}
                <span>{action.text}</span>
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
