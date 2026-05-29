import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { submitInquiry } from '../utils/api'
import { MapPin, Phone, Mail, Clock, CalendarHeart, Send, CheckCircle2, AlertCircle, User, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [focused, setFocused] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[\d\s+\-()]{7,20}$/.test(form.phone)) e.phone = 'Invalid phone number'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      await submitInquiry(form)
      setStatus('success')
      setForm({ name: '', phone: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(null), 3000)
    }
  }

  const handleFocus = (field) => setFocused(field)
  const handleBlur = () => setFocused(null)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">

      {/* Hero Section */}
      <section className="section-padding text-center relative overflow-hidden gradient-bg">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-lg font-bold mb-8 bg-white/60 backdrop-blur-lg border border-white/40 text-text-primary dark:bg-surface-dark/60 dark:border-white/10 dark:text-text-primary-dark font-body shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
            <CalendarHeart className="w-6 h-6 text-mint fill-mint/20" /> Let's Connect
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark tracking-tight">
            Schedule a <span className="gradient-text">Visit</span>
          </h1>
          <p className="text-center text-xl md:text-2xl max-w-2xl mx-auto font-body font-medium text-text-secondary dark:text-text-secondary-dark leading-relaxed">
            We would love to welcome you and your child to experience the magic of Gurukul. Reach out to schedule a tour!
          </p>
        </motion.div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-mint/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float dark:mix-blend-lighten" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-candy/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-reverse dark:mix-blend-lighten" />
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none rotate-180 -mt-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20 text-cream dark:text-cream-dark">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>

      <section className="section-padding">
        {/* Floating Stickers */}
        <div aria-hidden="true">
          <span className="sticker sf1 text-5xl" style={{ right: '1%', top: '8%' }}>📫</span>
          <span className="sticker sf4 text-4xl" style={{ right: '2%', top: '35%' }}>🎈</span>
          <span className="sticker sf7 text-3xl" style={{ right: '1%', top: '62%' }}>🌟</span>
          <span className="sticker sf9 text-4xl" style={{ right: '3%', top: '85%' }}>🍦</span>
          <span className="sticker sf2 text-4xl" style={{ left: '1%', top: '12%' }}>🧸</span>
          <span className="sticker sf6 text-3xl" style={{ left: '2%', top: '42%' }}>🎀</span>
          <span className="sticker sf11 text-4xl" style={{ left: '1%', top: '70%' }}>🦄</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="p-10 md:p-14 lg:p-16 rounded-[2.5rem] relative overflow-hidden bg-gradient-to-br from-candy/30 via-lavender/30 to-mint/30 dark:from-candy/10 dark:via-lavender/10 dark:to-mint/10 border border-white/40 dark:border-white/10 shadow-xl backdrop-blur-3xl">

              <h3 className="text-3xl font-bold mb-12 font-heading text-text-primary dark:text-text-primary-dark relative z-10 text-center uppercase tracking-widest">
                Contact Us
              </h3>

              <div className="space-y-8 relative z-10">
                {[
                  { field: 'name', label: 'Name', type: 'text' },
                  { field: 'phone', label: 'Phone', type: 'text' },
                  { field: 'email', label: 'E-mail', type: 'email' },
                ].map(({ field, label, type }) => (
                  <div key={field} className="flex flex-col">
                    <label htmlFor={field} className="text-base font-semibold text-text-primary dark:text-text-primary-dark mb-3">
                      {label}
                    </label>
                    <input
                      type={type}
                      id={field}
                      value={form[field]}
                      onChange={e => { setForm({ ...form, [field]: e.target.value }); setErrors({ ...errors, [field]: '' }) }}
                      className={`w-full px-5 py-4.5 text-lg text-text-primary dark:text-text-primary-dark bg-white/20 dark:bg-white/5 border ${errors[field] ? 'border-candy' : 'border-white/60 dark:border-white/20 focus:border-text-primary dark:focus:border-white/60'
                        } rounded-2xl outline-none transition-all duration-300 font-body backdrop-blur-md`}
                    />
                    {errors[field] && <p className="text-xs mt-1.5 text-candy font-bold flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors[field]}</p>}
                  </div>
                ))}

                <div className="flex flex-col pt-2">
                  <label htmlFor="message" className="text-base font-semibold text-text-primary dark:text-text-primary-dark mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
                    className={`w-full px-5 py-4.5 text-lg text-text-primary dark:text-text-primary-dark bg-white/20 dark:bg-white/5 border ${errors.message ? 'border-candy' : 'border-white/60 dark:border-white/20 focus:border-text-primary dark:focus:border-white/60'
                      } rounded-2xl outline-none transition-all duration-300 font-body backdrop-blur-md resize-none`}
                  />
                  {errors.message && <p className="text-xs mt-1.5 text-candy font-bold flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={status === 'loading'}
                  style={{ padding: '16px 36px', fontSize: '18px' }}
                  className="w-full mt-10 rounded-full font-bold transition-all duration-300 font-body flex items-center justify-center gap-3 shadow-md bg-gradient-to-r from-candy via-peach to-sunny text-white shadow-candy/40 border-transparent hover:shadow-lg hover:-translate-y-1 disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending...
                    </span>
                  ) : (
                    <span>Send</span>
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: 'auto', marginTop: 16 }} exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden">
                    <div className="p-4 rounded-xl flex items-center gap-3 bg-mint/10 text-mint-dark dark:text-mint-light font-body font-semibold border border-mint/20">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      Request sent! We'll call you shortly.
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: 'auto', marginTop: 16 }} exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden">
                    <div className="p-4 rounded-xl flex items-center gap-3 bg-candy/10 text-candy font-body font-semibold border border-candy/20">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      Oops! Something went wrong.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3 flex flex-col gap-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <MapPin className="w-8 h-8" />, title: 'Main Campus', text: 'Anand Nagar, Manohar Nagar, Talegaon Dabhade, Pune 410506', color: 'text-candy', bg: 'bg-candy/10', border: 'hover:border-candy/30' },
                { icon: <Phone className="w-8 h-8" />, title: 'Call Us', text: '+91 8177918807\n 02114299893', color: 'text-mint', bg: 'bg-mint/10', border: 'hover:border-mint/30' },
                { icon: <Mail className="w-8 h-8" />, title: 'Email Us', text: 'gurukul.talegao@gmail.com', color: 'text-lavender', bg: 'bg-lavender/10', border: 'hover:border-lavender/30' },
                { icon: <Clock className="w-8 h-8" />, title: 'School Hours', text: 'Monday - Friday: 9:00 AM - 2:00 PM\nSaturday: 9:00 AM - 12:00 PM', color: 'text-sunny', bg: 'bg-sunny/10', border: 'hover:border-sunny/30' },
              ].map((info) => (
                <motion.div key={info.title} whileHover={{ y: -8 }}
                  className={`flex flex-col items-center text-center p-8 rounded-[2.5rem] glass dark:!bg-surface-dark border border-white/40 dark:border-white/10 transition-all shadow-xl hover:shadow-2xl bg-white/40 backdrop-blur-xl ${info.border}`}>
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-sm ${info.bg} ${info.color}`}>
                    {info.icon}
                  </div>
                  <h4 className="font-extrabold text-2xl mb-3 font-heading text-text-primary dark:text-text-primary-dark">{info.title}</h4>
                  <p className="text-base font-body font-medium text-text-secondary dark:text-text-secondary-dark whitespace-pre-line leading-relaxed">
                    {info.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl flex-1 min-h-[350px] border-4 border-white/60 dark:border-white/10 relative group glass mt-2">
              <iframe
                title="Gurukul Pre School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.451641083206!2d73.68506099999999!3d18.7333529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1000633a647%3A0x69461ab3a64d1124!2sGurukul%20Pre%20Primary%20School!5e0!3m2!1sen!2sin!4v1779861936498!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0, minHeight: '350px' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
