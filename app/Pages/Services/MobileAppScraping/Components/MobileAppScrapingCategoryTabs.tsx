import MobileAppScrapingCategoryButton from "./MobileAppScrapingCategoryButton";

interface Category {
  id: number;
  name: string;
}

interface MobileAppScrapingCategoryTabsProps {
  categories: Category[];
  selectedCategory: number;
  onSelect: (id: number) => void;
}

export default function MobileAppScrapingCategoryTabs({
  categories,
  selectedCategory,
  onSelect,
}: MobileAppScrapingCategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <MobileAppScrapingCategoryButton
          key={category.id}
          category={category}
          isActive={selectedCategory === category.id}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
