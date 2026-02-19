"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { CategoryId } from "./WebDataExtractionTechData";

interface Category {
  id: CategoryId;
  name: string;
}

interface CategoryButtonProps {
  category: Category;
  isActive: boolean;
  onClick: (id: CategoryId) => void;
}

export default function CategoryButton({
  category,
  isActive,
  onClick,
}: CategoryButtonProps): ReactElement {
  return (
    <button
      onClick={() => onClick(category.id)}
      className="
        relative px-5 sm:px-6 
        py-2.5 sm:py-3
        rounded-full
        font-semibold
        text-[clamp(0.8rem,1vw,0.95rem)]
        transition-colors duration-300
        focus:outline-none
      "
    >
      {/* Sliding Active Background */}
      {isActive && (
        <motion.span
          layoutId="activeCategory"
          className="
            absolute inset-0 
            rounded-full 
            bg-amber-500
            shadow-lg shadow-amber-500/30
          "
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      {/* Label */}
      <motion.span
        whileTap={{ scale: 0.95 }}
        className={`
          relative z-10
          ${
            isActive
              ? "text-[#060010]"
              : "text-white/80 hover:text-white"
          }
        `}
      >
        {category.name}
      </motion.span>
    </button>
  );
}