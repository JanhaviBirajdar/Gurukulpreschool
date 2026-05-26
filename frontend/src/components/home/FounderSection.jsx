import { motion } from 'framer-motion'
import { Sparkles, Heart, Star } from 'lucide-react'

export default function FounderSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-transparent via-lavender/5 to-transparent dark:via-lavender/2">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 dark:opacity-10 mix-blend-multiply blur-3xl bg-candy animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 dark:opacity-8 mix-blend-multiply blur-3xl bg-sky animate-float-reverse" />
      
      {/* Small floating sparkles/stars */}
      <div className="absolute top-1/4 right-1/4 opacity-30 animate-pulse">
        <Sparkles className="w-8 h-8 text-sunny" />
      </div>
      <div className="absolute bottom-1/4 left-1/5 opacity-40 animate-pulse delay-700">
        <Star className="w-6 h-6 text-pink-400 fill-pink-100" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Side: Founder Photo Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 w-full max-w-md lg:max-w-none relative flex justify-center"
          >
            {/* Soft decorative background frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-candy via-lavender to-sky rounded-[2.5rem] opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
            
            <div className="relative rounded-[2.5rem] overflow-hidden p-3 bg-white/40 dark:bg-surface-dark/40 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Arti Prakash Parekh"
                className="w-full h-[400px] md:h-[450px] object-cover rounded-[2rem] shadow-inner"
              />
              
              {/* Premium Floating Badge */}
              <div className="absolute bottom-8 right-8 px-6 py-3 bg-white/90 dark:bg-surface-dark/95 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-candy/15 flex items-center justify-center text-candy font-bold">
                  🎓
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary dark:text-text-primary-dark">Founded in</p>
                  <p className="text-xs font-semibold text-candy font-body">2019 • Talegaon</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Emotional Content Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex-1 text-center lg:text-left flex flex-col justify-center"
          >
            {/* Category tag label */}
            <span className="inline-flex self-center lg:self-start items-center gap-2.5 px-5 py-2 rounded-full text-sm font-bold mb-6 bg-lavender/10 dark:bg-lavender/20 text-lavender-dark dark:text-lavender-light font-body border border-lavender/20 shadow-sm">
              ✨ Welcome Message
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 font-heading text-text-primary dark:text-text-primary-dark leading-tight tracking-tight">
              Meet Our{' '}
              <span className="gradient-text">Founder & Principal</span>
            </h2>

            <div className="space-y-6 text-text-secondary dark:text-text-secondary-dark text-lg md:text-xl font-body leading-relaxed font-medium">
              <p className="relative">
                <span className="absolute -top-6 -left-6 text-6xl text-candy/10 font-serif">“</span>
                Every child deserves love, confidence, creativity, and values along with education. At Gurukul, we nurture their unique potential with infinite care, warmth, and <span className="text-candy font-bold">Sanskar (संस्कार)</span>.
              </p>
              <p>
                We believe that early childhood is not about pressure; it is about building curiosity, exploration, and beautiful childhood memories. Our dedicated educators create a home away from home where your little ones can bloom into confident, compassionate, and bright individuals.
              </p>
            </div>

            {/* Signature Area */}
            <div className="mt-10 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h4 className="font-extrabold text-2xl font-heading text-text-primary dark:text-text-primary-dark">Arti Prakash Parekh</h4>
                <p className="text-sm font-semibold text-candy font-body mt-1">Founder & Principal • Gurukul Pre School</p>
              </div>
              <div className="font-serif italic text-3xl font-medium text-lavender drop-shadow-sm select-none tracking-wide">
                Arti Parekh
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
