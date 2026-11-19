'use client';
import Headings from "../Headings";
import Accordian from "./Accordian";

export default function FAQ() {
    return (
        <div className="pb-16 sm:pb-24 lg:pb-32 container mx-auto px-0">
            <div className="flex flex-col gap-3 justify-center text-center">
                <Headings subTitleClassName={"text-[#7e43fb]"} subTitle={"FAQ"} title={"Frequently asked"} innerTitle={"questions"} />
            </div>
            <div className="flex flex-col gap-4 mt-10 sm:mt-14 max-w-3xl mx-auto">
                <Accordian 
                    title={'What technologies does Tahir specialize in?'} 
                    answer={'I specialize in frontend technologies including React.js, Next.js (App & Pages Router), JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Framer Motion, and GSAP. I also have deep experience converting Figma & Adobe XD designs into responsive, clean code.'} 
                />
                <Accordian 
                    title={'Are your websites fully responsive across mobile, tablet, and desktop?'} 
                    answer={'Yes, 100%! Every interface is built with a mobile-first philosophy, meticulously tested across all viewports (from small 320px mobile screens to large 4K monitors) to guarantee seamless layout, readability, and interaction.'} 
                />
                <Accordian 
                    title={'What is the typical timeline for a web project?'} 
                    answer={'A standard landing page or portfolio takes 3-7 days, while full multi-page web applications and SaaS platforms typically take 2-4 weeks depending on requirements and custom features.'} 
                />
                <Accordian 
                    title={'How can I reach out or book a consultation?'} 
                    answer={'You can directly call or message me at +91 6355744550, send an email to kalaiwalatahir@gmail.com, or use the Contact form on this site. I respond within 24 hours.'} 
                />
            </div>
        </div>
    )
}
