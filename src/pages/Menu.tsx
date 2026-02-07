import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MenuSearch from "@/components/menu/MenuSearch";
import CategoryNav from "@/components/menu/CategoryNav";
import MenuCategory from "@/components/menu/MenuCategory";
import { menuCategories, getAllMenuItems } from "@/data/menuData";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const location = useLocation();

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const categoryId = location.hash.replace("#", "");
      const element = document.getElementById(categoryId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveCategory(categoryId);
        }, 100);
      }
    }
  }, [location.hash]);

  // Update active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuCategories.map((cat) => ({
        id: cat.id,
        element: document.getElementById(cat.id),
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveCategory(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const allItems = getAllMenuItems();
  const hasResults = normalizedQuery
    ? allItems.some(
        (item) =>
          item.name.toLowerCase().includes(normalizedQuery) ||
          item.description.toLowerCase().includes(normalizedQuery) ||
          item.category.toLowerCase().includes(normalizedQuery)
      )
    : true;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-secondary via-background to-secondary/50 py-12 md:py-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-8 left-[10%] text-8xl">🍽️</div>
            <div className="absolute top-16 right-[15%] text-6xl">☕</div>
            <div className="absolute bottom-8 left-[30%] text-7xl">🥗</div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              Our Menu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8"
            >
              Discover our carefully curated selection of dishes, drinks, and
              desserts — each prepared with love and the finest ingredients
            </motion.p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MenuSearch
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </motion.div>

            {/* Search results count */}
            <AnimatePresence>
              {normalizedQuery && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-muted-foreground text-sm mt-4"
                >
                  {hasResults
                    ? `Showing results for "${searchQuery.trim()}"`
                    : `No results for "${searchQuery.trim()}"`}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Category Navigation */}
        <CategoryNav
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />

        {/* Menu Content */}
        <div className="container mx-auto px-4 py-8">
          {hasResults ? (
            menuCategories.map((category) => (
              <MenuCategory
                key={category.id}
                category={category}
                searchQuery={searchQuery}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                No items found
              </h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any menu items matching "{searchQuery}"
              </p>
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Clear Search
              </Button>
            </motion.div>
          )}
        </div>

        {/* Floating WhatsApp Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full shadow-warm px-6"
          >
            <a
              href="https://wa.me/91xxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">Order on WhatsApp</span>
            </a>
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
