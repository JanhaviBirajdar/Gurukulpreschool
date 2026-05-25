import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const botResponses = {
  'programs': 'We offer 4 programs:\n🧸 Play Group (1.5-2.5 yrs)\n🌈 Nursery (2.5-3.5 yrs)\n📚 Junior KG (3.5-4.5 yrs)\n🎓 Senior KG (4.5-5.5 yrs)',
  'timings': '🕐 School timings: Monday to Saturday, 8:00 AM - 2:00 PM.\nOffice hours: 8:00 AM - 4:00 PM.',
  'admission': '📋 Admissions are open! Please visit our Contact page or call us at +91 98765 43210 to schedule a visit.',
  'fees': '💰 Fee details vary by program. Please contact our office at +91 98765 43210 for the latest fee structure.',
  'location': '📍 We are located at 123 Learning Lane, Education City, India 411001.',
  'default': "I'm a friendly Gurukul helper! 🌟 Try asking about:\n• Programs\n• Timings\n• Admission\n• Fees\n• Location"
}

function getResponse(msg) {
  const lower = msg.toLowerCase()
  if (lower.includes('program') || lower.includes('course') || lower.includes('class')) return botResponses.programs
  if (lower.includes('time') || lower.includes('hour') || lower.includes('schedule')) return botResponses.timings
  if (lower.includes('admiss') || lower.includes('enroll') || lower.includes('register')) return botResponses.admission
  if (lower.includes('fee') || lower.includes('cost') || lower.includes('price')) return botResponses.fees
  if (lower.includes('location') || lower.includes('address') || lower.includes('where')) return botResponses.location
  if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) return "Hello! 👋 Welcome to Gurukul Pre School! How can I help you today? 🌈"
  return botResponses.default
}

export default function Chatbot() {
  const { isDark } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi there! 👋 I'm Guru, your friendly preschool assistant! How can I help you? 🌟" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)

  const send = () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setMessages(m => [...m, { from: 'user', text: userMsg }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages(m => [...m, { from: 'bot', text: getResponse(userMsg) }])
      setTyping(false)
    }, 800)
  }

  return (
    <>
      {/* Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: isOpen ? 0 : 3, type: 'spring' }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 left-6 sm:left-8 z-40 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/40 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white"
            aria-label="Open chatbot"
          >
            <span className="text-3xl">🤖</span>
            <span className="absolute 0 top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white dark:border-surface-dark rounded-full"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-6 sm:left-10 z-50 w-[90vw] sm:w-[450px] md:w-[480px] h-[75vh] md:h-[650px] max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col bg-[#0F1021] border border-white/10"
          >
            {/* Header */}
            <div className="px-8 py-6 sm:px-10 sm:py-7 flex items-center justify-between bg-gradient-to-r from-[#6366f1] to-[#06b6d4] shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl shadow-sm">🤖</div>
                <p className="text-white font-bold text-2xl tracking-wide font-heading">Guru Assistant</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/80 transition-colors p-2 -mr-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  
                  {msg.from === 'user' ? (
                    <div className="px-6 py-3 text-[15px] leading-relaxed whitespace-pre-line font-body bg-[#6366f1] text-white rounded-full max-w-[80%]">
                      {msg.text}
                    </div>
                  ) : (
                    <div className="border-l-[3px] border-[#06b6d4] pl-5 pr-2 py-1 max-w-[85%]">
                      <p className="text-[15px] leading-[1.75] whitespace-pre-line font-body text-white/90">
                        {msg.text}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="border-l-[3px] border-[#06b6d4] pl-5 py-2 flex items-center gap-2">
                    {[0, 1, 2].map(i => (
                      <motion.div key={i} animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-white/60" />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 sm:p-8 bg-[#0F1021] border-t border-white/5 shrink-0">
              <div className="flex items-center gap-4">
                <input value={input} onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send()}
                  placeholder="Type your message..."
                  className="flex-1 px-7 py-5 rounded-full text-[17px] bg-[#1A1A32] text-white placeholder-white/40 border-none focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50 font-body shadow-inner"
                />
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  onClick={send}
                  disabled={!input.trim()}
                  className="w-16 h-16 rounded-full text-white flex items-center justify-center bg-[#6366f1] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-opacity shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
