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
    <footer style={{ paddingBottom: '1rem', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1rem' }} className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-950 to-slate-900 dark:from-surface-dark dark:via-slate-900 dark:to-black">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ transform: 'translateY(-98%)' }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" className="fill-purple-900 dark:fill-surface-dark" />
        </svg>
      </div>

      <div className="w-full mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
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
              {[
                { name: 'facebook', href: 'https://www.facebook.com/share/1BXo12VPfL/', icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
                { name: 'instagram', href: 'https://www.instagram.com/gurukul.preschooltalegao?utm_source=qr&igsh=MXZjdXBvNmxhdnNncA==', icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white/80 hover:text-white bg-white/10 dark:bg-white/5 hover:bg-white/20 transition-colors shadow-sm"
                >
                  {social.icon}
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                style={{ padding: '16px 36px', fontSize: '18px' }}
                className="w-full rounded-full font-bold transition-all duration-300 font-body flex items-center justify-center gap-3 shadow-md bg-gradient-to-r from-candy via-peach to-sunny text-white shadow-candy/40 border-transparent hover:shadow-lg hover:-translate-y-1"
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
              <p className="text-purple-200/80 dark:text-slate-400 text-base flex items-center gap-3 font-medium">📍 Anand Nagar, Manohar Nagar, Talegaon Dabhade, Pune 410506</p>
              <p className="text-purple-200/80 dark:text-slate-400 text-base flex items-center gap-3 font-medium">📞 +91 8177918807</p>
              <p className="text-purple-200/80 dark:text-slate-400 text-base flex items-center gap-3 font-medium">✉️ gurukul.talegao@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-purple-300/60 dark:text-slate-500 text-base text-center font-body font-medium">
            © {new Date().getFullYear()} Gurukul Pre School. Made by <a href='www.om-tech-solutions.vercel.app' >OmTech solutions</a> .
          </p>
          <p className="text-purple-300/50 dark:text-slate-600 text-sm font-body font-medium">
            Designed with love for early childhood education
          </p>
        </div>
      </div>
    </footer>
  )
}
