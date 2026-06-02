import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import FloatingObjects from './FloatingObjects'
import HeroScene from '../../three/HeroScene'

export default function Hero() {
  const { isDark } = useTheme()

  return (
    <section style={{ paddingBottom: '1rem', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '4rem' }} className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-12 pb-20 lg:pt-0 lg:pb-0">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Decorative Circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen blur-3xl bg-candy" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-15 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen blur-3xl bg-lavender" />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full opacity-10 dark:opacity-15 mix-blend-multiply dark:mix-blend-screen blur-3xl bg-mint" />

      <FloatingObjects />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mt-4 lg:mt-0">
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
              className="inline-block px-4 py-1.5 rounded-full text-base font-semibold mb-6 bg-lavender/15 text-lavender dark:bg-lavender/20 dark:text-lavender-light font-body"
            >
              ✨ Where Learning Meets Joy
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 font-heading"
          >
            <span className="text-text-primary dark:text-text-primary-dark">Welcome to</span>
            <br />
            <span className="text-blue-600">Gurukul</span>{' '}
            <span className="text-blue-600">Pre School</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 lg:text-left mb-8 font-body font-medium leading-relaxed text-text-secondary dark:text-text-secondary-dark"
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ padding: '16px 36px', fontSize: '18px' }}
                className="rounded-full font-bold transition-all duration-300 font-body flex items-center gap-3 shadow-md bg-gradient-to-r from-candy via-peach to-sunny text-white shadow-candy/40 border-transparent hover:shadow-lg hover:-translate-y-1"
              >
                Explore Programs 🎓
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ padding: '16px 36px', fontSize: '18px' }}
                className="rounded-full font-bold transition-all duration-300 font-body flex items-center gap-3 shadow-md bg-white dark:bg-surface-dark text-text-secondary dark:text-text-secondary-dark hover:shadow-lg hover:-translate-y-1 hover:text-candy border border-black/5 dark:border-white/5"
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
            className="flex flex-wrap gap-12 justify-center lg:justify-start mt-12"
          >
            {[
              { number: '1900+', label: 'Happy Students', colorClass: 'text-candy' },
              { number: '7+', label: 'Years of Joy', colorClass: 'text-mint' },
              { number: '50+', label: 'Activities', colorClass: 'text-lavender' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`text-2xl md:text-3xl font-extrabold font-heading ${stat.colorClass}`}>
                  {stat.number}
                </p>
                <p className="text-sm mt-1 font-body font-semibold text-text-secondary dark:text-text-secondary-dark">
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
          <span className="text-sm font-medium font-body text-text-secondary dark:text-text-secondary-dark">
            Scroll to explore
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary dark:text-text-secondary-dark">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
