export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: "ambience" | "dishes" | "kitchen" | "moments";
  src: string;
  spanClass?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Restaurant Facade",
    caption: "Warm evening lights, welcoming grand entrance",
    category: "ambience",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "g2",
    title: "The Dining Room",
    caption: "Generously spaced seating crafted for unhurried evenings",
    category: "ambience",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    spanClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "g3",
    title: "Candlelit Setting",
    caption: "Intimate table setting set for a quiet evening",
    category: "moments",
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "g4",
    title: "The Chef at Work",
    caption: "Final artistic plating touches before the dish leaves the pass",
    category: "kitchen",
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "g5",
    title: "Grilled Herb Sirloin",
    caption: "Signature dry-aged steak with roasted garden roots",
    category: "dishes",
    src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "g6",
    title: "Tagliatelle Alfredo",
    caption: "Freshly made pasta folded with 24-month Parmigiano",
    category: "dishes",
    src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "g7",
    title: "Molten Lava Dessert",
    caption: "Belgian chocolate cake paired with vanilla bean gelato",
    category: "dishes",
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "g8",
    title: "Sommelier Selection",
    caption: "Curated vintage pairings from renowned regional estates",
    category: "ambience",
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    spanClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "g9",
    title: "Artisanal Mocktail",
    caption: "Seasonal fruits, sparkling botanicals, crushed mint",
    category: "dishes",
    src: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "g10",
    title: "Special Celebrations",
    caption: "Unforgettable anniversaries and milestone dinners",
    category: "moments",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80",
  },
];
