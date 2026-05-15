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
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: 'linear-gradient(135deg, #A78BFA, #FF6B9D)' }}
        aria-label="Open chatbot"
      >
        <span className="text-2xl">{isOpen ? '✕' : '🤖'}</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-40 right-6 z-50 w-80 sm:w-96 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              maxHeight: '450px',
              background: isDark ? '#1A1B2E' : '#FFFFFF',
              border: `2px solid ${isDark ? 'rgba(167,139,250,0.2)' : 'rgba(167,139,250,0.15)'}`,
            }}
          >
            {/* Header */}
            <div className="px-5 py-4 flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg, #A78BFA, #FF6B9D)' }}>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">🤖</div>
              <div>
                <p className="text-white font-bold text-sm" style={{ fontFamily: 'Nunito' }}>Guru - School Assistant</p>
                <p className="text-white/70 text-xs" style={{ fontFamily: 'Quicksand' }}>Online • Here to help!</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: '280px' }}>
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line"
                    style={{
                      background: msg.from === 'user'
                        ? 'linear-gradient(135deg, #FF6B9D, #A78BFA)'
                        : isDark ? 'rgba(37,38,64,0.8)' : '#F3F0FF',
                      color: msg.from === 'user' ? 'white' : isDark ? '#F1E8FF' : '#2D1B4E',
                      fontFamily: 'Quicksand', fontWeight: 500,
                      borderBottomRightRadius: msg.from === 'user' ? '4px' : '16px',
                      borderBottomLeftRadius: msg.from === 'bot' ? '4px' : '16px',
                    }}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 rounded-2xl flex gap-1"
                    style={{ background: isDark ? 'rgba(37,38,64,0.8)' : '#F3F0FF' }}>
                    {[0, 1, 2].map(i => (
                      <motion.div key={i} animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, delay: i * 0.15, repeat: Infinity }}
                        className="w-2 h-2 rounded-full" style={{ background: '#A78BFA' }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#F0E6FF' }}>
              <div className="flex gap-2">
                <input value={input} onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:border-[#A78BFA] transition-colors"
                  style={{
                    background: isDark ? 'rgba(37,38,64,0.6)' : '#F8F4FF',
                    color: isDark ? '#F1E8FF' : '#2D1B4E',
                    borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#E5E7EB',
                    fontFamily: 'Quicksand',
                  }} />
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  onClick={send}
                  className="px-4 py-2.5 rounded-xl text-white font-bold text-sm"
                  style={{ background: 'linear-gradient(135deg, #FF6B9D, #A78BFA)', fontFamily: 'Quicksand' }}>
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
