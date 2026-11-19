'use client';
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import CallFreeBtn from "../CommenElements/CallFreeBtn";

const Footer = () => {
  return (
    <footer className="mt-12 mb-8 container mx-auto px-0">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch">
            {/* Profile & Info Card */}
            <div className="w-full md:w-5/12 lg:w-[380px] flex-shrink-0 flex flex-col justify-between">
                <div className="pt-20 sm:pt-24 px-6 sm:px-8 pb-8 relative shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] text-center rounded-2xl flex-grow flex flex-col justify-between">
                    {/* Centered Avatar */}
                    <div className="w-28 h-28 sm:w-32 sm:h-32 overflow-hidden absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 rounded-full border-4 border-[#111] bg-white shadow-xl">
                        <Image 
                            src="/user-img.png" 
                            width={128} 
                            height={128} 
                            alt="Tahir Kalaiwala" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-2">Tahir Kalaiwala</h3>
                        <p className="text-xs uppercase tracking-wider text-[#ffca9a] font-medium mb-3">Frontend Developer & Web Designer</p>
                        <p className="text-sm lg:text-base text-white/70 leading-relaxed max-w-xs mx-auto">
                            I transform designs into pixel-perfect, responsive, and high-performance digital experiences.
                        </p>
                    </div>

                    {/* Direct Contact Links */}
                    <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-2.5 text-left text-xs sm:text-sm">
                        <a 
                            href="tel:+916355744550" 
                            className="flex items-center gap-2.5 text-white/80 hover:text-[#ffca9a] transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10"
                        >
                            <span className="w-7 h-7 rounded-full bg-[#ffca9a]/20 flex items-center justify-center text-[#ffca9a] flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                            </span>
                            <span className="font-medium">+91 6355744550</span>
                        </a>
                        <a 
                            href="mailto:kalaiwalatahir@gmail.com" 
                            className="flex items-center gap-2.5 text-white/80 hover:text-[#ffca9a] transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10 break-all"
                        >
                            <span className="w-7 h-7 rounded-full bg-[#7e43fb]/20 flex items-center justify-center text-[#7e43fb] flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                            </span>
                            <span className="font-medium">kalaiwalatahir@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Quick Social Badges */}
                <div className="mt-4">
                    <ul className="flex items-center justify-center gap-3">
                        <li>
                            <Link href="/contact" title="Direct Email" className="flex items-center justify-center w-12 h-12 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] hover:bg-[#252525] rounded-xl text-white/70 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="tel:+916355744550" title="Phone Call" className="flex items-center justify-center w-12 h-12 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] hover:bg-[#252525] rounded-xl text-white/70 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://wa.me/916355744550" target="_blank" rel="noopener noreferrer" title="WhatsApp Chat" className="flex items-center justify-center w-12 h-12 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] hover:bg-[#252525] rounded-xl text-white/70 hover:text-[#00ff88] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" title="View Projects" className="flex items-center justify-center w-12 h-12 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] hover:bg-[#252525] rounded-xl text-white/70 hover:text-[#ffca9a] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                                    <path d="m9 9 6 6m0-6-6 6"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* CTA Box */}
            <div className="w-full md:w-7/12 flex-1 flex flex-col justify-between shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-2xl p-6 sm:p-10 md:p-12 lg:p-16 text-center">
                <div className="my-auto">
                    <span className="uppercase text-xs sm:text-sm font-semibold tracking-wider text-[#ffca9a] bg-[#111] px-3.5 py-1 rounded-full inline-block mb-4">
                        Let's Collaborate
                    </span>
                    <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold tracking-tight">
                        Got a project in mind?
                        <span className="block text-white/40 mt-2 font-normal">Let’s talk and build it.</span>
                    </h2>
                    <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto mt-4 mb-6">
                        Ready to elevate your digital presence? Reach out now to discuss your ideas, timelines, and solutions.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <CallFreeBtn />
                        <Link 
                            href="/contact" 
                            className="bg-[#242424] hover:bg-white hover:text-black text-white text-sm sm:text-base md:text-lg font-medium py-3 px-6 rounded-full transition-all duration-300"
                        >
                            Send Message
                        </Link>
                    </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-2">
                    <p>© {new Date().getFullYear()} Tahir Kalaiwala. All rights reserved.</p>
                    <p>Designed & Built with Next.js & Tailwind CSS</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
