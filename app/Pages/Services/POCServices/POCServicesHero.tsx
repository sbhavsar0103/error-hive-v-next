'use client';
import { useEffect, useState } from "react";
import FloatingParticles from "./Components/FloatingParticles";
import HeroButtons from "./Components/HeroButtons";
import POCBusinessGrowthSection from "./Components/POCBusinessGrowthSection";
import POCProcessSection from "./Components/POCProcessSection";
import { motion } from "framer-motion";

export default function POCServicesHero() {
    const [mounted, setMounted] = useState(false);

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

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <motion.div variants={container} initial="hidden" animate="show" className="relative min-h-screen bg-[#060010] overflow-hidden flex items-center justify-center py-20 sm:py-0">
                {/* Background grid overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <FloatingParticles />
                {/* Centered content */}
                <div className="relative z-10 w-full flex justify-center px-6">
                    <div className="max-w-7xl w-full flex flex-col items-center text-center">
                        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
                                Validate AI Solutions With <br />
                                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                                    Complete Confidence!
                                </span>
                            </h1>

                            <p className="text-sm sm:text-base md:text-lg text-amber-200/70 mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-xl mx-auto">
                                As a custom AI development company, we build products that improve efficiency,
                                automate processes, and support smarter decisions. Our teams deliver scalable
                                solutions tailored to business goals, turning ideas into real AI products.
                            </p>

                            <HeroButtons />
                        </div>

                    </div>
                </div>
            </motion.div>
            <hr />
            <POCBusinessGrowthSection />
            <hr />
            <POCProcessSection />
            <hr />
        </>
    );
}