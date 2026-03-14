import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import AISolutionsStepCard from "./AISolutionsStepCard";

interface Step {
  number: number;
  title: string;
  items: string[];
}

const steps: Step[] = [
  {
    number: 1,
    title: "Business Discovery & AI Opportunity Analysis",
    items: [
      "Understand business goals, challenges, and operational workflows",
      "Identify opportunities where AI and automation can deliver the most value",
    ],
  },
  {
    number: 2,
    title: "Data Assessment & AI Feasibility",
    items: [
      "Analyze existing datasets, data quality, and infrastructure readiness",
      "Evaluate the feasibility of machine learning or AI implementation",
    ],
  },
  {
    number: 3,
    title: "AI Solution Design & Model Strategy",
    items: [
      "Define the right AI models, algorithms, and technology stack",
      "Design scalable AI architecture aligned with business objectives",
    ],
  },
  {
    number: 4,
    title: "AI Development, Deployment & Optimization",
    items: [
      "Build, train, and deploy AI models with real-world data",
      "Continuously monitor performance and optimize models for accuracy and scalability",
    ],
  },
];
const AISolutionsProcessSection: React.FC = () => {
  return (
    <section
      className="relative bg-[#060010] py-24 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
      {/* CONTENT GRID */}
      <div
        className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
      >
        {/* LEFT SIDE (STICKY) */}
        <div className="space-y-8 lg:sticky lg:top-[15rem] self-start">
          <span className="text-amber-500 text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 inline-block">
            Process
          </span>
          <div className="space-y-6">
            <h2
              className="font-bold text-white leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
            >
              Our AI Solutions Process
            </h2>
            <p
              className="text-gray-400 leading-relaxed max-w-md"
              style={{ fontSize: "clamp(0.9rem, 2.6vw, 1.1rem)" }}
            >
              Our AI solutions process helps businesses transform data into intelligent
              systems. From identifying AI opportunities and assessing data readiness to
              developing, deploying, and optimizing machine learning models, we deliver
              scalable AI solutions that improve efficiency, automation, and decision-making.
            </p>
          </div>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600  text-white font-medium overflow-hidden transition-all duration-300  hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 rounded-full  text-sm sm:text-base active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

        </div>

        {/* RIGHT SIDE — SCROLLING CARDS */}
        <div className="space-y-6 sm:space-y-10">
          {steps.map((step, index: number) => (
            <AISolutionsStepCard
              key={step.number}
              number={step.number}
              title={step.title}
              items={step.items}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Local animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AISolutionsProcessSection;