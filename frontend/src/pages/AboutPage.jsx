import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { staggerContainer, staggerItem, fadeInUp } from '../utils/animations'

const milestones = [
  { year: '2014', title: 'Founded', desc: 'Gurukul Pre School opened its doors with a vision of joyful learning.', icon: '🏫' },
  { year: '2016', title: 'First Expansion', desc: 'Added Junior KG and Senior KG programs due to growing demand.', icon: '📈' },
  { year: '2018', title: 'Modern Campus', desc: 'Moved to a purpose-built campus with state-of-the-art facilities.', icon: '🏗️' },
  { year: '2020', title: 'Digital Learning', desc: 'Pioneered online learning for preschoolers during challenging times.', icon: '💻' },
  { year: '2022', title: '500+ Students', desc: 'Reached a milestone of nurturing 500+ happy little learners.', icon: '🎉' },
  { year: '2024', title: 'Award Winning', desc: 'Recognized as the best preschool in the region for excellence.', icon: '🏆' },
]

const teachers = [
  { name: 'Priya Sharma', role: 'Head Teacher', specialty: 'Early Childhood Education', color: '#FF6B9D', emoji: '👩‍🏫' },
  { name: 'Anita Desai', role: 'Creative Arts', specialty: 'Art & Music Therapy', color: '#4ECDC4', emoji: '🎨' },
  { name: 'Meera Patel', role: 'Language & Literacy', specialty: 'Storytelling & Phonics', color: '#A78BFA', emoji: '📚' },
  { name: 'Sunita Joshi', role: 'Physical Education', specialty: 'Motor Skills Development', color: '#FFE66D', emoji: '🤸‍♀️' },
]

const stats = [
  { number: 500, suffix: '+', label: 'Happy Students', icon: '👦', color: '#FF6B9D' },
  { number: 20, suffix: '+', label: 'Classrooms', icon: '🏫', color: '#4ECDC4' },
  { number: 50, suffix: '+', label: 'Activities', icon: '🎯', color: '#A78BFA' },
  { number: 10, suffix: '+', label: 'Years of Joy', icon: '⭐', color: '#FFE66D' },
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
      <section className="section-padding text-center relative overflow-hidden"
        style={{ background: isDark ? 'linear-gradient(135deg, #1A1B2E, #2D1B4E)' : 'linear-gradient(135deg, #FFF5F7, #F0E6FF)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: isDark ? 'rgba(255,107,157,0.2)' : 'rgba(255,107,157,0.15)', color: isDark ? '#FF8FB4' : '#E5547F', fontFamily: 'Quicksand' }}>
            📖 Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6" style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>
            About <span className="gradient-text">Gurukul</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand', fontWeight: 500 }}>
            Founded with love and dedication, Gurukul Pre School has been nurturing young minds for over a decade. Our mission is to create a joyful, safe, and stimulating environment where every child can discover their unique potential.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Our Mission', icon: '🎯', text: 'To provide a warm, inclusive environment that fosters curiosity, creativity, and confidence in every child through play-based and experiential learning.', color: '#FF6B9D', bg: isDark ? 'rgba(255,107,157,0.1)' : '#FFF0F5' },
            { title: 'Our Vision', icon: '🌟', text: 'To be the leading preschool that inspires a lifelong love of learning, nurtures character, and prepares children for a bright and beautiful future.', color: '#4ECDC4', bg: isDark ? 'rgba(78,205,196,0.1)' : '#E6FFF9' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl card-shadow"
              style={{ background: item.bg, border: `2px solid ${item.color}30` }}
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Nunito', color: item.color }}>{item.title}</h3>
              <p style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand', fontWeight: 500, lineHeight: 1.7 }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: isDark ? '#252640' : '#F8F4FF' }}>
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-16" style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>
            Our <span className="gradient-text">Journey</span> 🚀
          </motion.h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2" style={{ background: 'linear-gradient(180deg, #FF6B9D, #A78BFA, #4ECDC4)' }} />

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
                  <div className="p-6 rounded-2xl card-shadow" style={{ background: isDark ? 'rgba(37,38,64,0.8)' : 'white' }}>
                    <span className="text-2xl mb-2 inline-block">{milestone.icon}</span>
                    <span className="text-sm font-bold block mb-1" style={{ color: '#FF6B9D', fontFamily: 'Quicksand' }}>{milestone.year}</span>
                    <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>{milestone.title}</h4>
                    <p className="text-sm" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand' }}>{milestone.desc}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full md:-translate-x-1/2 z-10" style={{ background: '#FF6B9D', boxShadow: '0 0 10px rgba(255,107,157,0.5)' }} />
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
            className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>
            Our Loving <span className="gradient-text">Teachers</span> 💖
          </motion.h2>
          <p className="text-center mb-12 text-lg" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand' }}>
            Passionate educators dedicated to nurturing every child's growth.
          </p>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher) => (
              <motion.div
                key={teacher.name}
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.03 }}
                className="p-6 rounded-3xl text-center card-shadow group cursor-pointer"
                style={{ background: isDark ? 'rgba(37,38,64,0.6)' : 'white', border: `2px solid ${teacher.color}20` }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl"
                  style={{ background: `${teacher.color}20` }}
                >
                  {teacher.emoji}
                </motion.div>
                <h4 className="font-bold text-lg mb-1" style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>{teacher.name}</h4>
                <p className="text-sm font-semibold mb-2" style={{ color: teacher.color, fontFamily: 'Quicksand' }}>{teacher.role}</p>
                <p className="text-xs" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand' }}>{teacher.specialty}</p>
                <div className="mt-3 h-0.5 rounded-full w-8 mx-auto group-hover:w-full transition-all duration-500" style={{ background: teacher.color }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Counters */}
      <section className="section-padding" style={{ background: isDark ? 'linear-gradient(135deg, #2D1B4E, #1A1B2E)' : 'linear-gradient(135deg, #FF6B9D10, #A78BFA10, #4ECDC410)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center">
                <span className="text-3xl mb-3 inline-block">{stat.icon}</span>
                <p className="text-3xl md:text-4xl font-extrabold mb-1" style={{ fontFamily: 'Nunito', color: stat.color }}>
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-sm font-semibold" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand' }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
