import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { staggerContainer, staggerItem } from '../utils/animations'

const categories = ['All', 'Classrooms', 'Activities', 'Events', 'Celebrations']

const galleryItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop', category: 'Activities', title: 'Art & Craft Time' },
  { id: 2, src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=400&fit=crop', category: 'Classrooms', title: 'Colorful Classroom' },
  { id: 3, src: 'https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=400&h=350&fit=crop', category: 'Events', title: 'Annual Day' },
  { id: 4, src: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop', category: 'Activities', title: 'Story Time' },
  { id: 5, src: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=400&fit=crop', category: 'Celebrations', title: 'Birthday Fun' },
  { id: 6, src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=350&fit=crop', category: 'Classrooms', title: 'Learning Space' },
  { id: 7, src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=300&fit=crop', category: 'Events', title: 'Sports Day' },
  { id: 8, src: 'https://images.unsplash.com/photo-1571210862729-78a33e9ed6a3?w=400&h=400&fit=crop', category: 'Celebrations', title: 'Festival Joy' },
]

export default function GalleryPage() {
  const { isDark } = useTheme()
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(i => i.category === active)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      {/* Header */}
      <section className="section-padding text-center gradient-bg">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-peach/15 text-peach dark:bg-peach/20 dark:text-peach-light font-body">
            📸 Memories
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark">
            Our <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto font-body text-text-secondary dark:text-text-secondary-dark">
            Glimpses of joy, laughter, and magical moments at Gurukul Pre School.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="section-padding pb-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <motion.button key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all font-body ${
                active === cat
                  ? 'bg-gradient-to-r from-candy to-lavender text-white shadow-lg shadow-candy/30'
                  : 'bg-white dark:bg-surface-dark text-text-secondary dark:text-text-secondary-dark hover:shadow-md border border-black/5 dark:border-white/5'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                onClick={() => setLightbox(item)}
                className="rounded-2xl overflow-hidden cursor-pointer group relative card-shadow">
                <div className="aspect-square overflow-hidden">
                  <img src={item.src} alt={item.title} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-sm font-heading">{item.title}</p>
                    <p className="text-white/70 text-xs font-body">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
              <img src={lightbox.src.replace('w=400', 'w=800').replace('h=300', 'h=600').replace('h=400', 'h=600').replace('h=350', 'h=600')}
                alt={lightbox.title} className="w-full rounded-2xl shadow-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
                <p className="text-white font-bold text-lg font-heading">{lightbox.title}</p>
              </div>
              <button onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition">
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
