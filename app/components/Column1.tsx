import { Transition } from "./Units"

export const Col1 = () =>{
    return (
        <div className="font-mono">
        <div className="md:ml-32 md:fixed ml-4 mt-24 text-white">
        <div className="md:text-4xl text-2xl font-bold">
        MOHAMMED DANISH
    </div>
    <div className="mt-4 ">
        Full Stack Developer
    </div>

    <div className="mt-4 text-slate-400 ">
        I build full stack application
    </div>

    <div className="mt-24 text-slate-500 flex flex-col items-start">

        <Transition input="ABOUT" id="#about" />
        <Transition input="SKILLS" id="#skills" />
        <Transition input="PROJECTS" id="#projects" />
    
    </div>

        <div className="mt-24 flex space-x-4">
            
            <a href="https://github.com/itzdanishsalmani" target="_blank"> <img src="github.png" alt="" className="  w-8 rounded-full" /></a>
            <a href="https://www.linkedin.com/in/mohammed-danish-salmani-ab2586258/" target="_blank"> <img src="linkedin.png" alt="" className=" w-8 rounded-lg" /></a>
            <a href="https://x.com/itzzdanish" target="_blank"> <img src="twitter.png" alt="" className="  w-8 rounded-lg" /></a>
            <a href="https://mailto:salmanidanish488@gmail.com" target="_blank"> <img src="mail.png" alt="" className="  w-8 rounded-lg" /></a>
        </div>
    </div>
    </div>
    )
}