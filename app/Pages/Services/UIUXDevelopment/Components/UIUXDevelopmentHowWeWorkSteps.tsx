'use client';

import { useState } from 'react';
import { Search, Workflow, Layout, Palette, MousePointerClick, FlaskConical } from "lucide-react";

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
    title: "User Research & Discovery",
    icon: <Search className="w-6 h-6" />,
    description:
      "Understanding users, business goals, and product vision.",
    details:
      "We begin by conducting user research, stakeholder interviews, and competitor analysis. This helps us understand user needs, define product goals, and identify opportunities to create meaningful user experiences."
  },
  {
    id: 2,
    title: "UX Strategy & Information Architecture",
    icon: <Workflow className="w-6 h-6" />,
    description:
      "Structuring user journeys and product navigation.",
    details:
      "Our UX experts define user journeys, navigation flows, and information architecture to ensure the product structure is intuitive and easy to navigate."
  },
  {
    id: 3,
    title: "Wireframing",
    icon: <Layout className="w-6 h-6" />,
    description:
      "Creating layout structures and UX blueprints.",
    details:
      "We design low-fidelity wireframes that outline content hierarchy, layout structure, and core functionality. Wireframes help visualize the product before visual design begins."
  },
  {
    id: 4,
    title: "UI Design",
    icon: <Palette className="w-6 h-6" />,
    description:
      "Designing visually engaging interfaces.",
    details:
      "Our designers transform wireframes into high-fidelity UI designs with modern layouts, typography, color systems, and design components aligned with your brand."
  },
  {
    id: 5,
    title: "Interactive Prototyping",
    icon: <MousePointerClick className="w-6 h-6" />,
    description:
      "Simulating real product interactions.",
    details:
      "We build clickable prototypes to demonstrate user interactions and workflows, allowing stakeholders to validate the design before development."
  },
  {
    id: 6,
    title: "Usability Testing & Optimization",
    icon: <FlaskConical className="w-6 h-6" />,
    description:
      "Improving user experience through testing.",
    details:
      "Through usability testing and analytics, we identify friction points and continuously optimize the design to improve engagement, usability, and conversion rates."
  }
];

export default function UIUXDevelopmentHowWeWorkSteps() {
  const [activeStep, setActiveStep] = useState(1);
  const activeStepData = steps.find(step => step.id === activeStep);

  return (
    <section className="relative bg-[#060010] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-amber-500 text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5">
            UI/UX Design Process
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              UI/UX Design{" "}
            </span>
            Process
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Our structured UI/UX design process focuses on creating intuitive,
            user-centered digital products. From user research and wireframing
            to interface design, usability testing, and continuous optimization,
            we deliver seamless user experiences that improve engagement,
            usability, and product success.
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