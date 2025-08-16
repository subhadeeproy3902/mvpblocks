import React from "react";

const FooterAnimated = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto flex justify-center space-x-8">
        {["Home", "About", "Contact", "Blog"].map((link) => (
          <a
            key={link}
            href="#"
            className="relative group text-lg transition-colors duration-300 hover:text-indigo-400"
          >
            {link}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default FooterAnimated;
