'use client';
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Bot, LineChart, Network } from "lucide-react";

import HeroStats from "../../../Components/HeroStats/HeroStats";
import FloatingCard from "../../../Components/FloatingCard/FloatingCard";
import FloatingParticles from "../../../Components/FloatingParticles/FloatingParticles";
import HeroButtons from "../../../Components/HeroButtons/HeroButtons";

import AIVisualization from "./Components/AIVisualization";
import AISolutionsProcessSection from "./Components/AISolutionsProcessSection";
import AISolutionsServicesPage from "./Components/AISolutionsServicesPage";
import AISolutionsHowWeWorkSteps from "./Components/AISolutionsHowWeWorkSteps";
import ServiceExpectations from "../../../Components/ServiceExpectations/ServiceExpectations";
import FAQ from "../../../Components/FAQ/FAQ";
import RelatedServices from "../../../Components/RelatedServices/RelatedServices";

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

const AISolutionsHero: React.FC = () => {
  const faqs = [
    {
        "question": "What types of AI solutions do you build?",
        "answer": "We build LLM applications, generative AI tools, AI chatbots, machine learning models, predictive analytics systems, and AI automation pipelines for startups and enterprises."
    },
    {
        "question": "How long does an AI development project take?",
        "answer": "Most AI projects range from 4 to 12 weeks depending on complexity, data availability, and integration requirements."
    },
    {
        "question": "Do you work with startups or only large enterprises?",
        "answer": "We work with both. Many of our clients are early-stage startups building their first AI product, as well as mid-size companies adding AI to existing systems."
    },
    {
        "question": "What is your development process for AI projects?",
        "answer": "We start with a discovery session to understand your goals, then assess your data, design the AI architecture, build and test the model, and deploy it to production with ongoing monitoring."
    }
];

  const relatedServices = [
    {
        "title": "Web Scraping",
        "href": "/services/web-scraping-services",
        "description": "Extract structured data from the web at scale."
    },
    {
        "title": "Data Preprocessing",
        "href": "/services/data-preprocessing",
        "description": "Clean and structure data for machine learning models."
    },
    {
        "title": "Custom Software",
        "href": "/services/custom-software-development",
        "description": "Build scalable, custom web applications and SaaS products."
    }
];

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
                As a leading AI development company in Ahmedabad, India, we serve startups and enterprises worldwide. Unlock the power of artificial intelligence to automate
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
      <AISolutionsProcessSection />
      <hr />
      <AISolutionsServicesPage />
      <ServiceExpectations />
      <RelatedServices services={relatedServices} />
      <hr />
      <FAQ items={faqs} />
      <hr />

      <hr />
      <AISolutionsHowWeWorkSteps />
      <hr />
    </>
  );
};

export default AISolutionsHero;
