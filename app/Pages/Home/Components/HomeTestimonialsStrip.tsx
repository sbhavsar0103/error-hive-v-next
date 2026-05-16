'use client';

import React from "react";
import Link from "next/link";
import { TestimonialCard } from "@/app/Pages/Testimonials/Components/TestimonialCard";
import { testimonials } from "@/app/Pages/Testimonials/Components/TestimonialData";

const HomeTestimonialsStrip: React.FC = () => {
  // Pull 3 of the best testimonials (first 3)
  const selectedTestimonials = testimonials.slice(0, 3);

  return (
    <section className="bg-[#060010] py-20 px-6 sm:px-8 relative overflow-hidden">
      {/* <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" /> */}
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-amber-100/70 max-w-2xl mx-auto">
            See how we've helped companies transform their operations with reliable software and AI solutions.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {selectedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials">
            <button className="px-6 py-3 bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-white border border-amber-500/20 font-semibold rounded-full transition-all duration-300">
              Read All Reviews →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialsStrip;
