"use client"
import React from "react";
import { Button } from "./buttons"
import Image from "next/image";

interface ProjectCardProps{
    liveLink: string;
    image: string;
    title:string;
    description:string;
    buttons: string[]; 


}
export const ProjectCard:React.FC<ProjectCardProps> = ({liveLink ,image,title,description,buttons}) => {

    return (
        <div>
             <a href={liveLink} target="_blank">
                <div className="group hover:bg-slate-800  p-4 flex mt-12 flex-cols cursor-pointer rounded-lg">
                    <div className="w-3/4 items-center mr-4 ">
                    <Image src={image} alt=""  />
                    </div>
                    <div >
                <div className="text-white group-hover:text-emerald-600">{title}
                    <div className="text-slate-400">
                        {description}
                        <div className="flex flex-wrap space-x-2 mt-2">
                       {buttons.map((btn,index)=>(
                        <div className="mt-2"><Button key={index} input={btn} /></div>
                        
                       ))}
                    </div>
                    </div>
                    </div>
                </div>

                </div>
            </a>
        </div>
    )
}

interface TransitionProps {
    id: string;
    input:string;
}
export const Transition:React.FC<TransitionProps> = ({id,input}) => {
    return (
        <div className="mt-4 flex cursor-pointer flex-row items-center group">
        <hr className=" w-8 mr-4  transition-all duration-300 group-hover:w-16" />
        <a href={id} className="group-hover:text-white transition-all duration-300">{input}</a></div>

    )
}