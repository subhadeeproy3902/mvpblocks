'use client';

import { CircleStar } from 'lucide-react';

export default function PremiumButton() {
  return (
    <button className="group rounded-xl bg-gradient-to-br from-rose-800 via-rose-600 to-rose-800 p-1 brightness-150 transition ease-in-out hover:scale-105 hover:from-rose-700 hover:via-rose-800 hover:to-rose-600 hover:shadow-lg hover:shadow-rose-700/60 dark:brightness-100">
      <div className="h-full w-full rounded-xl bg-black/80 px-6 py-2 font-bold backdrop-blur-xl">
        <div className="flex items-center gap-1 text-rose-600 group-hover:scale-100 group-hover:text-rose-500">
          <CircleStar className="group-hover:stroke-{1.99} h-6 w-6 stroke-rose-600 group-hover:stroke-rose-500" />
          Premium
        </div>
      </div>
    </button>
  );
}
