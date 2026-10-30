import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Phone, Mail, Clock } from "lucide-react";
import { MENU_ITEMS } from "@/data/menuData";
import DishCard from "@/components/DishCard";
import { DivineSymbol } from "@/components/DivineLogo";

export default function HomePage() {
  const featuredDishes = MENU_ITEMS.slice(0, 6);

  return (
    <div>
      {/* ============== HERO SECTION ============== */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#16221b] text-[#f7f2e7] overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80"
            alt="Divine Restaurant evening dining room atmosphere"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16221b] via-[#16221b]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Logo Symbol Emblem */}
          <div className="flex justify-center mb-5">
            <div className="p-3 rounded-full bg-white/5 border border-[#ad8340]/30 shadow-lg backdrop-blur-sm">
              <DivineSymbol size={54} />
            </div>
          </div>

          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#ad8340]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d8b877] font-medium">
              Experience the Taste &bull; Est. Fine Dining
            </span>
            <span className="w-8 h-[1px] bg-[#ad8340]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f7f2e7] max-w-4xl mx-auto leading-[1.1] mb-6">
            Where every meal becomes a{" "}
            <em className="text-[#d8b877] not-italic font-normal italic">divine</em> experience
          </h1>

          <p className="text-base sm:text-lg text-[#f7f2e7]/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Seasonal ingredients, chef-driven technique, and a room built for slow evenings — Divine Restaurant is a table worth returning to.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ad8340] hover:bg-[#966f33] text-[#16221b] hover:text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all shadow-md"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/booking"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#d8b877] text-[#d8b877] hover:bg-[#d8b877] hover:text-[#16221b] px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Table</span>
            </Link>
          </div>

          {/* Hero Meta Badges */}
          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
            <div>
              <strong className="block font-serif text-3xl font-bold text-[#d8b877]">18+</strong>
              <span className="text-xs uppercase tracking-wider text-white/60">Years of Craft</span>
            </div>
            <div>
              <strong className="block font-serif text-3xl font-bold text-[#d8b877]">32</strong>
              <span className="text-xs uppercase tracking-wider text-white/60">Signature Dishes</span>
            </div>
            <div>
              <strong className="block font-serif text-3xl font-bold text-[#d8b877]">4.9</strong>
              <span className="text-xs uppercase tracking-wider text-white/60">Guest Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== ABOUT / STORY SECTION ============== */}
      <section id="about" className="py-24 bg-[#f7f2e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Collage */}
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
                  alt="Warmly lit dining room at Divine Restaurant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-md mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=700&q=80"
                  alt="Chef plating a signature dish"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#ad8340]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#ad8340] font-semibold">
                  Our Story
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16221b] leading-tight">
                A kitchen built on <em className="text-[#6d1f27] not-italic font-normal italic">patience</em> and produce
              </h2>

              <p className="text-stone-700 leading-relaxed font-light text-base">
                Divine Restaurant began as a single dining room and a short, honest menu. Years later, the philosophy hasn&apos;t changed: source with care, cook with restraint, and let the ingredient do the talking. Every plate that leaves our kitchen is built around what&apos;s in season and what&apos;s worth waiting for.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start">
                  <span className="font-serif text-lg font-bold text-[#ad8340] bg-[#efe6d2] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    I
                  </span>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-[#16221b]">
                      Quality Ingredients
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Daily deliveries from regional growers and small-batch producers we&apos;ve worked with for years.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="font-serif text-lg font-bold text-[#ad8340] bg-[#efe6d2] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    II
                  </span>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-[#16221b]">
                      Chef-Driven Cuisine
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      A tight, changing menu shaped by our head chef rather than fleeting trend or convenience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="font-serif text-lg font-bold text-[#ad8340] bg-[#efe6d2] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    III
                  </span>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-[#16221b]">
                      Elegant Dining Atmosphere
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      A room designed for conversation — warm lighting, generous spacing between tables, unhurried service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FEATURED DISHES SECTION ============== */}
      <section className="py-24 bg-[#efe6d2]/50 border-y border-[#26221d]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-[1px] bg-[#ad8340]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#ad8340] font-semibold">
                  From the Kitchen
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16221b]">
                A few dishes guests <em className="text-[#6d1f27] not-italic font-normal italic">ask</em> for by name
              </h2>
            </div>
            <p className="text-sm text-stone-600 max-w-md font-light">
              A curated selection from our full menu — seasonal, prepared with restraint, and available for direct table ordering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border border-[#16221b] text-[#16221b] hover:bg-[#16221b] hover:text-[#d8b877] px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
            >
              <span>View Full Menu ({MENU_ITEMS.length} items)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============== WHY CHOOSE US ============== */}
      <section className="py-24 bg-[#16221b] text-[#f7f2e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#ad8340]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#d8b877] font-semibold">
                Why Guests Return
              </span>
              <span className="w-6 h-[1px] bg-[#ad8340]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f2e7]">
              The details that shape <em className="text-[#d8b877] not-italic font-normal italic">every</em> visit
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "I",
                title: "Fresh Ingredients",
                desc: "Sourced daily, never held longer than a day or two before it reaches your plate.",
              },
              {
                num: "II",
                title: "Expert Chefs",
                desc: "A kitchen team trained across classical and regional technique, led by our head chef.",
              },
              {
                num: "III",
                title: "Elegant Ambience",
                desc: "Warm lighting, comfortable spacing between tables, and a room that never feels rushed.",
              },
              {
                num: "IV",
                title: "Exceptional Service",
                desc: "A front-of-house team that remembers your name and your usual order.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-[#0f1712]/60 border border-white/10 p-6 rounded-sm space-y-3 hover:border-[#ad8340]/40 transition-colors"
              >
                <span className="font-serif text-2xl font-bold text-[#ad8340] block">
                  {item.num}
                </span>
                <h3 className="font-serif text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS SECTION ============== */}
      <section className="py-24 bg-[#f7f2e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#ad8340] font-semibold">
              Guest Notes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16221b] mt-2">
              What people say after the <em className="text-[#6d1f27] not-italic font-normal italic">last</em> course
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Best paneer butter masala I've had outside my grandmother's kitchen. The room is beautiful too — quiet enough to actually talk.",
                author: "Ritika Sharma",
                role: "Regular Guest",
              },
              {
                quote:
                  "We booked for an anniversary dinner and the staff quietly made it feel special without being over the top. The lava cake alone is worth the visit.",
                author: "Daniel Osei",
                role: "First-time Visitor",
              },
              {
                quote:
                  "Consistent, honestly priced, and the menu changes just enough to keep it interesting. Our go-to for client dinners.",
                author: "Meera Kapoor",
                role: "Local Business Owner",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-sm border border-stone-200/80 shadow-sm flex flex-col justify-between"
              >
                <p className="text-stone-700 italic text-sm leading-relaxed mb-6 font-light">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div>
                  <strong className="block text-sm font-semibold text-[#16221b]">
                    {review.author}
                  </strong>
                  <span className="text-xs text-[#ad8340]">{review.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CTA BANNER ============== */}
      <section className="py-20 bg-[#6d1f27] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Your table is one click away
          </h2>
          <p className="text-white/80 text-sm max-w-lg mx-auto mb-8 font-light">
            Reserve a spot for tonight or plan ahead for a milestone celebration — we&apos;ll have it ready for you.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-[#d8b877] text-[#16221b] hover:bg-white px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
          </Link>
        </div>
      </section>

      {/* ============== CONTACT & LOCATION ============== */}
      <section id="contact" className="py-24 bg-[#efe6d2]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#ad8340] font-semibold">
              Find Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16221b] mt-2">
              Come see us in <em className="text-[#6d1f27] not-italic font-normal italic">person</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Details */}
            <div className="bg-white p-8 rounded-sm border border-stone-200/80 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#ad8340] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Address
                  </span>
                  <span className="text-sm font-medium text-stone-800">
                    221 Magnolia Street, Ludhiana, Punjab, India
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#ad8340] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Phone
                  </span>
                  <span className="text-sm font-medium text-stone-800">
                    +91 98765 43210
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#ad8340] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Email
                  </span>
                  <span className="text-sm font-medium text-stone-800">
                    hello@divinerestaurant.example
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#ad8340] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Operating Hours
                  </span>
                  <span className="text-sm font-medium text-stone-800 block">
                    Mon–Fri: 11:00 AM – 10:30 PM
                  </span>
                  <span className="text-sm font-medium text-stone-800 block">
                    Sat–Sun: 10:00 AM – 11:30 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Location Card */}
            <div className="relative rounded-sm overflow-hidden min-h-[300px] border border-stone-300 bg-[#16221b] flex flex-col items-center justify-center p-8 text-center text-[#f7f2e7]">
              <div className="w-14 h-14 rounded-full bg-[#ad8340]/20 border border-[#ad8340] flex items-center justify-center text-[#d8b877] mb-4">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Divine Restaurant
              </h3>
              <p className="text-xs text-white/70 max-w-xs mb-6">
                221 Magnolia Street, Ludhiana, Punjab
              </p>
              <a
                href="https://maps.google.com/?q=Ludhiana+Punjab+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ad8340] hover:bg-[#966f33] text-[#16221b] hover:text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
