import { ChevronRight, LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import Link from "next/link";

interface LLMService {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface LLMServiceDetailsProps {
  selectedService: LLMService;
}
export default function LLMServiceDetails({
  selectedService,
}: LLMServiceDetailsProps): ReactElement {
  const IconComponent = selectedService.icon;

  return (
    <div className="
      relative
      bg-gradient-to-br from-white/[0.05] to-white/[0.02]
      rounded-3xl
      p-6 sm:p-8 lg:p-12
      flex flex-col justify-between
      backdrop-blur-xl
      border border-white/10
      transition-all duration-500
    ">
      
      {/* Subtle ambient glow */}
      <div className="relative z-10">
        {/* Decorative grid */}
        <div className="grid grid-cols-8 gap-3 mb-10 opacity-10">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          ))}
        </div>

        {/* Icon */}
        <div className="mb-6 inline-flex p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
          <IconComponent className="w-7 h-7 text-amber-500" />
        </div>

        {/* Title */}
        <h2 className="
          text-2xl sm:text-3xl lg:text-4xl 
          font-semibold 
          text-white 
          mb-5
          tracking-tight
        ">
          {selectedService.title}
        </h2>

        {/* Description */}
        <p className="
          text-gray-400 
          text-base sm:text-lg 
          leading-relaxed 
          max-w-2xl
          mb-10
        ">
          {selectedService.description}
        </p>
      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className="
          group relative inline-flex items-center gap-2
          px-6 sm:px-8 py-3 sm:py-4
          bg-gradient-to-r from-amber-500 to-amber-600
          text-[#060010]
          rounded-xl
          font-semibold
          transition-all duration-300
          hover:shadow-lg hover:shadow-amber-500/20
          hover:translate-y-[-2px]
          w-fit
        "
      >
        Get Started
        <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}