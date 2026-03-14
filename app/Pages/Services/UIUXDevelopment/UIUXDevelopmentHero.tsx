'use client';

import { useMemo } from "react";
import { motion, Variants } from "framer-motion";

import UIUXDevelopmentDriveResults from "./Components/UIUXDevelopmentDriveResults";
import WhyUIUXMatter from "./Components/WhyUIUXMatter";
import UIUXDevelopmentServicesPage from "./Components/UIUXDevelopmentServicesPage";
import UIUXDevelopmentHowWeWorkSteps from "./Components/UIUXDevelopmentHowWeWorkSteps";

import FloatingParticles from "../../../Components/FloatingParticles/FloatingParticles";
import HeroButtons from "../../../Components/HeroButtons/HeroButtons";
import LetsConnect from "../../../Components/LetsConnect/LetsConnect";

const UIUXDevelopmentHero: React.FC = () => {

  const containerVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.25,
          delayChildren: 0.3,
        },
      },
    }),
    []
  );

  return (
    <section>
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative min-h-screen bg-[#060010] overflow-hidden flex items-center justify-center px-6 py-20">
        {/* Background grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <FloatingParticles />

        {/* Centered content */}
        <div className="relative z-10 w-full flex justify-center px-6">
          <div className="max-w-7xl w-full flex flex-col items-center text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="font-bold text-white mb-6 leading-[1.1] text-[clamp(1.5rem,5vw,3.5rem)]">
                Craft Exceptional Digital Experiences with
                <br />
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  UI/UX Design & Development
                </span>
              </h1>

              <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-amber-200/70 mb-8 leading-relaxed max-w-4xl mx-auto">
                We design intuitive, user-centered interfaces that combine creativity
                with functionality. From research-driven UX strategy and wireframing to
                high-fidelity UI design and responsive development, we create digital
                experiences that increase engagement, improve conversions, and elevate
                your brand.
              </p>
              <HeroButtons />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <hr />
      <UIUXDevelopmentDriveResults />
      <hr />
      <WhyUIUXMatter />
      <hr />
      <UIUXDevelopmentServicesPage />
      <hr />
      <UIUXDevelopmentHowWeWorkSteps />
      <hr />
      <LetsConnect />
      <hr />
    </section>
  );
};

export default UIUXDevelopmentHero;