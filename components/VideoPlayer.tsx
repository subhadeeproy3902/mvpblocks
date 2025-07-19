"use client";

import React from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export function VideoPlayer({ src, className }: VideoPlayerProps) {
  return (
    <div
      className={`relative w-full max-w-full h-auto rounded-lg overflow-hidden ${className}`}
    >
      <video
        autoPlay
        loop
        playsInline
        className="w-full max-w-full h-auto object-cover rounded-lg"
        src={src}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}