"use client";

import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  liveLink: string;
  tags: string[];
  ctaLabel?: string;
}

const projects: Project[] = [
  {
    title: "Testimonialss",
    category: "Full Stack • SaaS",
    date: "Live Production",
    description:
      "A responsive testimonial wall built with React and Prisma, allowing businesses to showcase customer feedback dynamically. Features customizable embedded widgets and review management.",
    image: "/testimonialss.png",
    liveLink: "https://testimonialss.vercel.app/",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    ctaLabel: "View Live Demo",
  },
  {
    title: "SpendSync",
    category: "Mobile App • Fintech",
    date: "Google Play Testing",
    description:
      "A personal expense-tracking application designed to simplify financial management by automatically tracking and categorizing transactions from bank SMS and notifications with interactive monthly summaries.",
    image: "/testimonialss.png",
    liveLink: "https://play.google.com/apps/testing/com.danishsalmani.spendsync",
    tags: ["React Native", "Expo", "TypeScript", "SQLite", "Node.js", "Docker"],
    ctaLabel: "Google Play Store",
  },
  // {
  //   title: "HyperDev",
  //   category: "E-Commerce • MERN",
  //   date: "Full Stack App",
  //   description:
  //     "Comprehensive course-selling marketplace in MERN stack with PayPal Payment Gateway integration, admin CRUD operations, course catalog management, and student enrollments.",
  //   image: "/hyperdev.png",
  //   liveLink: "https://hyperdev.vercel.app",
  //   tags: ["React", "Express", "MongoDB", "Node.js", "PayPal API", "Tailwind CSS"],
  //   ctaLabel: "View Platform",
  // },
  // {
  //   title: "Payze",
  //   category: "Fintech • Digital Wallet",
  //   date: "Web Application",
  //   description:
  //     "Online payment web platform where users can send simulated money to each other in real time with complete transaction ledgers and balance management.",
  //   image: "/payze.png",
  //   liveLink: "https://payze.vercel.app",
  //   tags: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS"],
  //   ctaLabel: "Explore Payze",
  // },
  // {
  //   title: "Mediumm",
  //   category: "Publishing • Edge Backend",
  //   date: "Blogging App",
  //   description:
  //     "Modern full-stack blogging web application where authenticated authors can draft, format, and publish rich articles, powered by Cloudflare Workers and PostgreSQL.",
  //   image: "/mediumm.png",
  //   liveLink: "https://mediumm.vercel.app",
  //   tags: ["TypeScript", "React", "Hono", "PostgreSQL", "Prisma", "Cloudflare Workers"],
  //   ctaLabel: "Read Articles",
  // },
  // {
  //   title: "TVA Based Portfolio",
  //   category: "Frontend • Creative Experience",
  //   date: "Concept Showcase",
  //   description:
  //     "A fully responsive and visually striking portfolio inspired by the retro-futuristic Time Variance Authority aesthetic of Marvel's Loki Season 2.",
  //   image: "/tva-portfolio.png",
  //   liveLink: "https://tva-version-portfolio.vercel.app/",
  //   tags: ["React", "Tailwind CSS", "TypeScript", "Vercel"],
  //   ctaLabel: "View TVA Site",
  // },
  // {
  //   title: "Zenskar Landing Page",
  //   category: "Frontend • High Conversion",
  //   date: "Client Showcase",
  //   description:
  //     "Pixel-perfect, high-converting landing page built for Zenskar.com, fully optimized for responsiveness, clean aesthetic transitions, and fast web vitals.",
  //   image: "/zenskar.png",
  //   liveLink: "https://zenskar-landing-page.vercel.app/",
  //   tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
  //   ctaLabel: "View Landing Page",
  // },
];

export const Work = () => {
  return (
    <section id="work" className="py-16 border-t border-palette-cream-border/70">
      {/* Big Yellow Lowercase Section Header */}
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-palette-yellow-heading tracking-tight mb-4">
        work.
      </h2>

      {/* Subtitle */}
      <p className="text-palette-olive text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
        A selection of production-grade mobile applications and web platforms
        crafted with strong architecture, performant code, and high visual
        attention.
      </p>

      {/* 2-Column Grid (matching the mock's 2 cards side-by-side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col bg-palette-cream-card rounded-2xl border border-palette-cream-border hover:border-palette-navy transition-all duration-300 overflow-hidden shadow-sm hover:shadow-retro-lg"
          >
            {/* Card Image Thumbnail */}
            {/* <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-[16/10] w-full overflow-hidden bg-palette-cream-dark/60 border-b border-palette-cream-border"
            >
               <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              /> 
              // {/* Subtle top pill badge /}
              <div className="absolute top-3 left-3 bg-palette-cream/95 backdrop-blur-sm text-palette-navy text-[11px] font-bold px-2.5 py-1 rounded-md border border-palette-cream-border shadow-xs">
                {project.category}
              </div>
            </a> */}

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-palette-olive/70 mb-1">
                  {project.date}
                </div>
                <h3 className="text-xl font-bold text-palette-navy group-hover:underline decoration-palette-yellow decoration-2 underline-offset-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="mt-2.5 text-palette-olive/90 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-palette-cream-border/60">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold bg-palette-yellow/40 text-palette-navy px-2 py-0.5 rounded border border-palette-olive/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Action Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-palette-navy hover:text-palette-olive group/link transition-colors"
                >
                  <span>{project.ctaLabel || "View Project"}</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
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
          </div>
        ))}
      </div>
    </section>
  );
};
