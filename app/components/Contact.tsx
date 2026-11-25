"use client";

import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 border-t border-palette-cream-border/70">
      {/* Big Yellow Lowercase Section Header */}
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-palette-yellow-heading tracking-tight mb-8">
        contact.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        {/* Left Column: Warm Stationery / Letter Illustration */}
        <div className="md:col-span-5">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border-2 border-palette-navy bg-[#EFE8C8] shadow-retro flex items-center justify-center p-6">
            <svg
              className="w-full h-full"
              viewBox="0 0 320 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Wooden / Warm Desk Surface */}
              <rect width="320" height="240" rx="12" fill="#E8DEC0" />

              {/* Envelope Shadow */}
              <rect
                x="44"
                y="64"
                width="190"
                height="124"
                rx="8"
                fill="#38371B"
                opacity="0.12"
              />

              {/* Paper / Envelope Back */}
              <rect
                x="40"
                y="58"
                width="190"
                height="124"
                rx="8"
                fill="#FEFDF5"
                stroke="#0B1354"
                strokeWidth="2"
              />

              {/* Envelope flap lines */}
              <path
                d="M40 60L135 125L230 60"
                stroke="#0B1354"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M40 180L105 115"
                stroke="#0B1354"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M230 180L165 115"
                stroke="#0B1354"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Postage Stamp */}
              <rect
                x="185"
                y="75"
                width="34"
                height="42"
                rx="3"
                fill="#FBE676"
                stroke="#38371B"
                strokeWidth="1.5"
                strokeDasharray="3 2"
              />
              <circle cx="202" cy="96" r="8" fill="#E5BF3B" />
              <path
                d="M202 88L204 94L210 96L204 98L202 104L200 98L194 96L200 94Z"
                fill="#0B1354"
              />

              {/* Postal Stamp Cancellation Lines */}
              <line
                x1="165"
                y1="85"
                x2="182"
                y2="85"
                stroke="#38371B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="160"
                y1="93"
                x2="182"
                y2="93"
                stroke="#38371B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="165"
                y1="101"
                x2="182"
                y2="101"
                stroke="#38371B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Golden Fountain Pen */}
              <g transform="rotate(-32 210 160)">
                {/* Pen Body */}
                <rect
                  x="130"
                  y="155"
                  width="130"
                  height="16"
                  rx="4"
                  fill="#0B1354"
                  stroke="#38371B"
                  strokeWidth="1.5"
                />
                {/* Golden Grip / Band */}
                <rect x="180" y="155" width="12" height="16" fill="#FBE676" />
                <rect x="250" y="155" width="8" height="16" fill="#FBE676" />
                {/* Golden Nib */}
                <path
                  d="M130 155L105 163L130 171Z"
                  fill="#FBE676"
                  stroke="#38371B"
                  strokeWidth="1.5"
                />
                <line
                  x1="108"
                  y1="163"
                  x2="122"
                  y2="163"
                  stroke="#0B1354"
                  strokeWidth="1.5"
                />
              </g>

              {/* Scattered Sparkles / Little Paperclip */}
              <rect
                x="260"
                y="40"
                width="16"
                height="45"
                rx="8"
                fill="none"
                stroke="#0B1354"
                strokeWidth="2"
                transform="rotate(18 260 40)"
              />
            </svg>
          </div>
        </div>

        {/* Right Column: Contact Details & Action */}
        <div className="md:col-span-7 flex flex-col space-y-6">
          <p className="text-palette-olive text-base sm:text-lg leading-relaxed">
            Interested in building scalable web applications, cross-platform
            mobile experiences, or discussing full-time opportunities? My inbox
            is always open. Whether you have a project idea, question, or just
            want to say hello, let&#39;s talk!
          </p>

          <div className="space-y-3 font-semibold text-sm sm:text-base text-palette-navy">
            {/* Email link */}
            <div className="flex items-center space-x-3 group">
              <span className="w-8 h-8 rounded-lg bg-palette-yellow/60 border border-palette-olive/20 flex items-center justify-center group-hover:bg-palette-yellow transition-colors">
                <svg
                  className="w-4 h-4 fill-current text-palette-navy"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l9.518 7.712 9.518-7.712v11.817h-19.036z" />
                </svg>
              </span>
              <a
                href="mailto:salmanidanish488@gmail.com"
                className="hover:underline decoration-palette-navy decoration-2 underline-offset-2 break-all"
              >
                salmanidanish488@gmail.com
              </a>
            </div>

            {/* LinkedIn link */}
            <div className="flex items-center space-x-3 group">
              <span className="w-8 h-8 rounded-lg bg-palette-yellow/60 border border-palette-olive/20 flex items-center justify-center group-hover:bg-palette-yellow transition-colors">
                <svg
                  className="w-4 h-4 fill-current text-palette-navy"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </span>
              <a
                href="https://www.linkedin.com/in/mohammed-danish-salmani-ab2586258/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline decoration-palette-navy decoration-2 underline-offset-2"
              >
                linkedin.com/in/mohammed-danish-salmani
              </a>
            </div>

            {/* Twitter link */}
            <div className="flex items-center space-x-3 group">
              <span className="w-8 h-8 rounded-lg bg-palette-yellow/60 border border-palette-olive/20 flex items-center justify-center group-hover:bg-palette-yellow transition-colors">
                <svg
                  className="w-4 h-4 fill-current text-palette-navy"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
              <a
                href="https://x.com/itzzdanish"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline decoration-palette-navy decoration-2 underline-offset-2"
              >
                twitter.com/itzzdanish
              </a>
            </div>

            {/* GitHub link */}
            <div className="flex items-center space-x-3 group">
              <span className="w-8 h-8 rounded-lg bg-palette-yellow/60 border border-palette-olive/20 flex items-center justify-center group-hover:bg-palette-yellow transition-colors">
                <svg
                  className="w-4 h-4 fill-current text-palette-navy"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </span>
              <a
                href="https://github.com/itzdanishsalmani"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline decoration-palette-navy decoration-2 underline-offset-2"
              >
                github.com/itzdanishsalmani
              </a>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="mailto:salmanidanish488@gmail.com"
              className="inline-flex items-center space-x-2 bg-palette-yellow hover:bg-palette-yellow-light text-palette-navy font-bold text-sm px-7 py-3 rounded-lg border border-palette-navy shadow-retro hover:shadow-retro-hover active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <span>Say Hello</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
