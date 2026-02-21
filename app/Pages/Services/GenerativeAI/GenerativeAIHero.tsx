'use client';
import FloatingParticles from "./Components/FloatingParticles";
import HeroButtons from "./Components/HeroButtons";
import GenerativeAIServicePage from "./Components/GenerativeAIServicesPage";
import GenerativeAIProcessSection from "./Components/GenerativeAIProcessSection";
import { motion } from "framer-motion";

export default function GenerativeAI() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <>
      <motion.div variants={container} initial="hidden" animate="show" className="relative min-h-screen bg-[#060010] overflow-hidden flex items-center justify-center px-6 py-20">
        {/* Background grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <FloatingParticles />
        {/* Centered content */}
        <div className="relative z-10 w-full flex justify-center px-6">
          <div className="max-w-7xl w-full flex flex-col items-center text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="font-bold text-white mb-6 leading-[1.1] text-[clamp(1.5rem,5vw,3.5rem)]">
                Transform Content & Automation with AI-Driven Generative Models
              </h1>
              <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-amber-200/70 mb-8 leading-relaxed max-w-4xl mx-auto">
                Revolutionize the way you create, design, and automate with cutting-edge Generative AI. From AI-powered content generation and image synthesis to automated video creation and data-driven insights, our solutions help businesses scale creativity, enhance efficiency, and drive innovation.
              </p>
            </motion.div>
            <HeroButtons />
          </div>
        </div>
      </motion.div >
      <hr />
      <GenerativeAIServicePage />
      <hr />
      <GenerativeAIProcessSection />
      <hr />
    </>
  );
}
