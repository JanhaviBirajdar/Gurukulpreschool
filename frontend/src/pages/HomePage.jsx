import { motion } from 'framer-motion'
import { pageTransition } from '../utils/animations'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'

export default function HomePage() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <Features />
    </motion.div>
  )
}
