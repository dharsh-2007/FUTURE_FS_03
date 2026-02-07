// Menu item images
import lemonade from "@/assets/menu/lemonade.jpg";
import chocolateCake from "@/assets/menu/chocolate-cake.jpg";
import paneerButterMasala from "@/assets/menu/paneer-butter-masala.jpg";
import chickenBiryani from "@/assets/menu/chicken-biryani.jpg";
import masalaTea from "@/assets/menu/masala-tea.jpg";
import mangoLassi from "@/assets/menu/mango-lassi.jpg";
import gulabJamun from "@/assets/menu/gulab-jamun.jpg";
import tandooriChicken from "@/assets/menu/tandoori-chicken.jpg";
import cappuccino from "@/assets/menu/cappuccino.jpg";
import butterChicken from "@/assets/menu/butter-chicken.jpg";
import brownie from "@/assets/menu/brownie.jpg";
import vegFriedRice from "@/assets/menu/veg-fried-rice.jpg";
import mojito from "@/assets/menu/mojito.jpg";
import dalTadka from "@/assets/menu/dal-tadka.jpg";
import vanillaIceCream from "@/assets/menu/vanilla-ice-cream.jpg";
import fishFry from "@/assets/menu/fish-fry.jpg";
import pinaColada from "@/assets/menu/pina-colada.jpg";
import orangeJuice from "@/assets/menu/orange-juice.jpg";
import icedTea from "@/assets/menu/iced-tea.jpg";
import tiramisu from "@/assets/menu/tiramisu.jpg";
import mangoCheesecake from "@/assets/menu/mango-cheesecake.jpg";
import fruitCustard from "@/assets/menu/fruit-custard.jpg";
import rasmalai from "@/assets/menu/rasmalai.jpg";
import palakPaneer from "@/assets/menu/palak-paneer.jpg";
import choleBhature from "@/assets/menu/chole-bhature.jpg";
import vegBiryani from "@/assets/menu/veg-biryani.jpg";
import mixedVegCurry from "@/assets/menu/mixed-veg-curry.jpg";
import vegNoodles from "@/assets/menu/veg-noodles.jpg";
import muttonCurry from "@/assets/menu/mutton-curry.jpg";
import chickenTikka from "@/assets/menu/chicken-tikka.jpg";
import prawnMasala from "@/assets/menu/prawn-masala.jpg";
import eggCurry from "@/assets/menu/egg-curry.jpg";
import gingerTea from "@/assets/menu/ginger-tea.jpg";
import espresso from "@/assets/menu/espresso.jpg";
import coldCoffee from "@/assets/menu/cold-coffee.jpg";
import greenTea from "@/assets/menu/green-tea.jpg";
import mocha from "@/assets/menu/mocha.jpg";
import latte from "@/assets/menu/latte.jpg";
import watermelonJuice from "@/assets/menu/watermelon-juice.jpg";
import coconutWater from "@/assets/menu/coconut-water.jpg";
import strawberryShake from "@/assets/menu/strawberry-shake.jpg";
import kheer from "@/assets/menu/kheer.jpg";
import jalebi from "@/assets/menu/jalebi.jpg";
import alooGobi from "@/assets/menu/aloo-gobi.jpg";
import jeeraRice from "@/assets/menu/jeera-rice.jpg";
import chickenKorma from "@/assets/menu/chicken-korma.jpg";
import seekhKebab from "@/assets/menu/seekh-kebab.jpg";
import hotChocolate from "@/assets/menu/hot-chocolate.jpg";
import coke from "@/assets/menu/coke.jpg";
import pepsi from "@/assets/menu/pepsi.jpg";
import buttermilk from "@/assets/menu/buttermilk.jpg";
import gajarHalwa from "@/assets/menu/gajar-halwa.jpg";
import kulfi from "@/assets/menu/kulfi.jpg";
import paneerTikka from "@/assets/menu/paneer-tikka.jpg";
import malaiKofta from "@/assets/menu/malai-kofta.jpg";
import fishCurry from "@/assets/menu/fish-curry.jpg";
import chickenFriedRice from "@/assets/menu/chicken-fried-rice.jpg";
import affogato from "@/assets/menu/affogato.jpg";
import cardamomTea from "@/assets/menu/cardamom-tea.jpg";
import irishCoffee from "@/assets/menu/irish-coffee.jpg";

export const menuImages: Record<string, string> = {
  // Cool Drinks
  cd1: coke,
  cd2: pepsi,
  cd3: lemonade,
  cd4: mojito,
  cd5: icedTea,
  cd6: orangeJuice,
  cd7: mangoLassi,
  cd8: pinaColada,
  cd9: watermelonJuice,
  cd10: coconutWater,
  cd11: strawberryShake,
  cd12: buttermilk,
  
  // Desserts
  ds1: chocolateCake,
  ds2: vanillaIceCream,
  ds3: brownie,
  ds4: gulabJamun,
  ds5: fruitCustard,
  ds6: rasmalai,
  ds7: tiramisu,
  ds8: mangoCheesecake,
  ds9: kheer,
  ds10: jalebi,
  ds11: gajarHalwa,
  ds12: kulfi,
  
  // Veg Dishes
  vg1: paneerButterMasala,
  vg2: vegFriedRice,
  vg3: dalTadka,
  vg4: mixedVegCurry,
  vg5: vegNoodles,
  vg6: palakPaneer,
  vg7: choleBhature,
  vg8: vegBiryani,
  vg9: alooGobi,
  vg10: jeeraRice,
  vg11: paneerTikka,
  vg12: malaiKofta,
  
  // Non-Veg Dishes
  nv1: chickenBiryani,
  nv2: tandooriChicken,
  nv3: butterChicken,
  nv4: fishFry,
  nv5: muttonCurry,
  nv6: chickenTikka,
  nv7: prawnMasala,
  nv8: eggCurry,
  nv9: chickenKorma,
  nv10: seekhKebab,
  nv11: fishCurry,
  nv12: chickenFriedRice,
  
  // Tea & Coffee
  tc1: masalaTea,
  tc2: gingerTea,
  tc3: cappuccino,
  tc4: latte,
  tc5: espresso,
  tc6: coldCoffee,
  tc7: greenTea,
  tc8: mocha,
  tc9: hotChocolate,
  tc10: affogato,
  tc11: cardamomTea,
  tc12: irishCoffee,
};

export const getMenuItemImage = (itemId: string): string => {
  return menuImages[itemId] || "/placeholder.svg";
};
