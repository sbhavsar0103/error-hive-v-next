'use client';
import React from 'react';

import { TestimonialCard } from './Components/TestimonialCard';
import { testimonials } from "./Components/TestimonialData";

import LetsConnect from "../../Components/LetsConnect/LetsConnect";

export default function TestimonialsPage() {
    return (
        <>
            <div className="min-h-screen bg-[#060010] text-white">
                
                {/* Outline Title */}
                <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
                    <div
                        className="select-none text-[10vw] font-bold uppercase leading-none tracking-tighter"
                        style={{ WebkitTextStroke: '2px rgb(245, 157, 11)', color: 'transparent' }}
                    >
                        TESTIMONIALS
                    </div>
                </div>

                {/* Testimonials */}
                <div className="relative px-4 py-20 sm:px-6 lg:px-8">
                    <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

                    <div className="mx-auto max-w-7xl">
                        
                        {/* Section Heading */}
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                                What Our Clients Say
                            </h2>

                            <p className="mx-auto max-w-2xl text-lg text-gray-300">
                                Don't just take our word for it. Here's what our clients have to
                                say about their experience working with us.
                            </p>
                        </div>

                        {/* Testimonials Grid */}
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <hr className="border-amber-500/20" />

            <LetsConnect />

            <hr className="border-amber-500/20" />
        </>
    );
}