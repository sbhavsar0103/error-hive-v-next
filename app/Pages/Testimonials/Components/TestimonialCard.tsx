'use client';

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Quote, ExternalLink } from "lucide-react";
import Link from "next/link";

interface TestimonialCardProps {
  company: string;
  companyLogo: StaticImageData;
  companyLink: string;
  review: string;
}

export function TestimonialCard({
  company,
  companyLogo,
  companyLink,
  review,
}: TestimonialCardProps) {
  return (
    <div className="group relative rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent p-10 min-h-[260px] backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] hover:border-amber-500/40 hover:shadow-[0_0_50px_rgba(251,191,36,0.18)]">

      {/* Glow Layer */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col h-full justify-between">

        {/* Top Section */}
        <Link href={companyLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 mb-6 group/link">

          {/* Company Logo */}
          <Image src={companyLogo} alt={company} width={70} height={70} className="rounded-lg object-contain transition group-hover/link:opacity-80"/>

          {/* Company Name + Link Icon */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-white group-hover/link:text-amber-400 transition">
              {company}
            </span>

            <ExternalLink className="w-4 h-4 text-amber-400 opacity-70 group-hover/link:opacity-100 transition" />
          </div>

        </Link>

        {/* Review */}
        <div className="relative">

          {/* Quote Icon */}
          <Quote className="absolute -top-4 -left-2 w-8 h-8 text-amber-500/20" />

          <p className="text-base leading-relaxed text-gray-300 pl-4">
            {review}
          </p>

        </div>

      </div>
    </div>
  );
}