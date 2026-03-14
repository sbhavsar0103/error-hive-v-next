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
    title: "Mobile App Analysis & Data Discovery",
    icon: <Database className="w-6 h-6" />,
    description:
      "Identifying target Android and iOS applications and the required data fields.",
    details:
      "We begin by analyzing the target mobile applications to identify valuable data such as product listings, pricing, reviews, delivery times, or user insights. Our engineers examine app APIs, network calls, and mobile interfaces to determine the most efficient data extraction strategy."
  },
  {
    id: 2,
    title: "Scraping Architecture Setup",
    icon: <Brain className="w-6 h-6" />,
    description:
      "Designing scalable systems for mobile app data extraction.",
    details:
      "Our team builds custom mobile scraping environments using device emulation, automation tools, and proxy networks. This allows us to interact with Android and iOS applications just like real users while collecting structured data efficiently."
  },
  {
    id: 3,
    title: "Mobile App Data Extraction",
    icon: <Bot className="w-6 h-6" />,
    description:
      "Extracting large-scale data from mobile applications.",
    details:
      "The scraping system collects valuable app data such as product details, restaurant listings, pricing updates, reviews, ratings, delivery information, and availability. Data is extracted in real-time or scheduled intervals depending on business needs."
  },
  {
    id: 4,
    title: "Data Cleaning & Structuring",
    icon: <Network className="w-6 h-6" />,
    description:
      "Transforming raw app data into structured datasets.",
    details:
      "We clean and normalize extracted data by removing duplicates, correcting formatting issues, and organizing the information into structured formats such as JSON, CSV, or database tables for analytics and reporting."
  },
  {
    id: 5,
    title: "Automated Data Delivery",
    icon: <Rocket className="w-6 h-6" />,
    description:
      "Delivering clean datasets via APIs or automated pipelines.",
    details:
      "Finally, the processed mobile app data is delivered through secure APIs, scheduled exports, or cloud storage systems. Businesses can integrate the data directly into BI tools, analytics platforms, or machine learning pipelines."
  }
];

export default function MobileAppScrapingHowWeWorkSteps() {
  const [activeStep, setActiveStep] = useState(1);
  const activeStepData = steps.find(step => step.id === activeStep);

  return (
    <section className="relative bg-[#060010] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-amber-500 text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5">
            Mobile App Scraping Workflow
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Our Mobile App Data{" "}
            </span>
            Extraction Process
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Our mobile app scraping workflow focuses on extracting large-scale data from Android and iOS applications and converting it into structured datasets. From mobile app analysis and scraping architecture to data extraction, cleaning, and automated delivery, we build reliable pipelines that power analytics, market research, and competitive intelligence.
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