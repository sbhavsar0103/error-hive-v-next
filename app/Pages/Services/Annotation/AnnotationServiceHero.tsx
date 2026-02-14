'use client';
import { useEffect, useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";

import FloatingParticles from "./Components/FloatingParticles";
import HeroButtons from "./Components/HeroButtons";
import GameChanger from "./Components/GameChanger";
import AnnotationServicesPage from "./Components/AnnotationServicesPage";
import AnnotationProcessSection from "./Components/AnnotationProcessSection";

import CurvedLoop from "../../../Components/CurvedLoop/CurvedLoop";
import MagicBento from "../../../Components/MagicBento/MagicBento";

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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative min-h-screen bg-[#060010] overflow-hidden flex items-center justify-center"
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <FloatingParticles />

        {/* Content */}
        <div className="relative z-10 w-full flex justify-center px-6">
          <div className="max-w-7xl w-full flex flex-col items-center text-center">
            <div
              className={`transition-all duration-1000 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Powering AI Accuracy with Expert Data Labeling & Intelligent Data
                Mining
              </h1>

              <p className="text-xl text-amber-200/70 mb-8 leading-relaxed max-w-4xl mx-auto">
                AI models are only as good as the data they are trained on. Our
                Data Annotation & Mining solutions ensure high-quality,
                structured, and accurately labeled datasets for machine
                learning, deep learning, and AI-driven automation. From image
                and video annotation to text labeling and data enrichment, we
                help businesses build robust AI models with precision and
                efficiency.
              </p>

              <HeroButtons />
            </div>
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

      {/* CTA / FOOTER */}
      <section className="bg-[#060010] flex flex-col items-center justify-center overflow-hidden">
        <CurvedLoop
          marqueeText="Error - Hive Solution ✦"
          speed={2}
          curveAmount={120}
          direction="right"
          interactive
        />

        <MagicBento
          textAutoHide
          enableStars
          enableSpotlight
          enableBorderGlow
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

export default AnnotationServiceHero;