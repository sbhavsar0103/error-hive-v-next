import React from "react";
import AIBusinessServiceItem, {
  AIBusinessService,
} from "./AIBusinessServiceItem";

interface AIBusinessServiceListProps {
  services: AIBusinessService[];
  hoveredId: number | null;
  setHoveredId: React.Dispatch<React.SetStateAction<number | null>>;
}

const AIBusinessServiceList: React.FC<AIBusinessServiceListProps> = ({
  services,
  hoveredId,
  setHoveredId,
}) => {
  return (
    <div className="space-y-4">
      {services.map((service) => (
        <AIBusinessServiceItem
          key={service.id}
          service={service}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      ))}
    </div>
  );
};

export default AIBusinessServiceList;