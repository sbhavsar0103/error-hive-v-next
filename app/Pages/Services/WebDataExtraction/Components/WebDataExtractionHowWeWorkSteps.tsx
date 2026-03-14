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
    title: "Website Analysis & Data Discovery",
    icon: <Database className="w-6 h-6" />,
    description:
      "Identifying target websites and the data required for extraction.",
    details:
      "We begin by analyzing the target websites, identifying valuable data fields such as product details, prices, reviews, listings, or business information. Our team studies website structures, APIs, and pagination to design an efficient scraping approach."
  },
  {
    id: 2,
    title: "Scraper Development",
    icon: <Brain className="w-6 h-6" />,
    description:
      "Building custom web scrapers tailored for each platform.",
    details:
      "Our engineers develop scalable scraping scripts using advanced tools and frameworks. We ensure the scraper can navigate dynamic websites, handle JavaScript rendering, and bypass common anti-bot protections."
  },
  {
    id: 3,
    title: "Data Extraction",
    icon: <Bot className="w-6 h-6" />,
    description:
      "Collecting structured data from websites at scale.",
    details:
      "The scraping system automatically extracts large volumes of data including product listings, prices, contact details, travel information, or business data depending on the use case."
  },
  {
    id: 4,
    title: "Data Cleaning & Structuring",
    icon: <Network className="w-6 h-6" />,
    description:
      "Transforming raw scraped data into structured datasets.",
    details:
      "We clean the extracted data by removing duplicates, fixing formatting issues, and structuring it into organized formats such as JSON, CSV, or databases so it can be easily used for analytics or business applications."
  },
  {
    id: 5,
    title: "Data Delivery & Automation",
    icon: <Rocket className="w-6 h-6" />,
    description:
      "Delivering data through APIs, files, or automated pipelines.",
    details:
      "Finally, the processed data is delivered through secure APIs, scheduled exports, or cloud databases. We also implement automated scraping pipelines for continuous data updates."
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
            Web Scraping Workflow
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Web Scraping Process{" "}
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Our web scraping workflow focuses on collecting large-scale data from websites and transforming it into clean, structured datasets. From website analysis and scraper development to data extraction, cleaning, and delivery, we build reliable pipelines that power analytics, market research, and business intelligence.
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