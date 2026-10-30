export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "starters" | "mains" | "desserts" | "beverages";
  image: string;
  isVegetarian: boolean;
  isGlutenFree?: boolean;
  isChefSpecial?: boolean;
  spiceLevel?: 0 | 1 | 2 | 3;
}

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: "bruschetta",
    name: "Bruschetta",
    description: "Toasted sourdough, vine-ripened tomato, fresh sweet basil, aged Modena balsamic reduction.",
    price: 8,
    category: "starters",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80",
    isVegetarian: true,
    isGlutenFree: false,
    spiceLevel: 0,
  },
  {
    id: "mushroom-soup",
    name: "Creamy Mushroom Soup",
    description: "Slow-simmered wild forest mushrooms, velvet cream, fresh thyme, served with warm garlic sourdough.",
    price: 9,
    category: "starters",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80",
    isVegetarian: true,
    isGlutenFree: false,
    spiceLevel: 0,
  },
  {
    id: "paneer-tikka",
    name: "Smoked Paneer Tikka",
    description: "Handcrafted cottage cheese marinated in Kashmiri spices and yogurt, charred in clay tandoor, served with mint chutney.",
    price: 11,
    category: "starters",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80",
    isVegetarian: true,
    isGlutenFree: true,
    isChefSpecial: true,
    spiceLevel: 2,
  },
  {
    id: "crispy-chicken",
    name: "Crispy Buttermilk Chicken",
    description: "24-hour buttermilk soaked chicken tenders, double-fried crisp coating, dusted with chili-lime sea salt.",
    price: 12,
    category: "starters",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=700&q=80",
    isVegetarian: false,
    isGlutenFree: false,
    spiceLevel: 1,
  },

  // MAINS
  {
    id: "grilled-steak",
    name: "Grilled Herb Sirloin Steak",
    description: "Prime grass-fed sirloin, rosemary compound butter, charred bone marrow jus, roasted heirloom root vegetables.",
    price: 26,
    category: "mains",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    isVegetarian: false,
    isGlutenFree: true,
    isChefSpecial: true,
    spiceLevel: 0,
  },
  {
    id: "paneer-butter-masala",
    name: "Royal Paneer Butter Masala",
    description: "Artisanal paneer cubes in a slow-reduced roasted tomato, cashew, and mace gravy, finished with farm butter and cream.",
    price: 16,
    category: "mains",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
    isVegetarian: true,
    isGlutenFree: true,
    isChefSpecial: true,
    spiceLevel: 1,
  },
  {
    id: "grilled-chicken-breast",
    name: "Herb Roast Chicken Breast",
    description: "Free-range chicken supreme, garlic-herb marinade, pan-seared skin, charred lemon, sauteed asparagus.",
    price: 19,
    category: "mains",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80",
    isVegetarian: false,
    isGlutenFree: true,
    spiceLevel: 0,
  },
  {
    id: "pasta-alfredo",
    name: "Tagliatelle Alfredo",
    description: "Hand-rolled tagliatelle pasta, 24-month aged Parmigiano Reggiano emulsion, cracked black tellicherry peppercorns.",
    price: 18,
    category: "mains",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80",
    isVegetarian: true,
    isGlutenFree: false,
    spiceLevel: 0,
  },
  {
    id: "vegetable-biryani",
    name: "Awadhi Vegetable Biryani",
    description: "Fragrant aged basmati rice layered with saffron milk, caramelized shallots, garden vegetables, sealed in earthen pot.",
    price: 17,
    category: "mains",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
    isVegetarian: true,
    isGlutenFree: true,
    spiceLevel: 2,
  },

  // DESSERTS
  {
    id: "chocolate-lava",
    name: "Belgian Chocolate Lava Cake",
    description: "Warm single-origin 70% dark Belgian chocolate cake with a molten center, paired with Madagascar vanilla bean gelato.",
    price: 9,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80",
    isVegetarian: true,
    isGlutenFree: false,
    isChefSpecial: true,
  },
  {
    id: "tiramisu",
    name: "Classic Espresso Tiramisu",
    description: "Layered savoiardi soaked in house espresso roast and amaretto, whip mascarpone sabayon, bitter cocoa dusting.",
    price: 10,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80",
    isVegetarian: true,
    isGlutenFree: false,
  },
  {
    id: "panna-cotta",
    name: "Vanilla Berry Panna Cotta",
    description: "Silk-smooth cooked cream infused with Tahitian vanilla bean, crowned with seasonal wild berry compote.",
    price: 8,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",
    isVegetarian: true,
    isGlutenFree: true,
  },

  // BEVERAGES
  {
    id: "fruit-mocktail",
    name: "Divine Passion Mocktail",
    description: "Freshly muddled passion fruit, crushed fresh mint leaves, sparkling elderflower soda, Himalayan pink rock salt rim.",
    price: 7,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=80",
    isVegetarian: true,
    isGlutenFree: true,
    isChefSpecial: true,
  },
  {
    id: "spiced-chai",
    name: "Artisan Spiced Masala Chai",
    description: "Single-estate Assam black tea, hand-crushed green cardamom, cinnamon quill, fresh ginger root, whole creamy milk.",
    price: 5,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=700&q=80",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "hibiscus-cooler",
    name: "Hibiscus Mint Cooler",
    description: "Cold-steeped organic Egyptian hibiscus flower brew, Valencia orange zest, cane syrup, sprig of fresh garden mint.",
    price: 6,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
    isVegetarian: true,
    isGlutenFree: true,
  },
];
