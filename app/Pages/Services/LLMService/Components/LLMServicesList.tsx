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
    <div
      className="w-full lg:w-[380px] bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/10 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-amber-500/40 scrollbar-track-transparent">
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