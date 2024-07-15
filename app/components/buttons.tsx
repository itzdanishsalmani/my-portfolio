"use client"
interface ButtonProps {
    input: string;
}

export const Button: React.FC<ButtonProps> = ({ input }) => {
    return (
        <div>
            <button className="bg-emerald-900 text-cyan-400 rounded-full px-2 py-1.5 text-sm" >{input}</button>
        </div>
    )
}