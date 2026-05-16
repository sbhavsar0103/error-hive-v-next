'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SpotlightCard from "../../Components/SpotlightCard/SpotlightCard";

export interface RelatedServiceItem {
  title: string;
  href: string;
  description: string;
}

interface RelatedServicesProps {
  services: RelatedServiceItem[];
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ services }) => {
  return (
    <section className="bg-[#060010] py-20 px-6 sm:px-8 relative overflow-hidden">      
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-4">
            Related Services
          </h2>
          <p className="text-amber-100/70 max-w-2xl mx-auto">
            Explore our other core capabilities designed to accelerate your business growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className="group block h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <SpotlightCard className="h-full cursor-pointer">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 p-3 bg-[#060010] rounded-xl w-fit">
                    <ArrowRight className="w-6 h-6 text-amber-500 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 tracking-tight bg-amber-500 bg-clip-text text-transparent">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
