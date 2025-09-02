"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import {
  Sparkles,
  Loader,
  FileUp,
  Terminal,
  Monitor as MonitorIcon,
  Figma,
  Send,
} from "lucide-react";

const EXAMPLE_ACTIONS = [
  { icon: <Terminal className="h-4 w-4" />, text: "Summarize a Slack thread using AI" },
  { icon: <MonitorIcon className="h-4 w-4" />, text: "Generate a daily standup summary for Slack" },
  { icon: <FileUp className="h-4 w-4" />, text: "Convert a meeting transcript into a Slack update" },
  { icon: <Figma className="h-4 w-4" />, text: "Draft an announcement for a Slack channel" },
  { icon: <Terminal className="h-4 w-4" />, text: "Translate Slack messages into different languages" },
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
        className="flex overflow-hidden flex-grow flex-col h-full w-full items-center justify-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute w-64 h-64 rounded-full -bottom-16 -left-16 bg-gradient-to-br from-primary/20 to-background/50 blur-3xl" />
        <div className="absolute w-64 h-64 rounded-full  bg-gradient-to-br from-primary/20 to-background/50 blur-3xl -bottom-16 -right-16" />
        <div className="flex w-1/2 h-24 rounded-full bg-primary/20 blur-3xl absolute -top-10 left-1/2 -translate-x-1/2 text-foreground overflow-hidden" />
        <div className="mx-4 flex flex-col items-center">
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-5xl md:text-6xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted/70 via-foreground/80">
              What do you want to send today?
            </h1>
            <p className="text-lg text-muted-foreground/50 max-w-xl mx-auto">
              {/* Slack message sending bot */}
              Type your message below and let our AI assistant help you craft
              the perfect response.
            </p>
          </div>

          <div className="mx-auto mb-6 w-full max-w-xl">
            <div className="shadow-xl dark:shadow-primary/20 dark:shadow-2xl relative rounded-lg">
              <div className="flex flex-col rounded-lg border bg-gradient-to-b from-secondary/40 to-background p-3 pb-6 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-primary pointer-events-none select-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-transparent to-transparent via-primary pointer-events-none select-none blur-2xl"></div>
                <textarea
                  placeholder="Type your message here..."
                  className="h-32 w-full outline-none resize-none text-sm"
                />
                <div className="mt-auto flex gap-2 absolute bottom-2 right-2 z-10">
                  <Button size="sm" className="cursor-pointer transition-all ease-in duration-300 hover:shadow-2xl hover:shadow-primary"
                    onClick={() => {
                      // If not logged in, show login modal
                      if (!loggedIn) {
                        setShowModal(true);
                      } else {
                        setGenerating(true);
                      }
                    }}
                  >Send <Send /></Button>
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
