import Image from "next/image";
import Link from "next/link";
import Headings from "../../../components/Headings";
import CallFreeBtn from "../../../components/CommenElements/CallFreeBtn";

export const metadata = {
  title: "About Tahir Kalaiwala | Frontend Developer & Web Designer",
  description: "Learn more about Tahir Kalaiwala - Experienced Frontend Developer & UI/UX Designer specializing in React, Next.js, and modern web applications.",
};

const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Successful Projects", value: "25+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Responsive Guarantee", value: "100%" },
];

const values = [
  {
    title: "Pixel-Perfect Precision",
    description: "Every pixel, spacing unit, and font weight in Figma is respected and faithfully coded with precision.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ffca9a]">
        <circle cx="12" cy="12" r="10"/>
        <line x1="22" y1="12" x2="18" y2="12"/>
        <line x1="6" y1="12" x2="2" y2="12"/>
        <line x1="12" y1="6" x2="12" y2="2"/>
        <line x1="12" y1="22" x2="12" y2="18"/>
      </svg>
    ),
  },
  {
    title: "Mobile-First Philosophy",
    description: "Flawless performance and aesthetics on small mobile screens, mid-sized tablets, laptops, and ultra-wide desktops.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00ffff]">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
  },
  {
    title: "Performance & SEO",
    description: "Clean semantic markup, optimized asset delivery, zero bundle bloat, and top Core Web Vitals rankings.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7e43fb]">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    description: "Regular updates, prompt responses, and transparent collaboration from project kick-off to post-launch support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00ff88]">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
];

const timeline = [
  {
    year: "2023 - Present",
    role: "Senior Frontend Engineer & Designer",
    company: "Freelance & Independent Contractor",
    description: "Architecting high-converting Next.js applications, custom component libraries, and interactive design systems for clients worldwide.",
  },
  {
    year: "2021 - 2023",
    role: "Frontend Developer",
    company: "Digital Agencies & Tech Ventures",
    description: "Built scalable web interfaces with React, Tailwind CSS, and headless CMS integrations. Mentored team members on responsive development.",
  },
  {
    year: "2020 - 2021",
    role: "Junior Web Designer & UI Developer",
    company: "Creative Studio",
    description: "Designed wireframes, converted client requirements into intuitive UI mockups, and coded cross-browser responsive layouts in HTML5/CSS3/JavaScript.",
  },
];

export default function About() {
  return (
    <div className="py-8 sm:py-12 lg:py-16 container mx-auto px-0">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <Headings 
          subTitle="About Me" 
          subTitleClassName="text-[#ffca9a]" 
          title="Passion for Design," 
          innerTitle="Obsession for Code" 
        />
        <p className="text-white/60 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          I am Tahir Kalaiwala, a dedicated Frontend Developer & Web Designer with over 3 years of hands-on experience building beautiful, accessible, and responsive digital products.
        </p>
      </div>

      {/* Main Bio Card with Image */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch mb-12 sm:mb-16">
        <div className="lg:col-span-5 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl mb-6 relative">
            <Image 
              src="/user-img.png" 
              width={200} 
              height={200} 
              alt="Tahir Kalaiwala" 
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">Tahir Kalaiwala</h3>
          <p className="text-[#ffca9a] text-sm font-medium mb-4">Frontend Developer & UI/UX Specialist</p>
          
          <div className="w-full pt-4 border-t border-white/5 space-y-2 text-xs sm:text-sm text-left">
            <div className="flex items-center justify-between text-white/70 py-1">
              <span>Location:</span>
              <span className="text-white font-medium">India (Remote Worldwide)</span>
            </div>
            <div className="flex items-center justify-between text-white/70 py-1">
              <span>Phone:</span>
              <a href="tel:+916355744550" className="text-white font-medium hover:text-[#ffca9a] transition-colors">+91 6355744550</a>
            </div>
            <div className="flex items-center justify-between text-white/70 py-1">
              <span>Email:</span>
              <a href="mailto:kalaiwalatahir@gmail.com" className="text-white font-medium hover:text-[#ffca9a] transition-colors break-all">kalaiwalatahir@gmail.com</a>
            </div>
            <div className="flex items-center justify-between text-white/70 py-1">
              <span>Availability:</span>
              <span className="text-[#00ff88] font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
                Open for Projects
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between">
          <div>
            <span className="uppercase text-xs font-semibold tracking-wider text-[#7e43fb] bg-[#111] px-3 py-1 rounded-md inline-block mb-4">
              My Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
              Bridging the gap between creative visual design and reliable engineering.
            </h2>
            <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
              <p>
                My journey began with a curiosity for how visually stunning websites are engineered behind the scenes. Over the past 3+ years, I have honed the craft of translating ambitious designs from Figma and Adobe XD into lightning-fast, production-ready code.
              </p>
              <p>
                I thrive at the intersection of aesthetic design and technical execution. Whether building a modern SaaS application with Next.js and Tailwind CSS, creating micro-interactions with Framer Motion, or refining responsive behaviors for mobile devices, my goal is always to deliver an effortless user experience.
              </p>
              <p>
                When working with me, clients get more than just code — they get a partner who cares about conversion rates, accessibility, performance benchmarks, and long-term maintainability.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center">
            <CallFreeBtn />
            <Link 
              href="/contact" 
              className="bg-[#242424] hover:bg-white hover:text-black text-white text-sm sm:text-base font-medium py-3 px-6 rounded-full transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Counter Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
        {stats.map((item, idx) => (
          <div 
            key={idx} 
            className="shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-2xl p-6 text-center"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm text-white/50 font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Values & Principles */}
      <div className="mb-12 sm:mb-16">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <Headings 
            subTitle="My Standards" 
            subTitleClassName="text-[#00ffff]" 
            title="What drives" 
            innerTitle="every project" 
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-2xl p-6 flex flex-col justify-between hover:bg-[#202020] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                {v.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">{v.title}</h4>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Journey / Timeline */}
      <div className="mb-12 sm:mb-16 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-2xl p-6 sm:p-10 md:p-12">
        <div className="max-w-2xl mb-8">
          <span className="uppercase text-xs font-semibold tracking-wider text-[#ffca9a] bg-[#111] px-3 py-1 rounded-md inline-block mb-3">
            Career Journey
          </span>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Experience & Background</h3>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-white/10">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10">
              <span className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[#ffca9a] ring-4 ring-[#1b1b1b]"></span>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-bold text-[#ffca9a] uppercase tracking-wider bg-white/5 px-2.5 py-0.5 rounded">
                  {item.year}
                </span>
                <span className="text-sm font-semibold text-white">{item.company}</span>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">{item.role}</h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA Strip */}
      <div className="shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-gradient-to-r from-[#1b1b1b] via-[#222] to-[#1b1b1b] rounded-2xl p-6 sm:p-10 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Want to collaborate on your next project?</h3>
        <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto mb-6">
          Reach out directly to discuss your requirements, get a quote, or schedule a free 15-minute consultation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CallFreeBtn />
          <a 
            href="mailto:kalaiwalatahir@gmail.com" 
            className="bg-[#242424] hover:bg-white hover:text-black text-white text-sm sm:text-base font-medium py-3 px-6 rounded-full transition-all duration-300"
          >
            Email: kalaiwalatahir@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
