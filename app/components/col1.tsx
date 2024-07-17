import { Transition } from "./ProjectCard"
import Image from "next/image"

export const Col1 = () =>{
    return (
        <div>
        <div className="md:ml-32 md:fixed ml-4 mt-24 font-mono text-white">
        <div className="md:text-4xl text-2xl font-bold">
        MOHAMMED DANISH
    </div>
    <div className="mt-4 ">
        Full Stack Engineer
    </div>

    <div className="mt-4 text-slate-400 w-3/4">
        I build full stack application
    </div>

    <div className="mt-24 text-slate-500 flex flex-col items-start">

        <Transition input="ABOUT" id="#about" />
        <Transition input="SKILLS" id="#skills" />
        <Transition input="PROJECTS" id="#projects" />
    
    </div>

        <div className="mt-12 flex space-x-4">
            
            <a href="https://github.com/itzdanishsalmani" target="_blank"> <Image src="github.png" alt="" className="  w-8 rounded-full" /></a>
            <a href="https://www.linkedin.com/in/mohammed-danish-salmani-ab2586258/" target="_blank"> <Image src="linkedin.png" alt="" className=" w-8 rounded-lg" /></a>
            <a href="https://x.com/itzzdanish" target="_blank"> <Image src="twitter.png" alt="" className="  w-8 rounded-lg" /></a>
            <a href="https://mailto:salmanidanish488@gmail.com" target="_blank"> <Image src="mail.png" alt="" className="  w-8 rounded-lg" /></a>
        </div>
    </div>
    </div>
    )
}