import { Dispatch, SetStateAction } from "react";
import { LucideIcon } from "lucide-react";

import AISolutionsServiceItem from "./AISolutionsServiceItem";

interface AISolutionsServicesListService {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface AISolutionsServicesListListProps {
  services: AISolutionsServicesListService[];
  selectedServiceId: number;
  setSelectedServiceId: Dispatch<SetStateAction<number>>;
}

export default function BusinessSoftwareConsultingServicesList({
  services,
  selectedServiceId,
  setSelectedServiceId,
}: AISolutionsServicesListListProps) {
  return (
    <div className="hidden lg:block h-full w-full">
      <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-transparent lg:h-full">
        <div className="space-y-3">
          {services.map((service) => (
            <AISolutionsServiceItem
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
