'use client';
import { motion } from "framer-motion";

import FloatingParticles from "../../../Components/FloatingParticles/FloatingParticles";
import HeroButtons from "../../../Components/HeroButtons/HeroButtons";
import LetsConnect from "../../../Components/LetsConnect/LetsConnect";

import WebDevelopmentProcessSection from "./Components/WebDataExtractionProcessSection";
import WebDataExtractionTechSection from "./Components/WebDataExtractionTechSection";
import WebDataExtractionGameChanger from "./Components/WebDataExtractionGameChanger";
import WebDataExtractionHowWeWorkSteps from "./Components/WebDataExtractionHowWeWorkSteps";
import ServiceExpectations from "../../../Components/ServiceExpectations/ServiceExpectations";
import FAQ from "../../../Components/FAQ/FAQ";
import RelatedServices from "../../../Components/RelatedServices/RelatedServices";

export default function WebDataExtractionHero() {
  const faqs = [
    {
        "question": "Is web scraping legal?",
        "answer": "Web scraping of publicly available data is generally legal. We follow ethical scraping practices, respect robots.txt files, and avoid scraping private or login-protected data."
    },
    {
        "question": "What formats can you deliver scraped data in?",
        "answer": "We deliver data as CSV, JSON, Excel, or directly into your database or API endpoint. We can also set up automated scheduled delivery."
    },
    {
        "question": "Can you scrape websites that require login or have anti-bot protection?",
        "answer": "Yes. We have experience handling CAPTCHAs, rate limiting, JavaScript-rendered pages, and session-based authentication using ethical proxy and browser automation techniques."
    },
    {
        "question": "How accurate is your scraped data?",
        "answer": "We implement automated validation and cleaning pipelines to ensure 99%+ accuracy. Data is cross-checked before delivery."
    }
];

  const relatedServices = [
    {
        "title": "Data Preprocessing",
        "href": "/services/data-preprocessing",
        "description": "Clean and structure data for machine learning models."
    },
    {
        "title": "AI Solutions",
        "href": "/services/ai-solutions",
        "description": "Leverage your data with custom AI and LLM solutions."
    },
    {
        "title": "Mobile Scraping",
        "href": "/services/mobile-scraping",
        "description": "Extract valuable data directly from mobile applications."
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
                                Web Scraping & Data Extraction Services
                                <br />
                                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                                    Collect, Monitor & Analyze Web Data at Scale
                                </span>
                            </h1>

                            <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-amber-200/70 mb-8 leading-relaxed max-w-4xl mx-auto">
                                Error Hive Solutions provides reliable and scalable web scraping services
                                to extract valuable data from websites, marketplaces, directories, and
                                social platforms. We help businesses collect structured datasets for
                                market research, price monitoring, competitor analysis, lead generation,
                                and business intelligence with high accuracy and automation.
                            </p>
                            <HeroButtons />
                        </motion.div>
                    </div>
                </div>
            </motion.div >
            <hr />
            <WebDataExtractionGameChanger />
            <hr />
            <WebDevelopmentProcessSection />
            <hr />
            <WebDataExtractionTechSection />
            <hr />
            <WebDataExtractionHowWeWorkSteps />
      <ServiceExpectations />
      <RelatedServices services={relatedServices} />
      <hr />
      <FAQ items={faqs} />
      <hr />

      <hr />
            <LetsConnect />
            <hr />
        </>
    );
}