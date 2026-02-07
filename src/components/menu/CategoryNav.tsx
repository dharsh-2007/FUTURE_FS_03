import { cn } from "@/lib/utils";
import { menuCategories } from "@/data/menuData";
import { Link } from "react-router-dom";

interface CategoryNavProps {
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
  showLinks?: boolean;
}

const CategoryNav = ({ activeCategory, onCategoryClick, showLinks = false }: CategoryNavProps) => {
  return (
    <nav className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {menuCategories.map((category) => 
            showLinks ? (
              <Link
                key={category.id}
                to={`/menu/${category.id}`}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-warm"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                )}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </Link>
            ) : (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-warm"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                )}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
