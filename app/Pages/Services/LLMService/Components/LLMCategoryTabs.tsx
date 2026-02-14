import LLMCategoryButton from "./LLMCategoryButton";

interface Category {
  id: number;
  name: string;
}

interface LLMCategoryTabsProps {
  categories: Category[];
  selectedCategory: number;
  onSelect: (id: number) => void;
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
