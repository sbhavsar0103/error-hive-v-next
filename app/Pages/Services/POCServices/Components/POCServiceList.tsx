import POCServiceItem from "./POCServiceItem";

interface Service {
  id: number;
  title: string;
  description: string;
}

interface POCServiceListProps {
  services: Service[];
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
}

export default function POCServiceList({
  services,
  hoveredId,
  setHoveredId,
}: POCServiceListProps) {
  return (
    <div className="space-y-3 sm:space-y-4 lg:space-y-6 max-w-3xl mx-auto">
      {services.map((service) => (
        <POCServiceItem
          key={service.id}
          service={service}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      ))}
    </div>
  );
}
