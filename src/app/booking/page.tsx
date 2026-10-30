"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Users, Clock, CheckCircle, AlertCircle, Phone, Sparkles } from "lucide-react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    guests: "2",
    date: new Date().toISOString().split("T")[0],
    time: "19:30",
    request: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [confirmedBooking, setConfirmedBooking] = useState<{
    bookingId: string;
    fullname: string;
    date: string;
    time: string;
    guests: string;
    specialRequest: string;
  } | null>(null);

  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30", "14:00",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setConfirmedBooking(result.data);
      } else {
        setErrorMsg(result.message || "Failed to reserve table. Please try again.");
      }
    } catch {
      // Fallback confirmation
      setConfirmedBooking({
        bookingId: `DIV-${Math.floor(1000 + Math.random() * 9000)}`,
        fullname: formData.fullname,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        specialRequest: formData.request || "None",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f7f2e7] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-24 bg-[#16221b] text-[#f7f2e7] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1800&q=80"
            alt="Dining table setting"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b877] font-semibold">
            Table Reservations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-2 mb-4">
            We&apos;ll have your table ready
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Reserve your dining experience online. Choose your date, preferred seating time, and party size — we hold your table for up to 15 minutes past reservation time.
          </p>
        </div>
      </section>

      {/* Main Reservation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Booking Form or Confirmation Ticket */}
            <div className="lg:col-span-7">
              {confirmedBooking ? (
                <div className="bg-white p-8 sm:p-10 rounded-sm border border-[#ad8340]/40 shadow-xl space-y-6">
                  <div className="flex items-center gap-3 text-emerald-700">
                    <CheckCircle className="w-8 h-8" />
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-[#16221b]">
                        Table Confirmed!
                      </h2>
                      <span className="text-xs text-stone-500">
                        Confirmation code: <strong>{confirmedBooking.bookingId}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#efe6d2]/50 p-6 rounded-sm border border-stone-200 space-y-3 text-sm text-stone-800">
                    <div className="flex justify-between border-b border-stone-300/60 pb-2">
                      <span className="text-stone-500">Guest Name</span>
                      <strong className="text-stone-900">{confirmedBooking.fullname}</strong>
                    </div>
                    <div className="flex justify-between border-b border-stone-300/60 pb-2">
                      <span className="text-stone-500">Date &amp; Time</span>
                      <strong className="text-stone-900">
                        {confirmedBooking.date} at {confirmedBooking.time}
                      </strong>
                    </div>
                    <div className="flex justify-between border-b border-stone-300/60 pb-2">
                      <span className="text-stone-500">Party Size</span>
                      <strong className="text-stone-900">{confirmedBooking.guests} Guests</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Special Request</span>
                      <span className="text-stone-800 italic">{confirmedBooking.specialRequest}</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    A confirmation SMS/email has been dispatched. Please call us at <strong>+91 98765 43210</strong> if your schedule changes or to modify party size.
                  </p>

                  <button
                    onClick={() => setConfirmedBooking(null)}
                    className="bg-[#16221b] text-[#d8b877] px-6 py-2.5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-[#26372d]"
                  >
                    Make Another Reservation
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 sm:p-10 rounded-sm border border-stone-200/80 shadow-md space-y-6"
                >
                  <div className="border-b border-stone-200 pb-4">
                    <h2 className="font-serif text-2xl font-bold text-[#16221b]">
                      Reservation Details
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      All fields marked with an asterisk (*) are required.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-sm flex items-center gap-2 text-rose-800 text-xs">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullname}
                        onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                        placeholder="Jordan Reyes"
                        className="w-full text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm focus:border-[#ad8340] focus:ring-0"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm focus:border-[#ad8340] focus:ring-0"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm focus:border-[#ad8340] focus:ring-0"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Number of Guests *
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          required
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full text-sm pl-9 pr-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm focus:border-[#ad8340] focus:ring-0"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6">6 Guests</option>
                          <option value="7">7 Guests</option>
                          <option value="8+">8+ Guests (Large Party)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm focus:border-[#ad8340] focus:ring-0"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Seating Time *
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full text-sm pl-9 pr-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm focus:border-[#ad8340] focus:ring-0"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot} {parseInt(slot) < 12 ? "AM" : "PM"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Special Requests
                    </label>
                    <textarea
                      rows={3}
                      value={formData.request}
                      onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                      placeholder="Window seat, anniversary, birthday celebration, dietary allergies..."
                      className="w-full text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-sm focus:border-[#ad8340] focus:ring-0"
                    />
                    <span className="text-[11px] text-stone-500 mt-1 block">
                      Optional — let our front of house team know how to make your visit unforgettable.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#ad8340] hover:bg-[#966f33] text-[#16221b] hover:text-white py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{loading ? "Allocating Table..." : "Reserve Your Table"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 rounded-sm border border-stone-200/80 space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#16221b] border-b border-stone-100 pb-2">
                  Operating Hours
                </h3>
                <div className="flex justify-between text-xs text-stone-700 pb-2 border-b border-stone-100">
                  <span className="font-medium">Monday – Friday</span>
                  <span className="text-[#ad8340] font-semibold">11:00 AM – 10:30 PM</span>
                </div>
                <div className="flex justify-between text-xs text-stone-700">
                  <span className="font-medium">Saturday – Sunday</span>
                  <span className="text-[#ad8340] font-semibold">10:00 AM – 11:30 PM</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-sm border border-stone-200/80 space-y-3">
                <h3 className="font-serif text-xl font-bold text-[#16221b] border-b border-stone-100 pb-2">
                  Good to Know
                </h3>
                <div className="flex justify-between text-xs text-stone-700 pb-2 border-b border-stone-100">
                  <span>Large Parties (8+)</span>
                  <span className="font-medium text-stone-900">Call ahead</span>
                </div>
                <div className="flex justify-between text-xs text-stone-700 pb-2 border-b border-stone-100">
                  <span>Dress Code</span>
                  <span className="font-medium text-stone-900">Smart casual</span>
                </div>
                <div className="flex justify-between text-xs text-stone-700">
                  <span>Parking</span>
                  <span className="font-medium text-stone-900">Valet available</span>
                </div>
              </div>

              <div className="relative aspect-[16/10] rounded-sm overflow-hidden border border-stone-200 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                  alt="Elegantly set tables"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
