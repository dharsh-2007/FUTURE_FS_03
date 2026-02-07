import { Button } from "@/components/ui/button";
import { Plus, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

interface AddToCartButtonProps {
  menuItemId: string;
  name: string;
  price: number;
  variant?: "default" | "icon";
}

const AddToCartButton = ({
  menuItemId,
  name,
  price,
  variant = "default",
}: AddToCartButtonProps) => {
  const { addItem, items } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const existingItem = items.find((item) => item.menuItemId === menuItemId);
  const quantity = existingItem?.quantity || 0;

  const handleAdd = async () => {
    setIsAdding(true);
    await addItem(menuItemId, name, price);
    setTimeout(() => setIsAdding(false), 500);
  };

  if (variant === "icon") {
    return (
      <Button
        size="icon"
        className={`h-9 w-9 rounded-full transition-all ${
          isAdding
            ? "bg-green-500 hover:bg-green-600"
            : "bg-primary hover:bg-primary/90"
        }`}
        onClick={handleAdd}
        disabled={isAdding}
      >
        {isAdding ? (
          <Check className="w-4 h-4 text-white" />
        ) : quantity > 0 ? (
          <span className="text-xs font-bold text-primary-foreground">{quantity}</span>
        ) : (
          <Plus className="w-4 h-4 text-primary-foreground" />
        )}
      </Button>
    );
  }

  return (
    <Button
      className={`gap-2 transition-all ${
        isAdding
          ? "bg-green-500 hover:bg-green-600"
          : "bg-primary hover:bg-primary/90"
      }`}
      onClick={handleAdd}
      disabled={isAdding}
    >
      {isAdding ? (
        <>
          <Check className="w-4 h-4" />
          Added!
        </>
      ) : quantity > 0 ? (
        <>
          <Plus className="w-4 h-4" />
          Add More ({quantity})
        </>
      ) : (
        <>
          <Plus className="w-4 h-4" />
          Add to Cart
        </>
      )}
    </Button>
  );
};

export default AddToCartButton;
