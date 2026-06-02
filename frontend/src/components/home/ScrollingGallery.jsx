import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

// Dynamically import all images from the folder
const rawImages = import.meta.glob('../../assets/s/*.jpeg', { eager: true, import: 'default' })

// Helper to extract a numeric sort key from filenames like "s (1).jpeg"
const extractNumber = (path) => {
  const match = path.match(/\((\d+)\)/)
  return match ? parseInt(match[1], 10) : 0
}

// Build the array
const galleryImages = Object.entries(rawImages)
  .sort(([a], [b]) => extractNumber(a) - extractNumber(b))
  .map(([path, src], index) => ({
    src,
    alt: `Gurukul preschool moments ${index + 1}`
  }))

export default function ScrollingGallery() {
  // Duplicating list to make seamless scrolling infinite
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages]

  return (
    <section style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }} className="pt-24 pb-64 md:pt-32 md:pb-48 overflow-hidden bg-white/30 dark:bg-transparent relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-10 blur-[90px] bg-mint pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-base font-bold mb-6 bg-white/50 backdrop-blur-md border border-black/5 dark:bg-surface-dark/50 dark:border-white/10 text-text-primary dark:text-text-primary-dark font-body shadow-sm">
            🎨 Sweet Memories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark tracking-tight">
            Moments of <span className="text-blue-600">Joy & Learning</span>
          </h2>
          <p className="text-center text-lg md:text-xl max-w-3xl font-body text-text-secondary dark:text-text-secondary-dark font-medium leading-relaxed">
            Take a beautiful peek into the daily adventures, bright smiles, and rich developmental experiences at Gurukul.
          </p>
        </motion.div>
      </div>

      {/* Marquee Scroller Wrapper */}
      <div className="relative w-full overflow-hidden select-none py-4">
        {/* Left and Right beautiful gradient masking shadows */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-cream via-cream/50 to-transparent dark:from-cream-dark dark:via-cream-dark/50 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-cream via-cream/50 to-transparent dark:from-cream-dark dark:via-cream-dark/50 z-10 pointer-events-none" />

        {/* Rolling Container using infinite marquee CSS */}
        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedImages.map((image, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[360px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-white/40 dark:border-white/5 bg-white/50 dark:bg-surface-dark/50 backdrop-blur-sm group cursor-pointer relative"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Soft overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-heading font-extrabold text-lg sm:text-xl tracking-wide">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind marquee animation injected as inline style to make sure it works seamlessly */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333% - 16px)); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
      `}} />
    </section>
  )
}
