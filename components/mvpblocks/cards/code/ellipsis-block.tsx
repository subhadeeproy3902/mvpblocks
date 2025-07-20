'use client';

import { motion } from 'framer-motion';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function EllipsisBlock() {
  const [status, setStatus] = useState<'idle' | 'copied'>('idle');

  useEffect(() => {
    if (status !== 'idle') {
      const timer = setTimeout(() => setStatus('idle'), 1500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleClick = () => {
    setStatus('copied');
  };

  const icons = {
    idle: <Clipboard strokeWidth={2.5} size={16} />,
    copied: (
      <ClipboardCheck
        strokeWidth={2.5}
        className="stroke-green-500 stroke-2"
        size={16}
      />
    ),
  };

  return (
    <div className="relative w-full max-w-2xl rounded-xl p-0.5">
      <div className="rounded-xl p-4">
        <div className="flex items-center justify-between rounded-t-xl border-b border-gray-700 bg-neutral-900 px-4 py-2">
          <div className="flex items-center justify-center gap-2">
            <span className="size-3 rounded-full bg-[#FF5F56]" />
            <span className="size-3 rounded-full bg-[#FFBD2E]" />
            <span className="size-3 rounded-full bg-[#27C93F]" />
          </div>

          <p className="text-sm font-medium text-gray-400">app.tsx</p>
          <button
            aria-label="Copy"
            onClick={handleClick}
            className="rounded-xl bg-gray-800 p-2 text-gray-100 hover:bg-gray-700 focus:outline-none"
          >
            <motion.div
              key={status}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              {icons[status]}
            </motion.div>
          </button>
        </div>
        <pre className="overflow-x-auto rounded-b-xl bg-stone-800 p-4 text-sm text-blue-100">
          <code>
            <span style={{ color: '#80b6f7' }}>import</span>{' '}
            <span style={{ color: '#ffffff' }}>{'{'}</span>
            <span style={{ color: '#8be9fd' }}>useState</span>
            <span style={{ color: '#ffffff' }}>{'}'}</span>{' '}
            <span style={{ color: '#80b6f7' }}>from</span>{' '}
            <span style={{ color: '#50fa7b' }}>&quot;react&quot;</span>;
            <br />
            <br />
            <span style={{ color: '#80b6f7' }}>function</span>{' '}
            <span style={{ color: '#ff79c6' }}>Counter</span>() {'{'}
            <br />
            &nbsp;&nbsp;
            <span style={{ color: '#80b6f7' }}>const</span>{' '}
            <span style={{ color: '#8be9fd' }}>[count, setCount]</span> ={' '}
            <span style={{ color: '#ff79c6' }}>useState</span>(
            <span style={{ color: '#50fa7b' }}>0</span>);
            <br />
            <br />
            &nbsp;&nbsp;
            <span style={{ color: '#80b6f7' }}>return</span> (
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#50fa7b' }}>&lt;button</span>{' '}
            <span style={{ color: '#8be9fd' }}>onClick</span>=
            <span style={{ color: '#bd93f9' }}>
              {'{() => setCount(count + 1)}'}
            </span>
            <span style={{ color: '#50fa7b' }}>&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clicked {'{count}'} times
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#50fa7b' }}>&lt;/button&gt;</span>
            <br />
            &nbsp;&nbsp;);
            <br />
            {'}'}
          </code>
        </pre>
      </div>
    </div>
  );
}
