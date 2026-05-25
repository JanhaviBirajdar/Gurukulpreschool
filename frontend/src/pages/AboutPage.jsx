import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { staggerContainer, staggerItem } from '../utils/animations'
import CountUpPkg from 'react-countup'
const CountUp = CountUpPkg.default || CountUpPkg

import { Heart, Shield, Star, BookOpen, Users, Trophy, Target, Sparkles, Smile, Sun, GraduationCap, Music, Home, MapPin, Building, Award } from 'lucide-react'

const milestones = [
  { year: '2019', title: 'The Beginning', desc: 'Gurukul Pre-School began with a vision to provide quality preschool education blended with strong values and संस्कार (Sanskar).', icon: <Star className="w-6 h-6" /> },
  { year: '2020', title: 'Online Learning During COVID', desc: 'During the pandemic lockdown, we successfully conducted online classes for 100+ students across Talegaon and Vadgaon, from Nursery to Senior KG.', icon: <BookOpen className="w-6 h-6" /> },
  { year: '2021', title: 'Anand Nagar Campus', desc: 'As normalcy returned, physical classes started at our first center in Anand Nagar. The response from parents was overwhelming, and our strength crossed 150+ students.', icon: <Home className="w-6 h-6" /> },
  { year: '2021', title: 'Grand Annual Gathering', desc: 'Launched our first Annual Gathering celebration — a tradition of creativity, confidence, and unforgettable memories that continues every year since.', icon: <Music className="w-6 h-6" /> },
  { year: '2022', title: 'Vatan Nagar Expansion', desc: 'Shifted to a larger campus at Vatan Nagar to accommodate growing admissions, successfully enrolling nearly 200 students.', icon: <MapPin className="w-6 h-6" /> },
  { year: '2024', title: '400+ Capacity Campus', desc: 'Moved back to a bigger, better campus in Anand Nagar with 9 spacious classrooms, an activity area, an in-school stage, and access to Goni Dandekar Garden.', icon: <Building className="w-6 h-6" /> },
]

const values = [
  {
    title: 'Safe Environment',
    icon: <Shield className="w-8 h-8 text-white" />,
    desc: '24/7 security, child-safe infrastructure, and strict hygiene protocols.',
    colorClass: 'text-candy',
    gradientClass: 'from-candy to-candy-light',
    borderClass: 'group-hover:border-candy/40 dark:group-hover:border-candy/30'
  },
  {
    title: 'Creative Learning',
    icon: <Sparkles className="w-8 h-8 text-white" />,
    desc: 'Play-based curriculum encouraging curiosity, art, and self-expression.',
    colorClass: 'text-mint',
    gradientClass: 'from-mint to-mint-light',
    borderClass: 'group-hover:border-mint/40 dark:group-hover:border-mint/30'
  },
  {
    title: 'Certified Teachers',
    icon: <Star className="w-8 h-8 text-white" />,
    desc: 'Passionate early-childhood educators dedicated to your childs growth.',
    colorClass: 'text-lavender',
    gradientClass: 'from-lavender to-lavender-light',
    borderClass: 'group-hover:border-lavender/40 dark:group-hover:border-lavender/30'
  },
  {
    title: 'Activity-Based',
    icon: <Sun className="w-8 h-8 text-white" />,
    desc: 'Hands-on activities to develop fine motor skills and cognitive abilities.',
    colorClass: 'text-sunny',
    gradientClass: 'from-sunny to-sunny-light',
    borderClass: 'group-hover:border-sunny/40 dark:group-hover:border-sunny/30'
  },
]

const stats = [
  { number: 1900, suffix: '+', label: 'Happy Students', icon: <Smile className="w-10 h-10 text-white" />, gradientClass: 'from-candy to-candy-light' },
  { number: 12, suffix: '+', label: 'Classrooms', icon: <Target className="w-10 h-10 text-white" />, gradientClass: 'from-mint to-mint-light' },
  { number: 50, suffix: '+', label: 'Activities', icon: <BookOpen className="w-10 h-10 text-white" />, gradientClass: 'from-lavender to-lavender-light' },
  { number: 7, suffix: '+', label: 'Years of Joy', icon: <Star className="w-10 h-10 text-white" />, gradientClass: 'from-sunny to-sunny-light' },
]

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
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-lg font-bold mb-8 bg-white/60 backdrop-blur-lg border border-white/40 dark:bg-surface-dark/60 dark:border-white/10 text-text-primary dark:text-text-primary-dark font-body shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
            <Heart className="w-6 h-6 text-candy fill-candy/20" /> Our Story
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark tracking-tight">
            Nurturing <span className="gradient-text">Little Minds</span>
          </h1>
          <p className="text-center text-xl md:text-2xl max-w-3xl font-body font-medium text-text-secondary dark:text-text-secondary-dark leading-relaxed">
            Founded with love and dedication, Gurukul Pre School has been a second home for children for over a decade. We believe in creating a joyful, safe, and stimulating environment where every child blooms.
          </p>
        </motion.div>

        {/* Decorative Blobs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-candy/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float dark:mix-blend-lighten" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-lavender/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow dark:mix-blend-lighten" />
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none rotate-180 -mt-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20 text-cream dark:text-cream-dark">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>

      {/* Founder Section */}
      <section className="section-padding relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl card-shadow max-w-sm mx-auto">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div className="text-white pl-6">
                  <h3 className="text-left text-3xl font-bold font-heading mb-1">Arti Prakash Parekh</h3>
                  <p className="font-body text-lg opacity-90 text-left">Founder & Principal</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 right-4 md:right-12 w-32 h-32 bg-candy/10 rounded-full filter blur-2xl animate-float-slow z-[-1]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-text-primary dark:text-text-primary-dark">
              A Message from <br /><span className="gradient-text">Our Founder</span>
            </h2>
            <div className="text-5xl text-candy opacity-20 font-serif leading-none">"</div>
            <p className="text-center text-xl md:text-2xl font-body italic text-text-secondary dark:text-text-secondary-dark leading-relaxed font-medium">
              We believe every child is a unique masterpiece, deserving of boundless love, creativity, and the confidence to explore their world. Our goal isn't just education; it's nurturing a lifelong love for learning.
            </p>
            <div className="pt-4">
              <span className="text-center font-heading text-2xl font-bold text-text-primary dark:text-text-primary-dark inline-block opacity-80">
                Ekta Prakash Parekh
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white/30 dark:bg-transparent relative overflow-hidden">
        {/* Decorative Blur Elements */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-lavender/10 dark:bg-lavender/5 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl z-0" />

        <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-base font-bold mb-6 bg-white/50 backdrop-blur-md border border-black/5 dark:bg-surface-dark/50 dark:border-white/10 text-text-primary dark:text-text-primary-dark font-body shadow-sm">
              ✨ Core Values
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark tracking-tight">
              Why Choose <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-center text-lg md:text-xl max-w-3xl font-body text-text-secondary dark:text-text-secondary-dark font-medium leading-relaxed">
              Our core values are the foundation of everything we do. We promise to provide the best start for your little one.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                whileHover={{ y: -12 }}
                className={`p-10 rounded-[2.5rem] glass dark:!bg-surface-dark/90 group cursor-pointer border border-white/40 dark:border-white/5 transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col items-center text-center ${value.borderClass}`}
              >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${value.gradientClass} shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  {value.icon}
                </motion.div>

                {/* Text Content */}
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-heading text-text-primary dark:text-text-primary-dark">
                  {value.title}
                </h3>
                <p className="text-base lg:text-lg leading-relaxed font-body font-medium text-text-secondary dark:text-text-secondary-dark mb-8 flex-grow">
                  {value.desc}
                </p>

                {/* Animated underline indicator */}
                <div
                  className={`mt-auto h-2 rounded-full w-12 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${value.gradientClass} opacity-70 group-hover:opacity-100 mx-auto`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Journey */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lavender/5 to-transparent dark:via-surface-dark/50 z-0" />
        <div className="max-w-5xl mx-auto relative z-10 px-6 sm:px-10 lg:px-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-8 font-heading text-text-primary dark:text-text-primary-dark"
          >
            Our <span className="gradient-text">Journey</span> 🚀
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg md:text-xl max-w-3xl mx-auto font-body text-text-secondary dark:text-text-secondary-dark font-medium leading-relaxed mb-20"
          >
            The journey of Gurukul Pre-School began in 2019 with a vision to provide quality preschool education blended with strong values and संस्कार (Sanskar).
          </motion.p>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-candy via-lavender to-mint rounded-full opacity-30" />

            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-center mb-12 md:mb-20 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'pr-6 md:pr-16' : 'pl-6 md:pl-16'}`}>
                  <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] glass dark:!bg-surface-dark/90 border border-white/40 dark:border-white/5 hover:border-candy/40 transition-colors shadow-xl group-hover:shadow-2xl inline-block w-full text-center">
                    <span className="text-lg md:text-xl font-bold block mb-2 md:mb-3 text-candy font-body tracking-wider">{milestone.year}</span>
                    <h4 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 font-heading text-text-primary dark:text-text-primary-dark">{milestone.title}</h4>
                    <p className="text-sm md:text-lg font-body text-text-secondary dark:text-text-secondary-dark leading-relaxed font-medium mx-auto">{milestone.desc}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full -translate-x-1/2 z-10 bg-white dark:bg-surface-dark border-4 border-candy flex items-center justify-center shadow-lg text-candy group-hover:scale-110 group-hover:bg-candy group-hover:text-white transition-all duration-300">
                  {milestone.icon}
                </div>

                {/* Empty Space for alternate layout */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>

          {/* ── Narrative Prose Sections ── */}
          <div className="mt-20 md:mt-28 space-y-16 md:space-y-20 max-w-[900px] mx-auto relative">
            {/* Decorative floating blobs */}
            <div className="absolute -top-20 -left-32 w-64 h-64 bg-candy/8 rounded-full filter blur-[80px] pointer-events-none dark:bg-candy/5" />
            <div className="absolute top-1/2 -right-28 w-56 h-56 bg-lavender/8 rounded-full filter blur-[80px] pointer-events-none dark:bg-lavender/5" />
            <div className="absolute -bottom-16 left-1/4 w-48 h-48 bg-sky/8 rounded-full filter blur-[60px] pointer-events-none dark:bg-sky/5" />

            {/* ── Card 1: Beyond Books ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="narrative-card group"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #FF6B9D, #A78BFA) border-box',
                border: '2px solid transparent',
                borderRadius: '1.5rem',
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-7 md:p-9 relative overflow-hidden rounded-[1.4rem]"
                style={{
                  background: 'rgba(255,255,255,0.82)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Icon column */}
                <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-candy to-candy-light shadow-md"
                  >
                    <GraduationCap className="w-7 h-7 text-white" />
                  </motion.div>
                  {/* Vertical accent line (desktop) */}
                  <div className="hidden md:block w-0.5 flex-1 mt-4 rounded-full bg-gradient-to-b from-candy/30 to-transparent" />
                </div>

                {/* Content column */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-text-primary dark:text-text-primary mb-1.5">
                    Beyond Books & Alphabets
                  </h3>
                  <p className="text-[1.05rem] leading-[1.85] font-body text-text-secondary font-medium max-w-[92%] mb-5">
                    At Gurukul, education goes beyond books and alphabets. We believe preschool learning is the foundation of a child's overall growth — nurturing <strong className="text-text-primary">holistic development</strong> across every dimension.
                  </p>

                  {/* Clean pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {['Creativity', 'Communication', 'Confidence', 'Discipline', 'Social Skills', 'Moral Values'].map((item) => (
                      <span key={item} className="px-4 py-1.5 rounded-full text-xs font-bold font-body bg-white border border-candy/20 text-candy shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-candy/6 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>

            {/* ── Card 2: Parents as Partners ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="narrative-card group"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #A78BFA, #87CEEB) border-box',
                border: '2px solid transparent',
                borderRadius: '1.5rem',
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-7 md:p-9 relative overflow-hidden rounded-[1.4rem]"
                style={{
                  background: 'rgba(255,255,255,0.82)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Icon column */}
                <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-lavender to-lavender-light shadow-md"
                  >
                    <Users className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="hidden md:block w-0.5 flex-1 mt-4 rounded-full bg-gradient-to-b from-lavender/30 to-transparent" />
                </div>

                {/* Content column */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-text-primary dark:text-text-primary mb-1.5">
                    Parents as Partners
                  </h3>
                  <p className="text-[1.05rem] leading-[1.85] font-body text-text-secondary font-medium max-w-[92%] mb-5">
                    Parents play an important role in a child's learning journey. We regularly conduct parent meetings and special activities, creating joyful memories and cultural connections for families.
                  </p>

                  {/* Clean pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {['Diwali Lamps', 'Rangoli', 'Fireless Cooking', 'Rakhi Making', 'Garba Workshops', 'Navratri'].map((item) => (
                      <span key={item} className="px-4 py-1.5 rounded-full text-xs font-bold font-body bg-white border border-lavender/20 text-lavender shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lavender/6 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>

            {/* ── Card 3: Motto ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="narrative-card group"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #FF6B9D, #A78BFA, #87CEEB) border-box',
                border: '2px solid transparent',
                borderRadius: '1.5rem',
              }}
            >
              <div className="p-8 md:p-10 text-center relative overflow-hidden rounded-[1.4rem]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,245,247,0.9), rgba(240,230,255,0.9), rgba(230,247,255,0.9))',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Small icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-candy via-lavender to-sky shadow-md">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>

                <span className="inline-block px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest font-body bg-white/70 border border-candy/15 text-text-secondary mb-5 shadow-sm">
                  Our Motto
                </span>

                {/* Gradient heading — controlled size */}
                <p className="font-heading font-extrabold leading-tight mb-5" style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  background: 'linear-gradient(135deg, #FF6B9D, #A78BFA, #87CEEB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  "Education with Sanskar."
                </p>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="h-px w-10 bg-gradient-to-r from-transparent to-candy/30" />
                  <Star className="w-3.5 h-3.5 text-candy/40" />
                  <div className="h-px w-10 bg-gradient-to-l from-transparent to-candy/30" />
                </div>

                <p className="text-[1.05rem] leading-[1.85] font-body text-text-secondary font-medium max-w-xl mx-auto">
                  Our aim is to create confident, happy, disciplined, and morally strong children who are ready not only for school but also for life. Gurukul Pre-School stands as a growing family built on trust, love, learning, and values.
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-candy/4 via-transparent to-sky/4 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none rounded-[1.4rem]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 relative overflow-hidden">
        {/* Subtle background blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-candy/5 dark:bg-candy/10 rounded-full filter blur-3xl opacity-50 z-0" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center text-center cursor-default"
              >
                {/* Icon Container with glowing background */}
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${stat.gradientClass} mb-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  {stat.icon}
                </div>

                {/* Numbers */}
                <div className="text-4xl md:text-5xl font-extrabold mb-2 font-heading text-text-primary dark:text-text-primary-dark tracking-tight flex items-center justify-center">
                  <CountUp end={stat.number} duration={2.5} enableScrollSpy scrollSpyOnce />
                  <span className="text-candy ml-1">{stat.suffix}</span>
                </div>

                {/* Label */}
                <p className="text-sm font-bold font-body text-text-secondary dark:text-text-secondary-dark uppercase tracking-wider">{stat.label}</p>

                {/* Decorative Line */}
                <div className={`mt-4 h-1 w-8 rounded-full bg-gradient-to-r ${stat.gradientClass} opacity-50 group-hover:w-16 group-hover:opacity-100 transition-all duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
