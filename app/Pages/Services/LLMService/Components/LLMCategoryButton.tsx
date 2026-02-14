import type { ReactElement } from "react";

interface Category {
  id: number;
  name: string;
}

interface CategoryButtonProps {
  category: Category;
  isActive: boolean;
  onClick: (id: number) => void;
}

export default function CategoryButton({
  category,
  isActive,
  onClick,
}: CategoryButtonProps): ReactElement {
  return (
    <button
      onClick={() => onClick(category.id)}
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
        isActive
          ? "bg-amber-500 text-[#060010] shadow-lg shadow-amber-500/30"
          : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
      }`}
    >
      {category.name}
    </button>
  );
}
