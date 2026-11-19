"use client"
import HeroBanner from "../../components/Hero/HeroBanner.jsx";
import Social from "../../components/Social/index.jsx";
import Services from "../../components/Services/Services.jsx";
import Heighlights from "../../components/Heighlights/Heighlights.jsx";
import WorkHistory from "../../components/WorkHistory/WorkHistory.jsx";
import Faq from "../../components/FAQ/index.jsx";
import Loader from "../../components/CommenElements/Loader.jsx";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from 'lenis';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LightRays from "../../components/LightRays.jsx";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
    }, 2000);

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>
      <div className="w-full h-svh absolute top-0 left-0 z-[2] pointer-events-none overflow-hidden">
        <LightRays
          raysOrigin="top-center"
          raysColor="#0173fa"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <HeroBanner />
      <Social />
      <Services />
      <Heighlights />
      <WorkHistory />
      <Faq />
    </main>
  );
}
