import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const colors = ['#FF6B9D', '#4ECDC4', '#FFE66D', '#A78BFA', '#FF9A56']
const letters = ['G', 'U', 'R', 'U', 'K', 'U', 'L']

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #FFF5F7, #F0E6FF, #E6F7FF)' }}
        >
          {/* Bouncing Letters */}
          <div className="flex gap-1 mb-6">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                }}
                className="text-4xl md:text-5xl font-extrabold"
                style={{
                  fontFamily: 'Nunito',
                  color: colors[i % colors.length],
                  textShadow: `0 4px 15px ${colors[i % colors.length]}40`,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[#6B5B8D] font-semibold text-sm tracking-wider"
            style={{ fontFamily: 'Quicksand' }}
          >
            PRE SCHOOL
          </motion.p>

          {/* Loading Dots */}
          <div className="flex gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="w-3 h-3 rounded-full"
                style={{ background: colors[i] }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
