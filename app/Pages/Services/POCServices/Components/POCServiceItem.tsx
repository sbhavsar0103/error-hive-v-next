import { ArrowRight } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
}

interface POCServiceItemProps {
  service: Service;
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
}

export default function POCServiceItem({
  service,
  hoveredId,
  setHoveredId,
}: POCServiceItemProps) {
  const isHovered = hoveredId === service.id;

  return (
    <div
      onMouseEnter={() => setHoveredId(service.id)}
      onMouseLeave={() => setHoveredId(null)}
      className="group relative transition-all duration-500"
    >
      <div
        className={`relative overflow-hidden rounded-xl sm:rounded-2xl border transition-all duration-500 ${
          isHovered
            ? "bg-gradient-to-br from-white/10 to-white/5 border-amber-500/40 shadow-lg shadow-amber-500/10"
            : "bg-gradient-to-br from-white/5 to-white/0 border-white/10"
        }`}
      >
        {/* Hover overlay */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isHovered ? "bg-amber-500/5" : "bg-transparent"
          }`}
        />

        <div className="relative">
          {/* Title Row */}
          <div
            className={`px-4 py-4 sm:px-6 sm:py-5 lg:px-12 lg:py-8 flex items-center justify-between cursor-pointer transition-all duration-500 ${
              isHovered ? "pb-0" : ""
            }`}
          >
            <h5 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
              {service.title}
            </h5>

            <span className="text-gray-500 text-xs sm:text-sm font-semibold tracking-wider">
              {String(service.id).padStart(2, "0")}
            </span>
          </div>

          {/* Expanded Description */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isHovered ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 sm:px-6 lg:px-12 pb-5 sm:pb-6 space-y-4 sm:space-y-6 border-t border-white/5">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-4 sm:pt-6">
                {service.description}
              </p>

              <button className="group/btn relative px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 w-fit">
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Expert Call
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}