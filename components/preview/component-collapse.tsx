'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ComponentLoader } from './component-loader';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

export function ComponentCollapse({
  classNameComponentContainer,
  code,
  hasReTrigger = false,
  lang,
  name,
}: ComponentPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="not-prose relative w-full rounded-md border"
    >
      <div className="flex flex-col space-y-4">
        <div className="component-preview flex min-h-[100px] flex-1 items-center justify-center px-4">
          <ComponentLoader
            name={name}
            hasReTrigger={hasReTrigger}
            classNameComponentContainer={classNameComponentContainer}
          />
        </div>
        <CollapsibleTrigger asChild>
          <div className="bg-secondary text-muted-foreground hover:text-foreground flex cursor-pointer items-center gap-2 rounded-b-md border-t px-4 py-2 text-sm">
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform duration-200',
                isOpen && 'rotate-180',
              )}
            />
            {isOpen ? 'Hide' : 'Show'} code
          </div>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="border-t">
          <DynamicCodeBlock code={code} lang={lang} />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
