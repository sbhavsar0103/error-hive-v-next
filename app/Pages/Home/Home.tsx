import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import LiquidEther from "../../Components/LiquidEther/LiquidEther";
import TechMarquee from "../../Components/TechMarquee/TechMarquee";

import OurServices from "./Components/OurServices";
import WhyChooseUs from "./Components/WhyChooseUs";
import HomeTestimonialsStrip from "./Components/HomeTestimonialsStrip";

const BannerHero: React.FC = () => {
  return (
    <>
      <section id="home" className="surface-base relative min-h-[90vh] w-full overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 z-0">
          <LiquidEther colors={["#D97706", "#F59E0B", "#FBBF24"]} mouseForce={20} cursorSize={100} isViscous={false} viscous={30} iterationsViscous={32} iterationsPoisson={32} resolution={0.5} isBounce={false} autoDemo={true} autoSpeed={0.5} autoIntensity={2.2} takeoverDuration={0.25} autoResumeDelay={3000} autoRampDuration={0.6} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, pointerEvents: "auto", zIndex: 0 }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-6 text-center sm:px-8">
          <h1 className="heading-display mb-6 text-white pointer-events-auto">
            AI Development Company <br />
            <span className="text-amber-500">
              Building LLM & Generative AI Solutions
            </span>
          </h1>

          <p className="text-body-lead mb-8 max-w-2xl mx-auto text-gray-300 pointer-events-auto">
            Error-Hive Solutions helps startups and enterprises build AI-powered
            products, LLM applications, automation systems, and scalable web
            platforms designed for real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pointer-events-auto mt-2">
            <Link href="/contact">
              <button type="button" className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-white text-black font-semibold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 active:scale-95">
                Book a Free Strategy Call
              </button>
            </Link>
          </div>
          <p className="sr-only">
            We provide AI development services including LLM development,
            generative AI solutions, AI automation, web development,
            and custom software development in India and globally.
          </p>
        </div>
      </section>

      {/* Sections */}
      <TechMarquee />
      <OurServices />
      <hr />
      <WhyChooseUs />
      <hr />
      <HomeTestimonialsStrip />
      <hr />
    </>
  );
};

export default BannerHero;
