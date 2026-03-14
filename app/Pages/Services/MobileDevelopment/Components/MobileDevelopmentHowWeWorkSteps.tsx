'use client';

import { useState } from 'react';
import { MessageCircle, Wrench, Settings, Cloud, Zap, LifeBuoy } from 'lucide-react';

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
    title: 'Discovery & Consultation',
    icon: <MessageCircle className="w-6 h-6" />,
    description:
      'Understanding your business goals, target users, and app requirements.',
    details:
      'We conduct in-depth discussions to define project scope, identify target audience, analyze competitors, and outline key features for your mobile app. This ensures a strong strategic foundation before development begins.'
  },
  {
    id: 2,
    title: 'Planning & Roadmapping',
    icon: <Wrench className="w-6 h-6" />,
    description:
      'Creating a detailed mobile app development roadmap.',
    details:
      'Our team prepares technical architecture, selects the right technology stack (iOS, Android, or cross-platform), defines milestones, and creates a structured development timeline.'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    icon: <Settings className="w-6 h-6" />,
    description:
      'Designing intuitive and engaging mobile app interfaces.',
    details:
      'We create wireframes, prototypes, and high-fidelity UI designs focused on seamless navigation, user experience optimization, and conversion-driven mobile interfaces.'
  },
  {
    id: 4,
    title: 'Agile App Development',
    icon: <Cloud className="w-6 h-6" />,
    description:
      'Building scalable and high-performance mobile applications.',
    details:
      'Using agile methodology, we develop your mobile app in sprints, ensuring clean code, optimized performance, scalability, and regular feedback integration.'
  },
  {
    id: 5,
    title: 'Backend & API Integration',
    icon: <Zap className="w-6 h-6" />,
    description:
      'Secure backend development and third-party integrations.',
    details:
      'We build robust backend systems and integrate APIs such as payment gateways, analytics tools, cloud services, and authentication systems for enhanced functionality.'
  },
  {
    id: 6,
    title: 'Testing & Quality Assurance',
    icon: <LifeBuoy className="w-6 h-6" />,
    description:
      'Ensuring security, performance, and reliability.',
    details:
      'Our QA team performs functional testing, performance testing, device compatibility checks, and security validation to deliver a bug-free mobile application.'
  },
  {
    id: 7,
    title: 'App Store Deployment',
    icon: <LifeBuoy className="w-6 h-6" />,
    description:
      'Publishing your app on App Store and Google Play.',
    details:
      'We manage the complete deployment process, including App Store Optimization (ASO), compliance checks, and submission to Apple App Store and Google Play Store.'
  },
  {
    id: 8,
    title: 'Post-Launch Support & Growth',
    icon: <LifeBuoy className="w-6 h-6" />,
    description:
      'Continuous optimization and feature enhancements.',
    details:
      'We provide ongoing maintenance, performance monitoring, feature updates, and scalability improvements to ensure long-term success in the competitive mobile app market.'
  }
];

export default function MobileDevelopmentHowWeWorkSteps() {
  const [activeStep, setActiveStep] = useState(1);
  const activeStepData = steps.find(step => step.id === activeStep);

  return (
    <section className="relative bg-[#060010] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-amber-500 text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5">
            Mobile App Development Process
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            How  Build{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Scalable & High-Performance Mobile Apps
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Our proven mobile app development process ensures secure, scalable, and
            user-friendly applications for iOS and Android platforms. From strategy,
            UI/UX design, and agile app development to backend integration, testing,
            App Store deployment, and post-launch support — we deliver end-to-end
            mobile app development services tailored to your business goals.
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