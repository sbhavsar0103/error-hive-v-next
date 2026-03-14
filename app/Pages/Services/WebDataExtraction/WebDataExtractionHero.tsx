'use client';
import { motion } from "framer-motion";

import FloatingParticles from "../../../Components/FloatingParticles/FloatingParticles";
import HeroButtons from "../../../Components/HeroButtons/HeroButtons";
import LetsConnect from "../../../Components/LetsConnect/LetsConnect";

import WebDevelopmentProcessSection from "./Components/WebDataExtractionProcessSection";
import WebDataExtractionTechSection from "./Components/WebDataExtractionTechSection";
import WebDataExtractionGameChanger from "./Components/WebDataExtractionGameChanger";
import WebDataExtractionHowWeWorkSteps from "./Components/WebDataExtractionHowWeWorkSteps";

export default function WebDataExtractionHero() {

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
            <hr />
            <LetsConnect />
            <hr />
        </>
    );
}