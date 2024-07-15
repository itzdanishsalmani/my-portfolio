import React from "react"
import { ProjectCard } from "./ProjectCard"

export const Col2 = () => {
    const buttons1 = ["React", "Express", "MongoDB Atlas", "Node.js", "JavaScript", "Tailwind CSS", "Vercel", "PayPal API", "Vercel"];
    const buttons2 = ["TypeScript", "React", "Hono", "Postgresql", "Prisma ORM", "Tailwind CSS","Vercel", "Cloudflare workers" ]
    const buttons3 = ["React", "Express", "MongoDB Atlas", "Node.js", "JavaScript", "Tailwind CSS", "Vercel"]
    return (
        <div className="mr-36">
            <div id="about" className="mt-24 font-mono text-slate-400">
                Hello! I'm Mohammed Danish, a passionate and dedicated developer. My expertise lies in the MERN stack, TypeScript, and PostgreSQL. With a strong foundation in these technologies, I have successfully built three full-stack projects, showcasing my ability to develop robust and scalable web applications.
                <br /><br />
                I thrive on solving complex problems and continuously improving my skills. My journey in web development has equipped me with the knowledge and experience to create efficient and user-friendly solutions. I am always eager to learn new technologies and take on challenging projects.
                <br /><br />
                Whether it's developing dynamic front-end interfaces or designing efficient back-end architectures, I bring a meticulous and innovative approach to my work. I am committed to delivering high-quality code and collaborating effectively with teams to achieve project goals.
            </div>

            <div id="skills" className="mt-24 p-4 rounded-lg hover:bg-slate-800">
            <div className="grid grid-cols-5 gap-4">
              <img className="w-10" src="html-5.svg" alt="HTML5"                  />
              <img className="w-10" src="css-3.svg" alt="CSS3"                    />
              <img className="w-10" src="tailwindcss-icon.svg" alt="Tailwind CSS" />
              <img className="w-10" src="javascript.svg" alt="JavaScript"         />
              <img className="w-10" src="typescript-icon.svg" alt="TypeScript"    />
              <img className="w-10" src="react.svg" alt="React"                   />
              <img className="w-10" src="nodejs.svg" alt="Node.js"                />
              <img className="h-10" src="mongodb.svg" alt="MongoDB"               />
              <img className="w-10" src="postgresql.svg" alt="PostgreSQL"         />
              <img className="w-10" src="docker-icon.svg" alt="Docker"            />
              <img className="w-10" src="prisma.svg" alt="Prisma"                 />
              <img className="w-10" src="git-icon.svg" alt="Git"                  />
              <img className="w-10" src="github-icon.svg" alt="GitHub"            />
              <img className="w-10" src="nextjs-icon.svg" alt="Nextjs"            />
              <img className="w-10" src="aws.svg" alt="AWS"               />
            </div>
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
        </div>
    )
}