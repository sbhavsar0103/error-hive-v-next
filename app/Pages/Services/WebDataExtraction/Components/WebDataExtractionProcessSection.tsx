import { ArrowRight } from "lucide-react";
import WebDataExtractionStepCard from "./WebDataExtractionStepCard";
import Link from "next/link";
import React from "react";

export default function WebDataExtractionProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Understanding Data Requirements",
      items: [
        "Identify target websites, platforms, and data fields to extract",
        "Define business objectives such as price monitoring, lead generation, or market research",
      ],
    },
    {
      number: 2,
      title: "Website Analysis & Scraping Strategy",
      items: [
        "Analyze website structure, APIs, pagination, and anti-bot protections",
        "Design an efficient scraping strategy using proxies and automation tools",
      ],
    },
    {
      number: 3,
      title: "Data Extraction & Processing",
      items: [
        "Build scalable scrapers to collect structured data from websites",
        "Clean, validate, and transform raw data into usable datasets",
      ],
    },
    {
      number: 4,
      title: "Delivery & Automation",
      items: [
        "Deliver data in CSV, JSON, API, or database formats",
        "Automate scraping pipelines for scheduled or real-time updates",
      ],
    },
  ];

  return (
    <section className="relative bg-[#060010] py-24 px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>

      {/* CONTENT GRID */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-stretch">
        <div className="space-y-8 flex flex-col justify-center h-full">
          <span className="text-amber-500 text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 inline-block w-fit">
            Process
          </span>

          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              Our Web Scraping Process
            </h2>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
              We follow a structured web scraping process to extract, clean, and deliver high-quality data from websites at scale.
            </p>
          </div>

          <Link href="/contact" className="group relative inline-flex px-8 py-4   bg-gradient-to-r from-amber-500 to-amber-600   text-white font-medium rounded-xl overflow-hidden   transition-all duration-300   hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 w-fit">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* RIGHT SIDE — SCROLLING CARDS */}
        <div className="space-y-10">
          {steps.map((step, index) => (
            <WebDataExtractionStepCard
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