// components/GlowButton.tsx
"use client";

import React from "react";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const GlowButton: React.FC<GlowButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`
        relative px-12 py-4 font-bold text-[15px] rounded-2xl cursor-pointer 
        border-[0.25em] border-[rgb(217,176,255)] 
        text-[rgb(217,176,255)] bg-[rgb(100,61,136)] 
        shadow-[0_0_1em_0.25em_rgb(217,176,255),0_0_4em_1em_rgba(191,123,255,0.78),inset_0_0_0.74em_0.25em_rgb(217,176,255)]
        transition-all duration-300
        after:content-[''] after:pointer-events-none 
        after:absolute after:top-[120%] after:left-0 after:w-full after:h-full 
        after:bg-[rgba(191,123,255,0.78)] after:blur-[2em] after:opacity-70 
        after:[transform:perspective(1.5em)_rotateX(35deg)_scale(1,0.6)]
        hover:text-[rgb(100,61,136)] hover:bg-[rgb(217,176,255)]
        hover:shadow-[0_0_1em_0.25em_rgb(217,176,255),0_0_4em_2em_rgba(191,123,255,0.78),inset_0_0_0.75em_0.25em_rgb(217,176,255)]
        active:shadow-[0_0_0.6em_0.25em_rgb(217,176,255),0_0_2.5em_2em_rgba(191,123,255,0.78),inset_0_0_0.5em_0.25em_rgb(217,176,255)]
      `}
    >
      {children || "Glow Button"}
    </button>
  );
};

export default GlowButton;
