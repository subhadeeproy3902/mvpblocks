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
        transition-all duration-300
        hover:text-[rgb(100,61,136)] hover:bg-[rgb(217,176,255)]
      `}
    >
      {children || "Button"}
    </button>
  );
};

export default GlowButton;
