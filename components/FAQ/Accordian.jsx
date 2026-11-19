'use client';
import { useState } from "react";

export default function Accordian({ title, answer }) {    
    const [accordionOpen, setAccordionOpen] = useState(false)
    return (
        <div className="p-4 sm:p-5 md:p-6 max-w-2xl w-full mx-auto shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] border border-[#2a2a2a] bg-[#1b1b1b] rounded-xl outline-none transition-colors hover:border-white/20">
            <button 
                onClick={() => setAccordionOpen(!accordionOpen)} 
                className="flex items-center justify-between w-full cursor-pointer text-left gap-4"
                aria-expanded={accordionOpen}
            >
                <span className="text-white font-medium text-sm sm:text-base md:text-lg">{title}</span>
                <span className="text-[#ffca9a] font-bold text-lg w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-200">
                    {accordionOpen ? "−" : "+"}
                </span>
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white/80 ${accordionOpen ? "grid-rows-[1fr] opacity-100 pt-3 sm:pt-4" : "grid-rows-[0fr] opacity-0"}`}>
                <p className="overflow-hidden font-normal text-xs sm:text-sm md:text-base leading-relaxed">{answer}</p>
            </div>
        </div>
    )
}
