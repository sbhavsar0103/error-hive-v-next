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
    title: "AI Strategy & Discovery",
    icon: <Brain className="w-6 h-6" />,
    description:
      "Identifying opportunities where AI can create real business value.",
    details:
      "We start by understanding your business goals, challenges, and existing workflows. Our team analyzes opportunities where AI can automate tasks, improve decision-making, or unlock new capabilities."
  },
  {
    id: 2,
    title: "Data Preparation",
    icon: <Database className="w-6 h-6" />,
    description:
      "Preparing structured and high-quality datasets for AI models.",
    details:
      "AI systems depend on reliable data. We collect, clean, structure, and preprocess datasets to ensure they are suitable for training accurate and scalable machine learning models."
  },
  {
    id: 3,
    title: "AI Model Development",
    icon: <Bot className="w-6 h-6" />,
    description:
      "Building intelligent models tailored to your use case.",
    details:
      "Our engineers design and train AI models using modern machine learning and deep learning techniques. The models are optimized for performance, scalability, and real-world use cases."
  },
  {
    id: 4,
    title: "Integration & Implementation",
    icon: <Network className="w-6 h-6" />,
    description:
      "Integrating AI into applications, platforms, or business systems.",
    details:
      "We seamlessly integrate AI models into your applications, APIs, or existing platforms so the technology becomes part of your daily operations."
  },
  {
    id: 5,
    title: "Deployment & Continuous Improvement",
    icon: <Rocket className="w-6 h-6" />,
    description:
      "Launching AI systems and improving them with real-world data.",
    details:
      "Once deployed, we monitor AI performance, retrain models with new data, and continuously optimize the system to ensure accuracy, scalability, and long-term business value."
  }
];

export default function AISolutionsHowWeWorkSteps() {
  const [activeStep, setActiveStep] = useState(1);
  const activeStepData = steps.find(step => step.id === activeStep);

  return (
    <section className="relative bg-[#060010] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-amber-500 text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5">
            AI Solutions Process
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              AI Solutions{" "}
            </span>
            Process
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Our AI development process focuses on building intelligent, scalable
            solutions that transform business operations. From AI discovery and
            data preparation to model development, deployment, and optimization,
            we deliver AI-powered systems that improve automation, insights,
            and decision-making.
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