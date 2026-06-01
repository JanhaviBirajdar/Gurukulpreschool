import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import Masonry from 'react-masonry-css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Zoom } from 'yet-another-react-lightbox/plugins'
import { Camera, PlayCircle, Image as ImageIcon } from 'lucide-react'

const categories = ['All', 'Classrooms', 'Activities', 'Events', 'Celebrations']

// Dynamically import all images from each category folder
const activityImages = import.meta.glob('../assets/a/*.jpeg', { eager: true, import: 'default' })
const celebrationImages = import.meta.glob('../assets/cb/*.jpeg', { eager: true, import: 'default' })
const classroomImages = import.meta.glob('../assets/cl/*.jpeg', { eager: true, import: 'default' })
const eventImages = import.meta.glob('../assets/e/*.jpeg', { eager: true, import: 'default' })

// Helper to extract a numeric sort key from filenames like "a (1).jpeg"
const extractNumber = (path) => {
  const match = path.match(/\((\d+)\)/)
  return match ? parseInt(match[1], 10) : 0
}

// Helper to build gallery items from a glob result
const buildItems = (globResult, category, prefix) => {
  return Object.entries(globResult)
    .sort(([a], [b]) => extractNumber(a) - extractNumber(b))
    .map(([path, src], index) => ({
      id: `${prefix}-${index}`,
      src,
      category,
      title: `${category} ${index + 1}`,
      type: 'image',
    }))
}

const galleryItems = [
  ...buildItems(activityImages, 'Activities', 'a'),
  ...buildItems(celebrationImages, 'Celebrations', 'cb'),
  ...buildItems(classroomImages, 'Classrooms', 'cl'),
  ...buildItems(eventImages, 'Events', 'e'),
]
/*
const videos = [
{ id: 1, thumbnail: '', title: 'Annual Function 2023', duration: '3:45' },
{ id: 2, thumbnail: '', title: 'A Day in Nursery', duration: '2:10' },
{ id: 3, thumbnail: '', title: 'Parent Interactions', duration: '4:20' },
] 
*/

export default function GalleryPage() {
  const { isDark } = useTheme()
  const [active, setActive] = useState('All')
  const [index, setIndex] = useState(-1)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(i => i.category === active)

  // Format slides for Lightbox
  const slides = filtered.map(item => ({ src: item.src, title: item.title, description: item.category }))

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <Helmet>
        <title>Gallery | Gurukul Pre School — Classrooms, Activities &amp; Events</title>
        <meta name="description" content="Browse our gallery of joyful moments at Gurukul Pre School in Talegaon — classrooms, activities, celebrations, and events. See why 1900+ families love us." />
        <link rel="canonical" href="https://gurukulschooltalegaon.in/gallery" />
      </Helmet>
      {/* Hero Section */}
      <section className="section-padding text-center relative overflow-hidden gradient-bg">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-lg font-bold mb-8 bg-white/60 backdrop-blur-lg border border-white/40 text-text-primary dark:bg-surface-dark/60 dark:border-white/10 dark:text-text-primary-dark font-body shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
            <Camera className="w-6 h-6 text-peach fill-peach/20" /> Memories
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark tracking-tight">
            Our <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-center text-xl md:text-2xl max-w-2xl mx-auto font-body font-medium text-text-secondary dark:text-text-secondary-dark leading-relaxed">
            Beautiful glimpses of joy, laughter, and magical moments captured at Gurukul Pre School.
          </p>
        </motion.div>

        <div className="absolute top-10 left-20 w-64 h-64 bg-peach/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float dark:mix-blend-lighten" />
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-candy/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-reverse dark:mix-blend-lighten" />
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none rotate-180 -mt-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20 text-cream dark:text-cream-dark">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>

      {/* Masonry Gallery */}
      <section className="section-padding pb-20 relative">
        {/* Floating Stickers */}
        <div aria-hidden="true">
          <span className="sticker sf1 text-5xl" style={{ right: '1%', top: '5%' }}>📸</span>
          <span className="sticker sf4 text-4xl" style={{ right: '3%', top: '25%' }}>🎨</span>
          <span className="sticker sf7 text-4xl" style={{ right: '1%', top: '50%' }}>🌟</span>
          <span className="sticker sf9 text-3xl" style={{ right: '5%', top: '75%' }}>🎈</span>
          <span className="sticker sf2 text-4xl" style={{ left: '1%', top: '10%' }}>🧸</span>
          <span className="sticker sf5 text-4xl" style={{ left: '2%', top: '35%' }}>🎀</span>
          <span className="sticker sf11 text-3xl" style={{ left: '1%', top: '60%' }}>🦋</span>
          <span className="sticker sf6 text-4xl" style={{ left: '3%', top: '85%' }}>🍭</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Filters */}
          <div className="flex flex-wrap justify-center" style={{ gap: '20px', marginBottom: '60px' }}>
            {categories.map(cat => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(cat)}
                style={{ padding: '16px 36px', fontSize: '18px' }}
                className={`relative rounded-full font-bold font-body flex items-center gap-3 shadow-md border border-black/5 dark:border-white/5 bg-white dark:bg-surface-dark transition-colors duration-300 ${active === cat
                    ? 'text-white'
                    : 'text-text-secondary dark:text-text-secondary-dark hover:text-candy'
                  }`}
              >
                {/* Sliding background pill */}
                {active === cat && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-candy via-peach to-sunny shadow-lg shadow-candy/40"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    style={{ zIndex: 0 }}
                  />
                )}
                {/* Content */}
                <span className="relative z-10 flex items-center gap-3">
                  {cat === 'All' && <ImageIcon className="w-5 h-5" />}
                  {cat}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="min-h-[500px]">
            <AnimatePresence mode="popLayout">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-auto" style={{ marginLeft: '-20px' }}
                columnClassName="bg-clip-padding" columnStyle={{ paddingLeft: '20px' }}
              >
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    viewport={{ once: true, margin: '-60px' }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{
                      type: 'spring',
                      stiffness: 120,
                      damping: 18,
                      delay: Math.min(i % 8, 4) * 0.05
                    }}
                    onClick={() => setIndex(i)}
                    style={{ marginBottom: '24px' }}
                    className="rounded-3xl overflow-hidden cursor-pointer group relative shadow-md hover:shadow-2xl transition-all duration-500 border border-black/5 dark:border-white/5 bg-white dark:bg-surface-dark"
                  >
                    <img
                      src={item.src}
                      alt={`${item.title} — ${item.category} at Gurukul Pre School Talegaon`}
                      loading="lazy"
                      className="w-full h-auto block group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <div className="translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col items-center text-center">
                        <span className="inline-block px-5 py-2 bg-white/30 backdrop-blur-md border border-white/40 rounded-full text-white text-sm font-bold mb-3 font-body shadow-sm uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h3 className="text-white font-extrabold text-2xl md:text-3xl font-heading drop-shadow-md tracking-wide">{item.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Section Placeholders 
      <section className="section-padding bg-lavender/5 dark:bg-surface-dark relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary dark:text-text-primary-dark mb-6">
              Watch Us in <span className="gradient-text">Action</span> 🎥
            </h2>
            <p className="text-center text-xl md:text-2xl font-body font-medium text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto leading-relaxed">
              Experience the vibrant life at Gurukul through our video gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ y: -12 }}
                className="group cursor-pointer rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-black/5 dark:border-white/5 bg-white dark:bg-surface-dark relative flex flex-col"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(255,255,255,0.4)] border border-white/50 group-hover:border-white">
                      <PlayCircle className="w-10 h-10 fill-white/20 group-hover:fill-white/40 transition-colors" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-sm font-bold px-3 py-1.5 rounded-lg font-body shadow-sm border border-white/10">
                    {video.duration}
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-extrabold text-2xl font-heading text-text-primary dark:text-text-primary-dark group-hover:text-candy transition-colors">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* Lightbox Component */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom]}
        carousel={{ finite: false }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
      />
    </motion.div>
  )
}
