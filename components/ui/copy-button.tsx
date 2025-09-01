'use client';

import { Check, Copy } from 'lucide-react';
import { Button } from './button';
import { useState } from 'react';

export const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      onClick={handleCopy}
      className="inline-flex h-8 items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy License</span>
        </>
      )}
    </Button>
  );
};
