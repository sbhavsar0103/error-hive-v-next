import React from "react";
import { ArrowRight } from "lucide-react";
import StepCard from "./StepCard";
import Link from "next/link";

interface AIBusinessStep {
  number: number;
  title: string;
  items: string[];
}

const AIBusinessProcessSection: React.FC = () => {
  const steps: AIBusinessStep[] = [
    {
      number: 1,
      title: "Understanding Business Goals & AI Strategy",
      items: [
        "Identify core business challenges that AI can solve.",
        "Define key objectives and expected outcomes.",
        "Evaluate existing systems, infrastructure, and data readiness.",
      ],
    },
    {
      number: 2,
      title: "Custom AI Model Development",
      items: [
        "Design machine learning, deep learning, NLP, or computer vision models.",
        "Train models using real-world business data for better accuracy.",
        "Optimize AI algorithms to ensure efficiency, reliability, and fairness.",
      ],
    },
    {
      number: 3,
      title: "Seamless System Integration",
      items: [
        "Develop APIs and automation workflows for easy adoption.",
        "Ensure AI models integrate smoothly with existing business applications.",
        "Optimize data pipelines for real-time or batch processing needs.",
      ],
    },
    {
      number: 4,
      title: "Infrastructure Management: Cloud & On-Premises AI Solutions",
      items: [
        "Deploy AI solutions on cloud or on-premise environments.",
        "Ensure scalability, security, and enterprise-grade compliance.",
        "Optimize workloads to reduce operational costs.",
      ],
    },
    {
      number: 5,
      title: "Testing, Deployment & Optimization",
      items: [
        "Perform rigorous model validation.",
        "Deploy with real-time monitoring.",
        "Continuously refine algorithms.",
      ],
    },
    {
      number: 6,
      title: "Long-Term Support & Adaptive AI Evolution",
      items: [
        "Continuous monitoring and retraining.",
        "Upgrade AI as business evolves.",
        "Lifecycle management for sustainability.",
      ],
    },
  ];

  return (
    <section className="relative bg-[#060010] py-20 md:py-28 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* LEFT SIDE */}
        <div className="space-y-6 lg:space-y-8 lg:sticky lg:top-40 self-start">
          <span className="text-amber-500 text-xs md:text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 inline-block">
            Our AI Approach
          </span>

          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-tight tracking-tight">
            From Concept to Deployment
          </h2>

          <p className="text-gray-400 text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed max-w-md">
            Developing AI-powered products demands a disciplined,
            business-aligned methodology. Our structured framework ensures
            operational efficiency, dependable performance, and sustainable
            growth.
          </p>

          <Link
            href="/contact"
            className="group relative inline-flex px-6 py-3 md:px-8 md:py-4
            bg-gradient-to-r from-amber-500 to-amber-600
            text-white font-medium rounded-xl overflow-hidden
            transition-all duration-300
            hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 w-fit"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8 md:space-y-10">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              items={step.items}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative max-w-6xl mx-auto mt-24 md:mt-32">
        <div className="relative bg-gradient-to-r from-amber-600/20 via-amber-500/15 to-amber-600/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-amber-500/20 overflow-hidden group hover:border-amber-500/40 transition-all duration-500">
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6">
              <h3 className="text-[clamp(1.6rem,3vw,2.5rem)] font-bold text-white leading-tight">
                Stop Planning AI.
                <br />
                Start Profiting From It.
              </h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Every day without intelligent automation costs revenue and
                momentum. Get a custom AI roadmap with measurable returns.
              </p>

              <Link
                href="/contact"
                className="group/btn relative inline-flex px-6 py-3 md:px-8 md:py-4
                bg-white text-amber-600 font-semibold rounded-xl
                overflow-hidden transition-all duration-300
                hover:shadow-xl hover:shadow-amber-500/20 hover:scale-105 w-fit"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule AI Consultation
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* 🤖 VISUAL — hidden on mobile */}
            <div className="hidden lg:flex relative h-72 items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-2xl blur-2xl" />
              <div className="relative w-full h-full bg-gradient-to-br from-amber-400/10 to-orange-400/5 rounded-2xl border border-amber-500/20 flex items-center justify-center">
                <span className="text-6xl animate-pulse">🤖</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBusinessProcessSection;