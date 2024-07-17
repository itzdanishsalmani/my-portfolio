import React from "react"
import { ProjectCard } from "./ProjectCard"
import { Span } from "./buttons";

export const Col2 = () => {
    const buttons1 = ["React", "Express", "MongoDB Atlas", "Node.js", "JavaScript", "Tailwind CSS", "Vercel", "PayPal API", "Vercel"];
    const buttons2 = ["TypeScript", "React", "Hono", "Postgresql", "Prisma ORM", "Tailwind CSS","Vercel", "Cloudflare workers" ]
    const buttons3 = ["React", "Express", "MongoDB Atlas", "Node.js", "JavaScript", "Tailwind CSS", "Vercel"]
    
    interface Icon {
        src:string;
        alt:string;
    }
    const icons: Icon[] = [
        { src: "html-5.svg", alt: "HTML5" },
        { src: "css-3.svg", alt: "CSS3" },
        { src: "tailwindcss-icon.svg", alt: "Tailwind CSS" },
        { src: "javascript.svg", alt: "JavaScript" },
        { src: "typescript-icon.svg", alt: "TypeScript" },
        { src: "react.svg", alt: "React" },
        { src: "nodejs.svg", alt: "Node.js" },
        { src: "mongodb-icon.svg", alt: "MongoDB" },
        { src: "postgresql.svg", alt: "PostgreSQL" },
        { src: "docker-icon.svg", alt: "Docker" },
        { src: "prisma.svg", alt: "Prisma" },
        { src: "git-icon.svg", alt: "Git" },
        { src: "github-icon.svg", alt: "GitHub" },
        { src: "nextjs-icon.svg", alt: "Next.js" },
        { src: "aws.svg", alt: "AWS" },
    ];
    return (
        <div className="mx-4 md:mr-36 ">
            <div id="about" className="mt-24 font-mono text-slate-400">
                I'm a passionate and dedicated developer. My expertise lies in the <Span input="MERN stack"/>, <Span input=" TypeScript"/>, and <Span input="PostgreSQL" />. With a strong foundation in these technologies, I have successfully built three full-stack projects, showcasing my ability to develop robust and scalable web applications.
                <br /><br />
                I thrive on solving complex problems and continuously improving my skills. My journey in web development has equipped me with the knowledge and experience to create efficient and user-friendly solutions. I am always eager to learn new technologies and take on challenging projects.
                <br /><br />
                Whether it's developing dynamic front-end interfaces or designing efficient back-end architectures, I bring a meticulous and innovative approach to my work. I am committed to delivering high-quality code and collaborating effectively with teams to achieve project goals.
            </div>

            <div id="skills" className="mt-24 p-4 rounded-lg hover:bg-slate-800">
            <div className="grid grid-cols-5 items-center gap-4 cursor-pointer">
            {icons.map((icon, index) => (
                    <img key={index} className="w-12 h-20" src={icon.src} alt={icon.alt} />
                ))}
              </div>
            </div>

            <div className="mt-24 cursor-pointer text-white hover:text-emerald-600">
                <a href="https://drive.google.com/file/d/1uACrjuC5Ui_ZSM2-tITuivJUK2Ifvx_1/view" target="_blank"> View Full Resume </a>
            </div>

            <div id="projects" className="mt-24">
            <ProjectCard
                liveLink="https://hyperdev.vercel.app"
                image="/hyperdev.png"
                title="HyperDev - Course selling web application"
                description="It is a Full Stack responsive web application in MERN Stack with PayPal Payment Gateway, where Admin can
                perform CRUD operation and user can pay and buy courses."
                buttons={buttons1}
            />
                
            <ProjectCard
                liveLink="https://mediumm.vercel.app"
                image="/mediumm.png"
                title="Mediumm - Blogging web application"
                description="Develop a full-stack responsive web app where authenticated users can create and update blog posts with descriptions."
                buttons={buttons2}
            />
                
            <ProjectCard
                liveLink="https://payze.vercel.app"
                image="/payze.png"
                title="Payze - Online payment web application"
                description="It is an online payment web application in MERN Stack
                where users can send payment to each other with virtual money."
                buttons={buttons3}
            />

            </div>

            <div className="my-24 text-slate-400 text-sm">
            Coded in <Span input="Visual Studio Code"/> by yours truly. Built with <Span input="Next.js"/> and <Span input="Tailwind CSS"/>, deployed with <span className="text-slate-300">Vercel.</span>
            </div>
        </div>
    )
}