# Divine Restaurant — Full-Stack Fine Dining Platform

A commercial-grade, full-stack fine dining restaurant web application built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## Features

- **Fine-Dining Brand Identity:** Custom luxury palette (Deep Emerald `#16221b`, Heritage Gold `#ad8340`, Velvet Wine `#6d1f27`, Antique Cream `#f7f2e7`) paired with Google Fonts (`Cormorant Garamond` display serif and `Jost` sans-serif).
- **Interactive Seasonal Menu (`/menu`):**
  - Instant client-side search across dish names and ingredient descriptions.
  - Category navigation tabs (Starters, Main Course, Desserts, Beverages).
  - Dietary filters (`🌱 Vegetarian`, `🌾 Gluten-Free`, `⭐ Chef Specials`).
  - Direct "Add to Order" action with animated confirmation.
- **Slide-out Cart & Online Ordering Drawer:**
  - Dynamic subtotal, tax computation (5%), and delivery fee calculation.
  - Order fulfillment toggle (`Dine-In`, `Pickup`, `Delivery`).
  - Contact details form and order placement workflow.
  - Order confirmation screen with unique order tracking reference (e.g. `DVR-829104`).
  - Persistent state across pages via React Context & LocalStorage.
- **Table Reservation Engine (`/booking`):**
  - Party size selection (1 to 8+ guests).
  - Date picker with past-date prevention.
  - Interactive seating time slot selector.
  - Instant reservation confirmation voucher with unique reference code (e.g. `DIV-4829`).
- **Interactive Visual Gallery (`/gallery`):**
  - Categorized frames (Ambience, Signature Plates, The Kitchen, Moments).
  - Full-screen Lightbox modal viewer with previous/next navigation and keyboard dismissal.
- **Server API Layer:**
  - `GET /api/menu` — Dynamic menu retrieval with category and query filtering.
  - `POST /api/bookings` — Reservation processing and validation.
  - `POST /api/orders` — Order intake and preparation scheduling.
- **Database-Ready Schema:**
  - Complete PostgreSQL schema configured in `prisma/schema.prisma` for Users, Tables, Bookings, Menu Categories, Menu Items, and Orders.
- **Preserved Prototype:**
  - The original static prototype is safely archived in `legacy-static/`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |
| **State Management** | React Context API with LocalStorage sync |
| **Database Blueprint** | Prisma ORM with PostgreSQL schema |
| **Deployment Target** | Vercel |

---

## Project Structure

```
divine-restaurant/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── bookings/route.ts   # POST /api/bookings
│   │   │   ├── menu/route.ts       # GET /api/menu
│   │   │   └── orders/route.ts     # POST /api/orders
│   │   ├── booking/page.tsx        # Table reservation engine
│   │   ├── gallery/page.tsx        # Gallery with Lightbox modal
│   │   ├── menu/page.tsx           # Dynamic menu with search & filters
│   │   ├── globals.css             # Tailwind theme tokens & luxury styling
│   │   ├── layout.tsx              # Root layout with fonts & CartProvider
│   │   └── page.tsx                # Landing page
│   ├── components/
│   │   ├── CartDrawer.tsx          # Slide-out interactive cart & checkout
│   │   ├── DishCard.tsx            # Dish card with veg badges & quick add
│   │   ├── Footer.tsx              # Brand footer & service hours
│   │   └── Navbar.tsx              # Sticky header with cart pill & drawer
│   ├── context/
│   │   └── CartContext.tsx         # Cart state & LocalStorage sync
│   └── data/
│       ├── galleryData.ts          # Gallery photography frames
│       └── menuData.ts             # Rich menu items with dietary metadata
├── prisma/
│   └── schema.prisma               # PostgreSQL production database schema
├── legacy-static/                  # Safely preserved original static prototype
├── .env.example                    # Environment variable guide
├── next.config.ts                  # Remote image patterns & Turbopack config
└── tsconfig.json                   # TypeScript configuration
```

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the local development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build:**
   ```bash
   npm run build
   npm run start
   ```
