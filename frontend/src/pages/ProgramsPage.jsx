import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { staggerContainer, staggerItem } from '../utils/animations'

const programs = [
  { name: 'Play Group', age: '1.5 – 2.5 Years', icon: '🧸', color: '#FF6B9D', bg: '#FFF0F5', bgDark: 'rgba(255,107,157,0.12)',
    description: 'A gentle introduction to learning through sensory play, music, rhymes, and nurturing interactions.',
    highlights: ['Sensory Play', 'Motor Skills', 'Social Skills', 'Music & Rhymes'] },
  { name: 'Nursery', age: '2.5 – 3.5 Years', icon: '🌈', color: '#4ECDC4', bg: '#E6FFF9', bgDark: 'rgba(78,205,196,0.12)',
    description: 'Building foundations with language, numbers, art, and creative expression encouraging curiosity.',
    highlights: ['Pre-Reading', 'Number Concepts', 'Art & Craft', 'Nature Exploration'] },
  { name: 'Junior KG', age: '3.5 – 4.5 Years', icon: '📚', color: '#A78BFA', bg: '#F0E6FF', bgDark: 'rgba(167,139,250,0.12)',
    description: 'Structured learning with phonics, basic math, science exploration, and creative activities.',
    highlights: ['Phonics', 'Basic Math', 'Science Fun', 'Creative Writing'] },
  { name: 'Senior KG', age: '4.5 – 5.5 Years', icon: '🎓', color: '#FFE66D', bg: '#FFFDE6', bgDark: 'rgba(255,230,109,0.12)',
    description: 'School readiness with advanced reading, writing, math, critical thinking, and leadership.',
    highlights: ['Reading & Writing', 'Advanced Math', 'Critical Thinking', 'Leadership Skills'] },
]

export default function ProgramsPage() {
  const { isDark } = useTheme()
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <section className="section-padding text-center"
        style={{ background: isDark ? 'linear-gradient(135deg, #1A1B2E, #2D1B4E)' : 'linear-gradient(135deg, #FFF5F7, #F0E6FF)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: isDark ? 'rgba(167,139,250,0.2)' : 'rgba(167,139,250,0.15)', color: isDark ? '#C4B5FD' : '#7C3AED', fontFamily: 'Quicksand' }}>
            🎓 Learning Paths
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6" style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>
            Our <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand' }}>
            Age-appropriate programs designed to nurture curiosity, creativity, and a love of learning.
          </p>
        </motion.div>
      </section>

      <section className="section-padding">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((p) => (
            <motion.div key={p.name} variants={staggerItem} whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden card-shadow group cursor-pointer relative"
              style={{ background: isDark ? p.bgDark : p.bg, border: `2px solid ${p.color}20` }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{ boxShadow: `inset 0 0 30px ${p.color}15, 0 0 30px ${p.color}20` }} />
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <motion.div whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }} transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: `${p.color}20` }}>{p.icon}</motion.div>
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: `${p.color}20`, color: p.color, fontFamily: 'Quicksand' }}>{p.age}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>{p.name}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand', fontWeight: 500 }}>{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <span key={h} className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: `${p.color}15`, color: p.color, fontFamily: 'Quicksand' }}>{h}</span>
                  ))}
                </div>
                <div className="mt-6 h-1 rounded-full w-16 group-hover:w-full transition-all duration-700"
                  style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}60)` }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section-padding text-center" style={{ background: isDark ? '#252640' : '#F8F4FF' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>
            Ready to Start Your Child's Journey? 🌟
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand' }}>
            Enroll your little one today and watch them bloom.
          </p>
          <motion.a href="/contact" whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,107,157,0.4)' }} whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 rounded-2xl text-white font-bold text-lg"
            style={{ background: 'linear-gradient(135deg, #FF6B9D, #A78BFA)', fontFamily: 'Nunito' }}>
            Enroll Now 🎓
          </motion.a>
        </motion.div>
      </section>
    </motion.div>
  )
}
