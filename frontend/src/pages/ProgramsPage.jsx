import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { staggerContainer, staggerItem } from '../utils/animations'

const programs = [
  { name: 'Play Group', age: '1.5 – 2.5 Years', icon: '🧸', colorClass: 'text-candy', bgClass: 'bg-candy/5 dark:bg-candy/10', borderClass: 'border-candy/20', badgeBg: 'bg-candy/20', hoverShadow: 'hover:shadow-candy/30', gradientFrom: 'from-candy', gradientTo: 'to-candy-light' },
  { name: 'Nursery', age: '2.5 – 3.5 Years', icon: '🌈', colorClass: 'text-mint', bgClass: 'bg-mint/5 dark:bg-mint/10', borderClass: 'border-mint/20', badgeBg: 'bg-mint/20', hoverShadow: 'hover:shadow-mint/30', gradientFrom: 'from-mint', gradientTo: 'to-mint-light' },
  { name: 'Junior KG', age: '3.5 – 4.5 Years', icon: '📚', colorClass: 'text-lavender', bgClass: 'bg-lavender/5 dark:bg-lavender/10', borderClass: 'border-lavender/20', badgeBg: 'bg-lavender/20', hoverShadow: 'hover:shadow-lavender/30', gradientFrom: 'from-lavender', gradientTo: 'to-lavender-light' },
  { name: 'Senior KG', age: '4.5 – 5.5 Years', icon: '🎓', colorClass: 'text-sunny', bgClass: 'bg-sunny/5 dark:bg-sunny/10', borderClass: 'border-sunny/20', badgeBg: 'bg-sunny/20', hoverShadow: 'hover:shadow-sunny/30', gradientFrom: 'from-sunny', gradientTo: 'to-sunny-light' },
]

export default function ProgramsPage() {
  const { isDark } = useTheme()
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <section className="section-padding text-center gradient-bg">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-lavender/15 text-lavender dark:bg-lavender/20 dark:text-lavender-light font-body">
            🎓 Learning Paths
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark">
            Our <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto font-body font-medium text-text-secondary dark:text-text-secondary-dark">
            Age-appropriate programs designed to nurture curiosity, creativity, and a love of learning.
          </p>
        </motion.div>
      </section>

      <section className="section-padding">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((p) => (
            <motion.div key={p.name} variants={staggerItem} whileHover={{ y: -10 }}
              className={`rounded-3xl overflow-hidden card-shadow group cursor-pointer relative border-2 ${p.bgClass} ${p.borderClass} ${p.hoverShadow}`}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <motion.div whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }} transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${p.badgeBg}`}>
                    {p.icon}
                  </motion.div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold font-body ${p.badgeBg} ${p.colorClass}`}>
                    {p.age}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 font-heading text-text-primary dark:text-text-primary-dark">{p.name}</h3>
                <p className="text-sm leading-relaxed mb-6 font-body font-medium text-text-secondary dark:text-text-secondary-dark">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.highlights?.map((h) => (
                    <span key={h} className={`px-3 py-1 rounded-full text-xs font-semibold font-body ${p.badgeBg} ${p.colorClass}`}>
                      {h}
                    </span>
                  ))}
                </div>
                <div className={`mt-6 h-1 rounded-full w-16 group-hover:w-full transition-all duration-700 bg-gradient-to-r ${p.gradientFrom} ${p.gradientTo}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section-padding text-center bg-lavender/5 dark:bg-surface-dark">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-heading text-text-primary dark:text-text-primary-dark">
            Ready to Start Your Child's Journey? 🌟
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto font-body text-text-secondary dark:text-text-secondary-dark">
            Enroll your little one today and watch them bloom.
          </p>
          <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 rounded-2xl text-white font-bold text-lg shadow-lg shadow-candy/30 bg-gradient-to-br from-candy to-lavender font-heading hover:shadow-candy/50 transition-all">
            Enroll Now 🎓
          </motion.a>
        </motion.div>
      </section>
    </motion.div>
  )
}
