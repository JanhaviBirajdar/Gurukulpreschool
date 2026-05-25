import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { subscribeNewsletter } from '../../utils/api'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const programs = [
  { name: 'Play Group', path: '/programs' },
  { name: 'Nursery', path: '/programs' },
  { name: 'Junior KG', path: '/programs' },
  { name: 'Senior KG', path: '/programs' },
]

export default function Footer() {
  const { isDark } = useTheme()
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState('')

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    try {
      await subscribeNewsletter(email)
      setSubStatus('success')
      setEmail('')
      setTimeout(() => setSubStatus(''), 3000)
    } catch {
      setSubStatus('error')
      setTimeout(() => setSubStatus(''), 3000)
    }
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-950 to-slate-900 dark:from-surface-dark dark:via-slate-900 dark:to-black">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ transform: 'translateY(-98%)' }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" className="fill-purple-900 dark:fill-surface-dark" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:pr-20 lg:pl-32 xl:pl-40 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Logo & About */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl bg-gradient-to-br from-candy to-lavender shadow-lg shadow-candy/30">G</div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-white font-heading tracking-tight leading-tight">Gurukul</span>
                <span className="font-extrabold text-xl text-lavender-light font-heading tracking-tight leading-tight">Pre School</span>
              </div>
            </div>
            <p className="text-purple-200/90 dark:text-slate-300 text-base leading-relaxed mb-8 font-body">
              Where little minds bloom with joy and wonder. We provide a safe, creative, and nurturing environment for early childhood education.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {['facebook', 'instagram', 'youtube', 'twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="https://www.instagram.com/gurukul.preschooltalegao?utm_source=qr&igsh=MXZjdXBvNmxhdnNncA=="
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white/80 hover:text-white bg-white/10 dark:bg-white/5 hover:bg-white/20 transition-colors shadow-sm"
                >
                  {social === 'facebook' && <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>}
                  {social === 'instagram' && <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="https://www.instagram.com/gurukul.preschooltalegao?utm_source=qr&igsh=MXZjdXBvNmxhdnNncA==" /></svg>}
                  {social === 'youtube' && <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>}
                  {social === 'twitter' && <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-6 font-heading">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-purple-200/80 hover:text-candy-light dark:text-slate-300 dark:hover:text-candy-light text-base transition-colors flex items-center gap-3 font-body font-medium">
                    <span className="text-candy text-lg font-bold">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-6 font-heading">Our Programs</h3>
            <ul className="space-y-4">
              {programs.map((prog) => (
                <li key={prog.name}>
                  <Link to={prog.path} className="text-purple-200/80 hover:text-mint dark:text-slate-300 dark:hover:text-mint-light text-base transition-colors flex items-center gap-3 font-body font-medium">
                    <span className="text-mint text-lg font-bold">›</span> {prog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-6 font-heading">Stay Updated</h3>
            <p className="text-purple-200/80 dark:text-slate-300 text-base mb-6 font-body leading-relaxed">Subscribe to get updates about admissions and events.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-6 py-4 rounded-2xl text-base bg-white/10 text-white placeholder-purple-300/50 dark:placeholder-slate-500 border border-white/10 focus:border-candy focus:ring-1 focus:ring-candy focus:outline-none transition-colors font-body"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-4 rounded-2xl text-lg font-bold text-white transition-all bg-gradient-to-r from-candy to-lavender shadow-lg hover:shadow-candy/40"
              >
                Subscribe ✨
              </motion.button>
            </form>
            {subStatus === 'success' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-mint-light text-base mt-3 font-body font-medium">Subscribed successfully! 🎉</motion.p>
            )}
            {subStatus === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-candy text-base mt-3 font-body font-medium">Something went wrong. Try again.</motion.p>
            )}

            {/* Contact Info */}
            <div className="mt-10 space-y-4 font-body">
              <p className="text-purple-200/80 dark:text-slate-400 text-base flex items-center gap-3 font-medium">📍 123 Learning Lane, Education City</p>
              <p className="text-purple-200/80 dark:text-slate-400 text-base flex items-center gap-3 font-medium">📞 +91 98765 43210</p>
              <p className="text-purple-200/80 dark:text-slate-400 text-base flex items-center gap-3 font-medium">✉️ hello@gurukulpreschool.com</p>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-purple-300/60 dark:text-slate-500 text-base text-center font-body font-medium">
            © {new Date().getFullYear()} Gurukul Pre School. Made with 💖 for little learners.
          </p>
          <p className="text-purple-300/50 dark:text-slate-600 text-sm font-body font-medium">
            Designed with love for early childhood education
          </p>
        </div>
      </div>
    </footer>
  )
}
