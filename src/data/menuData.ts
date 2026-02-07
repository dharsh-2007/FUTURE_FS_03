import { getMenuItemImage } from "./menuImages";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

const createMenuItem = (
  id: string,
  name: string,
  description: string,
  price: number,
  category: string
): MenuItem => ({
  id,
  name,
  description,
  price,
  category,
  image: getMenuItemImage(id),
});

export const menuCategories: MenuCategory[] = [
  {
    id: "cool-drinks",
    name: "Cool Drinks",
    icon: "🥤",
    items: [
      createMenuItem("cd1", "Coke", "Classic refreshing soda", 50, "cool-drinks"),
      createMenuItem("cd2", "Pepsi", "Popular carbonated drink", 50, "cool-drinks"),
      createMenuItem("cd3", "Lemonade", "Freshly squeezed lemonade", 60, "cool-drinks"),
      createMenuItem("cd4", "Mojito Mocktail", "Minty, refreshing mocktail", 80, "cool-drinks"),
      createMenuItem("cd5", "Iced Tea", "Chilled black tea with lemon", 70, "cool-drinks"),
      createMenuItem("cd6", "Fresh Orange Juice", "100% fresh squeezed oranges", 90, "cool-drinks"),
      createMenuItem("cd7", "Mango Lassi", "Creamy yogurt smoothie with mango", 85, "cool-drinks"),
      createMenuItem("cd8", "Virgin Pina Colada", "Tropical coconut and pineapple blend", 95, "cool-drinks"),
      createMenuItem("cd9", "Watermelon Juice", "Fresh watermelon blend with mint", 75, "cool-drinks"),
      createMenuItem("cd10", "Coconut Water", "Natural tender coconut water", 60, "cool-drinks"),
      createMenuItem("cd11", "Strawberry Shake", "Creamy strawberry milkshake", 90, "cool-drinks"),
      createMenuItem("cd12", "Buttermilk", "Spiced traditional chaas", 40, "cool-drinks"),
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: "🍰",
    items: [
      createMenuItem("ds1", "Chocolate Cake", "Rich, creamy chocolate delight", 120, "desserts"),
      createMenuItem("ds2", "Vanilla Ice Cream", "Smooth and creamy vanilla flavor", 80, "desserts"),
      createMenuItem("ds3", "Brownie", "Warm chocolate brownie with fudge", 100, "desserts"),
      createMenuItem("ds4", "Gulab Jamun", "Traditional Indian sweet", 60, "desserts"),
      createMenuItem("ds5", "Fruit Custard", "Fresh fruits in creamy custard", 90, "desserts"),
      createMenuItem("ds6", "Rasmalai", "Soft paneer dumplings in saffron milk", 80, "desserts"),
      createMenuItem("ds7", "Tiramisu", "Italian coffee-flavored layered dessert", 150, "desserts"),
      createMenuItem("ds8", "Mango Cheesecake", "Creamy cheesecake with mango topping", 140, "desserts"),
      createMenuItem("ds9", "Kheer", "Traditional rice pudding with nuts", 70, "desserts"),
      createMenuItem("ds10", "Jalebi", "Crispy spiral sweet in sugar syrup", 50, "desserts"),
      createMenuItem("ds11", "Gajar Halwa", "Warm carrot dessert with khoya", 90, "desserts"),
      createMenuItem("ds12", "Kulfi", "Traditional Indian frozen dessert", 60, "desserts"),
    ],
  },
  {
    id: "veg",
    name: "Veg Dishes",
    icon: "🥗",
    items: [
      createMenuItem("vg1", "Paneer Butter Masala", "Soft paneer in creamy tomato gravy", 160, "veg"),
      createMenuItem("vg2", "Veg Fried Rice", "Fluffy rice with vegetables", 140, "veg"),
      createMenuItem("vg3", "Dal Tadka", "Yellow lentils tempered with spices", 120, "veg"),
      createMenuItem("vg4", "Mixed Veg Curry", "Seasonal vegetables in curry", 150, "veg"),
      createMenuItem("vg5", "Veg Noodles", "Stir-fried noodles with veggies", 130, "veg"),
      createMenuItem("vg6", "Palak Paneer", "Cottage cheese in spinach gravy", 170, "veg"),
      createMenuItem("vg7", "Chole Bhature", "Spicy chickpeas with fried bread", 130, "veg"),
      createMenuItem("vg8", "Veg Biryani", "Fragrant rice with vegetables and spices", 160, "veg"),
      createMenuItem("vg9", "Aloo Gobi", "Potato and cauliflower dry curry", 120, "veg"),
      createMenuItem("vg10", "Jeera Rice", "Cumin flavored basmati rice", 100, "veg"),
      createMenuItem("vg11", "Paneer Tikka", "Grilled cottage cheese with spices", 180, "veg"),
      createMenuItem("vg12", "Malai Kofta", "Paneer dumplings in creamy gravy", 190, "veg"),
    ],
  },
  {
    id: "non-veg",
    name: "Non-Veg Dishes",
    icon: "🍗",
    items: [
      createMenuItem("nv1", "Chicken Biryani", "Spicy and aromatic chicken biryani", 180, "non-veg"),
      createMenuItem("nv2", "Tandoori Chicken", "Marinated grilled chicken", 220, "non-veg"),
      createMenuItem("nv3", "Butter Chicken", "Classic creamy tomato chicken curry", 200, "non-veg"),
      createMenuItem("nv4", "Fish Fry", "Crispy fried fish with spices", 180, "non-veg"),
      createMenuItem("nv5", "Mutton Curry", "Rich and flavorful mutton curry", 220, "non-veg"),
      createMenuItem("nv6", "Chicken Tikka", "Tender chunks of spiced chicken", 190, "non-veg"),
      createMenuItem("nv7", "Prawn Masala", "Succulent prawns in spicy gravy", 250, "non-veg"),
      createMenuItem("nv8", "Egg Curry", "Boiled eggs in rich tomato onion gravy", 140, "non-veg"),
      createMenuItem("nv9", "Chicken Korma", "Creamy mild chicken with cashews", 210, "non-veg"),
      createMenuItem("nv10", "Seekh Kebab", "Grilled minced meat skewers", 200, "non-veg"),
      createMenuItem("nv11", "Fish Curry", "Fresh fish in coconut curry", 190, "non-veg"),
      createMenuItem("nv12", "Chicken Fried Rice", "Wok-tossed rice with chicken", 160, "non-veg"),
    ],
  },
  {
    id: "tea-coffee",
    name: "Tea & Coffee",
    icon: "☕",
    items: [
      createMenuItem("tc1", "Masala Tea", "Spiced, warm, and aromatic tea", 40, "tea-coffee"),
      createMenuItem("tc2", "Ginger Tea", "Refreshing tea with ginger", 40, "tea-coffee"),
      createMenuItem("tc3", "Cappuccino", "Frothy, rich coffee", 90, "tea-coffee"),
      createMenuItem("tc4", "Latte", "Smooth milk coffee", 80, "tea-coffee"),
      createMenuItem("tc5", "Espresso", "Strong, classic espresso shot", 70, "tea-coffee"),
      createMenuItem("tc6", "Cold Coffee", "Chilled coffee with ice cream", 100, "tea-coffee"),
      createMenuItem("tc7", "Green Tea", "Healthy antioxidant-rich tea", 50, "tea-coffee"),
      createMenuItem("tc8", "Mocha", "Coffee with rich chocolate", 110, "tea-coffee"),
      createMenuItem("tc9", "Hot Chocolate", "Rich creamy cocoa with marshmallows", 90, "tea-coffee"),
      createMenuItem("tc10", "Affogato", "Espresso poured over vanilla ice cream", 120, "tea-coffee"),
      createMenuItem("tc11", "Cardamom Tea", "Aromatic tea with elaichi", 45, "tea-coffee"),
      createMenuItem("tc12", "Irish Coffee", "Coffee with cream and flavor", 130, "tea-coffee"),
    ],
  },
];

export const getAllMenuItems = (): MenuItem[] => {
  return menuCategories.flatMap((category) => category.items);
};
