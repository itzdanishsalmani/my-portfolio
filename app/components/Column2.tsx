import React from "react";
import { ProjectCard } from "./Units";
import { Span } from "./Units";
import Image from "next/image";

export const Col2 = () => {
    const buttons1 = ["TypeScript", "React", "Express", "Node.js", "Postgresql", "Prisma ORM", "Tailwind CSS", "Vercel"];
    const buttons2 = ["React", "Express", "MongoDB Atlas", "Node.js", "JavaScript", "Tailwind CSS", "Vercel", "PayPal API"];
    const buttons3 = ["TypeScript", "React", "Hono", "Postgresql", "Prisma ORM", "Tailwind CSS", "Vercel", "Cloudflare workers"];
    const buttons4 = ["React", "Express", "MongoDB Atlas", "Node.js", "JavaScript", "Tailwind CSS", "Vercel"];
    const buttons5 = ["React", "Tailwind CSS", "TypeScript", "Vercel"];

    interface Icon {
        src: string;
        alt: string;
    }
    const icons: Icon[] = [
        // { src: "nextjs-icon.svg", alt: "Next.js" },        
        { src: "typescript-icon.svg", alt: "TypeScript" },
        { src: "javascript.svg", alt: "JavaScript" },
        { src: "react.svg", alt: "React" },
        { src: "nodejs.svg", alt: "Node.js" },

        { src: "mongodb-icon.svg", alt: "MongoDB" },
        { src: "postgresql.svg", alt: "PostgreSQL" },
        { src: "docker-icon.svg", alt: "Docker" },
        { src: "prisma.svg", alt: "Prisma" },
        { src: "aws.svg", alt: "AWS" },

        { src: "git-icon.svg", alt: "Git" },
        { src: "/github.svg", alt: "GitHub" },
        { src: "tailwindcss-icon.svg", alt: "Tailwind CSS" },
        { src: "html-5.svg", alt: "HTML5" },
        { src: "css-3.svg", alt: "CSS3" },
    ];
    return (
        <div className="font-mono mx-4 md:mr-36 ">
            <div id="about" className="mt-24 text-slate-400">
                I&apos;m a Frontend and Mobile Developer with hands-on experience building production-grade web and Android
                applications from scratch in startup environments. Shipped 2 Android applications live on the Google Play
                Store using React Native CLI and contributed across the full lifecycle — architecture, development, release,
                and maintenance. Strong expertise in TypeScript, JavaScript, React, React Native, Node.js. Proven ability to
                take ownership, ship fast, mentor peers, and deliver scalable, user-focused products across web and mobile
                platforms. </div>

            <div id="skills" className="mt-24 p-4 rounded-lg hover:bg-slate-800">
                <div className="grid grid-cols-5 items-center gap-4 cursor-pointer">
                    {icons.map((icon, index) => (
                        <Image key={index} className="w-12 h-20" src={icon.src} alt={icon.alt} width={48} height={80} />
                    ))}
                </div>
            </div>

            <div className="mt-24 flex space-x-2 cursor-pointer text-white hover:text-emerald-600">
                <div>
                    <a href="https://drive.google.com/file/d/1oMw4uC00EdD7rXC4wzLOfvyCuCSxBgTg/view?usp=sharing" target="_blank"> View Full Resume </a></div>
                <div> <Image src={"arrow_north_east.svg"} alt="arrow" height={20} width={20} /> </div>
            </div>

            <div className="mt-10 flex space-x-2 cursor-pointer text-white hover:text-emerald-600">
                Personal Projects
            </div>

            <div id="projects" className="space-y-12">

                <ProjectCard
                    liveLink="https://testimonialss.vercel.app/"
                    image="/testimonialss.png"
                    title="Testimonialss - Display User Feedback Seamlessly"
                    description="A responsive testimonial wall built with React and Prisma, allowing businesses to showcase customer feedback dynamically. Users can leave reviews, and administrators can easily manage testimonials. Features include a customizable embedded widget, like functionality."
                    buttons={buttons1}
                />

                <ProjectCard
                    liveLink="https://hyperdev.vercel.app"
                    image="/hyperdev.png"
                    title="HyperDev - Course selling web application"
                    description="It is a Full Stack responsive web application in MERN Stack with PayPal Payment Gateway, where Admin can perform CRUD operation and user can pay and buy courses."
                    buttons={buttons2}
                />

                <ProjectCard
                    liveLink="https://mediumm.vercel.app"
                    image="/mediumm.png"
                    title="Mediumm - Blogging web application"
                    description="Develop a full-stack responsive web app where authenticated users can create and update blog posts with descriptions."
                    buttons={buttons3}
                />

                <ProjectCard
                    liveLink="https://payze.vercel.app"
                    image="/payze.png"
                    title="Payze - Online payment web application"
                    description="It is an online payment web application in MERN Stack where users can send payment to each other with virtual money."
                    buttons={buttons4}
                />

                <ProjectCard
                    liveLink="https://tva-version-portfolio.vercel.app/"
                    image="/tva-portfolio.png"
                    title="TVA Based Portfolio"
                    description="Develop a fully responsive and visually portfolio inspired by the theme TVA of Loki Season 2."
                    buttons={buttons5}
                />

                <ProjectCard
                    liveLink="https://zenskar-landing-page.vercel.app/"
                    image="/zenskar.png"
                    title="Zenskar landing page"
                    description="Develop a fully responsive and visually appealing landing page for Zenskar.com, optimized for all devices."
                    buttons={buttons5}
                />

            </div>

            <div className="my-24 text-slate-400 text-sm">
                Coded in <a href="https://code.visualstudio.com/"><Span input="Visual Studio Code" /></a> by yours truly. Built with <a href="https://react.dev/"><Span input="React.js" /></a> and <a href="https://tailwindcss.com/"><Span input="Tailwind CSS" /></a>, deployed with <a href="https://vercel.com/"><span className="text-slate-300">Vercel.</span></a>
            </div>
        </div>
    );
};
