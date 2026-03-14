'use client';

import { useState } from 'react';
import {
  MessageCircle,
  Wrench,
  Settings,
  Cloud,
  Zap,
  LifeBuoy
} from 'lucide-react';

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
    title: 'We sit, listen, and understand.',
    icon: <MessageCircle className="w-6 h-6" />,
    description:
      'We begin with an in-depth discussion to understand your business goals, challenges, existing infrastructure, and vision.',
    details:
      'During this phase, our team conducts comprehensive interviews with stakeholders, analyzes current systems, identifies pain points, and creates a detailed requirements document as the project foundation.'
  },
  {
    id: 2,
    title: 'We illustrate the vision.',
    icon: <Wrench className="w-6 h-6" />,
    description:
      'Our experts create a roadmap and architecture for your solution.',
    details:
      'We prepare technical specifications, UI/UX mockups, wireframes, prototypes, and a complete project timeline to ensure alignment before development starts.'
  },
  {
    id: 3,
    title: 'We build in iterations.',
    icon: <Settings className="w-6 h-6" />,
    description:
      'We develop using agile methodology and best practices.',
    details:
      'Our team works in sprints, delivering incremental features for feedback. We maintain transparent communication through regular updates and review sessions.'
  },
  {
    id: 4,
    title: 'We break it (before users do).',
    icon: <Cloud className="w-6 h-6" />,
    description:
      'We test everything before deployment.',
    details:
      'We conduct unit testing, integration testing, performance testing, and UAT to ensure stability, security, and reliability before going live.'
  },
  {
    id: 5,
    title: 'We launch without panic.',
    icon: <Zap className="w-6 h-6" />,
    description:
      'We deploy smoothly with full monitoring.',
    details:
      'We manage staging, production deployment, CI/CD pipelines, and ensure zero-downtime launch with rollback strategies ready.'
  },
  {
    id: 6,
    title: 'We stay with you (for real).',
    icon: <LifeBuoy className="w-6 h-6" />,
    description:
      'We provide long-term support and optimization.',
    details:
      'We monitor performance, gather user feedback, implement improvements, and provide ongoing support to ensure your product keeps evolving.'
  }
];

export default function WebDevelopmentHowWeWorkSteps() {
  const [activeStep, setActiveStep] = useState(1);
  const activeStepData = steps.find(step => step.id === activeStep);

  return (
    <section className="relative bg-[#060010] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-amber-500 text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5">
            Web Development Process
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            How We Build{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              High-Performance Websites
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Our structured and agile web development approach ensures fast, secure,
            scalable, and SEO-friendly websites tailored to your business goals.
            From strategy and UI/UX design to deployment and long-term support —
            we handle everything end-to-end.
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