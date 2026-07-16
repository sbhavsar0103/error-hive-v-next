'use client';
import { useMemo } from "react";
import { motion, Variants } from "framer-motion";

import FloatingParticles from "../../../Components/FloatingParticles/FloatingParticles";
import HeroButtons from "../../../Components/HeroButtons/HeroButtons";

import GameChanger from "./Components/WebDevelopmentGameChanger";
import WebDevelopmentServicesPage from "./Components/WebDevelopmentServicesPage";
import WebDevelopmentProcessSection from "./Components/WebDevelopmentProcessSection";
import ServiceExpectations from "../../../Components/ServiceExpectations/ServiceExpectations";
import FAQ from "../../../Components/FAQ/FAQ";
import RelatedServices from "../../../Components/RelatedServices/RelatedServices";

export default function WebDevelopmentHero() {
    const faqs = [
        {
            "question": "What technologies do you use for web development?",
            "answer": "We primarily use React, Next.js, Node.js, and TypeScript for front-end and back-end development, with PostgreSQL or MongoDB for databases."
        },
        {
            "question": "Can you rebuild my existing website?",
            "answer": "Yes. We handle full website migrations, redesigns, and performance overhauls for existing businesses."
        }
    ];

    const relatedServices = [
        {
            "title": "Custom Software",
            "href": "/services/custom-software-development",
            "description": "Build scalable, custom web applications and SaaS products."
        },
        {
            "title": "Mobile Development",
            "href": "/services/mobile-development",
            "description": "Cross-platform iOS and Android applications."
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
                                Web Development Company <br />
                                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                                    Custom, Scalable & High-Performance Websites
                                </span>
                            </h1>
                            <p className="text-[clamp(1rem,2.5vw,1.4rem)] text-amber-200/80 mb-8 leading-relaxed max-w-4xl mx-auto">
                                Error-Hive Solutions delivers modern web development services including
                                custom website development, full-stack applications, SaaS platforms,
                                and AI-integrated solutions designed for performance, scalability, and business growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <HeroButtons />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div >
            <hr />
            <GameChanger />
            <hr />
            <WebDevelopmentServicesPage />
            <hr />
            <WebDevelopmentProcessSection />
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
