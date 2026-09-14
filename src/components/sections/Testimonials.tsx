import { motion } from 'framer-motion'
import { Quote as QuoteIcon } from 'lucide-react'
import { TestimonialCard } from '../ui/TestimonialCard'
import { testimonials } from '../../data/content'

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-[#0B0F19] py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.header
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#C4B5FD]/20 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#C4B5FD] glow-badge">
            <QuoteIcon className="h-3.5 w-3.5 text-[#C4B5FD] glow-icon" />
            Testimonials
          </span>
          <h2
            id="testimonials-title"
            className="max-w-2xl text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]"
          >
            What our clients say about us
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-[#A1A1AA]">
            Entrepreneurs and organizations across Cameroon trust us to turn their ideas into
            real digital products.
          </p>
        </motion.header>

        {/* Mobile: stacked sticky cards, iOS-style notification pile */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="mt-12 h-80 overflow-y-auto rounded-2xl [&::-webkit-scrollbar]:hidden sm:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="sticky mb-4 rounded-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.65)]"
              style={{ top: `${index * 14}px`, zIndex: index + 1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </motion.div>

        {/* sm+: classic grid with staggered slide-in */}
        <ul className="mt-12 hidden gap-5 sm:mt-16 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.li
              key={testimonial.id}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="flex"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Testimonials
