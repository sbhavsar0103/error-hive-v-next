'use client';
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Bot, LineChart, Network } from "lucide-react";
import FloatingParticles from "./Components/FloatingParticles";
import AIVisualization from "./Components/AIVisualization";
import FloatingCard from "./Components/FloatingCard";
import HeroStats from "./Components/HeroStats";
import HeroButtons from "./Components/HeroButtons";
import ProcessSection from "./Components/ProcessSection";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const AIConsultingHero: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative min-h-[92vh] sm:min-h-screen bg-[#060010] overflow-hidden">
        {/* Background grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <FloatingParticles />
        <div className="relative z-10 w-full flex justify-center px-6 pt-28 sm:pt-40 pb-20 sm:pb-32">
          <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT SIDE */}
            <div className={`transition-all duration-1000 ${mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}>
              <h1 className="font-bold text-white mb-5 leading-[1.1] tracking-tight" style={{ fontSize: "clamp(1.9rem, 6vw, 4.5rem)" }}>
                Transform Your Business with{" "}
                <span className="bg-amber-500 bg-clip-text text-transparent">
                  AI Intelligence
                </span>
              </h1>
              <p className="text-amber-200/70 mb-7 leading-relaxed max-w-xl" style={{ fontSize: "clamp(0.95rem, 2.8vw, 1.25rem)" }}>
                Unlock the power of artificial intelligence to automate
                processes, gain insights, and drive growth—tailored for your
                business.
              </p>

              <HeroButtons />
              <HeroStats />
            </div>

            {/* RIGHT SIDE */}
            <div className={`hidden lg:block relative transition-all duration-1000 delay-300 ${mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}>
              <div className="relative">
                {/* Visualization Box */}
                <div className="relative bg-[#1a0a22]/60 backdrop-blur-xl rounded-3xl p-5 sm:p-8 border border-amber-500/20">
                  <AIVisualization />
                </div>

                {/* FLOATING CARDS */}
                <FloatingCard icon={<Bot className="w-6 h-6 text-amber-500" />} title="Machine Learning" className="hidden sm:block absolute -left-4 top-20 animate-float" delay={0} />

                <FloatingCard icon={<LineChart className="w-6 h-6 text-amber-500" />} title="Data Analytics" className="hidden sm:block absolute -right-4 top-40 animate-float" delay={0} />

                <FloatingCard icon={<Network className="w-6 h-6 text-amber-500" />} title="Neural Networks" className="hidden sm:block absolute -left-4 bottom-20 animate-float" delay={0} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <hr />
      <ProcessSection />
      <hr />
    </>
  );
};

export default AIConsultingHero;
