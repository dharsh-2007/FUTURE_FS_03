import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MenuItem } from "@/data/menuData";
import AddToCartButton from "./AddToCartButton";
import { Badge } from "@/components/ui/badge";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  return (
    <Card className="group border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <CardContent className="p-0">
        {/* Image */}
        <div className="aspect-[4/3] relative overflow-hidden bg-secondary">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Price Badge */}
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold shadow-lg border-0">
              ₹{item.price}
            </Badge>
          </div>
          {/* Add to Cart Button */}
          <div className="absolute bottom-3 right-3">
            <AddToCartButton
              menuItemId={item.id}
              name={item.name}
              price={item.price}
              variant="icon"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {item.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
