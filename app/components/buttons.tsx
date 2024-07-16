"use client"

import { SoaRecord } from "dns";

interface ButtonProps {
    input: string;
}

interface SpanProps {
    input: string
}

export const Span:React.FC<SpanProps> = ({input}) => {
    return (
        <span className="text-slate-300">{input}</span>
    )
}

export const Button: React.FC<ButtonProps> = ({ input }) => {
    return (
        <div>
            <button className="bg-emerald-900 text-cyan-400 rounded-full px-2 py-1.5 text-sm" >{input}</button>
        </div>
    )
}