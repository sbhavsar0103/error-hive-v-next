import WebDataExtractionCategoryButton from "./WebDataExtractionCategoryButton";

interface Category {
  id: number;
  name: string;
}

interface WebDataExtractionCategoryTabsProps {
  categories: Category[];
  selectedCategory: number;
  onSelect: (id: number) => void;
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
