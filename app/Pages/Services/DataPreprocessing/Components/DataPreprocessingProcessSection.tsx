import React from "react";
import { ArrowRight } from "lucide-react";
import DataPreprocessingStepCard from "./DataPreprocessingStepCard";
import Link from "next/link";

interface Step {
  number: number;
  title: string;
  items: string[];
}

const DataPreprocessingProcessSection: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: "Data Collection & Understanding",
      items: [
        "Gather raw data from multiple sources such as databases, APIs, and files",
        "Analyze data structure, formats, and business requirements",
      ],
    },
    {
      number: 2,
      title: "Data Cleaning & Validation",
      items: [
        "Remove duplicates, inconsistencies, and corrupted records",
        "Handle missing values and validate data accuracy",
      ],
    },
    {
      number: 3,
      title: "Data Transformation & Structuring",
      items: [
        "Normalize, format, and standardize datasets",
        "Prepare structured datasets ready for analytics and machine learning",
      ],
    },
    {
      number: 4,
      title: "Data Quality Optimization",
      items: [
        "Apply quality checks and automated validation rules",
        "Deliver reliable, high-quality datasets ready for insights and AI models",
      ],
    },
  ];

  return (
    <section className="relative bg-[#060010] py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>

      {/* CONTENT GRID */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-stretch">
        {/* LEFT SIDE (STICKY) */}
        <div className="space-y-8 flex flex-col justify-center h-full">
          <span className="text-amber-500 text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 inline-block w-fit">
            Process
          </span>

          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              Our Data Processing Workflow
            </h2>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
              We follow a structured data preprocessing workflow to clean, transform,
              and prepare datasets for analytics, machine learning, and business intelligence.
            </p>
          </div>

          <Link href="/contact" className="group relative inline-flex px-8 py-4   bg-gradient-to-r from-amber-500 to-amber-600   text-white font-medium rounded-xl overflow-hidden   transition-all duration-300   hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 w-fit">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

        </div>

        {/* RIGHT SIDE — SCROLLING CARDS */}
        <div className="space-y-10">
          {steps.map((step: Step, index: number) => (
            <DataPreprocessingStepCard
              key={step.number}
              number={step.number}
              title={step.title}
              items={step.items}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default DataPreprocessingProcessSection;