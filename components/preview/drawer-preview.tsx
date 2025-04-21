"use client"

import { useState, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCheck, Code, Copy, Terminal } from "lucide-react"
import { ComponentLoader } from "./component-loader"
import { OpenInV0Button } from "../v0"
import { siteLink } from "@/config/site"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

type DrawerCodePreviewProps = {
  name: string
  code: string
  lang?: string
  classNameComponentContainer?: string
  hasReTrigger?: boolean
  fromDocs?: boolean
  responsive?: boolean
  children?: ReactNode
}

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
  const [dialogOpen, setDialogOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [codeCopied, setCodeCopied] = useState(false)

  const handleCopy = () => {
    const cli = `npx shadcn@latest add ${siteLink}/r/${name}.json`
    navigator.clipboard.writeText(cli)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleCodeCopy = () => {
    navigator.clipboard.writeText(code)
    setCodeCopied(true)
    setTimeout(() => setCodeCopied(false), 1500)
  }

  const formattedName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <Card className="not-prose overflow-hidden border shadow-md">
      <div className="flex items-center justify-between border-b p-3">
        <div className="font-medium">{formattedName}</div>
        <div className="flex items-center gap-2">
          <div className="relative flex items-center rounded-md bg-muted px-3 py-1.5 text-xs font-mono">
            <Terminal className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">npx shadcn add {name}</span>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 h-full rounded-l-none px-1.5"
              onClick={handleCopy}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={copied ? "check" : "copy"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {copied ? (
                    <CheckCheck className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>

          <OpenInV0Button url={`${siteLink}/r/${name}.json`} />

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
                <Code className="h-3.5 w-3.5" />
                <span>Code</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden scrollbar-hide not-prose">
              <DialogHeader className="px-6 py-4 border-b">
                <DialogTitle className="text-lg font-semibold flex items-center justify-between">
                  <span>{formattedName}</span>
                  <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs" onClick={handleCodeCopy}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={codeCopied ? "check" : "copy"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        {codeCopied ? <CheckCheck className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      </motion.div>
                    </AnimatePresence>
                    <span>{codeCopied ? "Copied" : "Copy"}</span>
                  </Button>
                </DialogTitle>
              </DialogHeader>

              <div className="scrollbar-hide max-h-[50vh] p-6">
                <DynamicCodeBlock code={code} lang={lang} />
              </div>

              {children && (
                <div className="border-t">
                  <div className="scrollbar-hide max-h-[30vh] overflow-y-auto p-6">{children}</div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <CardContent className="p-0">
        <div className="bg-gradient-to-br from-background to-muted/30 p-6 flex justify-center items-center component-preview">
          <div className={cn("w-full max-w-md transition-all duration-200", responsive && "flex justify-center")}>
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
  )
}
