import { Dispatch, SetStateAction } from "react";
import { LucideIcon } from "lucide-react";
import UIUXDevelopmentServiceItem from "./UIUXDevelopmentServiceItem";

interface UIUXDevelopmentServicesListService {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface UIUXDevelopmentServicesListProps {
  services: UIUXDevelopmentServicesListService[];
  selectedServiceId: number;
  setSelectedServiceId: Dispatch<SetStateAction<number>>;
}

export default function UIUXDevelopmentServicesList({
  services,
  selectedServiceId,
  setSelectedServiceId,
}: UIUXDevelopmentServicesListProps) {
  return (
    <div className="hidden lg:block h-full w-full">
      <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-transparent lg:h-full">
        <div className="space-y-3">
          {services.map((service) => (
            <UIUXDevelopmentServiceItem
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
