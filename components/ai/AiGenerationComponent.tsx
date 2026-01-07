'use client';

import { useState } from 'react';
import AIConversationPanel from './AIChat';
import Workspace from './Workspace';

export default function AiGenerationComponent({ id }: { id: string }) {
  const [hide, setHide] = useState(false);

  return (
    <div className="grid h-auto w-full grid-cols-1 md:grid-cols-3">
      <div
        className={`flex h-full flex-col justify-between border-r py-2 transition-all duration-500 ease-in-out will-change-transform ${hide ? 'hidden' : 'block'}`}
      >
        <AIConversationPanel hide={hide} setHide={setHide} />
      </div>
      <div
        className={`h-full transition-all duration-500 ease-in-out will-change-transform ${
          hide ? 'col-span-3 translate-x-0' : 'col-span-2 translate-x-0'
        }`}
      >
        <Workspace setHide={setHide} />
      </div>
    </div>
  );
}
