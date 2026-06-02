import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { staggerContainer, staggerItem } from '../../utils/animations'
import { ShieldCheck, Palette, GraduationCap, Gamepad2, Apple, Globe } from 'lucide-react'

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: 'Safe Environment',
    description: 'CCTV monitored, child-proof spaces with caring staff ensuring complete safety.',
    colorClass: 'text-candy',
    gradientClass: 'from-candy to-candy-light',
    borderClass: 'group-hover:border-candy/40 dark:group-hover:border-candy/30'
  },
  {
    icon: <Palette className="w-8 h-8 text-white" />,
    title: 'Creative Learning',
    description: 'Art, music, dance, and storytelling to nurture every child\'s creative spirit.',
    colorClass: 'text-mint',
    gradientClass: 'from-mint to-mint-light',
    borderClass: 'group-hover:border-mint/40 dark:group-hover:border-mint/30'
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: 'Qualified Teachers',
    description: 'Certified, passionate educators trained in early childhood development.',
    colorClass: 'text-lavender',
    gradientClass: 'from-lavender to-lavender-light',
    borderClass: 'group-hover:border-lavender/40 dark:group-hover:border-lavender/30'
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-white" />,
    title: 'Play-Based Learning',
    description: 'Learning through play, exploration, and hands-on activities every day.',
    colorClass: 'text-sunny',
    gradientClass: 'from-sunny to-sunny-light',
    borderClass: 'group-hover:border-sunny/40 dark:group-hover:border-sunny/30'
  },
  {
    icon: <Apple className="w-8 h-8 text-white" />,
    title: 'Healthy Nutrition',
    description: 'Balanced meals and snacks prepared with love and nutritional care.',
    colorClass: 'text-peach',
    gradientClass: 'from-peach to-peach-light',
    borderClass: 'group-hover:border-peach/40 dark:group-hover:border-peach/30'
  },
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: 'Holistic Development',
    description: 'Physical, emotional, social, and cognitive growth in perfect harmony.',
    colorClass: 'text-sky',
    gradientClass: 'from-sky to-sky-light',
    borderClass: 'group-hover:border-sky/40 dark:group-hover:border-sky/30'
  },
]

export default function Features() {
  const { isDark } = useTheme()

  return (
    <section className="section-padding relative overflow-hidden bg-white/30 dark:bg-transparent">
      {/* Decorative Blur Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-candy/10 dark:bg-candy/5 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-mint/10 dark:bg-mint/5 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-base font-bold mb-6 bg-white/50 backdrop-blur-md border border-black/5 dark:bg-surface-dark/50 dark:border-white/10 text-text-primary dark:text-text-primary-dark font-body shadow-sm">
            ✨ Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark tracking-tight">
            Why Choose{' '}
            <span className="text-blue-600">Gurukul?</span>
          </h2>
          <p className="text-center text-lg md:text-xl max-w-3xl font-body text-text-secondary dark:text-text-secondary-dark font-medium leading-relaxed">
            We create a nurturing, premium environment where every child feels loved, inspired, and excited to learn.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ y: -12 }}
              className={`p-10 rounded-[2.5rem] glass dark:!bg-surface-dark/90 group cursor-pointer border border-white/40 dark:border-white/5 transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col items-center text-center ${feature.borderClass}`}
            >
              {/* Icon Container */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${feature.gradientClass} shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                {feature.icon}
              </motion.div>

              {/* Text Content */}
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-heading text-text-primary dark:text-text-primary-dark">
                {feature.title}
              </h3>
              <p className="text-base lg:text-lg leading-relaxed font-body font-medium text-text-secondary dark:text-text-secondary-dark mb-8 flex-grow">
                {feature.description}
              </p>

              {/* Animated underline indicator */}
              <div
                className={`mt-auto h-2 rounded-full w-12 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${feature.gradientClass} opacity-70 group-hover:opacity-100 mx-auto`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
