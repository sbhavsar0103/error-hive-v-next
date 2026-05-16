'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PortfolioHero: React.FC = () => {
  // TODO: Replace placeholder content with real portfolio data
  const projects = [
    {
      name: "AI-Powered CRM Assistant",
      industry: "Sales Tech",
      services: "LLM Integration, Next.js",
      outcome: "Increased sales team efficiency by automating email drafting and lead scoring.",
      link: "/contact?ref=portfolio-ai-crm"
    },
    {
      name: "E-Commerce Price Tracker",
      industry: "Retail",
      services: "Web Scraping, Data Automation",
      outcome: "Monitors 50k+ products daily with 99.8% accuracy for dynamic pricing.",
      link: "/contact?ref=portfolio-price-tracker"
    },
    {
      name: "Enterprise Workflow Platform",
      industry: "Manufacturing",
      services: "Custom Software, React Native",
      outcome: "Unified operations across 5 factories with a custom web and mobile dashboard.",
      link: "/contact?ref=portfolio-workflow"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-[#060010] text-white">
        {/* Outline Title */}
        <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="select-none text-[10vw] font-bold uppercase leading-none tracking-tighter"
              style={{ WebkitTextStroke: '2px rgb(245, 157, 11)', color: 'transparent' }}>
              OUR WORK
          </div>
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <p className="text-xl sm:text-2xl text-amber-200/70 max-w-2xl mx-auto px-4">
              A selection of projects we&apos;ve delivered.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="relative px-4 py-20 sm:px-6 lg:px-8 border-t border-amber-500/10">
          <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="group flex flex-col rounded-2xl border border-amber-500/20 bg-white/5 p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-amber-500/40">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-500 border border-amber-500/20">
                      {project.industry}
                    </span>
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-500/20">
                      {project.services}
                    </span>
                  </div>
                  
                  <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="mb-8 flex-grow text-gray-300 leading-relaxed">
                    {project.outcome}
                  </p>
                  
                  <Link href={project.link} className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 transition-colors hover:text-amber-400">
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-amber-500/20" />
    </>
  );
};

export default PortfolioHero;
