import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

interface CartDrawerProps {
  children?: React.ReactNode;
}

const CartDrawer = ({ children }: CartDrawerProps) => {
  const { 
    items, 
    isAuthenticated, 
    getTotalItems, 
    getTotalPrice, 
    updateQuantity, 
    removeItem,
    getWhatsAppMessage 
  } = useCart();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children || (
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {totalItems}
              </span>
            )}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Your Cart</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <ShoppingCart className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="font-display text-xl text-foreground mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-4">
                Add some delicious items from our menu!
              </p>
              <SheetTrigger asChild>
                <Button asChild variant="outline">
                  <Link to="/menu">Browse Menu</Link>
                </Button>
              </SheetTrigger>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.menuItemId}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{item.name}</h4>
                    <p className="text-primary font-medium">₹{item.price}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.menuItemId, item.quantity - 1)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.menuItemId, item.quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => removeItem(item.menuItemId)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border pt-4 space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span className="text-primary">₹{totalPrice}</span>
            </div>

            {!isAuthenticated && (
              <p className="text-sm text-muted-foreground text-center">
                <Link to="/auth" className="text-primary hover:underline">
                  Sign in
                </Link>{" "}
                to save your cart across devices
              </p>
            )}

            <Button
              asChild
              className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
              size="lg"
            >
              <a
                href={`https://wa.me/91xxxxxxxxxx?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
