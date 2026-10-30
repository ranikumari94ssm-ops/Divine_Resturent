"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, Calendar } from "lucide-react";
import { useCart } from "@/context/CartContext";
import DivineLogo from "@/components/DivineLogo";

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#16221b] border-b border-[#f7f2e7]/15 text-[#f7f2e7] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Lotus Emblem */}
        <Link href="/" className="group">
          <DivineLogo variant="horizontal" symbolSize={38} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors relative py-1 ${
                  isActive
                    ? "text-[#d8b877] font-medium"
                    : "text-[#f7f2e7]/80 hover:text-[#d8b877]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ad8340]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-4">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Cart"
            className="relative p-2.5 rounded-full hover:bg-white/5 transition-colors text-[#f7f2e7] hover:text-[#d8b877]"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#6d1f27] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Book a Table CTA */}
          <Link
            href="/booking"
            className="hidden sm:inline-flex items-center gap-2 bg-[#ad8340] hover:bg-[#966f33] text-[#16221b] hover:text-white px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a Table</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-[#f7f2e7] hover:text-[#d8b877]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f1712] border-b border-[#f7f2e7]/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base tracking-wider uppercase py-2 text-[#f7f2e7]/85 hover:text-[#d8b877] border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-[#ad8340] text-[#16221b] py-3 rounded-sm text-xs uppercase tracking-widest font-semibold"
            >
              <Calendar className="w-4 h-4" />
              Book a Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
