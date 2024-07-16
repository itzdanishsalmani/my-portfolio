import { Transition } from "./ProjectCard"

export const Col1 = () =>{
    return (
        <div>
        <div className="ml-32 mt-24 font-mono fixed text-white">
        <div className="text-4xl font-bold">
        MOHAMMED DANISH
    </div>
    <div className="mt-4 ">
        Full Stack Engineer
    </div>

    <div className="mt-4 text-slate-400">
        I build full stack application
    </div>

    <div className="mt-24 text-slate-500 flex flex-col items-start">

        <Transition input="ABOUT" id="#about" />
        <Transition input="SKILLS" id="#skills" />
        <Transition input="PROJECTS" id="#projects" />
    
    </div>

        <div className="mt-12 flex space-x-4">
            <img src="github.png" alt="" className="  w-8 rounded-full" />
            <img src="linkedin.png" alt="" className=" w-8 rounded-lg" />
            <img src="twitter.png" alt="" className="  w-8 rounded-lg" />
            <img src="mail.png" alt="" className="  w-8 rounded-lg" />
        </div>
    </div>
    </div>
    )
}