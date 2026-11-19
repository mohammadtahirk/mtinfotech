'use client';
import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      label: 'Experiences', 
      content: (
        <div className="text-sm sm:text-base leading-relaxed text-white/90 space-y-3">
          <p>
            I have <strong className="text-white">3+ years of experience</strong> as a Frontend Developer & Web Designer, building high-performing web applications with <strong className="text-[#ffca9a]">React.js</strong>, <strong className="text-[#ffca9a]">Next.js</strong>, and <strong className="text-[#00ffff]">Tailwind CSS</strong>.
          </p>
          <p>
            I specialize in transforming Figma designs into pixel-perfect, responsive websites with smooth animations, optimal Core Web Vitals, and accessible UX.
          </p>
          <p className="text-white/60 text-xs sm:text-sm">
            Proven track record working with international clients, startups, and product teams on SaaS dashboards, dynamic landing pages, and custom headless storefronts.
          </p>
        </div>
      )
    },
    { 
      label: 'Fun Facts', 
      content: (
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed text-white/90">
          <li>I can convert complex Figma designs into responsive code with pixel perfection ⚡</li>
          <li>Obsessed with silky-smooth micro-animations using Framer Motion & GSAP 🎨</li>
          <li>Passionate about Web Performance — keeping bundle sizes lean and fast 🚀</li>
          <li>When I’m not coding, I love exploring UI design trends and new web technologies 💡</li>
        </ul>
      ) 
    },
  ];

  return (
    <div className="w-full">
      <div className="flex bg-[#161616] rounded-lg p-1 w-fit border border-white/5">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-xs sm:text-sm leading-normal py-1.5 px-4 font-medium rounded-md transition-all duration-200 cursor-pointer ${
              activeTab === index 
                ? 'text-black bg-white shadow-sm' 
                : 'text-white/70 hover:text-white'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-5 sm:mt-6 transition-all duration-300">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};
