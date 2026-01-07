// components/GlowButton.tsx
'use client';

import React from 'react';

interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const GlowButton: React.FC<GlowButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`relative cursor-pointer rounded-2xl border-[0.25em] border-[rgb(217,176,255)] bg-[rgb(100,61,136)] px-12 py-4 text-[15px] font-bold text-[rgb(217,176,255)] transition-all duration-300 hover:bg-[rgb(217,176,255)] hover:text-[rgb(100,61,136)]`}
    >
      {children || 'Button'}
    </button>
  );
};

export default GlowButton;
