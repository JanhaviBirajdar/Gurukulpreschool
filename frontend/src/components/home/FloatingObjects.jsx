import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const floatingItems = [
  { emoji: '☁️', size: 'text-4xl', top: '10%', left: '5%', duration: 4, delay: 0 },
  { emoji: '☁️', size: 'text-3xl', top: '15%', right: '10%', duration: 5, delay: 1 },
  { emoji: '🦋', size: 'text-2xl', top: '25%', left: '15%', duration: 3, delay: 0.5 },
  { emoji: '⭐', size: 'text-xl', top: '20%', right: '20%', duration: 3.5, delay: 0.3 },
  { emoji: '🎈', size: 'text-3xl', top: '40%', left: '3%', duration: 4.5, delay: 0.8 },
  { emoji: '🎈', size: 'text-2xl', top: '35%', right: '5%', duration: 4, delay: 1.2 },
  { emoji: '✨', size: 'text-lg', top: '50%', left: '10%', duration: 2.5, delay: 0.2 },
  { emoji: '🌟', size: 'text-2xl', top: '60%', right: '15%', duration: 3, delay: 0.7 },
  { emoji: 'A', size: 'text-2xl', top: '70%', left: '8%', duration: 4, delay: 1.5, isLetter: true },
  { emoji: 'B', size: 'text-2xl', top: '65%', right: '8%', duration: 3.5, delay: 0.4, isLetter: true },
  { emoji: 'C', size: 'text-xl', top: '75%', left: '20%', duration: 4.5, delay: 1, isLetter: true },
  { emoji: '📚', size: 'text-xl', top: '55%', right: '25%', duration: 3, delay: 0.6 },
  { emoji: '✏️', size: 'text-xl', top: '45%', left: '25%', duration: 3.5, delay: 1.1 },
  { emoji: '🎨', size: 'text-2xl', top: '80%', right: '3%', duration: 4, delay: 0.9 },
]

const letterColors = ['#FF6B9D', '#4ECDC4', '#FFE66D', '#A78BFA', '#FF9A56']

export default function FloatingObjects() {
  const { isDark } = useTheme()

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.size} select-none`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            opacity: isDark ? 0.3 : 0.6,
            ...(item.isLetter && {
              fontFamily: 'Nunito',
              fontWeight: 800,
              color: letterColors[i % letterColors.length],
              opacity: isDark ? 0.2 : 0.4,
            }),
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 5, -5, 0],
            rotate: item.isLetter ? [0, 10, -10, 0] : [0, 5, -5, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  )
}
