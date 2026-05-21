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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br from-candy to-lavender shadow-lg shadow-candy/20">G</div>
              <span className="font-extrabold text-xl text-white font-heading">Gurukul <span className="text-lavender-light">Pre School</span></span>
            </div>
            <p className="text-purple-200/80 dark:text-slate-300 text-sm leading-relaxed mb-6 font-body">
              Where little minds bloom with joy and wonder. We provide a safe, creative, and nurturing environment for early childhood education.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {['facebook', 'instagram', 'youtube', 'twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white/80 hover:text-white bg-white/10 dark:bg-white/5 hover:bg-white/20 transition-colors"
                >
                  {social === 'facebook' && <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>}
                  {social === 'instagram' && <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>}
                  {social === 'youtube' && <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>}
                  {social === 'twitter' && <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-purple-200/70 hover:text-candy-light dark:text-slate-400 dark:hover:text-candy-light text-sm transition-colors flex items-center gap-2 font-body">
                    <span className="text-candy">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-heading">Our Programs</h3>
            <ul className="space-y-2.5">
              {programs.map((prog) => (
                <li key={prog.name}>
                  <Link to={prog.path} className="text-purple-200/70 hover:text-mint dark:text-slate-400 dark:hover:text-mint-light text-sm transition-colors flex items-center gap-2 font-body">
                    <span className="text-mint">›</span> {prog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-heading">Stay Updated</h3>
            <p className="text-purple-200/70 dark:text-slate-300 text-sm mb-4 font-body">Subscribe to get updates about admissions and events.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-2.5 rounded-xl text-sm bg-white/10 text-white placeholder-purple-300/50 dark:placeholder-slate-500 border border-white/10 focus:border-candy focus:ring-1 focus:ring-candy focus:outline-none transition-colors font-body"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all bg-gradient-to-r from-candy to-lavender shadow-md hover:shadow-candy/30"
              >
                Subscribe ✨
              </motion.button>
            </form>
            {subStatus === 'success' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-mint-light text-sm mt-2 font-body">Subscribed successfully! 🎉</motion.p>
            )}
            {subStatus === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-candy text-sm mt-2 font-body">Something went wrong. Try again.</motion.p>
            )}

            {/* Contact Info */}
            <div className="mt-6 space-y-2 font-body">
              <p className="text-purple-200/70 dark:text-slate-400 text-sm flex items-center gap-2">📍 123 Learning Lane, Education City</p>
              <p className="text-purple-200/70 dark:text-slate-400 text-sm flex items-center gap-2">📞 +91 98765 43210</p>
              <p className="text-purple-200/70 dark:text-slate-400 text-sm flex items-center gap-2">✉️ hello@gurukulpreschool.com</p>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-purple-300/50 dark:text-slate-500 text-sm text-center font-body">
            © {new Date().getFullYear()} Gurukul Pre School. Made with 💖 for little learners.
          </p>
          <p className="text-purple-300/40 dark:text-slate-600 text-xs font-body">
            Designed with love for early childhood education
          </p>
        </div>
      </div>
    </footer>
  )
}
