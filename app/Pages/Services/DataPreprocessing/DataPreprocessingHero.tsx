'use client';
import { motion } from "framer-motion";

import FloatingParticles from "../../../Components/FloatingParticles/FloatingParticles";
import HeroButtons from "../../../Components/HeroButtons/HeroButtons";
import LetsConnect from "../../../Components/LetsConnect/LetsConnect";

import GenerativeAIServicePage from "./Components/DataPreprocessingServicesPage";
import GenerativeAIProcessSection from "./Components/DataPreprocessingProcessSection";
import DataPreprocessingHowWeWorkSteps from "./Components/DataPreprocessingHowWeWorkSteps";


export default function DataPreprocessingHero() {

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
                Data Processing & Cleaning Services
                <br />
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Transform Raw Data into Reliable Business Insights
                </span>
              </h1>

              <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-amber-200/70 mb-8 leading-relaxed max-w-4xl mx-auto">
                Our Data Processing and Cleaning services help businesses prepare high-quality,
                structured, and reliable datasets for analytics, AI, and decision-making.
                We remove inconsistencies, handle missing values, normalize formats, and
                transform raw data into clean, usable information that powers accurate
                insights and smarter business strategies.
              </p>
            </motion.div>
            <HeroButtons />
          </div>
        </div>
      </motion.div >
      <hr />
      <GenerativeAIProcessSection />
      <hr />
      <GenerativeAIServicePage />
      <hr />
      <DataPreprocessingHowWeWorkSteps />
      <hr />
      <LetsConnect />
      <hr />
    </>
  );
}