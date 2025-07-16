import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Prasad Chandrakant Zungare. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;