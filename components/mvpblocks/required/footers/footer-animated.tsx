'use client';

import React from 'react';

const FooterAnimated = () => {
  const links = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <footer className="bg-secondary/50 text-foreground mt-auto h-fit w-full rounded-t-2xl py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group hover:text-primary relative text-lg transition-colors duration-300"
          >
            {link.name}
            <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <p className="text-muted-foreground mt-4 text-center text-sm">
        © 2025 MVPBlocks. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterAnimated;
