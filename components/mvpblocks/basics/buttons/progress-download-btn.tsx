"use client";

import { useState } from "react";
import { Download, Check } from "lucide-react";

export default function ProgressDownloadBtn() {
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const duration = 4000; // ms

  const handleClick = () => {
    if (active || done) return;

    setActive(true);
    setProgress(0);

    const interval = 100; // update every 100ms
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (elapsed >= duration) {
        clearInterval(timer);
        setActive(false);
        setDone(true);
      }
    }, interval);
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={handleClick}
        className={`relative flex items-center justify-center gap-3 w-56 h-14 rounded-xl 
        shadow-lg overflow-hidden transition-all duration-300
        ${done 
          ? "bg-green-500 hover:bg-green-600" 
          : "bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:opacity-90"}
        `}
      >
        {/* Icon */}
        <div className="relative flex h-6 w-6 items-center justify-center">
          {done ? (
            <Check className="h-6 w-6 text-white scale-110 transition-transform duration-300" />
          ) : (
            <Download
              className={`h-6 w-6 text-white transition-transform duration-300
              ${active ? "animate-spin-slow" : ""}`}
            />
          )}
        </div>

        {/* Label */}
        <span className="text-base font-semibold text-white">
          {done
            ? "Completed"
            : active
            ? `Downloading ${Math.round(progress)}%`
            : "Download"}
        </span>

        {/* Progress bar overlay */}
        {active && (
          <div
            className="absolute bottom-0 left-0 h-1 bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all"
            style={{ width: `${progress}%` }}
          />
        )}
      </button>

     
    </div>
  );
}
