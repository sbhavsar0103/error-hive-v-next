import { Dispatch, SetStateAction } from "react";
import { LucideIcon } from "lucide-react";
import MachineLearningServiceItem from "./MachineLearningServiceItem";

interface MachineLearningService {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface MachineLearningServicesListProps {
  services: MachineLearningService[];
  selectedServiceId: number;
  setSelectedServiceId: Dispatch<SetStateAction<number>>;
}

export default function MachineLearningServicesList({
  services,
  selectedServiceId,
  setSelectedServiceId,
}: MachineLearningServicesListProps) {
  return (
    <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-transparent">
      <div className="space-y-3">
        {services.map((service) => (
          <MachineLearningServiceItem
            key={service.id}
            service={service}
            isSelected={service.id === selectedServiceId}
            onClick={() => setSelectedServiceId(service.id)}
          />
        ))}
      </div>
    </div>
  );
}
