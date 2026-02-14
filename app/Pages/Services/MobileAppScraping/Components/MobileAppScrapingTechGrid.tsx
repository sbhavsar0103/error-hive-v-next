import MobileAppScrapingTechCard from "./MobileAppScrapingTechCard";

interface Tech {
  id: number;
  name: string;
  logo: React.ReactNode;
}

interface MobileAppScrapingTechGridProps {
  techs: Tech[];
}

export default function MobileAppScrapingTechGrid({ techs }: MobileAppScrapingTechGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-6 max-w-4xl mx-auto">
      {techs.map((tech) => (
        <MobileAppScrapingTechCard key={tech.id} tech={tech} />
      ))}
    </div>
  );
}
