import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface CartItem {
  id: string;
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isLoading: boolean;
  isAuthenticated: boolean;
  userId: string | null;
  addItem: (menuItemId: string, name: string, price: number) => Promise<void>;
  removeItem: (menuItemId: string) => Promise<void>;
  updateQuantity: (menuItemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getWhatsAppMessage: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "liora-cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const { toast } = useToast();

  const isAuthenticated = !!userId;

  // Load cart from localStorage for guests
  const loadLocalCart = (): CartItem[] => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  // Save cart to localStorage
  const saveLocalCart = (cartItems: CartItem[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
  };

  // Load cart from database
  const loadDatabaseCart = async (uid: string) => {
    try {
      const { data, error } = await supabase
        .from("cart_items")
        .select("*")
        .eq("user_id", uid);

      if (error) throw error;

      return (data || []).map((item) => ({
        id: item.id,
        menuItemId: item.menu_item_id,
        name: item.menu_item_name,
        price: Number(item.menu_item_price),
        quantity: item.quantity,
      }));
    } catch (error) {
      console.error("Error loading cart:", error);
      return [];
    }
  };

  // Sync local cart to database when user logs in
  const syncLocalCartToDatabase = async (uid: string, localItems: CartItem[]) => {
    for (const item of localItems) {
      try {
        await supabase.from("cart_items").upsert(
          {
            user_id: uid,
            menu_item_id: item.menuItemId,
            menu_item_name: item.name,
            menu_item_price: item.price,
            quantity: item.quantity,
          },
          { onConflict: "user_id,menu_item_id" }
        );
      } catch (error) {
        console.error("Error syncing item:", error);
      }
    }
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  // Auth state listener
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const newUserId = session?.user?.id ?? null;
        setUserId(newUserId);

        if (newUserId) {
          const localItems = loadLocalCart();
          if (localItems.length > 0) {
            await syncLocalCartToDatabase(newUserId, localItems);
          }
          const dbItems = await loadDatabaseCart(newUserId);
          setItems(dbItems);
        } else {
          setItems(loadLocalCart());
        }
        setIsLoading(false);
      }
    );

    // Initial load
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const uid = session?.user?.id ?? null;
      setUserId(uid);

      if (uid) {
        const dbItems = await loadDatabaseCart(uid);
        setItems(dbItems);
      } else {
        setItems(loadLocalCart());
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const addItem = async (menuItemId: string, name: string, price: number) => {
    const existingItem = items.find((item) => item.menuItemId === menuItemId);

    if (existingItem) {
      await updateQuantity(menuItemId, existingItem.quantity + 1);
      return;
    }

    const newItem: CartItem = {
      id: crypto.randomUUID(),
      menuItemId,
      name,
      price,
      quantity: 1,
    };

    if (isAuthenticated && userId) {
      try {
        const { data, error } = await supabase
          .from("cart_items")
          .insert({
            user_id: userId,
            menu_item_id: menuItemId,
            menu_item_name: name,
            menu_item_price: price,
            quantity: 1,
          })
          .select()
          .single();

        if (error) throw error;
        newItem.id = data.id;
      } catch (error) {
        console.error("Error adding item:", error);
        toast({
          title: "Error",
          description: "Failed to add item to cart",
          variant: "destructive",
        });
        return;
      }
    }

    const newItems = [...items, newItem];
    setItems(newItems);
    if (!isAuthenticated) saveLocalCart(newItems);

    toast({
      title: "Added to cart",
      description: `${name} added to your cart`,
    });
  };

  const removeItem = async (menuItemId: string) => {
    if (isAuthenticated && userId) {
      try {
        const { error } = await supabase
          .from("cart_items")
          .delete()
          .eq("user_id", userId)
          .eq("menu_item_id", menuItemId);

        if (error) throw error;
      } catch (error) {
        console.error("Error removing item:", error);
        return;
      }
    }

    const newItems = items.filter((item) => item.menuItemId !== menuItemId);
    setItems(newItems);
    if (!isAuthenticated) saveLocalCart(newItems);
  };

  const updateQuantity = async (menuItemId: string, quantity: number) => {
    if (quantity <= 0) {
      await removeItem(menuItemId);
      return;
    }

    if (isAuthenticated && userId) {
      try {
        const { error } = await supabase
          .from("cart_items")
          .update({ quantity })
          .eq("user_id", userId)
          .eq("menu_item_id", menuItemId);

        if (error) throw error;
      } catch (error) {
        console.error("Error updating quantity:", error);
        return;
      }
    }

    const newItems = items.map((item) =>
      item.menuItemId === menuItemId ? { ...item, quantity } : item
    );
    setItems(newItems);
    if (!isAuthenticated) saveLocalCart(newItems);
  };

  const clearCart = async () => {
    if (isAuthenticated && userId) {
      try {
        const { error } = await supabase
          .from("cart_items")
          .delete()
          .eq("user_id", userId);

        if (error) throw error;
      } catch (error) {
        console.error("Error clearing cart:", error);
        return;
      }
    }

    setItems([]);
    if (!isAuthenticated) localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const getTotalItems = () => items.reduce((sum, item) => sum + item.quantity, 0);
  
  const getTotalPrice = () =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getWhatsAppMessage = () => {
    if (items.length === 0) return "";

    const itemsList = items
      .map((item) => `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}`)
      .join("\n");

    return encodeURIComponent(
      `🍽️ *Order from Liora*\n\n${itemsList}\n\n*Total: ₹${getTotalPrice()}*\n\nPlease confirm my order!`
    );
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isLoading,
        isAuthenticated,
        userId,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        getWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
