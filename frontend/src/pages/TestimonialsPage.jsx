import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { staggerContainer, staggerItem } from '../utils/animations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'
import CountUpPkg from 'react-countup'
const CountUp = CountUpPkg.default || CountUpPkg

import { MessageCircle, Star, PlayCircle, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Aarti Mehta', child: 'Mother of Aarav', text: 'My son absolutely loves going to Gurukul! The teachers are so caring and the activities are wonderful. He has grown so much in confidence.', rating: 5 },
  { name: 'Rajesh Kumar', child: 'Father of Priya', text: 'The best preschool experience we could have asked for. The curriculum is perfectly balanced between learning and fun. Highly recommended!', rating: 5 },
  { name: 'Sneha Patel', child: 'Mother of Rohan', text: 'Gurukul has been a second home for our son. The safe environment and creative approach to learning makes it stand out from others.', rating: 5 },
  { name: 'Vikram Singh', child: 'Father of Ananya', text: 'We are so impressed with how much our child has learned. The phonics program and art activities are exceptional. Thank you, Gurukul!', rating: 4 },
  { name: 'Priya Reddy', child: 'Mother of Twins', text: 'The teachers truly care about each child. My twins have flourished here with their individual attention and personalized approach.', rating: 5 },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1 text-sunny">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className={`w-4 h-4 ${i <= count ? 'fill-sunny' : 'opacity-30'}`} />
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  const { isDark } = useTheme()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">

      <Helmet>
        <title>Testimonials | Gurukul Pre School — Happy Parent Reviews</title>
        <meta name="description" content="See what 1900+ happy parents say about Gurukul Pre School in Talegaon. 100% parent satisfaction with 7+ years of excellence in preschool education." />
        <link rel="canonical" href="https://gurukulschooltalegaon.in/testimonials" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding text-center relative overflow-hidden gradient-bg">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-lg font-bold mb-8 bg-white/60 backdrop-blur-lg border border-white/40 text-text-primary dark:bg-surface-dark/60 dark:border-white/10 dark:text-text-primary-dark font-body shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
            <MessageCircle className="w-6 h-6 text-sky fill-sky/20" /> Testimonials
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark tracking-tight">
            Happy <span className="gradient-text">Parents</span>
          </h1>
          <p className="text-center text-xl md:text-2xl max-w-2xl mx-auto font-body font-medium text-text-secondary dark:text-text-secondary-dark leading-relaxed">
            Discover why parents trust Gurukul Pre School for their child's most crucial developmental years.
          </p>
        </motion.div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-sky/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float dark:mix-blend-lighten" />
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none rotate-180 -mt-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20 text-cream dark:text-cream-dark">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>

      {/* Trust Statistics */}
      <section style={{ paddingLeft: '1.5rem' }} className="py-16 relative w-full overflow-hidden">
        <div aria-hidden="true">
          <span className="sticker sf1 text-4xl" style={{ right: '2%', top: '20%' }}>🧸</span>
          <span className="sticker sf5 text-3xl" style={{ right: '6%', top: '70%' }}>⭐</span>
          <span className="sticker sf3 text-4xl" style={{ left: '1%', top: '30%' }}>🎈</span>
          <span className="sticker sf8 text-3xl" style={{ left: '4%', top: '75%' }}>🍦</span>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full text-center">
            <div className="glass p-10 rounded-[2.5rem] border border-white/40 dark:border-white/10 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-extrabold font-heading text-candy mb-3 drop-shadow-md">
                <CountUp end={100} duration={2} enableScrollSpy scrollSpyOnce />%
              </div>
              <p className="text-base font-bold font-body text-text-secondary dark:text-text-secondary-dark uppercase tracking-widest">Parent Satisfaction</p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border border-white/40 dark:border-white/10 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-extrabold font-heading text-mint mb-3 drop-shadow-md">
                <CountUp end={1900} duration={2} enableScrollSpy scrollSpyOnce />+
              </div>
              <p className="text-base font-bold font-body text-text-secondary dark:text-text-secondary-dark uppercase tracking-widest">Happy Students</p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border border-white/40 dark:border-white/10 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-extrabold font-heading text-lavender mb-3 drop-shadow-md">
                <CountUp end={7} duration={2} enableScrollSpy scrollSpyOnce />+
              </div>
              <p className="text-base font-bold font-body text-text-secondary dark:text-text-secondary-dark uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border border-white/40 dark:border-white/10 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-extrabold font-heading text-sunny mb-3 drop-shadow-md">
                <CountUp end={50} duration={2} enableScrollSpy scrollSpyOnce />+
              </div>
              <p className="text-base font-bold font-body text-text-secondary dark:text-text-secondary-dark uppercase tracking-widest">Fun Activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="section-padding overflow-hidden relative">
        <div aria-hidden="true">
          <span className="sticker sf2 text-5xl" style={{ right: '3%', top: '15%' }}>💖</span>
          <span className="sticker sf6 text-4xl" style={{ right: '1%', top: '55%' }}>🌟</span>
          <span className="sticker sf4 text-4xl" style={{ left: '2%', top: '20%' }}>🧡</span>
          <span className="sticker sf9 text-3xl" style={{ left: '1%', top: '65%' }}>🎀</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="w-[300px] sm:w-[450px] md:w-[600px] mx-auto pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="rounded-3xl shadow-2xl h-auto">
                <div className="bg-white dark:bg-surface-dark border-2 border-lavender/10 p-10 md:p-14 relative h-full flex flex-col justify-between">
                  <Quote className="absolute top-6 right-6 w-16 h-16 text-candy/10 dark:text-candy/5 rotate-180" />

                  <div className="z-10 relative flex flex-col items-center">
                    <StarRating count={t.rating} />
                    <p className="text-center mt-8 text-xl md:text-2xl italic font-body font-medium text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="z-10 relative pt-8 border-t border-black/5 dark:border-white/5 text-center mt-8">
                    <h4 className="font-bold text-2xl font-heading text-text-primary dark:text-text-primary-dark mb-1">{t.name}</h4>
                    <p className="text-lg font-body text-candy font-bold">{t.child}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-lavender/5 to-mint/5 rounded-full filter blur-3xl z-0" />
      </section>

      {/* All Reviews Grid */}
      <section className="section-padding bg-lavender/5 dark:bg-surface-dark relative">
        <div aria-hidden="true">
          <span className="sticker sf7 text-4xl" style={{ right: '1%', top: '10%' }}>🍰</span>
          <span className="sticker sf3 text-3xl" style={{ right: '5%', top: '55%' }}>🍭</span>
          <span className="sticker sf10 text-4xl" style={{ left: '1%', top: '20%' }}>🦄</span>
          <span className="sticker sf5 text-3xl" style={{ left: '3%', top: '68%' }}>🎠</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold font-heading text-text-primary dark:text-text-primary-dark">More Love from <span className="gradient-text">Parents</span> ❤️</h2>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={staggerItem} whileHover={{ y: -8 }}
                className="p-10 md:p-12 rounded-[2.5rem] glass dark:!bg-surface-dark/90 border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                <div className="flex flex-col items-start">
                  <StarRating count={t.rating} />
                  <p className="mt-8 text-base md:text-lg leading-relaxed font-body text-text-secondary dark:text-text-secondary-dark italic font-medium">"{t.text}"</p>
                </div>
                <div className="pt-8 border-t border-black/5 dark:border-white/5 mt-8">
                  <p className="font-bold text-xl font-heading text-text-primary dark:text-text-primary-dark mb-1">{t.name}</p>
                  <p className="text-base font-body text-candy font-bold">{t.child}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
