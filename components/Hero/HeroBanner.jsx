import React from 'react'
import CallFreeBtn from '../CommenElements/CallFreeBtn'
import Image from 'next/image'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <section className="w-full mt-4 sm:mt-6 container mx-auto relative z-10 px-0">
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-stretch">
        {/* Left Card: Circular Animated Portrait */}
        <div className="shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-2xl py-8 sm:py-12 md:py-16 grid place-items-center">
          <div className='relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] flex items-center justify-center'>
            <Image 
              src="/hero-bg-pattern.svg" 
              width={380} 
              height={380} 
              priority
              className='loader block w-full h-full object-contain pointer-events-none select-none' 
              alt="Geometric rotating pattern" 
            />
            <div className="absolute w-[190px] h-[190px] sm:w-[240px] sm:h-[240px] md:w-[290px] md:h-[290px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-black">
              <Image 
                src="/user-img.png" 
                className='w-full h-full object-cover' 
                width={328} 
                height={328} 
                priority
                alt="Tahir Kalaiwala Profile" 
              />
            </div>
          </div>
        </div>

        {/* Right Card: Bio & Hero Content */}
        <div className="text-center shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-2xl px-5 sm:px-8 md:px-12 py-10 sm:py-14 md:py-16 lg:py-20 flex flex-col justify-center items-center">
          <div className="inline-flex items-center gap-2 uppercase bg-[#111] text-[#ffca9a] py-1.5 px-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-inner mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
            Available for freelance & full-time work
          </div>

          <p className="text-sm sm:text-base text-white/50 uppercase tracking-widest font-medium mb-1">
            Hi, I'm Tahir Kalaiwala
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-white tracking-tight leading-tight">
            Web Designer & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">Frontend Developer</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-[480px] mx-auto mt-4 mb-6 leading-relaxed">
            Crafting pixel-perfect, highly responsive websites and interactive web applications with React, Next.js, and modern Tailwind CSS.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
            <CallFreeBtn />
            <Link 
              href="/projects" 
              className="bg-[#242424] hover:bg-white hover:text-black text-white text-sm sm:text-base md:text-lg font-medium py-3 px-6 rounded-full transition-all duration-300"
            >
              Explore Projects
            </Link>
          </div>

          {/* Quick Contact Info Snippet */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-white/50 pt-4 border-t border-white/5 w-full max-w-sm">
            <a href="tel:+916355744550" className="hover:text-[#ffca9a] transition-colors flex items-center gap-1.5">
              <span>📞</span> +91 6355744550
            </a>
            <span>•</span>
            <a href="mailto:kalaiwalatahir@gmail.com" className="hover:text-[#ffca9a] transition-colors flex items-center gap-1.5">
              <span>✉️</span> kalaiwalatahir@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner