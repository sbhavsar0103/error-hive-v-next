import React from "react";
import AnnotationServiceItem, {
  AnnotationService,
} from "./AnnotationServiceItem";

interface AnnotationServicesListProps {
  services: AnnotationService[];
  selectedServiceId: number;
  setSelectedServiceId: React.Dispatch<React.SetStateAction<number>>;
}

const AnnotationServicesList: React.FC<AnnotationServicesListProps> = ({
  services,
  selectedServiceId,
  setSelectedServiceId,
}) => {
  return (
    <div className="hidden lg:block h-full w-full">
      <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-transparent lg:h-full">
        <div className="space-y-3">
          {services.map((service) => (
            <AnnotationServiceItem
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
};

export default AnnotationServicesList;
