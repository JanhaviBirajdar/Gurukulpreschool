import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { staggerContainer, staggerItem } from '../utils/animations'
import { Clock, CheckCircle2, Star, BookOpen, Music, Palette, Users, ArrowRight } from 'lucide-react'

const programs = [
  { 
    name: 'Play Group', 
    age: '1.5 – 2.5 Years', 
    duration: '2.5 Hours / Day',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop',
    icon: <Star className="w-6 h-6" />, 
    colorClass: 'text-candy', 
    bgClass: 'bg-candy/5 dark:bg-candy/10', 
    borderClass: 'group-hover:border-candy/50', 
    badgeBg: 'bg-candy/20', 
    hoverShadow: 'hover:shadow-candy/20',
    gradientFrom: 'from-candy', 
    gradientTo: 'to-candy-light',
    features: ['Sensory Play', 'Basic Motor Skills', 'Social Interaction', 'Music & Movement']
  },
  { 
    name: 'Nursery', 
    age: '2.5 – 3.5 Years', 
    duration: '3.0 Hours / Day',
    image: 'https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=800&auto=format&fit=crop',
    icon: <Music className="w-6 h-6" />, 
    colorClass: 'text-mint', 
    bgClass: 'bg-mint/5 dark:bg-mint/10', 
    borderClass: 'group-hover:border-mint/50', 
    badgeBg: 'bg-mint/20', 
    hoverShadow: 'hover:shadow-mint/20',
    gradientFrom: 'from-mint', 
    gradientTo: 'to-mint-light',
    features: ['Language Basics', 'Creative Arts', 'Potty Training Support', 'Storytelling']
  },
  { 
    name: 'Junior KG', 
    age: '3.5 – 4.5 Years', 
    duration: '3.5 Hours / Day',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    icon: <BookOpen className="w-6 h-6" />, 
    colorClass: 'text-lavender', 
    bgClass: 'bg-lavender/5 dark:bg-lavender/10', 
    borderClass: 'group-hover:border-lavender/50', 
    badgeBg: 'bg-lavender/20', 
    hoverShadow: 'hover:shadow-lavender/20',
    gradientFrom: 'from-lavender', 
    gradientTo: 'to-lavender-light',
    features: ['Pre-Reading Skills', 'Numbers & Logic', 'Environmental Awareness', 'Team Projects']
  },
  { 
    name: 'Senior KG', 
    age: '4.5 – 5.5 Years', 
    duration: '4.0 Hours / Day',
    image: 'https://images.unsplash.com/photo-1603354350317-6f7aaaa2d145?q=80&w=800&auto=format&fit=crop',
    icon: <Users className="w-6 h-6" />, 
    colorClass: 'text-sunny', 
    bgClass: 'bg-sunny/5 dark:bg-sunny/10', 
    borderClass: 'group-hover:border-sunny/50', 
    badgeBg: 'bg-sunny/20', 
    hoverShadow: 'hover:shadow-sunny/20',
    gradientFrom: 'from-sunny', 
    gradientTo: 'to-sunny-light',
    features: ['School Readiness', 'Advanced Phonics', 'Basic Math Concepts', 'Independent Learning']
  },
]

const routine = [
  { time: '09:00 AM', activity: 'Morning Prayer & Assembly', icon: '🙏', color: 'bg-candy/10 text-candy' },
  { time: '09:30 AM', activity: 'Circle Time & Stories', icon: '📖', color: 'bg-mint/10 text-mint' },
  { time: '10:15 AM', activity: 'Creative Learning', icon: '🎨', color: 'bg-lavender/10 text-lavender' },
  { time: '11:00 AM', activity: 'Snack Break', icon: '🍎', color: 'bg-sunny/10 text-sunny' },
  { time: '11:30 AM', activity: 'Outdoor Play', icon: '🏃‍♂️', color: 'bg-peach-light/20 text-peach' },
  { time: '12:30 PM', activity: 'Rhymes & Departure', icon: '🎵', color: 'bg-sky-light/20 text-sky' },
]

const highlights = [
  { title: 'Language Skills', desc: 'Phonics, vocabulary building, and expression.', icon: <BookOpen className="w-12 h-12"/>, color: 'text-candy', bg: 'bg-candy' },
  { title: 'Social Skills', desc: 'Sharing, empathy, and team collaboration.', icon: <Users className="w-12 h-12"/>, color: 'text-mint', bg: 'bg-mint' },
  { title: 'Creativity', desc: 'Art, music, dance, and imaginative play.', icon: <Palette className="w-12 h-12"/>, color: 'text-lavender', bg: 'bg-lavender' },
  { title: 'Physical Growth', desc: 'Motor skills, yoga, and outdoor games.', icon: <Star className="w-12 h-12"/>, color: 'text-sunny', bg: 'bg-sunny' },
]

export default function ProgramsPage() {
  const { isDark } = useTheme()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      
      {/* Hero Section */}
      <section className="section-padding text-center relative overflow-hidden gradient-bg">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-lg font-bold mb-8 bg-white/60 backdrop-blur-lg border border-white/40 text-text-primary dark:bg-surface-dark/60 dark:border-white/10 dark:text-text-primary-dark font-body shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
            <Star className="w-6 h-6 text-lavender fill-lavender/20" /> Learning Paths
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark tracking-tight">
            Our <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-center text-xl md:text-2xl max-w-2xl mx-auto font-body font-medium text-text-secondary dark:text-text-secondary-dark leading-relaxed">
            Age-appropriate programs scientifically designed to nurture curiosity, creativity, and a lifelong love of learning.
          </p>
        </motion.div>
        {/* Decorative Blobs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-mint/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float dark:mix-blend-lighten z-0" />
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none rotate-180 -mt-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20 text-cream dark:text-cream-dark">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>

      {/* Program Cards */}
      <section className="section-padding relative">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {programs.map((p) => (
            <motion.div key={p.name} variants={staggerItem} whileHover={{ y: -10 }}
              className={`rounded-3xl overflow-hidden glass dark:!bg-surface-dark group cursor-pointer border-2 border-transparent transition-all duration-500 shadow-lg ${p.hoverShadow} ${p.borderClass} flex flex-col md:flex-row`}>
              
              {/* Image Section */}
              <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 md:hidden">
                  <h3 className="text-3xl font-bold font-heading text-white">{p.name}</h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-8 md:p-12 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="hidden md:block">
                      <h3 className="text-3xl font-bold font-heading text-text-primary dark:text-text-primary-dark mb-1">{p.name}</h3>
                    </div>
                    <motion.div whileHover={{ rotate: 15, scale: 1.1 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${p.gradientFrom} ${p.gradientTo} shadow-md`}>
                      {p.icon}
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className={`px-5 py-2 rounded-full text-sm font-bold font-body flex items-center gap-2 ${p.badgeBg} ${p.colorClass}`}>
                      <Users className="w-4 h-4" /> {p.age}
                    </span>
                    <span className="px-5 py-2 rounded-full text-sm font-bold font-body bg-black/5 dark:bg-white/10 text-text-secondary dark:text-text-secondary-dark flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {p.duration}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-base font-body font-medium text-text-secondary dark:text-text-secondary-dark">
                        <CheckCircle2 className={`w-5 h-5 ${p.colorClass}`} /> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-4 border-t border-black/5 dark:border-white/5 pt-6">
                  <span className={`text-base font-bold font-body ${p.colorClass} flex items-center gap-2 group-hover:underline underline-offset-4`}>
                    Learn More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Curriculum Highlights */}
      <section className="section-padding bg-white dark:bg-surface-dark/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-text-primary dark:text-text-primary-dark mb-4">
              Curriculum <span className="gradient-text">Highlights</span>
            </h2>
            <p className="text-center text-lg font-body text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
              A balanced approach to whole-child development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {highlights.map((h, i) => (
              <motion.div 
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-10 rounded-[2rem] text-center glass border border-black/5 dark:border-white/5 shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className={`w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-8 text-white ${h.bg} transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                  {h.icon}
                </div>
                <h3 className={`text-2xl font-bold font-heading mb-4 ${h.color}`}>{h.title}</h3>
                <p className="font-body text-text-secondary dark:text-text-secondary-dark text-base leading-relaxed font-medium mx-auto">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine Timeline */}
      <section className="section-padding relative">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-text-primary dark:text-text-primary-dark mb-4">
              A Day at <span className="gradient-text">Gurukul</span> ⏰
            </h2>
            <p className="text-center text-lg font-body text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
              Structured routines give children a sense of security and help them build positive habits.
            </p>
          </motion.div>

          <div className="relative pt-10">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-candy via-lavender to-mint rounded-full opacity-30" />

            {routine.map((item, i) => (
              <motion.div 
                key={item.time}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-center mb-16 md:mb-24 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'pr-12 md:pr-20' : 'pl-12 md:pl-20'}`}>
                  <div className="glass p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col items-center text-center shadow-sm group-hover:shadow-xl transition-all duration-300 w-full hover:-translate-y-1">
                    <span className="font-body font-bold text-candy block mb-1 text-base md:text-lg uppercase tracking-wider">{item.time}</span>
                    <h4 className="text-xl md:text-2xl font-heading font-bold text-text-primary dark:text-text-primary-dark">{item.activity}</h4>
                  </div>
                </div>

                {/* Center Icon */}
                <div className={`absolute left-1/2 w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] -translate-x-1/2 z-10 flex items-center justify-center text-3xl md:text-4xl shadow-lg border-2 border-white dark:border-surface-dark group-hover:scale-110 transition-all duration-300 ${item.color.replace('text-', 'bg-white dark:bg-surface-dark text-')}`}>
                  {item.icon}
                </div>

                {/* Empty Space for alternate layout */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-candy/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float dark:mix-blend-lighten" />
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-lavender/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow dark:mix-blend-lighten" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white/20 dark:border-white/10"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
            
            {/* Premium Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-candy/95 via-candy/80 to-lavender/90 dark:from-surface-dark/95 dark:via-black/80 dark:to-lavender/90 backdrop-blur-sm" />
            
            <div className="relative p-12 md:p-20 text-center flex flex-col items-center">
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold mb-8 bg-white/20 backdrop-blur-md border border-white/30 text-white font-body shadow-sm uppercase tracking-widest">
                Admissions Open
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading text-white tracking-tight">
                Give Your Child the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">Best Start 🌟</span>
              </h2>
              
              <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-body text-white/90 leading-relaxed">
                Join the Gurukul family today. We are accepting applications for the upcoming academic year.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
                <motion.a 
                  href="/contact" 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-full text-candy dark:text-text-primary-dark font-bold text-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] bg-white dark:bg-surface-dark font-heading transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Schedule a Visit
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
