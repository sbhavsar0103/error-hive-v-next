'use client';
import { useEffect, useState } from "react";
import FloatingParticles from "./Components/FloatingParticles";
import { motion } from "framer-motion";

export default function CaseStudyHero() {
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
            <motion.div variants={container} initial="hidden" animate="show" className="relative min-h-screen bg-[#060010] overflow-hidden flex items-center justify-center">
                {/* Background grid overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <FloatingParticles />
                {/* Centered content */}
                <div className="relative z-10 w-full flex justify-center px-6">
                    <div className="max-w-7xl w-full flex flex-col items-center text-center">
                        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                This Page Is In Under Construction <br />
                                <span className="bg-amber-500 bg-clip-text text-transparent">
                                    Stay Tuned For Our AI-Powered Large Language Models (LLMs) for Smart Automation & Text Processing!
                                </span>
                            </h1>
                            <p className="text-xl text-amber-200/70 mb-8 leading-relaxed max-w-4xl mx-auto">
                                We’re busy crafting an amazing experience for you. 🚀
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <hr />
        </>
    );
}