import { motion } from 'framer-motion'
import { pageTransition } from '../utils/animations'
import Hero from '../components/home/Hero'
import FounderSection from '../components/home/FounderSection'
import Features from '../components/home/Features'
import ScrollingGallery from '../components/home/ScrollingGallery'
import ParentReviews from '../components/home/ParentReviews'

export default function HomePage() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <FounderSection />
      <Features />
      <ScrollingGallery />
      {/*<ParentReviews />*/}
    </motion.div>
  )
}
