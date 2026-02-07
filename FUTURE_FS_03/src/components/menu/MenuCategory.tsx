import { motion } from "framer-motion";
import { MenuCategory as MenuCategoryType } from "@/data/menuData";
import MenuItemCard from "./MenuItemCard";

interface MenuCategoryProps {
  category: MenuCategoryType;
  searchQuery: string;
}

const MenuCategory = ({ category, searchQuery }: MenuCategoryProps) => {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredItems = category.items.filter(
    (item) =>
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery)
  );

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <section id={category.id} className="py-8 scroll-mt-36">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-6"
      >
        <span className="text-4xl">{category.icon}</span>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {category.name}
          </h2>
          <p className="text-muted-foreground text-sm">
            {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "item" : "items"}
          </p>
        </div>
      </motion.div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <MenuItemCard item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
