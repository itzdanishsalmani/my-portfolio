"use client";

import React from "react";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <section id="home" className="pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
        {/* Left Column: Intro & Headline */}
        <div className="md:col-span-7 flex flex-col items-start space-y-4">
          {/* <span className="text-palette-olive font-semibold text-lg tracking-wide">
            Hello, I&#39;m Danish,
          </span> */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-palette-navy tracking-tight leading-[1.06]">
            Full Stack &amp; <br />
            <span className="inline-block">Mobile Developer</span>
          </h1>

          {/* Typewriter role line */}
          <div className="flex items-center space-x-2 text-palette-olive font-medium text-base sm:text-lg min-h-[30px]">
            <span>Crafting</span>
            <span className="font-bold text-palette-navy underline decoration-palette-yellow decoration-4 underline-offset-4">
              <Typewriter
                options={{
                  strings: [
                    "production mobile apps.",
                    "scalable web applications.",
                    "high-performance APIs.",
                    "delightful user experiences.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 45,
                  deleteSpeed: 25,
                }}
              />
            </span>
          </div>

          <p className="text-palette-olive/90 text-base sm:text-lg font-medium pt-1">
            based in India.
          </p>

          {/* CTA Resume Button */}
          <div className="pt-3">
            <a
              href="https://drive.google.com/file/d/1N7PuxNUUjdC2E_vSnVGF9kcQ3lg3FVrK/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 bg-palette-yellow hover:bg-palette-yellow-light text-palette-navy font-bold text-sm sm:text-base px-6 py-2.5 sm:px-7 sm:py-3 rounded-lg border border-palette-navy shadow-retro hover:shadow-retro-hover active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <span>Resume</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M7 17L17 7M17 7H9M17 7V15"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Stylized Portrait / Graphic Circle */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative">
            {/* Sparkle stars at top right */}
            {/* <div className="absolute -top-6 -right-2 text-palette-olive select-none pointer-events-none">
              <span className="text-2xl inline-block mr-1">✦</span>
              <span className="text-base inline-block -translate-y-2">✦</span>
            </div> */}

            {/* Offset yellow background circle */}
            <div className="absolute -top-2 -right-2 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-palette-yellow/80 border border-palette-olive/30 -z-10" />

            {/* Main Avatar Circle */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border-2 border-palette-navy bg-[#EFE9C9] overflow-hidden shadow-inner flex items-center justify-center relative">
              {/* Stylized Developer Avatar Vector */}
              <svg
                className="w-full h-full object-cover"
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background tone */}
                <circle cx="120" cy="120" r="120" fill="#EAE2BC" />

                {/* Soft backdrop halo */}
                <circle cx="120" cy="120" r="95" fill="#FCE982" opacity="0.6" />

                {/* Shoulders / Shirt */}
                <path
                  d="M40 240C40 186 76 172 120 172C164 172 200 186 200 240"
                  fill="#0B1354"
                />
                {/* Collar accent */}
                <path
                  d="M100 172C106 186 114 192 120 192C126 192 134 186 140 172"
                  fill="#38371B"
                  opacity="0.4"
                />

                {/* Neck */}
                <rect x="108" y="142" width="24" height="34" rx="10" fill="#E8B88A" />

                {/* Head / Face */}
                <ellipse cx="120" cy="122" rx="42" ry="46" fill="#F4CA9E" />

                {/* Hair */}
                <path
                  d="M78 116C76 90 90 64 120 64C152 64 164 90 162 116C158 106 150 98 136 98C124 98 120 102 110 98C98 94 88 104 78 116Z"
                  fill="#2E2818"
                />
                {/* Curly hair details */}
                <circle cx="85" cy="88" r="14" fill="#2E2818" />
                <circle cx="104" cy="74" r="15" fill="#2E2818" />
                <circle cx="128" cy="72" r="15" fill="#2E2818" />
                <circle cx="150" cy="84" r="14" fill="#2E2818" />
                <circle cx="78" cy="106" r="10" fill="#2E2818" />
                <circle cx="162" cy="104" r="10" fill="#2E2818" />

                {/* Glasses Frame */}
                <rect
                  x="88"
                  y="114"
                  width="26"
                  height="20"
                  rx="6"
                  stroke="#0B1354"
                  strokeWidth="3.5"
                  fill="#FFFFFF"
                  fillOpacity="0.3"
                />
                <rect
                  x="126"
                  y="114"
                  width="26"
                  height="20"
                  rx="6"
                  stroke="#0B1354"
                  strokeWidth="3.5"
                  fill="#FFFFFF"
                  fillOpacity="0.3"
                />
                <line
                  x1="114"
                  y1="122"
                  x2="126"
                  y2="122"
                  stroke="#0B1354"
                  strokeWidth="3.5"
                />

                {/* Eyes */}
                <circle cx="101" cy="124" r="2.5" fill="#0B1354" />
                <circle cx="139" cy="124" r="2.5" fill="#0B1354" />

                {/* Smile */}
                <path
                  d="M109 148C114 153 126 153 131 148"
                  stroke="#38371B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Subtle Blush */}
                <circle cx="94" cy="136" r="5" fill="#E8967D" opacity="0.4" />
                <circle cx="146" cy="136" r="5" fill="#E8967D" opacity="0.4" />
              </svg>
            </div>

            {/* Diagonal hatching lines at bottom left */}
            <div className="absolute -bottom-3 -left-5 flex space-x-1 select-none pointer-events-none text-palette-olive font-mono text-lg font-bold opacity-80 rotate-12">
              <span>/</span>
              <span>/</span>
              <span>/</span>
              <span>/</span>
              <span>/</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
