'use client';
import { useEffect, useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";

import FloatingParticles from "./Components/FloatingParticles";
import HeroButtons from "./Components/HeroButtons";
import GameChanger from "./Components/GameChanger";
import AnnotationServicesPage from "./Components/AnnotationServicesPage";
import AnnotationProcessSection from "./Components/AnnotationProcessSection";

const AnnotationServiceHero = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <>
      {/* HERO */}
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative min-h-screen bg-[#060010] overflow-hidden flex items-center justify-center px-6 py-20">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <FloatingParticles />
        {/* Content */}
        <div className="relative z-10 w-full flex justify-center px-6">
          <div className="max-w-7xl w-full flex flex-col items-center text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="font-bold text-white mb-6 leading-[1.1] text-[clamp(1.5rem,5vw,3.5rem)]">
                Powering AI Accuracy with Expert Data Labeling & Intelligent Data
                Mining
              </h1>

              <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-amber-200/70 mb-8 leading-relaxed max-w-4xl mx-auto">
                AI models are only as good as the data they are trained on. Our
                Data Annotation & Mining solutions ensure high-quality,
                structured, and accurately labeled datasets for machine
                learning, deep learning, and AI-driven automation.
              </p>
              <HeroButtons />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <hr />
      <GameChanger />
      <hr />
      <AnnotationServicesPage />
      <hr />
      <AnnotationProcessSection />
      <hr />
    </>
  );
};

export default AnnotationServiceHero;