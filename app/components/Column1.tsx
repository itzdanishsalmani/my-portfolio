import { Contact, Transition } from "./Units"

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
                
                <Contact 
                    link="https://www.linkedin.com/in/mohammed-danish-salmani-ab2586258/"
                    src="/linkedin.png"
                    alt="LinkedIn" 
                />
                
                <Contact 
                link="https://x.com/itzzdanish" 
                src="/twitter.png" 
                alt="Twitter"
                />
                
                <Contact 
                    link="https://github.com/itzdanishsalmani"
                    src="/github-light.png"
                    alt="Github"               
                />

                <Contact 
                link="mailto:salmanidanish488@gmail.com"
                src="/email.png"
                alt="Email"    
                />
                </div>
            </div>
        </div>
    );
};
