import { LucideIcon } from "lucide-react";

interface LLMService {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface LLMServiceItemProps {
  service: LLMService;
  isSelected: boolean;
  onClick: () => void;
}

export default function LLMServiceItem({
  service,
  isSelected,
  onClick,
}: LLMServiceItemProps) {
  const IconComponent = service.icon;

  return (
    <button
      onClick={onClick}
      className={`
        group relative w-full text-left px-6 py-4 rounded-2xl
        transition-all duration-300
        overflow-hidden
        ${
          isSelected
            ? "bg-gradient-to-r from-amber-500/20 to-amber-500/10 border border-amber-500/30"
            : "bg-white/[0.04] hover:bg-white/[0.08] border border-transparent"
        }
      `}
    >
      {/* Left Animated Indicator */}
      <span
        className={`
          absolute left-0 top-0 h-full w-1 rounded-r-full
          transition-all duration-300
          ${isSelected ? "bg-amber-500" : "bg-transparent"}
        `}
      />

      <div className="flex items-center gap-3 relative z-10">
        <IconComponent
          className={`
            w-5 h-5 flex-shrink-0 transition-colors duration-300
            ${isSelected ? "text-amber-500" : "text-amber-400"}
          `}
        />

        <span
          className={`
            font-medium text-base transition-colors duration-300
            ${isSelected ? "text-white" : "text-gray-300"}
          `}
        >
          {service.title}
        </span>
      </div>
    </button>
  );
}
