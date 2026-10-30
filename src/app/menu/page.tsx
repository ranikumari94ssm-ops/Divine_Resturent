"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Sparkles } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "@/data/menuData";
import DishCard from "@/components/DishCard";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "veg" | "gf" | "special">("all");

  const categories = [
    { id: "all", label: "All Items" },
    { id: "starters", label: "Starters" },
    { id: "mains", label: "Main Course" },
    { id: "desserts", label: "Desserts" },
    { id: "beverages", label: "Beverages" },
  ];

  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((dish: MenuItem) => {
      // Category match
      if (selectedCategory !== "all" && dish.category !== selectedCategory) {
        return false;
      }
      // Dietary match
      if (dietaryFilter === "veg" && !dish.isVegetarian) return false;
      if (dietaryFilter === "gf" && !dish.isGlutenFree) return false;
      if (dietaryFilter === "special" && !dish.isChefSpecial) return false;
      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(q);
        const matchesDesc = dish.description.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc) return false;
      }
      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <div className="bg-[#f7f2e7] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-24 bg-[#16221b] text-[#f7f2e7] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80"
            alt="Menu background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b877] font-semibold">
            Seasonal Dining
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-2 mb-4">
            Starters, mains, and everything in between
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            A tight, seasonal menu built around ingredients worth the trip. Handcrafted, plated to order, and available for table reservations or delivery.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <div className="sticky top-20 z-30 bg-[#fffdf8] border-b border-[#26221d]/10 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Navigation Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[#16221b] text-[#d8b877]"
                      : "bg-[#efe6d2]/50 text-stone-700 hover:bg-[#efe6d2]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes or ingredients..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-stone-300 rounded-sm focus:border-[#ad8340] focus:ring-0"
              />
            </div>
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-100 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-stone-500 uppercase tracking-wider text-[11px] font-medium mr-1">
                Filter:
              </span>
              <button
                onClick={() => setDietaryFilter("all")}
                className={`px-3 py-1 rounded-sm border ${
                  dietaryFilter === "all"
                    ? "bg-[#ad8340] text-white border-[#ad8340]"
                    : "border-stone-300 text-stone-600 bg-white"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter("veg")}
                className={`px-3 py-1 rounded-sm border ${
                  dietaryFilter === "veg"
                    ? "bg-emerald-700 text-white border-emerald-700"
                    : "border-stone-300 text-stone-600 bg-white"
                }`}
              >
                🌱 Vegetarian
              </button>
              <button
                onClick={() => setDietaryFilter("gf")}
                className={`px-3 py-1 rounded-sm border ${
                  dietaryFilter === "gf"
                    ? "bg-amber-700 text-white border-amber-700"
                    : "border-stone-300 text-stone-600 bg-white"
                }`}
              >
                🌾 Gluten-Free
              </button>
              <button
                onClick={() => setDietaryFilter("special")}
                className={`px-3 py-1 rounded-sm border ${
                  dietaryFilter === "special"
                    ? "bg-[#16221b] text-[#d8b877] border-[#16221b]"
                    : "border-stone-300 text-stone-600 bg-white"
                }`}
              >
                <Sparkles className="w-3 h-3 inline mr-1" />
                Chef Specials
              </button>
            </div>

            <span className="text-stone-500 font-serif italic">
              Showing {filteredDishes.length} dishes
            </span>
          </div>
        </div>
      </div>

      {/* Dish Grid Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDishes.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <h3 className="font-serif text-2xl font-bold text-stone-700">
                No matching dishes found
              </h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                We couldn&apos;t find any items matching your criteria. Try resetting your search or dietary filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setDietaryFilter("all");
                  setSearchQuery("");
                }}
                className="mt-2 bg-[#16221b] text-[#d8b877] px-5 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
