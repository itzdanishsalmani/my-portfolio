import { Transition } from "./Units"
import Image from "next/image"

export const Col1 = () => {
    return (
        <div className="font-mono">
            <div className="md:ml-32 md:fixed ml-4 mt-24 text-white">
                <div className="md:text-4xl text-2xl font-bold">
                    MOHAMMED DANISH
                </div>
                <div className="mt-4">
                    Full Stack Developer
                </div>
                <div className="mt-4 text-slate-400">
                    I build full stack applications
                </div>
                <div className="mt-24 text-slate-500 flex flex-col items-start">
                    <Transition input="ABOUT" id="#about" />
                    <Transition input="SKILLS" id="#skills" />
                    <Transition input="PROJECTS" id="#projects" />
                </div>
                <div className="mt-24 flex space-x-4">
                    <a href="https://github.com/itzdanishsalmani" target="_blank">
                        <Image src="/github.png" width={25} height={25} alt="GitHub" className="rounded-full" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammed-danish-salmani-ab2586258/" target="_blank">
                        <Image src="/linkedin.png" width={25} height={25} alt="LinkedIn" className="rounded-lg" />
                    </a>
                    <a href="https://x.com/itzzdanish" target="_blank">
                        <Image src="/twitter.png" width={25} height={25} alt="Twitter" className="rounded-lg" />
                    </a>
                    <a href="mailto:salmanidanish488@gmail.com" target="_blank">
                        <Image src="/mail.png" width={25} height={25} alt="Email" className="rounded-lg" />
                    </a>
                </div>
            </div>
        </div>
    );
};
