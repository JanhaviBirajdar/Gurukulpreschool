import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { submitInquiry } from '../utils/api'

export default function ContactPage() {
  const { isDark } = useTheme()
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

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

  const getInputClass = (field) => {
    const base = "w-full px-4 py-3 rounded-xl border-2 focus:border-lavender focus:outline-none transition-colors text-sm font-body bg-white dark:bg-surface-dark/80 text-text-primary dark:text-text-primary-dark"
    const border = errors[field] ? "border-candy" : "border-black/10 dark:border-white/10"
    return `${base} ${border}`
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      {/* Header */}
      <section className="section-padding text-center gradient-bg">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-mint/15 text-mint-dark dark:bg-mint/20 dark:text-mint-light font-body">
            💌 Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto font-body text-text-secondary dark:text-text-secondary-dark">
            We'd love to hear from you. Reach out for admissions, inquiries, or just to say hello!
          </p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl card-shadow bg-white dark:bg-surface-dark/40 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 font-heading text-text-primary dark:text-text-primary-dark">
                Send Us a Message ✉️
              </h3>

              {['name', 'phone', 'email'].map((field) => (
                <motion.div key={field} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="mb-4">
                  <label className="block text-sm font-semibold mb-1.5 capitalize font-body text-text-secondary dark:text-text-secondary-dark">
                    {field}
                  </label>
                  <input type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={e => { setForm({ ...form, [field]: e.target.value }); setErrors({ ...errors, [field]: '' }) }}
                    className={getInputClass(field)}
                    placeholder={`Your ${field}`} />
                  {errors[field] && <p className="text-xs mt-1 text-candy font-body">{errors[field]}</p>}
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                <label className="block text-sm font-semibold mb-1.5 font-body text-text-secondary dark:text-text-secondary-dark">Message</label>
                <textarea rows={4} value={form.message}
                  onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
                  className={`${getInputClass('message')} resize-none`}
                  placeholder="How can we help you?" />
                {errors.message && <p className="text-xs mt-1 text-candy font-body">{errors.message}</p>}
              </motion.div>

              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                disabled={status === 'loading'}
                className="w-full py-3.5 rounded-xl text-white font-bold text-base transition-all disabled:opacity-60 bg-gradient-to-br from-candy to-lavender font-heading hover:shadow-lg hover:shadow-candy/30">
                {status === 'loading' ? '⏳ Sending...' : 'Send Message 🚀'}
              </motion.button>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl text-center text-sm font-semibold bg-mint/15 text-mint-dark dark:text-mint-light font-body">
                  🎉 Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl text-center text-sm font-semibold bg-candy/15 text-candy font-body">
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-6">
            {/* Info Cards */}
            {[
              { icon: '📍', title: 'Our Address', text: '123 Learning Lane, Education City, India 411001', colorClass: 'text-candy', bgClass: 'bg-candy/20' },
              { icon: '📞', title: 'Phone', text: '+91 98765 43210', colorClass: 'text-mint', bgClass: 'bg-mint/20' },
              { icon: '✉️', title: 'Email', text: 'hello@gurukulpreschool.com', colorClass: 'text-lavender', bgClass: 'bg-lavender/20' },
              { icon: '🕐', title: 'School Timings', text: 'Mon - Sat: 8:00 AM - 2:00 PM', colorClass: 'text-sunny', bgClass: 'bg-sunny/20' },
            ].map((info) => (
              <motion.div key={info.title} whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-5 rounded-2xl card-shadow bg-white dark:bg-surface-dark/40 backdrop-blur-sm">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${info.bgClass}`}>
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1 font-heading text-text-primary dark:text-text-primary-dark">{info.title}</h4>
                  <p className="text-sm font-body text-text-secondary dark:text-text-secondary-dark">{info.text}</p>
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden card-shadow flex-1 min-h-[250px] border-2 border-white/5 dark:border-white/10">
              <iframe
                title="Gurukul Pre School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.065!2d73.856!3d18.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEyLjAiTiA3M8KwNTEnMjEuNiJF!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0, minHeight: '250px' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
