"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCheck, Code, Copy, Terminal, X } from "lucide-react";
import { ComponentLoader } from "./component-loader";
import { OpenInV0Button } from "../v0";
import { siteLink } from "@/config/site";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type DrawerCodePreviewProps = {
  name: string;
  code: string;
  lang?: string;
  classNameComponentContainer?: string;
  hasReTrigger?: boolean;
  fromDocs?: boolean;
  responsive?: boolean;
  children?: ReactNode;
};

export function DrawerCodePreview({
  name,
  code,
  lang = "tsx",
  classNameComponentContainer,
  hasReTrigger = false,
  fromDocs = false,
  responsive = true,
  children,
}: DrawerCodePreviewProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const handleCopy = () => {
    const cli = `npx shadcn@latest add ${siteLink}/r/${name}.json`;
    navigator.clipboard.writeText(cli);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleCodeCopy = () => {
    navigator.clipboard.writeText(code);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 1500);
  };

  const formattedName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <Card className="not-prose relative overflow-hidden border shadow-md">
      <div className="absolute right-0 top-0 z-20 flex items-center justify-end p-3">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-xs"
            onClick={handleCopy}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span className="font-mono">CLI</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={copied ? "check" : "copy"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="ml-1"
              >
                {copied && (
                  <CheckCheck className="h-3.5 w-3.5 text-green-500" />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>

          <OpenInV0Button url={`${siteLink}/r/${name}.json`} />

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1.5 text-xs"
              >
                <Code className="h-3.5 w-3.5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="not-prose flex max-h-[80vh] w-full max-w-4xl flex-col overflow-auto p-0">
              <DialogHeader className="sticky top-0 z-10 border-b bg-background px-6 py-4">
                <DialogTitle className="flex items-center justify-between text-lg font-semibold">
                  <span>{formattedName}</span>
                  {/* Cross button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:bg-transparent hover:text-foreground"
                    onClick={() => setDialogOpen(false)}
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </DialogTitle>
              </DialogHeader>

              <div className="flex w-full flex-col">
                <div className="overflow-x-auto p-6">
                  <div className="w-full max-w-full [&_code]:whitespace-pre-wrap [&_code]:break-words [&_pre]:!overflow-x-visible">
                    <DynamicCodeBlock code={code} lang={lang} />
                  </div>
                </div>

                {children && (
                  <div className="border-t">
                    <div className="dark:prose-invert prose p-6">
                      {children}
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <CardContent className="p-0">
        <div className="component-preview flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
          <div
            className={cn(
              "w-full max-w-md transition-all duration-200",
              responsive && "flex justify-center",
            )}
          >
            <ComponentLoader
              name={name}
              hasReTrigger={hasReTrigger}
              classNameComponentContainer={classNameComponentContainer}
              fromDocs={fromDocs}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
