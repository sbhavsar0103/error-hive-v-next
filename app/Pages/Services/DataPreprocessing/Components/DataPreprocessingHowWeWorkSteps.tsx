'use client';

import { useState } from 'react';
import { Brain, Database, Bot, Network, Rocket } from "lucide-react";

interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Data Collection & Discovery",
    icon: <Database className="w-6 h-6" />,
    description:
      "Gathering and understanding raw data from multiple sources.",
    details:
      "We begin by identifying data sources such as databases, APIs, spreadsheets, and files. Our team analyzes data formats, structures, and business requirements to ensure the right preprocessing strategy."
  },
  {
    id: 2,
    title: "Data Cleaning",
    icon: <Brain className="w-6 h-6" />,
    description:
      "Removing errors, duplicates, and inconsistencies from datasets.",
    details:
      "Raw data often contains missing values, duplicates, and incorrect records. We clean datasets by correcting inconsistencies, handling missing data, and ensuring the dataset is accurate and reliable."
  },
  {
    id: 3,
    title: "Data Transformation",
    icon: <Bot className="w-6 h-6" />,
    description:
      "Converting raw data into structured and standardized formats.",
    details:
      "We transform data into consistent formats suitable for analytics and machine learning pipelines. This includes normalization, encoding categorical variables, and feature engineering."
  },
  {
    id: 4,
    title: "Data Validation & Quality Assurance",
    icon: <Network className="w-6 h-6" />,
    description:
      "Ensuring high-quality datasets ready for analytics or AI.",
    details:
      "We apply validation rules and automated quality checks to verify data integrity, completeness, and accuracy before it enters analytics or machine learning systems."
  },
  {
    id: 5,
    title: "Dataset Preparation & Delivery",
    icon: <Rocket className="w-6 h-6" />,
    description:
      "Delivering optimized datasets ready for analytics and AI systems.",
    details:
      "Finally, we structure and deliver datasets optimized for business intelligence tools, machine learning models, or data analytics platforms to enable accurate insights and better decision-making."
  }
];

export default function DataPreprocessingHowWeWorkSteps() {
  const [activeStep, setActiveStep] = useState(1);
  const activeStepData = steps.find(step => step.id === activeStep);

  return (
    <section className="relative bg-[#060010] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-amber-500 text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5">
            Data Processing Workflow
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Data Processing{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              &{" "}
            </span>
            Cleaning Process
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Our data preprocessing workflow focuses on transforming raw, messy data into clean, structured, and reliable datasets. From data collection and cleaning to transformation and validation, we prepare high-quality data ready for analytics, machine learning, and business intelligence systems.
          </p>
        </div>
        {/* Timeline Section */}
        <div className="mb-16">

          {/* Icons Grid */}
          <div className="relative grid mb-5 gap-y-8" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
            {/* Timeline line */}
            <div className="absolute top-8 left-0 w-full h-[2px] bg-amber-500/20" />
            {steps.map((step) => (
              <div key={step.id} className="relative flex justify-center z-10">
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300
                  ${activeStep === step.id
                      ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30 scale-110"
                      : "bg-[#0a001b] text-gray-400 border border-amber-500/20 hover:border-amber-500/40"
                    }`}
                >
                  {step.icon}
                </button>
              </div>
            ))}
          </div>

          {/* Step Titles */}
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`text-xs sm:text-sm lg:text-base font-medium transition-colors duration-300 w-full
                  ${activeStep === step.id
                      ? "text-amber-500"
                      : "text-gray-400 hover:text-amber-500"
                    }`}
                >
                  {step.title}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Card */}
        {activeStepData && (
          <div className="bg-gradient-to-br from-[#0a001b] to-[#100022] rounded-3xl p-8 sm:p-10 border border-amber-500/10 shadow-xl shadow-black/40 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Step {activeStepData.id}:{" "}
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  {activeStepData.title}
                </span>
              </h3>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {activeStepData.details}
            </p>

            <div className="mt-8 pt-6 border-t border-amber-500/10">
              <p className="text-gray-400 italic">
                {activeStepData.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}