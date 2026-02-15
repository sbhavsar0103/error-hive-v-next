import React from "react";
import DataScienceServiceItem from "./DataScienceServiceItem";

interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description?: string;
}

interface DataScienceServicesListProps {
  services: Service[];
  selectedServiceId: number;
  setSelectedServiceId: (id: number) => void;
}

const DataScienceServicesList: React.FC<DataScienceServicesListProps> = ({
  services,
  selectedServiceId,
  setSelectedServiceId,
}) => {
  return (
    <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-transparent">
      <div className="space-y-3">
        {services.map((service) => (
          <DataScienceServiceItem
            key={service.id}
            service={service}
            isSelected={service.id === selectedServiceId}
            onClick={() => setSelectedServiceId(service.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DataScienceServicesList;
