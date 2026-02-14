import React, { Dispatch, SetStateAction } from "react";
import { LucideIcon } from "lucide-react";
import LLMServiceItem from "./LLMServiceItem";

interface LLMService {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface LLMServicesListProps {
  services: LLMService[];
  selectedServiceId: number;
  setSelectedServiceId: Dispatch<SetStateAction<number>>;
}

export default function LLMServicesList({
  services,
  selectedServiceId,
  setSelectedServiceId,
}: LLMServicesListProps): React.ReactElement {
  return (
    <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-transparent">
      <div className="space-y-3">
        {services.map((service) => (
          <LLMServiceItem
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
