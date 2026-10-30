"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Check, Sparkles } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";

export default function DishCard({ dish }: { dish: MenuItem }) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      category: dish.category,
      image: dish.image,
      isVegetarian: dish.isVegetarian,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <article className="group bg-[#fffdf8] border border-[#26221d]/10 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:border-[#ad8340]/40">
      <div>
        {/* Image Container with Badges */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Special Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {dish.isChefSpecial && (
              <span className="inline-flex items-center gap-1 bg-[#16221b]/90 backdrop-blur-sm text-[#d8b877] text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-sm border border-[#ad8340]/30">
                <Sparkles className="w-2.5 h-2.5" /> Chef Special
              </span>
            )}
            {dish.isGlutenFree && (
              <span className="bg-[#efe6d2]/90 backdrop-blur-sm text-stone-800 text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-sm border border-stone-300">
                GF
              </span>
            )}
          </div>

          {/* Veg / Non-Veg Indicator */}
          <div className="absolute top-3 right-3 bg-white/95 p-1 rounded-sm shadow-sm">
            <span
              className={`block w-3.5 h-3.5 border-2 flex items-center justify-center ${
                dish.isVegetarian ? "border-emerald-700" : "border-rose-700"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  dish.isVegetarian ? "bg-emerald-700" : "bg-rose-700"
                }`}
              />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl font-semibold text-[#16221b] group-hover:text-[#ad8340] transition-colors leading-tight">
              {dish.name}
            </h3>
            <span className="font-serif text-lg font-bold text-[#ad8340] flex-shrink-0">
              ${dish.price}
            </span>
          </div>

          <p className="text-xs text-[#6c6255] line-clamp-2 leading-relaxed">
            {dish.description}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 pb-5 pt-1 flex items-center justify-between border-t border-stone-100 mt-2">
        <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
          {dish.category}
        </span>

        <button
          onClick={handleAdd}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all ${
            justAdded
              ? "bg-emerald-700 text-white"
              : "bg-[#16221b] hover:bg-[#ad8340] text-[#f7f2e7] hover:text-[#16221b]"
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Added</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>Order</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}
