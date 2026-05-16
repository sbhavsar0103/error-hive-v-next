'use client';

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Quote, ExternalLink } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "../../../Components/SpotlightCard/SpotlightCard";

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
    <SpotlightCard className="h-full bg-[#060010] group cursor-pointer">
      <div className="relative z-10 flex flex-col h-full justify-between">

        {/* Top Section */}
        <Link href={companyLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 mb-6 group/link">

          {/* Company Logo */}
          <div className="p-3 bg-[#060010] rounded-xl w-fit">
            <Image src={companyLogo} alt={company} width={48} height={48} className="rounded-lg object-contain transition group-hover/link:opacity-80"/>
          </div>

          {/* Company Name + Link Icon */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight bg-amber-500 bg-clip-text text-transparent">
              {company}
            </span>

            <ExternalLink className="w-4 h-4 text-amber-500 opacity-70 group-hover/link:opacity-100 transition" />
          </div>

        </Link>

        {/* Review */}
        <div className="relative">

          {/* Quote Icon */}
          <Quote className="absolute -top-4 -left-2 w-8 h-8 text-amber-500/30" />

          <p className="text-base leading-relaxed text-gray-400 pl-4">
            {review}
          </p>

        </div>

      </div>
    </SpotlightCard>
  );
}
