"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full mt-16 border-t border-palette-cream-border/80 bg-palette-cream-card/60 py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-palette-olive/80 space-y-4 sm:space-y-0">
        <div>
          <span className="font-bold text-palette-navy">Mohammed Danish Salmani</span>
          <span className="mx-2">•</span>
          <span>Full Stack &amp; Mobile Developer</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-xs">
            Built with{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-palette-navy hover:underline"
            >
              Next.js
            </a>{" "}
            &amp;{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-palette-navy hover:underline"
            >
              Tailwind CSS
            </a>
          </span>

          <a
            href="#home"
            className="font-bold text-palette-navy hover:text-palette-olive transition-colors flex items-center space-x-1"
          >
            <span>Top</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
