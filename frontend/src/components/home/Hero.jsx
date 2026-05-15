import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import FloatingObjects from './FloatingObjects'
import HeroScene from '../../three/HeroScene'

export default function Hero() {
  const { isDark } = useTheme()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #1A1B2E 0%, #2D1B4E 30%, #1B2E3D 60%, #1A1B2E 100%)'
            : 'linear-gradient(135deg, #FFF5F7 0%, #F0E6FF 25%, #E6F7FF 50%, #FFF0F5 75%, #FFF5F7 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 8s ease infinite',
        }}
      />

      {/* Decorative Circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #FF6B9D, transparent)' }} />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #A78BFA, transparent)' }} />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #4ECDC4, transparent)' }} />

      <FloatingObjects />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-20">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{
                background: isDark ? 'rgba(167,139,250,0.2)' : 'rgba(167,139,250,0.15)',
                color: isDark ? '#C4B5FD' : '#7C3AED',
                fontFamily: 'Quicksand',
              }}
            >
              ✨ Where Learning Meets Joy
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: 'Nunito' }}
          >
            <span className={isDark ? 'text-white' : 'text-[#2D1B4E]'}>Welcome to</span>
            <br />
            <span className="gradient-text">Gurukul</span>{' '}
            <span className={isDark ? 'text-[#FF8FB4]' : 'text-[#FF6B9D]'}>Pre School</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8"
            style={{
              color: isDark ? '#B8A8D9' : '#6B5B8D',
              fontFamily: 'Quicksand',
              fontWeight: 500,
              lineHeight: 1.7,
            }}
          >
            Where little minds bloom with joy and wonder. A magical place of
            creative learning, warm friendships, and endless discoveries. 🌈
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Link to="/programs">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,107,157,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl text-white font-bold text-base shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #FF6B9D, #FF8FB4)',
                  fontFamily: 'Nunito',
                }}
              >
                Explore Programs 🎓
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl font-bold text-base border-2 transition-colors"
                style={{
                  borderColor: isDark ? '#A78BFA' : '#A78BFA',
                  color: isDark ? '#C4B5FD' : '#7C3AED',
                  fontFamily: 'Nunito',
                  background: isDark ? 'rgba(167,139,250,0.1)' : 'rgba(167,139,250,0.08)',
                }}
              >
                Contact Us 💌
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12"
          >
            {[
              { number: '500+', label: 'Happy Students', color: '#FF6B9D' },
              { number: '10+', label: 'Years of Joy', color: '#4ECDC4' },
              { number: '50+', label: 'Activities', color: '#A78BFA' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold" style={{ color: stat.color, fontFamily: 'Nunito' }}>
                  {stat.number}
                </p>
                <p className="text-sm mt-1" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand', fontWeight: 600 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 w-full max-w-lg lg:max-w-xl h-[350px] md:h-[450px]"
        >
          <HeroScene />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand' }}>
            Scroll to explore
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isDark ? '#B8A8D9' : '#6B5B8D'} strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
