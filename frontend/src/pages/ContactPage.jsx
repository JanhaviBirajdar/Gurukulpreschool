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

  const inputStyle = (field) => ({
    background: isDark ? 'rgba(37,38,64,0.8)' : 'white',
    color: isDark ? '#F1E8FF' : '#2D1B4E',
    borderColor: errors[field] ? '#FF6B9D' : isDark ? 'rgba(255,255,255,0.1)' : '#E5E7EB',
    fontFamily: 'Quicksand',
  })

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      {/* Header */}
      <section className="section-padding text-center"
        style={{ background: isDark ? 'linear-gradient(135deg, #1A1B2E, #2D1B4E)' : 'linear-gradient(135deg, #FFF5F7, #F0E6FF)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: isDark ? 'rgba(78,205,196,0.2)' : 'rgba(78,205,196,0.15)', color: isDark ? '#6FE4DB' : '#2BA89A', fontFamily: 'Quicksand' }}>
            💌 Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6" style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand' }}>
            We'd love to hear from you. Reach out for admissions, inquiries, or just to say hello!
          </p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl card-shadow"
              style={{ background: isDark ? 'rgba(37,38,64,0.4)' : 'white' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>
                Send Us a Message ✉️
              </h3>

              {['name', 'phone', 'email'].map((field) => (
                <motion.div key={field} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="mb-4">
                  <label className="block text-sm font-semibold mb-1.5 capitalize" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand' }}>
                    {field}
                  </label>
                  <input type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={e => { setForm({ ...form, [field]: e.target.value }); setErrors({ ...errors, [field]: '' }) }}
                    className="w-full px-4 py-3 rounded-xl border-2 focus:border-[#A78BFA] focus:outline-none transition-colors text-sm"
                    style={inputStyle(field)}
                    placeholder={`Your ${field}`} />
                  {errors[field] && <p className="text-xs mt-1" style={{ color: '#FF6B9D' }}>{errors[field]}</p>}
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                <label className="block text-sm font-semibold mb-1.5" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand' }}>Message</label>
                <textarea rows={4} value={form.message}
                  onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
                  className="w-full px-4 py-3 rounded-xl border-2 focus:border-[#A78BFA] focus:outline-none transition-colors text-sm resize-none"
                  style={inputStyle('message')}
                  placeholder="How can we help you?" />
                {errors.message && <p className="text-xs mt-1" style={{ color: '#FF6B9D' }}>{errors.message}</p>}
              </motion.div>

              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                disabled={status === 'loading'}
                className="w-full py-3.5 rounded-xl text-white font-bold text-base transition-all disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #FF6B9D, #A78BFA)', fontFamily: 'Nunito' }}>
                {status === 'loading' ? '⏳ Sending...' : 'Send Message 🚀'}
              </motion.button>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl text-center text-sm font-semibold"
                  style={{ background: 'rgba(78,205,196,0.15)', color: '#4ECDC4', fontFamily: 'Quicksand' }}>
                  🎉 Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl text-center text-sm font-semibold"
                  style={{ background: 'rgba(255,107,157,0.15)', color: '#FF6B9D', fontFamily: 'Quicksand' }}>
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
              { icon: '📍', title: 'Our Address', text: '123 Learning Lane, Education City, India 411001', color: '#FF6B9D' },
              { icon: '📞', title: 'Phone', text: '+91 98765 43210', color: '#4ECDC4' },
              { icon: '✉️', title: 'Email', text: 'hello@gurukulpreschool.com', color: '#A78BFA' },
              { icon: '🕐', title: 'School Timings', text: 'Mon - Sat: 8:00 AM - 2:00 PM', color: '#FFE66D' },
            ].map((info) => (
              <motion.div key={info.title} whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-5 rounded-2xl card-shadow"
                style={{ background: isDark ? 'rgba(37,38,64,0.4)' : 'white' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: `${info.color}20` }}>{info.icon}</div>
                <div>
                  <h4 className="font-bold text-sm mb-1" style={{ fontFamily: 'Nunito', color: isDark ? '#F1E8FF' : '#2D1B4E' }}>{info.title}</h4>
                  <p className="text-sm" style={{ color: isDark ? '#B8A8D9' : '#6B5B8D', fontFamily: 'Quicksand' }}>{info.text}</p>
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden card-shadow flex-1 min-h-[250px]">
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
