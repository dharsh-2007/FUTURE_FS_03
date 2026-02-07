import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: "cool-drinks",
    name: "Cool Drinks",
    icon: "🥤",
    description: "Refreshing beverages to quench your thirst",
    count: 12,
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: "🍰",
    description: "Sweet treats to end your meal perfectly",
    count: 12,
  },
  {
    id: "veg",
    name: "Veg Dishes",
    icon: "🥗",
    description: "Fresh and flavorful vegetarian delights",
    count: 12,
  },
  {
    id: "non-veg",
    name: "Non-Veg Dishes",
    icon: "🍗",
    description: "Succulent meat dishes cooked to perfection",
    count: 12,
  },
  {
    id: "tea-coffee",
    name: "Tea & Coffee",
    icon: "☕",
    description: "Warm beverages to comfort your soul",
    count: 12,
  },
];

const MenuPreview = () => {
  return (
    <section id="menu-preview" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What We Serve
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Explore Our Menu
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            From refreshing drinks to hearty meals, discover a world of flavors
            prepared with love and care
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to={`/menu#${category.id}`} className="group block h-full">
                <Card className="h-full border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-card">
                  <CardContent className="p-6 h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 flex-grow">
                      {category.description}
                    </p>
                    <span className="text-xs text-muted-foreground mb-3">
                      {category.count} items
                    </span>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Items
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8"
          >
            <Link to="/menu">
              View Full Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
