import React from "react";
import { Check } from "lucide-react";

interface StepListItemProps {
  text: string;
}

const StepListItem: React.FC<StepListItemProps> = ({
  text,
}): React.ReactElement => {
  return (
    <li className="flex items-start gap-3 group/item">
      
      {/* Icon */}
      <div className="flex-shrink-0 mt-1">
        <div className="
          w-4 h-4 md:w-5 md:h-5 
          rounded-full 
          bg-amber-500/15 
          flex items-center justify-center 
          border border-amber-500/30 
          transition-all duration-300
          group-hover/item:bg-amber-500/30
        ">
          <Check 
            className="w-2.5 h-2.5 md:w-3 md:h-3 text-amber-500" 
            strokeWidth={3} 
          />
        </div>
      </div>

      {/* Text */}
      <span className="
        text-[clamp(0.85rem,1.5vw,0.95rem)] 
        text-gray-300 
        leading-relaxed 
        tracking-tight
      ">
        {text}
      </span>
    </li>
  );
};

export default StepListItem;