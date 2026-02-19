import { motion } from "framer-motion";
import React from "react";
import StepListItem from "./StepListItem";

interface StepCardProps {
  number: number;
  title: string;
  items: string[];
  delay?: number;
}

const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  items,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="
        group relative 
        bg-gradient-to-br from-white/5 to-white/[0.02] 
        backdrop-blur-md 
        rounded-2xl 
        p-6 md:p-8
        border border-white/10 
        transition-all duration-500 
        hover:border-amber-500/30 
        hover:shadow-lg hover:shadow-amber-500/10
      "
    >
      {/* Hover Glow Layer */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 transition-all duration-500" />

      <div className="relative space-y-4 md:space-y-5">

        {/* Step Badge */}
        <span className="
          text-[10px] md:text-xs 
          font-semibold 
          text-amber-500 
          px-3 py-1 
          rounded-full 
          bg-amber-500/10 
          border border-amber-500/20 
          inline-block
          tracking-wide
        ">
          Step {number}
        </span>

        {/* Title */}
        <h3 className="
          text-[clamp(1.1rem,1.8vw,1.5rem)]
          font-semibold 
          text-white 
          leading-snug 
          tracking-tight
        ">
          {title}
        </h3>

        {/* Bullet Items */}
        <ul className="space-y-2 md:space-y-3">
          {items.map((item, index) => (
            <StepListItem key={index} text={item} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default StepCard;