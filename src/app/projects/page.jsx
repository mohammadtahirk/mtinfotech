'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Headings from "../../../components/Headings";
import CallFreeBtn from "../../../components/CommenElements/CallFreeBtn";

const projects = [
  {
    id: 1,
    title: "ApexFlow SaaS Dashboard",
    category: "Web Application",
    tags: ["Next.js 14", "Tailwind CSS", "TypeScript", "Framer Motion"],
    description: "An end-to-end cloud analytics dashboard built for data-heavy workflows with real-time graphs, dark mode interface, and responsive widget layout.",
    impact: "+230% User Engagement",
    speed: "99/100 PageSpeed",
    image: "/slide-1.jpg",
  },
  {
    id: 2,
    title: "Lumina Studio Creative Agency",
    category: "Landing Page",
    tags: ["React.js", "GSAP", "Lenis Scroll", "Tailwind CSS"],
    description: "An award-worthy portfolio website featuring fluid page transitions, dynamic cursor tracking, interactive WebGL light rays, and modular design.",
    impact: "+180% Inbound Leads",
    speed: "98/100 Mobile Speed",
    image: "/history-work.jpg",
  },
  {
    id: 3,
    title: "Velox E-Commerce Headless Store",
    category: "E-Commerce",
    tags: ["Next.js", "Tailwind CSS", "Shopify API", "Stripe"],
    description: "A lightning-fast headless e-commerce experience with instantaneous client filtering, cart drawer animations, and seamless mobile checkout.",
    impact: "+45% Checkout Completion",
    speed: "100/100 SEO Score",
    image: "/about-us.jpg",
  },
  {
    id: 4,
    title: "NovaTech Enterprise Portal",
    category: "Web Application",
    tags: ["Next.js", "React", "Tailwind CSS", "Chart.js"],
    description: "Enterprise management portal consolidating multiple business services into a clean, intuitive, and accessible interface for 50,000+ daily users.",
    impact: "-40% Support Tickets",
    speed: "100% Mobile Usability",
    image: "/slide-1.jpg",
  },
  {
    id: 5,
    title: "Krypton Web3 Landing Experience",
    category: "Landing Page",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "WebGL"],
    description: "High-octane cryptocurrency & DeFi landing experience with 3D elements, interactive token metrics, and dark aesthetic styling.",
    impact: "120K+ Monthly Visits",
    speed: "99/100 Performance",
    image: "/history-work.jpg",
  },
  {
    id: 6,
    title: "UrbanCraft Architectural Portfolio",
    category: "Portfolio",
    tags: ["Next.js", "CSS Grid", "Tailwind CSS", "Lightbox"],
    description: "Minimalist visual showcase for an international architecture firm, emphasizing high-resolution photography, minimal typography, and fast loading.",
    impact: "Featured on CSS Design Awards",
    speed: "97/100 Mobile Score",
    image: "/about-us.jpg",
  },
];

const categories = ["All", "Web Application", "Landing Page", "E-Commerce", "Portfolio"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-8 sm:py-12 lg:py-16 container mx-auto px-0">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <Headings 
          subTitle="Portfolio" 
          subTitleClassName="text-[#00ffff]" 
          title="Featured Projects &" 
          innerTitle="Selected Works" 
        />
        <p className="text-white/60 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          A showcase of recent responsive web applications, SaaS dashboards, and landing pages designed and built by Tahir Kalaiwala.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs sm:text-sm font-medium py-2 px-4 rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-white text-black font-semibold shadow-md"
                  : "bg-[#1b1b1b] text-white/70 hover:text-white hover:bg-[#252525] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
          >
            {/* Card Thumbnail */}
            <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-[#161616]">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#ffca9a] px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ffca9a] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[11px] text-white/80 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics & Action Link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Outcome</span>
                  <span className="text-[#00ff88] font-semibold">{project.impact}</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-white hover:text-[#ffca9a] font-medium transition-colors"
                >
                  <span>Build This</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Development Process */}
      <div className="shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-2xl p-6 sm:p-10 md:p-12 mb-16 border border-white/5">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="uppercase text-xs font-semibold tracking-wider text-[#ffca9a] bg-[#111] px-3.5 py-1 rounded-full inline-block mb-3">
            Workflow
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">How I bring projects to life</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="w-10 h-10 rounded-full bg-[#ffca9a]/20 text-[#ffca9a] font-bold text-base flex items-center justify-center mx-auto mb-4">
              1
            </span>
            <h4 className="text-base font-semibold text-white mb-2">Discovery & Specs</h4>
            <p className="text-xs text-white/60 leading-relaxed">Understanding audience, project goals, wireframes, and performance requirements.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="w-10 h-10 rounded-full bg-[#00ffff]/20 text-[#00ffff] font-bold text-base flex items-center justify-center mx-auto mb-4">
              2
            </span>
            <h4 className="text-base font-semibold text-white mb-2">Pixel-Perfect UI</h4>
            <p className="text-xs text-white/60 leading-relaxed">Coding from Figma with exact responsive typography, micro-interactions, and component modularity.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="w-10 h-10 rounded-full bg-[#7e43fb]/20 text-[#7e43fb] font-bold text-base flex items-center justify-center mx-auto mb-4">
              3
            </span>
            <h4 className="text-base font-semibold text-white mb-2">Cross-Device Testing</h4>
            <p className="text-xs text-white/60 leading-relaxed">Testing across real mobile, tablet, and desktop viewports to ensure zero layout breakages.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="w-10 h-10 rounded-full bg-[#00ff88]/20 text-[#00ff88] font-bold text-base flex items-center justify-center mx-auto mb-4">
              4
            </span>
            <h4 className="text-base font-semibold text-white mb-2">Deploy & Support</h4>
            <p className="text-xs text-white/60 leading-relaxed">Deploying on Vercel/Netlify with custom domains, SSL, and post-launch maintenance.</p>
          </div>
        </div>
      </div>

      {/* Call To Action Strip */}
      <div className="shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-gradient-to-r from-[#1b1b1b] via-[#202020] to-[#1b1b1b] rounded-2xl p-6 sm:p-10 text-center border border-white/5">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Like what you see?</h3>
        <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto mb-6">
          Let’s discuss your next idea. Call Tahir directly or book a free consultation call today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CallFreeBtn />
          <Link 
            href="/contact" 
            className="bg-[#242424] hover:bg-white hover:text-black text-white text-sm sm:text-base font-medium py-3 px-6 rounded-full transition-all duration-300"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
