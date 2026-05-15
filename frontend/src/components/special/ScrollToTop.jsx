import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollUp}
          className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
          style={{
            background: isDark ? 'rgba(37,38,64,0.9)' : 'white',
            border: `2px solid ${isDark ? 'rgba(167,139,250,0.3)' : 'rgba(167,139,250,0.2)'}`,
          }}
          aria-label="Scroll to top"
        >
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ color: '#A78BFA', fontSize: '18px' }}
          >
            ↑
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
