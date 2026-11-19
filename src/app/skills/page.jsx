import Image from "next/image";
import Link from "next/link";
import Headings from "../../../components/Headings";
import CallFreeBtn from "../../../components/CommenElements/CallFreeBtn";

export const metadata = {
  title: "Skills & Expertise | Tahir Kalaiwala - Frontend Developer",
  description: "Explore technical skills, frameworks, and design capabilities of Tahir Kalaiwala - React.js, Next.js, Tailwind CSS, JavaScript, and UI/UX engineering.",
};

const skillCategories = [
  {
    category: "Core Frontend Frameworks",
    accent: "text-[#146EF5]",
    description: "Building fast, reactive, and scalable client-side and server-rendered web applications.",
    skills: [
      { name: "React.js", level: "Advanced", desc: "Hooks, Context, State Management, Custom Component Design", badge: "Primary" },
      { name: "Next.js (App & Pages)", level: "Advanced", desc: "SSR, SSG, Server Components, API routes, Image Optimization", badge: "Primary" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/Await, DOM manipulation, Clean Modern Syntax", badge: "Core" },
      { name: "TypeScript", level: "Proficient", desc: "Type safety, Interface definitions, Scalable architectures", badge: "Growing" },
      { name: "HTML5 & Semantic Markup", level: "Expert", desc: "Accessible, SEO-friendly, W3C standards compliant", badge: "Core" },
      { name: "Vue.js", level: "Familiar", desc: "Component architecture and reactivity system", badge: "Secondary" },
    ],
  },
  {
    category: "Styling & Responsive Design Systems",
    accent: "text-[#00ffff]",
    description: "Translating wireframes and layouts into fluid, accessible, and responsive user interfaces.",
    skills: [
      { name: "Tailwind CSS", level: "Expert", desc: "Custom configuration, Utility-first architecture, Dark mode, JIT", badge: "Favorite" },
      { name: "CSS3 / Modern CSS", level: "Expert", desc: "Flexbox, CSS Grid, Custom properties, Animations, Media queries", badge: "Core" },
      { name: "Responsive Web Design", level: "Expert", desc: "Fluid layouts tested for 320px mobile to 4K desktop screens", badge: "Guarantee" },
      { name: "Bootstrap 5", level: "Advanced", desc: "Rapid grid prototyping, Utility classes, Theme customization", badge: "Solid" },
      { name: "Design Tokens & UI Kits", level: "Proficient", desc: "Consistent spacing, typography hierarchy, and color palettes", badge: "Design" },
    ],
  },
  {
    category: "Animations & Creative Engineering",
    accent: "text-[#7e43fb]",
    description: "Adding delightful micro-interactions, silky smooth scrolling, and dynamic visual flair.",
    skills: [
      { name: "Framer Motion", level: "Advanced", desc: "Layout transitions, Scroll animations, Page transitions", badge: "Animation" },
      { name: "GSAP & ScrollTrigger", level: "Advanced", desc: "Complex timeline choreography, Parallax, Stagger effects", badge: "Creative" },
      { name: "Lenis Smooth Scroll", level: "Advanced", desc: "Ultra-smooth normalized scroll behaviors across all browsers", badge: "UX" },
      { name: "WebGL / Canvas (OGL)", level: "Familiar", desc: "Shader effects, Interactive light rays, Dynamic backgrounds", badge: "Creative" },
    ],
  },
  {
    category: "Design, CMS & Tooling",
    accent: "text-[#ffca9a]",
    description: "Bridging the entire workflow from initial Figma concepts to version control and deployment.",
    skills: [
      { name: "Figma to Code", level: "Expert", desc: "Pixel-perfect conversion with clean semantics and responsiveness", badge: "Specialty" },
      { name: "Git & GitHub", level: "Advanced", desc: "Branching strategies, Pull requests, Merge conflict resolution", badge: "Workflow" },
      { name: "WordPress & Elementor", level: "Advanced", desc: "Fast custom builds, Theme customizations, Page builders", badge: "No-Code" },
      { name: "Webflow", level: "Proficient", desc: "Responsive layout design, CMS structure, Custom code embeds", badge: "No-Code" },
      { name: "Vercel & Netlify", level: "Advanced", desc: "CI/CD automated deployments, Custom domains, Serverless", badge: "DevOps" },
    ],
  },
];

const highlights = [
  {
    title: "100% Cross-Device Verified",
    desc: "Every component is verified on Android, iOS, iPad, tablets, laptops, and large displays so nothing ever breaks.",
  },
  {
    title: "Pixel-Perfect Fidelity",
    desc: "Tight alignment with design files. Spacing, typography, border radius, and colors match exactly.",
  },
  {
    title: "Optimal Web Vitals",
    desc: "Fast First Contentful Paint (FCP), minimal layout shifts (CLS), and high Google PageSpeed scores.",
  },
  {
    title: "Clean, Maintainable Code",
    desc: "Modular components, consistent naming conventions, and well-structured project architecture.",
  },
];

export default function Skills() {
  return (
    <div className="py-8 sm:py-12 lg:py-16 container mx-auto px-0">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <Headings 
          subTitle="Capabilities" 
          subTitleClassName="text-[#7e43fb]" 
          title="Skills & Technical" 
          innerTitle="Arsenal" 
        />
        <p className="text-white/60 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          A detailed look at the tools, languages, and frameworks I use to engineer modern, responsive, and high-impact digital experiences.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
        {highlights.map((h, i) => (
          <div 
            key={i} 
            className="shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-2xl p-6 border border-white/5"
          >
            <span className="w-8 h-8 rounded-lg bg-white/5 text-[#ffca9a] font-bold text-sm flex items-center justify-center mb-4">
              0{i + 1}
            </span>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{h.title}</h4>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </div>

      {/* Skill Categories */}
      <div className="space-y-10 sm:space-y-14 mb-14 sm:mb-20">
        {skillCategories.map((cat, idx) => (
          <div 
            key={idx}
            className="shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-2xl p-6 sm:p-8 md:p-10 border border-white/5"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-6 border-b border-white/10 mb-6">
              <div>
                <span className={`text-xs uppercase font-bold tracking-wider ${cat.accent} bg-white/5 px-3 py-1 rounded-full inline-block mb-2`}>
                  Category {idx + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{cat.category}</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/50 max-w-md">
                {cat.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  className="bg-[#161616] rounded-xl p-4 sm:p-5 border border-white/5 hover:border-white/20 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-semibold text-white group-hover:text-[#ffca9a] transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-medium text-white/60 bg-white/10 px-2 py-0.5 rounded-full">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed mb-4">
                      {skill.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-white/40">
                    <span>Proficiency</span>
                    <span className="text-[#00ff88] font-medium">{skill.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Direct Contact Banner */}
      <div className="shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-gradient-to-r from-[#1b1b1b] via-[#202020] to-[#1b1b1b] rounded-2xl p-6 sm:p-10 text-center border border-white/5">
        <span className="uppercase text-xs font-semibold tracking-wider text-[#00ff88] bg-white/5 px-3 py-1 rounded-full inline-block mb-3">
          Available For Work
        </span>
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Need these skills on your next project?</h3>
        <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto mb-6">
          Whether you need a dedicated frontend specialist for your team or an end-to-end website designed and developed from scratch, I'm ready.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CallFreeBtn />
          <Link 
            href="/contact" 
            className="bg-[#242424] hover:bg-white hover:text-black text-white text-sm sm:text-base font-medium py-3 px-6 rounded-full transition-all duration-300"
          >
            Contact Tahir (+91 6355744550)
          </Link>
        </div>
      </div>
    </div>
  );
}
