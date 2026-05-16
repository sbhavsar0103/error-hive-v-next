import Link from "next/link";
import { ArrowRight } from "lucide-react";

import MobileDevelopmentStepCard from "./MobileDevelopmentStepCard";

export default function MobileDevelopmentProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Requirement Gathering & App Strategy Planning",
      items: [
        "Understand business goals and define the mobile app development roadmap.",
        "Identify target audience, platforms (iOS, Android, or cross-platform), and core features.",
        "Conduct competitor analysis and define app success metrics.",
      ],
    },
    {
      number: 2,
      title: "UI/UX Design & Mobile App Development",
      items: [
        "Create wireframes and interactive prototypes for seamless user experience.",
        "Develop high-performance mobile applications using modern frameworks.",
        "Ensure scalable architecture, secure APIs, and optimized app performance.",
      ],
    },
    {
      number: 3,
      title: "App Testing, Deployment & Launch",
      items: [
        "Perform rigorous mobile app testing for functionality, security, and performance.",
        "Fix bugs and optimize the app for different devices and screen sizes.",
        "Deploy the application on App Store and Google Play with proper ASO optimization.",
      ],
    }
  ];

  return (
    <section className="relative bg-[#060010] py-24 px-6">
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
              Our Mobile App Development Process
            </h2>
            <p
              className="text-gray-400 leading-relaxed max-w-md"
              style={{ fontSize: "clamp(0.9rem, 2.6vw, 1.1rem)" }}
            >
              As a leading mobile app development company, we follow a structured and results-driven process to build scalable, secure, and high-performance mobile applications. From strategy and UI/UX design to development, testing, and deployment, our mobile app development services ensure your business achieves digital success across iOS and Android platforms.

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
            <MobileDevelopmentStepCard
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
}