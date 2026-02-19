import React from "react";
import WebDevelopmentServiceItem from "./WebDevelopmentServiceItem";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface WebDevelopmentServicesListProps {
  services: Service[];
  selectedServiceId: number;
  setSelectedServiceId: (id: number) => void;
}

export default function WebDevelopmentServicesList({
  services,
  selectedServiceId,
  setSelectedServiceId,
}: WebDevelopmentServicesListProps) {
  return (
    <div className="hidden lg:block bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl p-6 lg:p-8 overflow-y-auto">
      <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-transparent">
        <div className="space-y-3">
          {services.map((service) => (
            <WebDevelopmentServiceItem
              key={service.id}
              service={service}
              isSelected={service.id === selectedServiceId}
              onClick={() => setSelectedServiceId(service.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
