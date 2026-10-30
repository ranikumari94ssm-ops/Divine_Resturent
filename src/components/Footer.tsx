import React from "react";
import Link from "next/link";
import DivineLogo from "@/components/DivineLogo";

export default function Footer() {
  return (
    <footer className="bg-[#0f1712] text-[#f7f2e7] pt-16 pb-12 border-t border-[#ad8340]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <DivineLogo variant="horizontal" symbolSize={38} showTagline={true} />
            </Link>
            <p className="text-sm text-[#f7f2e7]/70 leading-relaxed font-light">
              A chef-driven dining room serving seasonal, ingredient-led cuisine
              in a warm, unhurried space. Sourced with integrity, plated with care.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <span className="text-xs uppercase tracking-wider text-[#ad8340]">Follow:</span>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-[#f7f2e7]/80 hover:text-[#d8b877] hover:border-[#ad8340] transition-colors">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-[#f7f2e7]/80 hover:text-[#d8b877] hover:border-[#ad8340] transition-colors">
                FB
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-[#f7f2e7]/80 hover:text-[#d8b877] hover:border-[#ad8340] transition-colors">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#d8b877] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#f7f2e7]/75">
              <li>
                <Link href="/" className="hover:text-[#d8b877] transition-colors">
                  Home &amp; Story
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#d8b877] transition-colors">
                  Full Seasonal Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#d8b877] transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-[#d8b877] transition-colors">
                  Table Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#d8b877] mb-4">
              Location &amp; Inquiries
            </h4>
            <ul className="space-y-2 text-sm text-[#f7f2e7]/75">
              <li>221 Magnolia Street</li>
              <li>Ludhiana, Punjab, India</li>
              <li className="pt-2 text-[#d8b877] font-medium">+91 98765 43210</li>
              <li>hello@divinerestaurant.example</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#d8b877] mb-4">
              Service Hours
            </h4>
            <div className="space-y-3 text-sm text-[#f7f2e7]/75">
              <div>
                <span className="block font-medium text-white/90">Monday – Friday</span>
                <span className="text-xs text-[#d8b877]">11:00 AM – 10:30 PM</span>
              </div>
              <div>
                <span className="block font-medium text-white/90">Saturday – Sunday</span>
                <span className="text-xs text-[#d8b877]">10:00 AM – 11:30 PM</span>
              </div>
              <div className="pt-2 text-xs text-[#f7f2e7]/50">
                Kitchen closes 45 minutes prior to closing time.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#f7f2e7]/50 gap-4">
          <span>&copy; {new Date().getFullYear()} Divine Restaurant. All rights reserved.</span>
          <span>Crafted for fine dining, powered by Next.js &amp; TypeScript.</span>
        </div>
      </div>
    </footer>
  );
}
