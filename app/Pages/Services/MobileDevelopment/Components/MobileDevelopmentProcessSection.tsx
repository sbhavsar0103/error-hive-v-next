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
    <section
      className="relative bg-[#060010] py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
    >

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>

      {/* CONTENT GRID */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE (STICKY) */}
        <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-[15rem] self-start">
          <span className="text-amber-500 text-xs sm:text-sm px-4 py-2 font-medium tracking-wider uppercase rounded-full border border-amber-500/20 bg-amber-500/5 inline-block">
            Mobile App Development Process
          </span>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Our Proven Mobile App Development Approach
            </h2>

            <p className="text-gray-400 text-base sm:text-base lg:text-base leading-relaxed max-w-md">
              As a leading mobile app development company, we follow a structured and results-driven process to build scalable, secure, and high-performance mobile applications. From strategy and UI/UX design to development, testing, and deployment, our mobile app development services ensure your business achieves digital success across iOS and Android platforms.
            </p>
          </div>

          <Link
            href="/contact"
            className="group relative inline-flex px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Mobile App Project
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* RIGHT SIDE — SCROLLING CARDS */}
        <div className="space-y-6 sm:space-y-10">
          {steps.map((step, index) => (
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

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}