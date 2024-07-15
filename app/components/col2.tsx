"use client"
import React from "react"
import { Button } from "./buttons"

export const Col2 = () => {
    return (
        <div className="mr-36 ">
            <div id="about" className="mt-24 font-mono text-slate-400">
                Hello! I'm Mohammed Danish, a passionate and dedicated developer. My expertise lies in the MERN stack, TypeScript, and PostgreSQL. With a strong foundation in these technologies, I have successfully built three full-stack projects, showcasing my ability to develop robust and scalable web applications.
                <br /><br />
                I thrive on solving complex problems and continuously improving my skills. My journey in web development has equipped me with the knowledge and experience to create efficient and user-friendly solutions. I am always eager to learn new technologies and take on challenging projects.
                <br /><br />
                Whether it's developing dynamic front-end interfaces or designing efficient back-end architectures, I bring a meticulous and innovative approach to my work. I am committed to delivering high-quality code and collaborating effectively with teams to achieve project goals.
            </div>

            <div id="projects" className="mt-16">
                <a href="http://hyperdev.vercel.app" target="_blank">
                <div className="p-2 cursor-pointer hover:bg-slate-800 rounded-lg">
                <div className="text-white">HyperDev - Course selling web application
                    <div className="text-slate-400">
                        It is a Full Stack responsive web application in MERN Stack with PayPal Payment Gateway, where Admin can
                        perform CRUD operation and user can pay and buy courses.
                        <div className="flex flex-wrap space-x-2 mt-2">
                        <Button input="React"/>
                        <Button input="Express"/>
                        <Button input="MongoDB"/>
                        <Button input="Node.js"/>
                        <Button input="JavaScript"/>
                        <Button input="Tailwind CSS"/>
                        <br /><br />
                        <Button input="Vercel"/>
                        <Button input="PayPal API"/>
                    </div>
                    </div>
                    </div>
                </div>
                </a>
            </div>
        </div>
    )
}