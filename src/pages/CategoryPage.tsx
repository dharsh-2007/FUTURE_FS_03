import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MenuItemCard from "@/components/menu/MenuItemCard";
import { menuCategories } from "@/data/menuData";
import { Phone, ArrowLeft, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchQuery, setSearchQuery] = useState("");

  const category = menuCategories.find((cat) => cat.id === categoryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16 md:pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Category Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The category you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/menu">Back to Menu</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredItems = category.items.filter(
    (item) =>
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery)
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary via-background to-secondary/50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Full Menu
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="text-6xl md:text-7xl mb-4 block">
                {category.icon}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                {category.name}
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
                Explore our delicious selection of{" "}
                {category.name.toLowerCase()}
              </p>

              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={`Search ${category.name.toLowerCase()}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-12 py-6 text-base bg-card border-border rounded-full shadow-soft focus:shadow-warm transition-shadow"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Navigation Links */}
        <div className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
              {menuCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/menu/${cat.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    cat.id === categoryId
                      ? "bg-primary text-primary-foreground shadow-warm"
                      : "bg-secondary text-foreground hover:bg-primary/10"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span className="text-sm font-medium">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "item" : "items"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <MenuItemCard item={item} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  No items found
                </h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any items matching "{searchQuery}"
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
          </AnimatePresence>
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

export default CategoryPage;
