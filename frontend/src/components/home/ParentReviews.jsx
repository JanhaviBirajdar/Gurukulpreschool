import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote, Heart } from 'lucide-react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const reviews = [
  { 
    name: 'Aarti Mehta', 
    child: 'Mother of Aarav (Nursery)', 
    text: 'My son absolutely loves going to Gurukul! The teachers are so caring and the activities are wonderful. He has grown so much in confidence and social skills.', 
    rating: 5,
    bgColor: 'bg-candy/5 dark:bg-candy/2',
    borderColor: 'border-candy/20',
    initialColor: 'bg-candy text-white'
  },
  { 
    name: 'Rajesh Kumar', 
    child: 'Father of Priya (Junior KG)', 
    text: 'The best preschool experience we could have asked for. The curriculum is perfectly balanced between structured learning and playful discovery. Highly recommended!', 
    rating: 5,
    bgColor: 'bg-mint/5 dark:bg-mint/2',
    borderColor: 'border-mint/20',
    initialColor: 'bg-mint text-white'
  },
  { 
    name: 'Sneha Patel', 
    child: 'Mother of Rohan (Play Group)', 
    text: 'Gurukul has been a second home for our son. The safe, CCTV monitored environment and creative approach to learning make it stand out from any other preschool.', 
    rating: 5,
    bgColor: 'bg-lavender/5 dark:bg-lavender/2',
    borderColor: 'border-lavender/20',
    initialColor: 'bg-lavender text-white'
  },
  { 
    name: 'Vikram Singh', 
    child: 'Father of Ananya (Senior KG)', 
    text: 'We are so impressed with the personalized focus. The phonics program and arts are exceptional. Our daughter is perfectly ready for primary school now.', 
    rating: 5,
    bgColor: 'bg-sky/5 dark:bg-sky/2',
    borderColor: 'border-sky/20',
    initialColor: 'bg-sky text-white'
  },
  { 
    name: 'Priya Reddy', 
    child: 'Mother of Twins (Nursery)', 
    text: 'The teachers truly care about each child’s unique pace. My twins have flourished here with the individual attention and loving environment. Thank you, Gurukul!', 
    rating: 5,
    bgColor: 'bg-sunny/5 dark:bg-sunny/2',
    borderColor: 'border-sunny/20',
    initialColor: 'bg-sunny text-white'
  }
]

export default function ParentReviews() {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-gradient-to-b from-transparent via-sky/5 to-transparent dark:via-sky/2 relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-lavender/10 dark:bg-lavender/5 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full text-base font-bold mb-6 bg-white/50 backdrop-blur-md border border-black/5 dark:bg-surface-dark/50 dark:border-white/10 text-text-primary dark:text-text-primary-dark font-body shadow-sm">
              ❤️ Parent Stories
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading text-text-primary dark:text-text-primary-dark tracking-tight">
              Loved by <span className="gradient-text">Parents</span>
            </h2>
            <p className="text-center text-lg md:text-xl max-w-3xl font-body text-text-secondary dark:text-text-secondary-dark font-medium leading-relaxed">
              Read the heartwarming experiences of families who found their second home and a bright start at Gurukul Pre School.
            </p>
          </motion.div>
        </div>

        {/* Carousel Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative px-2 sm:px-4"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`h-full flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-surface-dark/60 backdrop-blur-md border border-white/50 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 relative group overflow-hidden`}
                >
                  {/* Subtle color highlight ribbon */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-candy via-lavender to-sky opacity-80`} />

                  <Quote className="absolute top-8 right-8 w-14 h-14 text-lavender/10 dark:text-lavender/5 rotate-180 pointer-events-none" />

                  <div className="flex flex-col items-start">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6 text-sunny">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-sunny stroke-sunny" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-text-secondary dark:text-text-secondary-dark text-base md:text-lg leading-relaxed font-body font-medium italic mb-8">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Parent Info & Avatar Initial Badge */}
                  <div className="flex items-center gap-4 pt-6 border-t border-black/5 dark:border-white/5 mt-auto">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-extrabold text-lg shadow-inner ${review.initialColor}`}>
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-lg md:text-xl font-heading text-text-primary dark:text-text-primary-dark">
                        {review.name}
                      </h4>
                      <p className="text-sm font-semibold text-candy font-body">
                        {review.child}
                      </p>
                    </div>
                  </div>

                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  )
}
