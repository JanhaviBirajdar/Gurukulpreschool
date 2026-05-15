# Gurukul Pre School — Premium 3D Animated Preschool Website

A full MERN stack preschool website with Framer Motion animations, Three.js 3D elements, Tailwind CSS styling, and a playful child-friendly UI.

## User Review Required

> [!IMPORTANT]
> **Tech Stack Confirmation**: The plan uses React (Vite) for frontend and Node.js/Express/MongoDB for backend. Tailwind CSS v3 will be used. Please confirm this is acceptable.

> [!IMPORTANT]
> **Google Maps**: A Google Maps API key will be needed for the embedded map. For now, we'll use a placeholder iframe embed. You can add your API key later.

> [!IMPORTANT]
> **WhatsApp Number**: We'll use a placeholder WhatsApp number. You'll need to replace it with the actual school number.

> [!WARNING]
> **MongoDB**: The backend requires a running MongoDB instance (local or Atlas). We'll use environment variables for the connection string. You'll need to provide your MongoDB URI for production.

## Open Questions

1. **Do you have a logo image** for Gurukul Pre School, or should we create a text-based logo?
2. **What WhatsApp number** should the floating button link to?
3. **Do you have a MongoDB Atlas URI**, or should we set up for local MongoDB?
4. **Do you have specific gallery images**, or should we use placeholder images?
5. **Google Maps**: Do you have a Google Maps API key, or should we use a basic iframe embed?

---

## Proposed Changes

### Project Structure

```
d:\Gurukulpreschool\
├── frontend/                    # React + Vite
│   ├── public/
│   │   └── assets/             # Static assets (images, icons)
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/         # Navbar, Footer, Layout
│   │   │   ├── home/           # Hero, FloatingObjects, Features
│   │   │   ├── about/          # Timeline, TeacherCards, Counters
│   │   │   ├── programs/       # ProgramCard, ProgramGrid
│   │   │   ├── gallery/        # GalleryGrid, Lightbox
│   │   │   ├── testimonials/   # TestimonialCarousel, ReviewCard
│   │   │   ├── contact/        # ContactForm, MapEmbed
│   │   │   ├── ui/             # Reusable UI (Button, Card, etc.)
│   │   │   └── special/        # WhatsApp, Chatbot, CursorEffects
│   │   ├── three/              # Three.js / R3F scenes
│   │   ├── hooks/              # Custom hooks
│   │   ├── context/            # Theme context (dark/light)
│   │   ├── pages/              # Page components
│   │   ├── styles/             # Global CSS
│   │   ├── utils/              # Helpers, API calls
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── package.json
│
├── backend/                     # Node.js + Express
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── models/
│   │   ├── Inquiry.js          # Contact form schema
│   │   └── Newsletter.js       # Newsletter subscription schema
│   ├── routes/
│   │   ├── inquiry.js          # POST /api/inquiries
│   │   └── newsletter.js       # POST /api/newsletter
│   ├── controllers/
│   │   ├── inquiryController.js
│   │   └── newsletterController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

---

### 1. Backend (Node.js + Express + MongoDB)

#### [NEW] [package.json](file:///d:/Gurukulpreschool/backend/package.json)
- Express, Mongoose, CORS, dotenv, express-validator dependencies

#### [NEW] [server.js](file:///d:/Gurukulpreschool/backend/server.js)
- Express server setup on port 5000
- CORS configuration for frontend origin
- JSON body parsing
- Route mounting
- Error handling middleware

#### [NEW] [db.js](file:///d:/Gurukulpreschool/backend/config/db.js)
- MongoDB connection using Mongoose
- Connection string from environment variables

#### [NEW] [Inquiry.js](file:///d:/Gurukulpreschool/backend/models/Inquiry.js)
- Schema: `{ name, phone, email, message, createdAt }`
- Validation rules

#### [NEW] [Newsletter.js](file:///d:/Gurukulpreschool/backend/models/Newsletter.js)
- Schema: `{ email, subscribedAt }`
- Unique email constraint

#### [NEW] [inquiryController.js](file:///d:/Gurukulpreschool/backend/controllers/inquiryController.js)
- `createInquiry` — validate and store contact form data
- `getInquiries` — retrieve all inquiries (admin use)

#### [NEW] [newsletterController.js](file:///d:/Gurukulpreschool/backend/controllers/newsletterController.js)
- `subscribe` — store newsletter email

#### [NEW] [inquiry.js](file:///d:/Gurukulpreschool/backend/routes/inquiry.js)
- POST `/api/inquiries` — create inquiry
- GET `/api/inquiries` — list inquiries

#### [NEW] [newsletter.js](file:///d:/Gurukulpreschool/backend/routes/newsletter.js)
- POST `/api/newsletter` — subscribe

#### [NEW] [errorHandler.js](file:///d:/Gurukulpreschool/backend/middleware/errorHandler.js)
- Centralized error handling middleware

#### [NEW] [.env](file:///d:/Gurukulpreschool/backend/.env)
- `MONGO_URI`, `PORT`, `FRONTEND_URL`

---

### 2. Frontend — Foundation & Config

#### [NEW] Vite + React project via `npm create vite`
- React + JavaScript template
- Tailwind CSS v3 setup
- Framer Motion, React Router DOM, Three.js, React Three Fiber, Drei

#### [NEW] [tailwind.config.js](file:///d:/Gurukulpreschool/frontend/tailwind.config.js)
- Custom pastel color palette (candy pink, sky blue, sunny yellow, mint green, lavender, peach)
- Custom fonts (Nunito for headings, Quicksand for body — both Google Fonts)
- Extended animations (float, bounce-slow, wiggle, sparkle)
- Border radius extensions for extra-rounded elements
- Dark mode: class-based toggle

#### [NEW] [index.css](file:///d:/Gurukulpreschool/frontend/src/styles/index.css)
- Tailwind directives
- Google Fonts import
- Global smooth scrolling
- Custom cursor styles
- Glassmorphism utility classes
- Wave/cloud background patterns
- Custom scrollbar styling

---

### 3. Frontend — Layout Components

#### [NEW] [Navbar.jsx](file:///d:/Gurukulpreschool/frontend/src/components/layout/Navbar.jsx)
- Sticky/transparent navbar with blur backdrop
- Logo + navigation links (Home, About, Programs, Gallery, Testimonials, Contact)
- Animated hamburger menu for mobile
- Dark/Light mode toggle (sun/moon icon)
- Background music toggle
- Framer Motion entrance animation + scroll-based background change
- Mobile drawer with staggered link animations

#### [NEW] [Footer.jsx](file:///d:/Gurukulpreschool/frontend/src/components/layout/Footer.jsx)
- SVG wave animation at top
- 4-column layout: Logo/About, Quick Links, Programs, Contact Info
- Social media icons (Instagram, Facebook, YouTube, Twitter) with hover animations
- Newsletter subscription input + submit
- Copyright with current year
- Pastel gradient background

#### [NEW] [Layout.jsx](file:///d:/Gurukulpreschool/frontend/src/components/layout/Layout.jsx)
- Wraps Navbar + page content + Footer
- Page transition animations via Framer Motion `AnimatePresence`

#### [NEW] [LoadingScreen.jsx](file:///d:/Gurukulpreschool/frontend/src/components/layout/LoadingScreen.jsx)
- Cute animated loading screen with bouncing alphabet blocks
- Shows on initial page load
- Smooth fade-out transition

---

### 4. Frontend — Home Page

#### [NEW] [HomePage.jsx](file:///d:/Gurukulpreschool/frontend/src/pages/HomePage.jsx)
- Composes all home sections

#### [NEW] [Hero.jsx](file:///d:/Gurukulpreschool/frontend/src/components/home/Hero.jsx)
- Full-screen hero with pastel gradient background
- "Welcome to Gurukul Pre School" heading with typewriter/fade animation
- Tagline: "Where Little Minds Bloom with Joy & Wonder"
- Two CTA buttons: "Explore Programs" (primary), "Contact Us" (secondary)
- Floating animated objects (clouds, butterflies, stars, balloons)
- 3D scene embedded via React Three Fiber (cute school building or ABC blocks)

#### [NEW] [FloatingObjects.jsx](file:///d:/Gurukulpreschool/frontend/src/components/home/FloatingObjects.jsx)
- SVG/CSS animated floating elements
- Clouds, stars, balloons, butterflies, alphabet letters
- Randomized positions, sizes, and animation delays
- Parallax effect on mouse movement

#### [NEW] [Features.jsx](file:///d:/Gurukulpreschool/frontend/src/components/home/Features.jsx)
- Why Choose Gurukul? section
- 4-6 feature cards with icons (Safe Environment, Creative Learning, Qualified Teachers, etc.)
- Staggered scroll-triggered animations
- Glassmorphism card style

#### [NEW] [HeroScene.jsx](file:///d:/Gurukulpreschool/frontend/src/three/HeroScene.jsx)
- React Three Fiber canvas
- Subtle 3D elements: floating toy blocks, spinning star, gentle lighting
- Low-poly cute style
- Responsive sizing

---

### 5. Frontend — About Us

#### [NEW] [AboutPage.jsx](file:///d:/Gurukulpreschool/frontend/src/pages/AboutPage.jsx)

#### [NEW] [AboutStory.jsx](file:///d:/Gurukulpreschool/frontend/src/components/about/AboutStory.jsx)
- School's story/history
- Mission & vision in cute card layout
- Framer Motion fade-in animations

#### [NEW] [Timeline.jsx](file:///d:/Gurukulpreschool/frontend/src/components/about/Timeline.jsx)
- Animated vertical timeline of school milestones
- Each node animates in on scroll
- Cute icons for each milestone

#### [NEW] [TeacherCards.jsx](file:///d:/Gurukulpreschool/frontend/src/components/about/TeacherCards.jsx)
- Grid of teacher cards
- Hover: card lifts, shows bio
- Cute avatar style placeholders
- Staggered entrance animation

#### [NEW] [AnimatedCounters.jsx](file:///d:/Gurukulpreschool/frontend/src/components/about/AnimatedCounters.jsx)
- Counters for: Students (500+), Classrooms (20+), Activities (50+), Years (10+)
- Count-up animation triggered on scroll
- Cute icons above each counter

---

### 6. Frontend — Programs

#### [NEW] [ProgramsPage.jsx](file:///d:/Gurukulpreschool/frontend/src/pages/ProgramsPage.jsx)

#### [NEW] [ProgramCard.jsx](file:///d:/Gurukulpreschool/frontend/src/components/programs/ProgramCard.jsx)
- Card with 3D icon (emoji or illustrated)
- Program name, age group, short description
- Hover: glow border, scale up, icon bounces
- Glassmorphism background
- Framer Motion whileHover/whileTap

#### [NEW] [ProgramGrid.jsx](file:///d:/Gurukulpreschool/frontend/src/components/programs/ProgramGrid.jsx)
- Grid layout (2 cols desktop, 1 col mobile)
- Programs: Play Group (1.5-2.5 yrs), Nursery (2.5-3.5 yrs), Junior KG (3.5-4.5 yrs), Senior KG (4.5-5.5 yrs)
- Staggered entrance animations

---

### 7. Frontend — Gallery

#### [NEW] [GalleryPage.jsx](file:///d:/Gurukulpreschool/frontend/src/pages/GalleryPage.jsx)

#### [NEW] [GalleryGrid.jsx](file:///d:/Gurukulpreschool/frontend/src/components/gallery/GalleryGrid.jsx)
- Masonry-style grid layout
- Category filter tabs (All, Classrooms, Activities, Events, Celebrations)
- Animated filtering with layout animations
- Staggered image reveal on scroll

#### [NEW] [Lightbox.jsx](file:///d:/Gurukulpreschool/frontend/src/components/gallery/Lightbox.jsx)
- Full-screen image preview on click
- Framer Motion scale + fade animation
- Close on backdrop click or ESC
- Navigation arrows

---

### 8. Frontend — Testimonials

#### [NEW] [TestimonialsPage.jsx](file:///d:/Gurukulpreschool/frontend/src/pages/TestimonialsPage.jsx)

#### [NEW] [TestimonialCarousel.jsx](file:///d:/Gurukulpreschool/frontend/src/components/testimonials/TestimonialCarousel.jsx)
- Auto-sliding carousel (5s interval)
- Manual navigation dots + arrows
- Fade/slide transition between cards
- Pause on hover

#### [NEW] [ReviewCard.jsx](file:///d:/Gurukulpreschool/frontend/src/components/testimonials/ReviewCard.jsx)
- Parent name, avatar, review text
- Animated star rating (1-5 stars fill in)
- Cute quote icon
- Soft shadow and rounded corners

---

### 9. Frontend — Contact Us

#### [NEW] [ContactPage.jsx](file:///d:/Gurukulpreschool/frontend/src/pages/ContactPage.jsx)

#### [NEW] [ContactForm.jsx](file:///d:/Gurukulpreschool/frontend/src/components/contact/ContactForm.jsx)
- Fields: Name, Phone, Email, Message
- Client-side validation (required fields, email format, phone format)
- Submit sends POST to `/api/inquiries`
- Animated success notification (confetti or checkmark)
- Loading state on submit button
- Framer Motion field entrance animations

#### [NEW] [ContactInfo.jsx](file:///d:/Gurukulpreschool/frontend/src/components/contact/ContactInfo.jsx)
- School address, phone, email, timings
- Cute icons for each info item
- Animated entrance

#### [NEW] [MapEmbed.jsx](file:///d:/Gurukulpreschool/frontend/src/components/contact/MapEmbed.jsx)
- Google Maps iframe embed
- Responsive container
- Rounded corners with shadow

---

### 10. Frontend — Special Features

#### [NEW] [WhatsAppButton.jsx](file:///d:/Gurukulpreschool/frontend/src/components/special/WhatsAppButton.jsx)
- Fixed bottom-right position
- WhatsApp green with cute rounded design
- Bounce animation loop
- Opens `wa.me/` link on click
- Tooltip on hover

#### [NEW] [Chatbot.jsx](file:///d:/Gurukulpreschool/frontend/src/components/special/Chatbot.jsx)
- Fixed bottom-right (above WhatsApp)
- Cute robot icon toggle button
- Expandable chat popup with animation
- Pre-built Q&A responses (programs, timings, admission, fees)
- Friendly preschool assistant UI
- Typing indicator animation

#### [NEW] [CursorEffects.jsx](file:///d:/Gurukulpreschool/frontend/src/components/special/CursorEffects.jsx)
- Custom cursor with trailing sparkle/star particles
- Desktop only (hidden on touch devices)

#### [NEW] [ScrollToTop.jsx](file:///d:/Gurukulpreschool/frontend/src/components/special/ScrollToTop.jsx)
- Appears after scrolling down
- Smooth scroll to top
- Cute arrow-up icon with bounce

---

### 11. Frontend — Context & Hooks

#### [NEW] [ThemeContext.jsx](file:///d:/Gurukulpreschool/frontend/src/context/ThemeContext.jsx)
- Dark/light mode state management
- Persists preference in localStorage
- Provides toggle function

#### [NEW] [useScrollAnimation.js](file:///d:/Gurukulpreschool/frontend/src/hooks/useScrollAnimation.js)
- Custom hook for scroll-triggered animations using Intersection Observer

#### [NEW] [useCountUp.js](file:///d:/Gurukulpreschool/frontend/src/hooks/useCountUp.js)
- Count-up animation hook for counter section

---

### 12. Frontend — App & Routing

#### [NEW] [App.jsx](file:///d:/Gurukulpreschool/frontend/src/App.jsx)
- React Router setup with routes for all pages
- AnimatePresence for page transitions
- ThemeProvider wrapper
- Loading screen on initial load
- Cursor effects component
- WhatsApp + Chatbot floating components

#### [NEW] [main.jsx](file:///d:/Gurukulpreschool/frontend/src/main.jsx)
- React DOM render with StrictMode
- Import global styles

---

### 13. Frontend — Utilities

#### [NEW] [api.js](file:///d:/Gurukulpreschool/frontend/src/utils/api.js)
- Axios/fetch wrapper
- Base URL from environment variable
- `submitInquiry(data)` function
- `subscribeNewsletter(email)` function

#### [NEW] [animations.js](file:///d:/Gurukulpreschool/frontend/src/utils/animations.js)
- Reusable Framer Motion variants
- fadeIn, slideUp, slideLeft, slideRight, staggerContainer, scaleIn, floatAnimation

---

## Design System

### Color Palette

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| Primary | `#FF6B9D` (candy pink) | `#FF8FB4` | CTAs, headings |
| Secondary | `#4ECDC4` (mint teal) | `#6FE4DB` | Accents, links |
| Accent 1 | `#FFE66D` (sunny yellow) | `#FFD93D` | Highlights, badges |
| Accent 2 | `#A78BFA` (lavender) | `#C4B5FD` | Secondary actions |
| Accent 3 | `#FF9A56` (peach) | `#FFB17A` | Warm accents |
| Background | `#FFF5F7` (cream pink) | `#1A1B2E` | Page background |
| Surface | `#FFFFFF` | `#252640` | Cards, modals |
| Text Primary | `#2D1B4E` | `#F1E8FF` | Body text |
| Text Secondary | `#6B5B8D` | `#B8A8D9` | Muted text |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 (Hero) | Nunito | 800 | 4rem (desktop) / 2.5rem (mobile) |
| H2 (Section) | Nunito | 700 | 2.5rem / 1.75rem |
| H3 (Card title) | Nunito | 600 | 1.5rem / 1.25rem |
| Body | Quicksand | 500 | 1rem |
| Small | Quicksand | 400 | 0.875rem |

### Animation Tokens

| Name | Duration | Easing |
|------|----------|--------|
| Fast | 200ms | ease-out |
| Medium | 400ms | ease-in-out |
| Slow | 600ms | ease-in-out |
| Float loop | 3s | ease-in-out (infinite) |
| Bounce | 500ms | cubic-bezier(0.68, -0.55, 0.265, 1.55) |

---

## Verification Plan

### Automated Tests

1. **Frontend build**: `cd frontend && npm run build` — ensure no build errors
2. **Backend start**: `cd backend && node server.js` — verify server starts without errors
3. **API test**: Use browser to POST to `/api/inquiries` and `/api/newsletter`
4. **Lint**: `npm run lint` in frontend

### Manual Verification (Browser)

1. **Responsive**: Test at 375px (mobile), 768px (tablet), 1440px (desktop)
2. **Animations**: Verify Framer Motion animations on scroll, hover, and page transitions
3. **Dark/Light mode**: Toggle and verify all sections render correctly
4. **Contact form**: Submit form and verify data reaches backend
5. **Navigation**: Test all links and mobile menu
6. **WhatsApp button**: Verify it opens WhatsApp
7. **Chatbot**: Open/close and test responses
8. **Gallery lightbox**: Click images and verify lightbox
9. **3D scene**: Verify Three.js renders on hero section

### Deployment

- **Frontend**: Deploy to Vercel with `vercel` CLI
- **Backend**: Deploy to Render with Docker or native Node.js
- **MongoDB**: Use MongoDB Atlas for production database
