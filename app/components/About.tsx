"use client";

import React from "react";
import Image from "next/image";

interface SkillIcon {
  src: string;
  name: string;
}

const skills: SkillIcon[] = [
  { src: "/expo-icon.svg", name: "Expo" },
  { src: "/react.svg", name: "React" },
  { src: "/typescript-icon.svg", name: "TypeScript" },
  { src: "/javascript.svg", name: "JavaScript" },
  { src: "/nextjs-icon.svg", name: "Next.js" },
  { src: "/nodejs.svg", name: "Node.js" },
  { src: "/mongodb-icon.svg", name: "MongoDB" },
  { src: "/postgresql.svg", name: "PostgreSQL" },
  { src: "/docker-icon.svg", name: "Docker" },
  { src: "/prisma.svg", name: "Prisma" },
  { src: "/aws.svg", name: "AWS" },
  { src: "/github.svg", name: "GitHub" },
  { src: "/tailwindcss-icon.svg", name: "Tailwind CSS" },
  { src: "/html-5.svg", name: "HTML5" },
  { src: "/css-3.svg", name: "CSS3" },
];

export const About = () => {
  return (
    <section id="about" className="py-16 border-t border-palette-cream-border/70">
      {/* Big Yellow Lowercase Section Header */}
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-palette-yellow-heading tracking-tight mb-8">
        about.
      </h2>

      {/* Main Paragraph */}
      <div className="text-palette-olive text-base sm:text-lg leading-relaxed max-w-4xl">
        I&#39;m a Full Stack Developer &amp; Mobile Developer with hands-on experience
        building production-grade web and mobile applications from scratch in
        startup environments. Shipped 4 live on the Google Play Store / App
        Store using React Native CLI / Expo and contributed across the full
        lifecycle — architecture, development, release, and maintenance.
        Strong expertise in TypeScript, JavaScript, React, React Native,
        Node.js. Proven ability to take ownership, ship fast, mentor peers, and
        deliver scalable, user-focused products across web and mobile platforms.
      </div>

      {/* Experience Timeline (matching the mock's • YYYY-YYYY format) */}
      <div className="mt-12 space-y-8 max-w-3xl pl-2">
        {/* Milestone 1 */}
        <div className="relative pl-6 border-l-2 border-palette-navy/30">
          <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-palette-yellow border-2 border-palette-navy" />
          <h3 className="font-extrabold text-palette-navy text-base sm:text-lg">
            • 2024 - Present
          </h3>
          <p className="mt-1.5 text-palette-olive/90 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-palette-navy">Mobile &amp; Full Stack Engineering:</span>{" "}
            Architecting production mobile applications with React Native CLI &amp; Expo.
            Implemented background tasks, local SQLite database synchronization, dynamic analytics, and scalable RESTful backends.
          </p>
        </div>

        {/* Milestone 2 */}
        <div className="relative pl-6 border-l-2 border-palette-navy/30">
          <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-palette-yellow border-2 border-palette-navy" />
          <h3 className="font-extrabold text-palette-navy text-base sm:text-lg">
            • 2023 - 2024
          </h3>
          <p className="mt-1.5 text-palette-olive/90 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-palette-navy">Full Stack Web &amp; Cloud Architectures:</span>{" "}
            Built end-to-end web applications with Next.js, React, Node.js, Express, PostgreSQL, Prisma ORM, and Docker. Integrated secure payment gateways and serverless edge functions.
          </p>
        </div>

        {/* Milestone 3 */}
        <div className="relative pl-6 border-l-2 border-palette-navy/30">
          <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-palette-yellow border-2 border-palette-navy" />
          <h3 className="font-extrabold text-palette-navy text-base sm:text-lg">
            • 2022 - 2023
          </h3>
          <p className="mt-1.5 text-palette-olive/90 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-palette-navy">Frontend &amp; Software Foundations:</span>{" "}
            Focused on modern JavaScript, TypeScript, responsive UI development with Tailwind CSS, component architecture, state management, and Git collaboration workflows.
          </p>
        </div>
      </div>

      {/* Tech Stack Skills Grid */}
      <div id="skills" className="mt-16 pt-10 border-t border-palette-cream-border/60">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-palette-navy">
            Technical Toolkit
          </h3>
          {/* <span className="text-xs uppercase tracking-widest text-palette-olive/70 font-semibold">
            15 Technologies
          </span> */}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 gap-3.5 sm:gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-3.5 bg-palette-cream-card hover:bg-palette-yellow/40 border border-palette-cream-border hover:border-palette-navy rounded-xl shadow-sm hover:shadow-retro transition-all duration-200 cursor-default"
            >
              <div className="w-10 h-10 relative flex items-center justify-center transition-transform group-hover:scale-110">
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={36}
                  height={36}
                  className="object-contain max-h-9"
                />
              </div>
              <span className="mt-2 text-xs font-semibold text-palette-navy text-center truncate w-full">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
