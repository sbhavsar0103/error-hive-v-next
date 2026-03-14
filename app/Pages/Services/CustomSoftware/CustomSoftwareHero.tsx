'use client';
import { useMemo } from "react";
import { motion, Variants } from "framer-motion";

import FloatingParticles from "../../../Components/FloatingParticles/FloatingParticles";
import HeroButtons from "../../../Components/HeroButtons/HeroButtons";
import LetsConnect from "../../../Components/LetsConnect/LetsConnect";

import GameChanger from "./Components/CustomSoftwareGameChanger";
import AnnotationServicesPage from "./Components/CustomSoftwareServicesPage";
import AnnotationProcessSection from "./Components/CustomSoftwareProcessSection";
import CustomSoftwareHowWeWorkSteps from "./Components/CustomSoftwareHowWeWorkSteps";

const CustomSoftwareHero = () => {

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
                Custom Software Development Services for Scalable Digital Products
              </h1>

              <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-amber-200/70 mb-8 leading-relaxed max-w-4xl mx-auto">
                We design and develop secure, scalable, and high-performance custom software solutions tailored to your business goals. From enterprise platforms and SaaS products to AI-powered applications and automation systems, our team delivers technology built for long-term growth.
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
      <LetsConnect />
      <hr />
      <CustomSoftwareHowWeWorkSteps />
      <hr />
      <p className="sr-only">
        Error Hive Solutions is a custom software development company in India
        providing enterprise software, SaaS development, AI-powered applications,
        and scalable digital product engineering services.
      </p>
    </section>
  );
};

export default CustomSoftwareHero;