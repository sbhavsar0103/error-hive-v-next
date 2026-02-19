import React from "react";
import LiquidEther from "../../Components/LiquidEther/LiquidEther";
import TechMarquee from "../../Components/TechMarquee/TechMarquee";
import CurvedLoop from "../../Components/CurvedLoop/CurvedLoop";
import MagicBento from "../../Components/MagicBento/MagicBento";
import OurServices from "./Components/OurServices";
import WhyChooseUs from "./Components/WhyChooseUs";
import LetsConnect from "./Components/LetsConnect";
import Link from "next/link";

const BannerHero: React.FC = () => {
  return (
    <>
      <section
        id="home"
        // className="relative h-screen w-full overflow-hidden bg-[#060010]"
        className="relative min-h-[90vh] w-full overflow-hidden bg-[#060010]"
      >
        {/* Background Effect */}
        <div className="absolute inset-0 z-0">
          <LiquidEther
            colors={["#D97706", "#F59E0B", "#FBBF24"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "auto",
              zIndex: 0,
            }}
          />
        </div>

        {/* Hero Content */}
        <div 
        // className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none"
        className="relative z-10 min-h-[92vh] flex flex-col items-center justify-center text-center px-6 sm:px-8"
        >
          {/* <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight pointer-events-auto">
            Welcome To <br />
            <span className="text-amber-500">Error-Hive Solution</span>
          </h1> */}
          <h1
            className="font-bold text-white mb-6 leading-[1.1] tracking-tight pointer-events-auto"
            style={{
              fontSize: "clamp(1.9rem, 5vw, 4.5rem)",
            }}
          >
            Welcome To <br />
            <span className="text-amber-500">Error-Hive Solution</span>
          </h1>

          {/* <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl pointer-events-auto">
            The web, made fluid at your fingertips.
          </p> */}
          <p
            className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed pointer-events-auto"
            style={{
              fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)",
            }}
          >
            The web, made fluid at your fingertips.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <Link href="/contact" passHref>
              <button
                type="button"
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Get Started
              </button>
            </Link>

            <Link href="/about" passHref>
              <button
                type="button"
                className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                Learn More
              </button>
            </Link>
          </div> */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pointer-events-auto mt-2">
            <Link href="/contact">
              <button
                type="button"
                className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-white text-black font-semibold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 active:scale-95"
              >
                Get Started
              </button>
            </Link>

            <Link href="/about">
              <button
                type="button"
                className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
              >
                Learn More
              </button>
            </Link>
          </div>
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

      {/* Footer Effects */}
      <section className="bg-[#060010] flex flex-col items-center justify-center overflow-hidden">
        <CurvedLoop
          marqueeText="Error - Hive Solution ✦"
          speed={2}
          curveAmount={120}
          direction="right"
          interactive={true}
        />

        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
          spotlightRadius={250}
          particleCount={8}
          glowColor="245, 158, 11"
        />
      </section>
    </>
  );
};

export default BannerHero;