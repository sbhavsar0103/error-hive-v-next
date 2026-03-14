import React from "react";
import Link from "next/link";

import LiquidEther from "../../Components/LiquidEther/LiquidEther";
import TechMarquee from "../../Components/TechMarquee/TechMarquee";
import LetsConnect from "../../Components/LetsConnect/LetsConnect";

import OurServices from "./Components/OurServices";
import WhyChooseUs from "./Components/WhyChooseUs";

const BannerHero: React.FC = () => {
  return (
    <>
      <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#060010]">
        {/* Background Effect */}
        <div className="absolute inset-0 z-0">
          <LiquidEther colors={["#D97706", "#F59E0B", "#FBBF24"]} mouseForce={20} cursorSize={100} isViscous={false} viscous={30} iterationsViscous={32} iterationsPoisson={32} resolution={0.5} isBounce={false} autoDemo={true} autoSpeed={0.5} autoIntensity={2.2} takeoverDuration={0.25} autoResumeDelay={3000} autoRampDuration={0.6} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, pointerEvents: "auto", zIndex: 0 }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-6 sm:px-8">
          <h1 className="font-bold text-white mb-6 leading-[1.1] tracking-tight pointer-events-auto" style={{ fontSize: "clamp(1.9rem, 5vw, 4.5rem)" }}>
            AI Development Company <br />
            <span className="text-amber-500">
              Building LLM & Generative AI Solutions
            </span>
          </h1>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed pointer-events-auto" style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)" }}>
            Error Hive Solutions helps startups and enterprises build AI-powered
            products, LLM applications, automation systems, and scalable web
            platforms designed for real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pointer-events-auto mt-2">
            <Link href="/contact">
              <button type="button" className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-white text-black font-semibold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 active:scale-95">
                Get Started
              </button>
            </Link>

            <Link href="/about">
              <button type="button" className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
                Learn More
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
      <LetsConnect />
      <hr />
    </>
  );
};

export default BannerHero;