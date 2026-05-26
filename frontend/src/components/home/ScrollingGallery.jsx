import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop', alt: 'Creative painting' },
  { src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=600&auto=format&fit=crop', alt: 'Building block creations' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop', alt: 'Curious reading' },
  { src: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=600&auto=format&fit=crop', alt: 'Group storytelling' },
  { src: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=600&auto=format&fit=crop', alt: 'Hands-on discovery' },
  { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop', alt: 'Pure childhood laughter' },
  { src: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop', alt: 'Outdoor active play' },
  { src: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=600&auto=format&fit=crop', alt: 'Early blackboard lessons' }
]

export default function ScrollingGallery() {
  // Duplicating list to make seamless scrolling infinite
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages]

  return (
    <section className="py-24 overflow-hidden bg-white/30 dark:bg-transparent relative">
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
            Moments of <span className="gradient-text">Joy & Learning</span>
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
      <style dangerouslySetInnerHTML={{__html: `
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
