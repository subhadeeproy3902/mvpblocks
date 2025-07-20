'use client';

import React from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export function VideoPlayer({ src, className }: VideoPlayerProps) {
  return (
    <div
      className={`relative h-auto w-full max-w-full overflow-hidden rounded-lg ${className}`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-auto w-full max-w-full rounded-lg object-cover"
        src={src}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
