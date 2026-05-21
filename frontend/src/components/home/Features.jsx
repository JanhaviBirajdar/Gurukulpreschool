import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { staggerContainer, staggerItem } from '../../utils/animations'

const features = [
  {
    icon: '🛡️',
    title: 'Safe Environment',
    description: 'CCTV monitored, child-proof spaces with caring staff ensuring complete safety.',
    colorClass: 'bg-candy',
    borderColorClass: 'border-candy/20',
    bgClass: 'bg-candy/5 dark:bg-candy/10',
  },
  {
    icon: '🎨',
    title: 'Creative Learning',
    description: 'Art, music, dance, and storytelling to nurture every child\'s creative spirit.',
    colorClass: 'bg-mint',
    borderColorClass: 'border-mint/20',
    bgClass: 'bg-mint/5 dark:bg-mint/10',
  },
  {
    icon: '👩‍🏫',
    title: 'Qualified Teachers',
    description: 'Certified, passionate educators trained in early childhood development.',
    colorClass: 'bg-lavender',
    borderColorClass: 'border-lavender/20',
    bgClass: 'bg-lavender/5 dark:bg-lavender/10',
  },
  {
    icon: '🎮',
    title: 'Play-Based Learning',
    description: 'Learning through play, exploration, and hands-on activities every day.',
    colorClass: 'bg-sunny',
    borderColorClass: 'border-sunny/20',
    bgClass: 'bg-sunny/5 dark:bg-sunny/10',
  },
  {
    icon: '🍎',
    title: 'Healthy Nutrition',
    description: 'Balanced meals and snacks prepared with love and nutritional care.',
    colorClass: 'bg-peach',
    borderColorClass: 'border-peach/20',
    bgClass: 'bg-peach/5 dark:bg-peach/10',
  },
  {
    icon: '🌍',
    title: 'Holistic Development',
    description: 'Physical, emotional, social, and cognitive growth in perfect harmony.',
    colorClass: 'bg-sky',
    borderColorClass: 'border-sky/20',
    bgClass: 'bg-sky/5 dark:bg-sky/10',
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
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-mint/10 text-mint dark:bg-mint/20 font-body">
            ✨ Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 font-heading text-text-primary dark:text-text-primary-dark">
            Why Choose{' '}
            <span className="gradient-text">Gurukul?</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto font-body text-text-secondary dark:text-text-secondary-dark">
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
              className={`p-8 rounded-3xl transition-all duration-300 card-shadow cursor-pointer group border ${feature.bgClass} ${feature.borderColorClass} hover:shadow-xl dark:hover:shadow-black/50`}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="text-4xl mb-4 inline-block"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 font-heading text-text-primary dark:text-text-primary-dark">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed font-body font-medium text-text-secondary dark:text-text-secondary-dark">
                {feature.description}
              </p>
              <div
                className={`mt-4 h-1 rounded-full w-12 group-hover:w-full transition-all duration-500 ${feature.colorClass}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
