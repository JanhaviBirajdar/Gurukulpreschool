import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { staggerContainer, staggerItem } from '../../utils/animations'

const features = [
  {
    icon: '🛡️',
    title: 'Safe Environment',
    description: 'CCTV monitored, child-proof spaces with caring staff ensuring complete safety.',
    color: '#FF6B9D',
    bg: '#FFF0F5',
    bgDark: 'rgba(255,107,157,0.15)',
  },
  {
    icon: '🎨',
    title: 'Creative Learning',
    description: 'Art, music, dance, and storytelling to nurture every child\'s creative spirit.',
    color: '#4ECDC4',
    bg: '#E6FFF9',
    bgDark: 'rgba(78,205,196,0.15)',
  },
  {
    icon: '👩‍🏫',
    title: 'Qualified Teachers',
    description: 'Certified, passionate educators trained in early childhood development.',
    color: '#A78BFA',
    bg: '#F0E6FF',
    bgDark: 'rgba(167,139,250,0.15)',
  },
  {
    icon: '🎮',
    title: 'Play-Based Learning',
    description: 'Learning through play, exploration, and hands-on activities every day.',
    color: '#FFE66D',
    bg: '#FFFDE6',
    bgDark: 'rgba(255,230,109,0.15)',
  },
  {
    icon: '🍎',
    title: 'Healthy Nutrition',
    description: 'Balanced meals and snacks prepared with love and nutritional care.',
    color: '#FF9A56',
    bg: '#FFF3E6',
    bgDark: 'rgba(255,154,86,0.15)',
  },
  {
    icon: '🌍',
    title: 'Holistic Development',
    description: 'Physical, emotional, social, and cognitive growth in perfect harmony.',
    color: '#87CEEB',
    bg: '#E6F7FF',
    bgDark: 'rgba(135,206,235,0.15)',
  },
]

export default function Features() {
  const { isDark } = useTheme()

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: isDark ? 'rgba(78,205,196,0.2)' : 'rgba(78,205,196,0.15)', color: isDark ? '#6FE4DB' : '#2BA89A', fontFamily: 'Quicksand' }}>
            ✨ Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>
            Why Choose{' '}
            <span className="gradient-text">Gurukul?</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto"
            style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand' }}>
            We create a nurturing environment where every child feels loved, inspired, and excited to learn.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-3xl transition-all duration-300 card-shadow cursor-pointer group"
              style={{
                background: isDark ? feature.bgDark : feature.bg,
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)'}`,
              }}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="text-4xl mb-4 inline-block"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3"
                style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed"
                style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand', fontWeight: 500 }}>
                {feature.description}
              </p>
              <div
                className="mt-4 h-1 rounded-full w-12 group-hover:w-full transition-all duration-500"
                style={{ background: feature.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
