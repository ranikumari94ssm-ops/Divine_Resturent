# Divine Restaurant

A responsive, single-restaurant website built with plain HTML and CSS (with a small amount of vanilla JavaScript for the booking form). Created as a portfolio/college project.

## Description

Divine Restaurant is a fine-dining restaurant website where visitors can browse the menu, view a photo gallery of the restaurant, read about the restaurant's story, and book a table through a reservation form.

## Features

- Fully responsive layout (desktop, laptop, tablet, mobile)
- Elegant, premium restaurant-themed design with a custom color palette and typography
- Sticky navigation bar with a mobile menu (pure CSS, no JavaScript required)
- Hero section with call-to-action buttons
- About section with restaurant story and philosophy
- Featured dishes section on the home page
- Full menu page organized into Starters, Main Course, Desserts, and Beverages
- Responsive photo gallery with hover zoom and captions
- Table reservation form with client-side validation and a success message (no backend — this is a static, frontend-only project)
- Testimonials, "Why Choose Us" section, and a styled map placeholder (no external map API required)
- Semantic HTML5, accessible labels, alt text, and visible keyboard focus states

## Technologies Used

- HTML5
- CSS3 (custom properties, Flexbox, CSS Grid, media queries)
- Vanilla JavaScript (only for booking form validation and the mobile nav toggle uses a pure-CSS checkbox technique — no JS needed for the menu itself)
- Google Fonts (Cormorant Garamond, Jost) loaded via CDN
- Images loaded from Unsplash's CDN

No frameworks, build tools, or backend of any kind are used.

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero, about, featured dishes, why choose us, testimonials, call to action, contact |
| Menu | `menu.html` | Full menu across four categories |
| Gallery | `gallery.html` | Responsive photo gallery |
| Booking | `booking.html` | Table reservation form and opening hours |

## Folder Structure

```
divine-restaurant/
│
├── index.html
├── menu.html
├── gallery.html
├── booking.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
```

## How to Run

No installation, build step, or server is required.

1. Download and extract the ZIP file.
2. Open the extracted `divine-restaurant` folder.
3. Double-click `index.html` (or open it directly in your browser).
4. The website will open and work immediately — an internet connection is only needed to load the Google Fonts and Unsplash images used for styling and photography.

## Browser Compatibility

Tested and working in current versions of:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Notes

- The booking form is frontend-only. Submitting it validates the fields and shows a success message, but no reservation is actually sent or stored anywhere — there is no backend or database in this project.
- The "map" on the Contact section is a styled placeholder, not a live map, so the site does not depend on any external mapping API or key.
