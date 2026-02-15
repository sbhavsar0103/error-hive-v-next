import LLMCategoryButton from "./LLMCategoryButton";
import { CategoryId } from "./LLMTechData";

interface Category {
  id: CategoryId;
  name: string;
}

interface LLMCategoryTabsProps {
  categories: readonly Category[];
  selectedCategory: CategoryId;
  onSelect: (id: CategoryId) => void;
}

export default function LLMCategoryTabs({
  categories,
  selectedCategory,
  onSelect,
}: LLMCategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <LLMCategoryButton
          key={category.id}
          category={category}
          isActive={selectedCategory === category.id}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
