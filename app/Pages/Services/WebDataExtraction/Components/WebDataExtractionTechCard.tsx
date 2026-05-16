import Image from "next/image";
import { TechItem } from "./WebDataExtractionTechData";

interface WebDataExtractionTechCardProps {
  tech: TechItem;
}

export default function WebDataExtractionTechCard({ tech }: WebDataExtractionTechCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 lg:p-3 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105"
      title={tech.name}>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white p-2 shadow-sm shadow-black/20">
          <Image
            src={tech.logo}
            alt={tech.name}
            width={48}
            height={48}
            unoptimized
            sizes="48px"
            className="h-full w-full object-contain"
          />
        </div>
        <p className="sr-only">
          {tech.name}
        </p>
      </div>
    </div>
  );
}
