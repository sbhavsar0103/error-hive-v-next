'use client';
import React, { useEffect, useState } from "react";
import FloatingParticles from "../DataScience/Components/FloatingParticles";
import HeroButtons from "../DataScience/Components/HeroButtons";
import DataScienceServicesPage from "../DataScience/Components/DataScienceServicesPage";
import DataScienceProcessSection from "../DataScience/Components/DataScienceProcessSection";
import { motion, Variants } from "framer-motion";

const DataScienceHero: React.FC = () => {

  const container: Variants = {
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
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative min-h-screen bg-[#060010] overflow-hidden flex items-center justify-center px-6 py-20"
      >
        {/* Background grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <FloatingParticles />

        {/* Centered content */}
        <div className="relative z-10 w-full flex justify-center px-6">
          <div className="max-w-7xl w-full flex flex-col items-center text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="font-bold text-white mb-6 leading-[1.1] text-[clamp(1.5rem,5vw,3.5rem)]">
                Turn Raw Data into Intelligent Decisions with Advanced Data Science
              </h1>
              <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-amber-200/70 mb-8 leading-relaxed max-w-4xl mx-auto">
                From predictive analytics and AI-driven automation to big data
                processing and business intelligence, our Data Science solutions
                help businesses analyze, visualize, and optimize operations with
                real-time, data-driven insights.
              </p>
              <HeroButtons />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <hr />
      <DataScienceServicesPage />
      <hr />
      <DataScienceProcessSection />
      <hr />
    </>
  );
};

export default DataScienceHero;