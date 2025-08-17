"use client";
import React from "react";

const FooterAnimated = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="w-full bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative group text-lg transition-colors duration-300 hover:text-indigo-400"
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <p className="text-center text-sm text-gray-400 mt-4">
        © 2025 MVPBlocks. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterAnimated;
