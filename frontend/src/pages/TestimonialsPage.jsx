import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const testimonials = [
  { name: 'Aarti Mehta', text: 'My daughter absolutely loves going to Gurukul! The teachers are so caring and the activities are wonderful. She has grown so much in confidence.', rating: 5, avatar: '👩' },
  { name: 'Rajesh Kumar', text: 'The best preschool experience we could have asked for. The curriculum is perfectly balanced between learning and fun. Highly recommended!', rating: 5, avatar: '👨' },
  { name: 'Sneha Patel', text: 'Gurukul has been a second home for our son. The safe environment and creative approach to learning makes it stand out from others.', rating: 5, avatar: '👩' },
  { name: 'Vikram Singh', text: 'We are so impressed with how much our child has learned. The phonics program and art activities are exceptional. Thank you, Gurukul!', rating: 4, avatar: '👨' },
  { name: 'Priya Reddy', text: 'The teachers truly care about each child. My twins have flourished here with their individual attention and personalized approach.', rating: 5, avatar: '👩' },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 text-sunny">
      {[1, 2, 3, 4, 5].map(i => (
        <motion.span key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="text-lg drop-shadow-sm"
        >
          {i <= count ? '⭐' : '☆'}
        </motion.span>
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  const { isDark } = useTheme()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      {/* Header */}
      <section className="section-padding text-center gradient-bg">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-sunny/20 text-yellow-600 dark:text-sunny font-body">
            💬 Testimonials
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark">
            What <span className="gradient-text">Parents Say</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto font-body text-text-secondary dark:text-text-secondary-dark">
            Hear from our happy families about their wonderful experience at Gurukul.
          </p>
        </motion.div>
      </section>

      {/* Carousel */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="relative overflow-hidden rounded-3xl card-shadow p-8 md:p-12 bg-white dark:bg-surface-dark/60 border-2 border-lavender/15 backdrop-blur-md">
            <div className="absolute top-4 right-6 text-6xl opacity-10 text-lavender font-heading">"</div>
            <AnimatePresence mode="wait">
              <motion.div key={current}
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br from-candy/20 to-lavender/20 shadow-inner">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-heading text-text-primary dark:text-text-primary-dark">
                      {testimonials[current].name}
                    </h4>
                    <Stars count={testimonials[current].rating} />
                  </div>
                </div>
                <p className="text-base leading-relaxed italic font-body font-medium text-text-secondary dark:text-text-secondary-dark">
                  "{testimonials[current].text}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button onClick={() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-lavender/10 text-lavender hover:bg-lavender/20 dark:bg-white/10 dark:text-lavender-light dark:hover:bg-white/20 font-heading text-xl">
                ‹
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-candy scale-125' : 'bg-lavender/30 dark:bg-white/20 hover:bg-lavender/50'}`}
                  />
                ))}
              </div>
              <button onClick={() => setCurrent(c => (c + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-lavender/10 text-lavender hover:bg-lavender/20 dark:bg-white/10 dark:text-lavender-light dark:hover:bg-white/20 font-heading text-xl">
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl card-shadow bg-white dark:bg-surface-dark/50 border border-black/5 dark:border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{t.avatar}</span>
                <div>
                  <p className="font-bold text-sm font-heading text-text-primary dark:text-text-primary-dark">{t.name}</p>
                  <Stars count={t.rating} />
                </div>
              </div>
              <p className="text-sm italic leading-relaxed font-body text-text-secondary dark:text-text-secondary-dark">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
