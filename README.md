# 🏫 Gurukul Pre School

A premium, 3D animated preschool website built with the MERN Stack featuring Framer Motion animations, Three.js 3D elements, and Tailwind CSS styling.

## ✨ Features

- **Stunning UI** — Pastel gradients, glassmorphism, rounded cards, playful animations
- **3D Elements** — React Three Fiber powered floating toy blocks, balloons, stars
- **Smooth Animations** — Framer Motion page transitions, scroll-triggered reveals, hover effects
- **Dark/Light Mode** — Playful theme toggle with localStorage persistence
- **Responsive** — Mobile-first design for all screen sizes
- **AI Chatbot** — Friendly preschool assistant with pre-built Q&A
- **WhatsApp Integration** — Floating chat button for instant communication
- **Contact Form** — Validated form with MongoDB storage
- **SEO Optimized** — Meta tags, semantic HTML, proper heading hierarchy

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite 8, Tailwind CSS v4 |
| Animations | Framer Motion |
| 3D | Three.js, React Three Fiber, Drei |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Deployment | Vercel (frontend) + Render (backend) |

## 📁 Project Structure

```
├── frontend/          # React + Vite
│   ├── src/
│   │   ├── components/  # UI components by section
│   │   ├── pages/       # Page components
│   │   ├── three/       # Three.js 3D scenes
│   │   ├── context/     # React contexts
│   │   └── utils/       # Helpers & API
│   └── ...
├── backend/           # Node.js + Express
│   ├── models/        # MongoDB schemas
│   ├── routes/        # API routes
│   ├── controllers/   # Route handlers
│   └── ...
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB (local or Atlas)

### Backend Setup
```bash
cd backend
npm install
# Edit .env with your MongoDB URI
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## 📝 Environment Variables

### Backend (`backend/.env`)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/gurukulpreschool
FRONTEND_URL=http://localhost:5173
```

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd frontend
npx vercel
```

### Backend (Render)
- Connect your repo to Render
- Set build command: `npm install`
- Set start command: `node server.js`
- Add environment variables

## 📄 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/inquiries` | Submit contact form |
| GET | `/api/inquiries` | List all inquiries |
| POST | `/api/newsletter` | Subscribe to newsletter |
| GET | `/api/health` | Health check |

---

Made with 💖 for little learners at Gurukul Pre School