import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { staggerContainer, staggerItem } from '../utils/animations'

const milestones = [
  { year: '2014', title: 'Founded', desc: 'Gurukul Pre School opened its doors with a vision of joyful learning.', icon: '🏫' },
  { year: '2016', title: 'First Expansion', desc: 'Added Junior KG and Senior KG programs due to growing demand.', icon: '📈' },
  { year: '2018', title: 'Modern Campus', desc: 'Moved to a purpose-built campus with state-of-the-art facilities.', icon: '🏗️' },
  { year: '2020', title: 'Digital Learning', desc: 'Pioneered online learning for preschoolers during challenging times.', icon: '💻' },
  { year: '2022', title: '500+ Students', desc: 'Reached a milestone of nurturing 500+ happy little learners.', icon: '🎉' },
  { year: '2024', title: 'Award Winning', desc: 'Recognized as the best preschool in the region for excellence.', icon: '🏆' },
]

const teachers = [
  { name: 'Priya Sharma', role: 'Head Teacher', specialty: 'Early Childhood Education', colorClass: 'text-candy', bgClass: 'bg-candy/20', borderClass: 'border-candy/20' },
  { name: 'Anita Desai', role: 'Creative Arts', specialty: 'Art & Music Therapy', colorClass: 'text-mint', bgClass: 'bg-mint/20', borderClass: 'border-mint/20' },
  { name: 'Meera Patel', role: 'Language & Literacy', specialty: 'Storytelling & Phonics', colorClass: 'text-lavender', bgClass: 'bg-lavender/20', borderClass: 'border-lavender/20' },
  { name: 'Sunita Joshi', role: 'Physical Education', specialty: 'Motor Skills Development', colorClass: 'text-sunny', bgClass: 'bg-sunny/20', borderClass: 'border-sunny/20' },
]

const stats = [
  { number: 500, suffix: '+', label: 'Happy Students', icon: '👦', colorClass: 'text-candy' },
  { number: 20, suffix: '+', label: 'Classrooms', icon: '🏫', colorClass: 'text-mint' },
  { number: 50, suffix: '+', label: 'Activities', icon: '🎯', colorClass: 'text-lavender' },
  { number: 10, suffix: '+', label: 'Years of Joy', icon: '⭐', colorClass: 'text-sunny' },
]

function AnimatedCounter({ target, suffix }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {target}{suffix}
      </motion.span>
    </motion.span>
  )
}

export default function AboutPage() {
  const { isDark } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding text-center relative overflow-hidden gradient-bg">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-candy/15 text-candy dark:bg-candy/20 dark:text-candy-light font-body">
            📖 Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark">
            About <span className="gradient-text">Gurukul</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto font-body font-medium text-text-secondary dark:text-text-secondary-dark">
            Founded with love and dedication, Gurukul Pre School has been nurturing young minds for over a decade. Our mission is to create a joyful, safe, and stimulating environment where every child can discover their unique potential.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Our Mission', icon: '🎯', text: 'To provide a warm, inclusive environment that fosters curiosity, creativity, and confidence in every child through play-based and experiential learning.', colorClass: 'text-candy', borderClass: 'border-candy/30', bgClass: 'bg-candy/5 dark:bg-candy/10' },
            { title: 'Our Vision', icon: '🌟', text: 'To be the leading preschool that inspires a lifelong love of learning, nurtures character, and prepares children for a bright and beautiful future.', colorClass: 'text-mint', borderClass: 'border-mint/30', bgClass: 'bg-mint/5 dark:bg-mint/10' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl card-shadow border-2 ${item.bgClass} ${item.borderClass}`}
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className={`text-2xl font-bold mb-4 font-heading ${item.colorClass}`}>{item.title}</h3>
              <p className="font-body font-medium leading-relaxed text-text-secondary dark:text-text-secondary-dark">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-lavender/5 dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-16 font-heading text-text-primary dark:text-text-primary-dark">
            Our <span className="gradient-text">Journey</span> 🚀
          </motion.h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-candy via-lavender to-mint" />

            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-center mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <div className="p-6 rounded-2xl card-shadow bg-white dark:bg-surface-dark border border-black/5 dark:border-white/5">
                    <span className="text-2xl mb-2 inline-block">{milestone.icon}</span>
                    <span className="text-sm font-bold block mb-1 text-candy font-body">{milestone.year}</span>
                    <h4 className="text-lg font-bold mb-2 font-heading text-text-primary dark:text-text-primary-dark">{milestone.title}</h4>
                    <p className="text-sm font-body text-text-secondary dark:text-text-secondary-dark">{milestone.desc}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full md:-translate-x-1/2 z-10 bg-candy shadow-lg shadow-candy/50" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-4 font-heading text-text-primary dark:text-text-primary-dark">
            Our Loving <span className="gradient-text">Teachers</span> 💖
          </motion.h2>
          <p className="text-center mb-12 text-lg font-body text-text-secondary dark:text-text-secondary-dark">
            Passionate educators dedicated to nurturing every child's growth.
          </p>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher) => (
              <motion.div
                key={teacher.name}
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`p-6 rounded-3xl text-center card-shadow group cursor-pointer bg-white dark:bg-surface-dark border-2 ${teacher.borderClass}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl ${teacher.bgClass}`}
                >
                  {teacher.emoji}
                </motion.div>
                <h4 className="font-bold text-lg mb-1 font-heading text-text-primary dark:text-text-primary-dark">{teacher.name}</h4>
                <p className={`text-sm font-semibold mb-2 font-body ${teacher.colorClass}`}>{teacher.role}</p>
                <p className="text-xs font-body text-text-secondary dark:text-text-secondary-dark">{teacher.specialty}</p>
                <div className={`mt-3 h-0.5 rounded-full w-8 mx-auto group-hover:w-full transition-all duration-500 bg-current ${teacher.colorClass}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Counters */}
      <section className="section-padding gradient-bg">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center">
                <span className="text-3xl mb-3 inline-block">{stat.icon}</span>
                <p className={`text-3xl md:text-4xl font-extrabold mb-1 font-heading ${stat.colorClass}`}>
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-sm font-semibold font-body text-text-secondary dark:text-text-secondary-dark">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
