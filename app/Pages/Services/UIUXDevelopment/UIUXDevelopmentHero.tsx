'use client';

import { useMemo } from "react";
import { motion, Variants } from "framer-motion";

import UIUXDevelopmentDriveResults from "./Components/UIUXDevelopmentDriveResults";
import WhyUIUXMatter from "./Components/WhyUIUXMatter";
import UIUXDevelopmentServicesPage from "./Components/UIUXDevelopmentServicesPage";
import UIUXDevelopmentHowWeWorkSteps from "./Components/UIUXDevelopmentHowWeWorkSteps";

import FloatingParticles from "../../../Components/FloatingParticles/FloatingParticles";
import HeroButtons from "../../../Components/HeroButtons/HeroButtons";
import ServiceExpectations from "../../../Components/ServiceExpectations/ServiceExpectations";
import FAQ from "../../../Components/FAQ/FAQ";
import RelatedServices from "../../../Components/RelatedServices/RelatedServices";

const UIUXDevelopmentHero: React.FC = () => {
  const faqs = [
    {
        "question": "Do you offer UI/UX design as a standalone service?",
        "answer": "Yes. We can design your digital product from scratch or redesign your existing application without taking on the development phase, if that's what you need."
    },
    {
        "question": "What tools do you use for design?",
        "answer": "Our primary design tool is Figma. We use it for wireframing, high-fidelity UI design, and interactive prototyping."
    },
    {
        "question": "How do you ensure the design aligns with our brand?",
        "answer": "We start every project with a thorough discovery phase to understand your brand guidelines, target audience, and business objectives before creating any visual assets."
    }
];

  const relatedServices = [
    {
        "title": "Web Development",
        "href": "/services/web-development",
        "description": "Scalable web applications and platforms."
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
              <h1 className="font-bold text-white mb-6 leading-[1.1] text-[clamp(1.5rem,5vw,3.5rem)]">
                Craft Exceptional Digital Experiences with
                <br />
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  UI/UX Design & Development
                </span>
              </h1>

              <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-amber-200/70 mb-8 leading-relaxed max-w-4xl mx-auto">
                We design intuitive, user-centered interfaces that combine creativity
                with functionality. From research-driven UX strategy and wireframing to
                high-fidelity UI design and responsive development, we create digital
                experiences that increase engagement, improve conversions, and elevate
                your brand.
              </p>
              <HeroButtons />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <hr />
      <UIUXDevelopmentDriveResults />
      <hr />
      <WhyUIUXMatter />
      <hr />
      <UIUXDevelopmentServicesPage />
      <ServiceExpectations />
      <RelatedServices services={relatedServices} />
      <hr />
      <FAQ items={faqs} />
      <hr />

      <hr />
      <UIUXDevelopmentHowWeWorkSteps />
      <hr />
    </section>
  );
};

export default UIUXDevelopmentHero;