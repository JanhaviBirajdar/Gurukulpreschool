import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>Gurukul Pre School — Where Little Minds Bloom in Talegaon</title>
        <meta name="description" content="Gurukul Pre School in Talegaon — nurturing young minds since 2019 with creative learning, a safe environment, and qualified teachers. Play Group to Senior KG. 1900+ happy students." />
        <link rel="canonical" href="https://gurukulschooltalegaon.in/" />
      </Helmet>
      <Hero />
      <FounderSection />
      <Features />
      <ScrollingGallery />
      <ParentReviews />
    </motion.div>
  )
}

