import React from "react";
import { ArrowRight } from "lucide-react";

/** Service type */
export interface AIBusinessService {
  id: number;
  title: string;
  description: string;
}

/** Component props */
interface AIBusinessServiceItemProps {
  service: AIBusinessService;
  hoveredId: number | null;
  setHoveredId: React.Dispatch<React.SetStateAction<number | null>>;
}

const AIBusinessServiceItem: React.FC<AIBusinessServiceItemProps> = ({
  service,
  hoveredId,
  setHoveredId,
}) => {
  const isActive = hoveredId === service.id;

  const handleToggle = () => {
    setHoveredId(isActive ? null : service.id);
  };

  return (
    <div
      onMouseEnter={() => window.innerWidth >= 768 && setHoveredId(service.id)}
      onMouseLeave={() => window.innerWidth >= 768 && setHoveredId(null)}
      onClick={handleToggle}
      className="group relative transition-all duration-500 cursor-pointer"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
          isActive
            ? "bg-gradient-to-br from-white/10 to-white/5 border-amber-500/40 shadow-xl shadow-amber-500/20"
            : "bg-gradient-to-br from-white/5 to-white/0 border-white/10"
        }`}
      >
        {/* Soft Glow Overlay */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isActive ? "bg-amber-500/5" : "bg-transparent"
          }`}
        />

        <div className="relative">
          {/* Title Row */}
          <div
            className={`px-6 py-5 md:px-8 md:py-6 lg:px-12 lg:py-8 
            flex items-center justify-between 
            transition-all duration-500 ${
              isActive ? "pb-3" : ""
            }`}
          >
            <h5 className="text-[clamp(1.1rem,2vw,1.35rem)] font-semibold text-white tracking-tight">
              {service.title}
            </h5>

            <span className="text-gray-500 text-sm font-medium tracking-wider">
              {String(service.id).padStart(2, "0")}
            </span>
          </div>

          {/* Expandable Content */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              isActive
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 md:px-8 lg:px-12 pb-8 space-y-6 border-t border-white/5">
                <p className="text-gray-300 leading-relaxed text-[clamp(0.95rem,1.2vw,1rem)] pt-6">
                  {service.description}
                </p>

                <button className="group/btn relative px-5 py-2.5 md:px-6 md:py-3 
                bg-gradient-to-r from-amber-500 to-amber-600 
                text-white font-medium rounded-xl overflow-hidden 
                transition-all duration-300 
                hover:shadow-lg hover:shadow-amber-500/30 w-fit">
                  <span className="relative z-10 flex items-center gap-2">
                    Schedule Expert Call
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBusinessServiceItem;