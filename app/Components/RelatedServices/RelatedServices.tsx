'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    <section className="bg-[#060010] py-20 px-6 sm:px-8 relative overflow-hidden border-t border-amber-500/10">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
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
              className="group p-8 rounded-2xl bg-white/5 border border-amber-500/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-amber-500/40 hover:-translate-y-1 block"
            >
              <h3 className="text-xl font-semibold text-amber-500 mb-3 flex items-center justify-between">
                {service.title}
                <ArrowRight className="w-5 h-5 text-amber-500 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
