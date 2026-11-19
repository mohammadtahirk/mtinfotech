'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header({ id }) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const drawerRef = useRef(null);

    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About me", link: "/about" },
        { name: "Skills", link: "/skills" },
        { name: "Projects", link: "/projects" },
        { name: "Contact Me", link: "/contact" },
    ];

    const toggleMenu = () => {
        setMenuOpen(prev => {
            const nextState = !prev;
            if (nextState) {
                document.body.classList.add('overflow-hidden');
            } else {
                document.body.classList.remove('overflow-hidden');
            }
            return nextState;
        });
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target) && menuOpen) {
                closeMenu();
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [menuOpen]);

    // Ensure body scroll is unlocked on route change or unmount
    useEffect(() => {
        closeMenu();
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [pathname]);

    return (
        <header className="site-header relative lg:sticky w-full lg:top-6 z-30 lg:z-50 transition-all duration-300 ease-linear">
            <div className="container mx-auto w-full py-3 lg:py-4 px-4 sm:px-6 lg:px-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] bg-[#161616]/80 backdrop-blur-md rounded-2xl">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href={'/'} className="flex items-center gap-2 group">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7e43fb] to-[#ffca9a] flex items-center justify-center text-xs font-bold text-white shadow-md">
                            TK
                        </span>
                        <span className="text-lg sm:text-xl font-semibold tracking-tight text-white group-hover:text-[#ffca9a] transition-colors">
                            Tahir<span className="text-[#ffca9a]">.dev</span>
                        </span>
                    </Link>

                    {/* Desktop Menu Items */}
                    <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        {navLinks.map((item) => {
                            const isActive = pathname === item.link;
                            return (
                                <li key={item.name}>
                                    <Link 
                                        href={item.link} 
                                        className={cn(
                                            "text-sm xl:text-base transition-all duration-200 capitalize py-1 px-2 rounded-md",
                                            isActive 
                                                ? "text-white font-semibold text-[#ffca9a]" 
                                                : "text-white/70 hover:text-white hover:opacity-100"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link 
                            href="tel:+916355744550" 
                            className="text-xs xl:text-sm text-white/80 hover:text-[#ffca9a] flex items-center gap-1.5 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ffca9a]">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            <span>+91 6355744550</span>
                        </Link>
                        <Link 
                            href="/contact" 
                            className="bg-white hover:bg-[#ffca9a] text-black text-xs xl:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300"
                        >
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button 
                        onClick={toggleMenu} 
                        aria-label="Toggle navigation menu"
                        className="lg:hidden bg-[#242424] text-white p-2.5 rounded-full cursor-pointer hover:bg-[#333] transition-colors"
                    >
                        {menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Drawer Backdrop */}
            {menuOpen && (
                <div 
                    onClick={closeMenu}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-opacity" 
                />
            )}

            {/* Mobile Drawer */}
            <div 
                ref={drawerRef}
                className={cn(
                    "fixed top-0 right-0 z-50 h-screen w-[280px] sm:w-80 max-w-[85vw] bg-[#181818] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out lg:hidden",
                    menuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div>
                    <div className="flex items-center justify-between pb-6 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#7e43fb] to-[#ffca9a] flex items-center justify-center text-xs font-bold text-white">
                                TK
                            </span>
                            <span className="text-base font-semibold text-white">Tahir Kalaiwala</span>
                        </div>
                        <button 
                            onClick={closeMenu} 
                            className="p-1.5 text-white/70 hover:text-white rounded-full bg-white/5"
                            aria-label="Close menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul className="flex flex-col space-y-2 mt-6">
                        {navLinks.map((item) => {
                            const isActive = pathname === item.link;
                            return (
                                <li key={item.name}>
                                    <Link 
                                        href={item.link} 
                                        onClick={closeMenu}
                                        className={cn(
                                            "block py-2.5 px-3 rounded-lg text-base transition-colors",
                                            isActive 
                                                ? "bg-white/10 text-[#ffca9a] font-semibold" 
                                                : "text-white/80 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Mobile Drawer Footer Info */}
                <div className="pt-6 border-t border-white/10 space-y-3">
                    <p className="text-xs uppercase tracking-wider text-white/40 font-medium">Get in Touch</p>
                    <a 
                        href="tel:+916355744550" 
                        className="flex items-center gap-2 text-sm text-white/90 hover:text-[#ffca9a] transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ffca9a]">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <span>+91 6355744550</span>
                    </a>
                    <a 
                        href="mailto:kalaiwalatahir@gmail.com" 
                        className="flex items-center gap-2 text-sm text-white/90 hover:text-[#ffca9a] transition-colors break-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7e43fb]">
                            <rect width="20" height="16" x="2" y="4" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                        <span>kalaiwalatahir@gmail.com</span>
                    </a>
                    <Link 
                        href="/contact" 
                        onClick={closeMenu}
                        className="block w-full text-center bg-white text-black font-semibold py-2.5 rounded-full text-sm mt-2 hover:bg-[#ffca9a] transition-colors"
                    >
                        Contact Tahir
                    </Link>
                </div>
            </div>
        </header>
    );
}
