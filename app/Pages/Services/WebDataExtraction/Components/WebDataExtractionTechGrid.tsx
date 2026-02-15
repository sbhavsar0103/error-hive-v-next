import WebDataExtractionTechCard from "./WebDataExtractionTechCard";
import { TechItem } from "./WebDataExtractionTechData";

interface WebDataExtractionTechGridProps {
  techs: readonly TechItem[];
}

export default function WebDataExtractionTechGrid({ techs }: WebDataExtractionTechGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-6 max-w-4xl mx-auto">
      {techs.map((tech) => (
        <WebDataExtractionTechCard key={tech.id} tech={tech} />
      ))}
    </div>
  );
}
