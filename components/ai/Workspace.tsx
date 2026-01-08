'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Card } from '@/components/ui/card';
import {
  ChevronsLeft,
  Eye,
  Code2,
  MoreHorizontal,
  Maximize2,
  Clock,
} from 'lucide-react';
import V0PaneCode from './CodePane';
import V0PanePreview from './PreviewPane';
import { cn } from '@/lib/utils';

type Tab = 'preview' | 'code';

export default function V0Workspace({
  setHide,
}: {
  setHide: (hide: boolean) => void;
}) {
  const [hidden, setHidden] = useState(false);
  const [tab, setTab] = useState<Tab>('preview');
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="relative h-full w-full">
      <div
        className={cn(
          'h-full transition-all duration-500 ease-in-out will-change-transform',
        )}
      >
        <Card className="bg-background h-full gap-0 overflow-hidden rounded-none border-none p-0 shadow-sm">
          {/* Header / Toolbar */}
          <div className="bg-secondary/20 flex h-12 items-center justify-between border-b px-2 py-1">
            {/* Left controls */}
            <div className="flex h-full items-center gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const newHidden = !hidden;
                        setHidden(newHidden);
                        setHide(newHidden);
                      }}
                      className="h-8 w-8 rounded-md"
                    >
                      <ChevronsLeft size={16} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {expanded ? 'Collapse workspace' : 'Expand workspace'}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Segmented Preview/Code using Tabs */}
              <Tabs
                value={tab}
                onValueChange={(v) => setTab(v as Tab)}
                className="h-8 items-center"
              >
                <TabsList className="bg-secondary/40 h-8 overflow-hidden border p-0">
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span>
                          <TabsTrigger value="preview" className="py-3">
                            <Eye size={16} aria-hidden="true" />
                          </TabsTrigger>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="px-2 py-1 text-xs">
                        Preview
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span>
                          <TabsTrigger value="tab-2" className="py-3">
                            <Code2 size={16} aria-hidden="true" />
                          </TabsTrigger>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="px-2 py-1 text-xs">
                        Code
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TabsList>
              </Tabs>
            </div>

            {/* Center path bar
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-secondary text-foreground">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="h-4 w-px bg-border" />
                <Monitor className="h-4 w-4 opacity-80" />
                <span className="px-2 text-sm">/</span>
                <div className="h-4 w-px bg-border" />
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div> */}

            {/* Right actions */}
            <div className="flex items-center gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Clock className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Run timer</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      aria-label="Expand"
                      onClick={() => setExpanded((v) => !v)}
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    {expanded ? 'Collapse workspace' : 'Expand workspace'}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Body */}
          <div className="bg-background h-full">
            {tab === 'preview' ? <V0PanePreview /> : <V0PaneCode />}
          </div>
        </Card>
      </div>
    </div>
  );
}
