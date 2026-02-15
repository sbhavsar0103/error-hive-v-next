import WebDataExtractionCategoryButton from "./WebDataExtractionCategoryButton";
import { CategoryId } from "./WebDataExtractionTechData";

interface Category {
  id: CategoryId;
  name: string;
}

interface WebDataExtractionCategoryTabsProps {
  categories: readonly Category[];
  selectedCategory: CategoryId;
  onSelect: (id: CategoryId) => void;
}

export default function WebDataExtractionCategoryTabs({
  categories,
  selectedCategory,
  onSelect,
}: WebDataExtractionCategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <WebDataExtractionCategoryButton
          key={category.id}
          category={category}
          isActive={selectedCategory === category.id}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
