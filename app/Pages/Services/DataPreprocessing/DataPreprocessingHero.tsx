'use client';
import { motion } from "framer-motion";

import FloatingParticles from "../../../Components/FloatingParticles/FloatingParticles";
import HeroButtons from "../../../Components/HeroButtons/HeroButtons";

import GenerativeAIServicePage from "./Components/DataPreprocessingServicesPage";
import GenerativeAIProcessSection from "./Components/DataPreprocessingProcessSection";
import ServiceExpectations from "../../../Components/ServiceExpectations/ServiceExpectations";
import FAQ from "../../../Components/FAQ/FAQ";
import RelatedServices from "../../../Components/RelatedServices/RelatedServices";


export default function DataPreprocessingHero() {
  const faqs = [
    {
        "question": "What is data preprocessing and why is it important?",
        "answer": "Data preprocessing involves cleaning and organizing raw data into a structured format. It's a critical first step for any machine learning or AI project to ensure accurate and reliable models."
    },
    {
        "question": "Can you handle large, messy datasets?",
        "answer": "Absolutely. We have robust pipelines designed to handle gigabytes to terabytes of raw, unstructured data efficiently."
    },
    {
        "question": "Do you offer data annotation services?",
        "answer": "Yes, we provide data labeling and annotation for computer vision, NLP, and other supervised machine learning tasks."
    }
];

  const relatedServices = [
    {
        "title": "Web Scraping",
        "href": "/services/web-scraping-services",
        "description": "Extract structured data from the web at scale."
    },
    {
        "title": "AI Solutions",
        "href": "/services/ai-solutions",
        "description": "Leverage your data with custom AI and LLM solutions."
    }
];


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
      <GenerativeAIServicePage />
      <hr />
      <GenerativeAIProcessSection />
      <hr />
      <ServiceExpectations />
      <hr />
      <RelatedServices services={relatedServices} />
      <hr />
      <FAQ items={faqs} />
      <hr />
    </>
  );
}
