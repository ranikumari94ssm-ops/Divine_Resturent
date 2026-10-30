"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/galleryData";

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const currentIndex = activeItem
    ? filteredItems.findIndex((item) => item.id === activeItem.id)
    : -1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setActiveItem(filteredItems[currentIndex - 1]);
    } else {
      setActiveItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < filteredItems.length - 1) {
      setActiveItem(filteredItems[currentIndex + 1]);
    } else {
      setActiveItem(filteredItems[0]);
    }
  };

  return (
    <div className="bg-[#f7f2e7] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-24 bg-[#16221b] text-[#f7f2e7] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=80"
            alt="Gallery background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b877] font-semibold">
            A Look Inside
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-2 mb-4">
            The room, the kitchen, the dishes
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            A visual tour of Divine Restaurant. Click on any photograph to explore in high resolution.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Frames" },
              { id: "ambience", label: "Ambience" },
              { id: "dishes", label: "Signature Plates" },
              { id: "kitchen", label: "The Kitchen" },
              { id: "moments", label: "Moments" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold transition-all ${
                  filter === tab.id
                    ? "bg-[#ad8340] text-[#16221b]"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`relative group rounded-sm overflow-hidden bg-stone-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${
                  item.spanClass || ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Hover Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[#d8b877]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/80 mt-1 font-light">
                        {item.caption}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveItem(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-50 bg-white/10 rounded-full"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 z-50 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 z-50 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="font-serif text-2xl font-bold text-[#d8b877]">
                {activeItem.title}
              </h3>
              <p className="text-xs text-white/70 mt-1 max-w-md mx-auto">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
