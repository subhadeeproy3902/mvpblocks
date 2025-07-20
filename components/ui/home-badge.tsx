import React from 'react';
import { motion } from 'framer-motion';

export default function HomeBadge() {
  return (
    <div className="group relative mb-2 inline-block cursor-pointer rounded-full bg-slate-300 p-px text-xs leading-6 font-semibold no-underline shadow-2xl shadow-zinc-900 dark:bg-slate-900">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(248, 56, 110,0.6)_0%,rgba(56,189,248,0)_75%)] absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="ring-ring/10 relative z-10 flex items-center space-x-2 rounded-full bg-zinc-100 px-4 py-0.5 ring-1 dark:bg-zinc-950">
        <span>⚡ Zero Style Stress</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          ></motion.path>
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-rose-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </div>
  );
}
