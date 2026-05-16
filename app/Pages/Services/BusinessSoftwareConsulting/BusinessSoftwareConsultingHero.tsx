'use client';

import { useMemo } from "react";
import { motion, Variants } from "framer-motion";

import FloatingParticles from "../../../Components/FloatingParticles/FloatingParticles";
import HeroButtons from "../../../Components/HeroButtons/HeroButtons";

import GameChanger from "./Components/GameChanger";
import BusinessSoftwareConsultingServicesPage from "./Components/BusinessSoftwareConsultingServicesPage";
import BusinessSoftwareConsultingProcessSection from "./Components/BusinessSoftwareConsultingProcessSection";
import ServiceExpectations from "../../../Components/ServiceExpectations/ServiceExpectations";
import FAQ from "../../../Components/FAQ/FAQ";
import RelatedServices from "../../../Components/RelatedServices/RelatedServices";

export default function BusinessSoftwareConsultingHero() {
    const faqs = [
        {
            "question": "What does a software consultant do?",
            "answer": "We analyze your current business processes, identify technological gaps, and recommend or build the right software solutions to automate and scale your operations."
        },
        {
            "question": "Do you help with digital transformation?",
            "answer": "Yes, we specialize in guiding traditional businesses through digital transformation, implementing tools like ERPs, CRMs, and custom automation scripts."
        },
        {
            "question": "We have an existing tech team. Can you work with them?",
            "answer": "Absolutely. We frequently consult with internal tech teams, offering architectural guidance, code reviews, and strategic planning."
        }
    ];

    const relatedServices = [
        {
            "title": "Custom Software",
            "href": "/services/custom-software-development",
            "description": "Build scalable, custom web applications and SaaS products."
        },
        {
            "title": "AI Solutions",
            "href": "/services/ai-solutions",
            "description": "Leverage your data with custom AI and LLM solutions."
        }
    ];


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
            <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative min-h-screen bg-[#060010] overflow-hidden flex items-center justify-center px-6 py-20">
                {/* Background grid overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <FloatingParticles />
                {/* Centered content */}
                <div className="relative z-10 w-full flex justify-center px-6">
                    <div className="max-w-7xl w-full flex flex-col items-center text-center">
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                            <h1 className="font-bold text-white mb-6 leading-[1.1] text-[clamp(1.8rem,5vw,3.5rem)]">
                                Business Software Consulting <br />
                                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                                    Strategic, Scalable & Performance-Driven Digital Solutions
                                </span>
                            </h1>

                            <p className="text-[clamp(1rem,2.5vw,1.4rem)] text-amber-200/80 mb-8 leading-relaxed max-w-4xl mx-auto">
                                Error Hive Solutions provides expert business software consulting services to help companies
                                streamline operations, improve efficiency, and accelerate digital transformation. We design
                                and implement custom enterprise solutions, automation systems, SaaS platforms, and
                                AI-powered business tools tailored to your growth strategy.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <HeroButtons />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <hr />
            <GameChanger />
            <hr />
            <BusinessSoftwareConsultingServicesPage />
            <hr />
            <BusinessSoftwareConsultingProcessSection />
            <hr />
            <ServiceExpectations />
            <hr />
            <RelatedServices services={relatedServices} />
            <hr />
            <FAQ items={faqs} />
            <hr />
        </section>
    );
}