"use client"

import { useMemo, useState } from "react"
import { CodeBlock, CodeBlockCopyButton } from '@/components/ai-elements/code-block';
import { cn } from "@/lib/utils"
import FileTree from "./FileTree"
import { ScrollArea } from "../ui/scroll-area";

type FileNode = {
  name: string
  path: string
  type: "file" | "dir"
  children?: FileNode[]
}

const FILES: FileNode[] = [
  {
    name: "app",
    path: "app",
    type: "dir",
    children: [{ name: "page.tsx", path: "app/page.tsx", type: "file" }],
  },
  {
    name: "components",
    path: "components",
    type: "dir",
    children: [
      { name: "v0-workspace.tsx", path: "components/v0-workspace.tsx", type: "file" },
      { name: "v0-pane-code.tsx", path: "components/v0-pane-code.tsx", type: "file" },
      { name: "v0-pane-preview.tsx", path: "components/v0-pane-preview.tsx", type: "file" },
    ],
  },
  {
    name: "emails",
    path: "emails",
    type: "dir",
    children: [{ name: "poaching-alert-email.html", path: "emails/poaching-alert-email.html", type: "file" }],
  },
]

const CODE_BY_PATH: Record<string, { lang: "tsx" | "html"; code: string }> = {
  "app/page.tsx": {
    lang: "tsx",
    code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Poaching Alert Email</title>
    <style>
      body{font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; background:#f5f5f5; padding:24px;}
      .banner{background:#dc2626; color:white; padding:16px; border-radius:12px 12px 0 0; text-align:center;}
      .card{background:white; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,.08); overflow:hidden;}
      .section{padding:16px 20px;}
      .muted{background:#fef2f2; border:1px solid #fecaca; color:#991b1b; padding:16px; border-radius:12px;}
    </style>
  </head>
  <body>
    <div class="card">
      <div class="banner"><strong>POACHING ALERT</strong><div>Wildlife Protection System</div></div>
      <div class="section">
        <div class="muted"><strong>Poaching Activity Detected</strong><div>Suspicious activity detected in the protected area.</div></div>
      </div>
    </div>
  </body>
</html>`,
  },
  "components/v0-workspace.tsx": {
    lang: "tsx",
    code: `/* Workspace container using shadcn Tabs/Tooltip/Button */
"use client"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs"
export default function V0Workspace(){ /* ... */ return null }`,
  },
  "components/v0-pane-code.tsx": {
    lang: "tsx",
    code: `/* File tree + code viewer using Collapsible and Card */
"use client"
export default function V0PaneCode(){ /* ... */ return null }`,
  },
  "components/v0-pane-preview.tsx": {
    lang: "tsx",
    code: `/* Iframe preview rendering srcDoc */
"use client"
export default function V0PanePreview(){ /* ... */ return null }`,
  },
  "emails/poaching-alert-email.html": {
    lang: "html",
    code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Poaching Alert Email</title>
    <style>
      body{font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; background:#f5f5f5; padding:24px;}
      .banner{background:#dc2626; color:white; padding:16px; border-radius:12px 12px 0 0; text-align:center;}
      .card{background:white; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,.08); overflow:hidden;}
      .section{padding:16px 20px;}
      .muted{background:#fef2f2; border:1px solid #fecaca; color:#991b1b; padding:16px; border-radius:12px;}
    </style>
  </head>
  <body>
    <div class="card">
      <div class="banner"><strong>POACHING ALERT</strong><div>Wildlife Protection System</div></div>
      <div class="section">
        <div class="muted"><strong>Poaching Activity Detected</strong><div>Suspicious activity detected in the protected area.</div></div>
      </div>
    </div>
  </body>
</html>`,
  },
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

// Very lightweight highlighter: HTML tags/attrs or TS keywords
function highlight(code: string, lang: "tsx" | "html") {
  let escaped = escapeHtml(code)

  if (lang === "html") {
    // tags
    escaped = escaped.replace(/(&lt;\/?)([a-zA-Z0-9-]+)(?=[\s&gt;])/g, '$1<span class="text-blue-400">$2</span>')
    // attributes
    escaped = escaped.replace(
      /([a-zA-Z-:]+)=(&quot;[^&]*&quot;)/g,
      '<span class="text-emerald-400">$1</span>=<span class="text-amber-300">$2</span>',
    )
  } else {
    // TypeScript keywords
    escaped = escaped.replace(
      /\b(export|default|function|return|const|let|import|from|as|if|else|type|interface|extends|new|class)\b/g,
      '<span class="text-blue-400">$1</span>',
    )
    // strings
    escaped = escaped.replace(/(&quot;[^&]*&quot;|&#39;[^&]*&#39;)/g, '<span class="text-amber-300">$1</span>')
    // punctuation
    escaped = escaped.replace(/([{}()[\].,;])/g, '<span class="text-cyan-300">$1</span>')
  }
  return escaped
}

function findFirstFile(nodes: FileNode[]): string | null {
  for (const n of nodes) {
    if (n.type === "file") return n.path
    if (n.children) {
      const c = findFirstFile(n.children)
      if (c) return c
    }
  }
  return null
}

export default function V0PaneCode() {
  const initial = useMemo(() => findFirstFile(FILES) ?? "app/page.tsx", [])
  const [activePath, setActivePath] = useState<string>(initial)

  const active = useMemo(() => CODE_BY_PATH[activePath] ?? { lang: "tsx" as const, code: "// File not found" }, [activePath])
  const highlighted = useMemo(() => highlight(active.code, active.lang), [active])

  return (
    <div className="grid grid-cols-12 gap-0 h-full">
      {/* File tree */}
      <aside className="col-span-3 border-r border-border bg-background">
        <div className="px-1 pb-2 pt-1">
          <TreeNode />
        </div>
      </aside>

      {/* Editor */}
      <section className="col-span-9 bg-secondary/20">
        <div className="px-3 py-2 text-sm">
          <span className="text-muted-foreground">{activePath}</span>
        </div>
        <div className="relative h-full flex flex-col">
            {/* Gutter */}
            {/* <div className="bg-secondary border-r border-border text-muted-foreground select-none py-3 pl-3 pr-2">
              <LineNumbers code={active.code} />
            </div> */}
            {/* Code */}
            <ScrollArea className="h-[calc(100vh-8rem)] rounded-none bg-transparent noscrollbar">
              <CodeBlock code={active.code} language={active.lang} showLineNumbers={true} className="bg-transparent rounded-none border-0">
                <CodeBlockCopyButton />
              </CodeBlock>
            </ScrollArea>
        </div>
      </section>
    </div>
  )
}

function LineNumbers({ code }: { code: string }) {
  const lines = code.split("\n")
  return (
    <div className="font-mono text-xs leading-6">
      {lines.map((_, i) => (
        <div key={i} className="text-right pr-1">
          {i + 1}
        </div>
      ))}
    </div>
  )
}

function TreeNode() {
  return (
    <FileTree />
  )
}
