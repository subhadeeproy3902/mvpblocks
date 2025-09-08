"use client"

import { useState } from "react";
import AIConversationPanel from "./AIChat";
import Workspace from "./Workspace";

export default function AiGenerationComponent({ id }: { id: string }) {

  const [hide, setHide] = useState(false);

  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3">
      <div className={`border-r py-2 h-full flex flex-col justify-between transition-all duration-500 ease-in-out will-change-transform  ${hide ? 'hidden' : 'block'}`}>
        <AIConversationPanel
          hide={hide}
        />
      </div>
      <div className={`h-full transition-all duration-500 ease-in-out will-change-transform ${hide ? 'col-span-3 translate-x-0' : 'col-span-2 translate-x-0'
        }`}>
        <Workspace
          setHide={setHide}
        />
      </div>
    </div>
  )
}
