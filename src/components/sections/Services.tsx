import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Cpu, Layers, Code2, ArrowRight } from 'lucide-react'
import { FeaturedServiceCard } from '../services/FeaturedServiceCard'
import { CompactServiceCard } from '../services/CompactServiceCard'
import { WebAppPanels, MobileAppPanels, AISolutionPanels } from '../services/service-panels'
import { featuredServices, compactServices } from '../../data/content'

const featuredPanels = [<WebAppPanels key="web" />, <MobileAppPanels key="mobile" />, <AISolutionPanels key="ai" />]
const compactIcons = [Cpu, Layers, Code2]

interface ServicesProps {
  /** On the homepage: shows only the 3 featured services + a "See more"
   * button linking to /services. On the dedicated Services page, everything
   * is shown (featured + compact), without the button. */
  preview?: boolean
}

const Services = ({ preview = false }: ServicesProps) => {
  return (
    <section id="services" className="relative w-full bg-[#0B0F19] px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C4B5FD]/20 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#C4B5FD] glow-badge">
              <Zap className="h-3.5 w-3.5 text-[#C4B5FD] glow-icon" />
              Services
            </span>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              We Build Technology That Solves Real Problems.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col items-start gap-5 md:max-w-xs md:items-end md:text-right"
          >
            <p className="text-sm leading-relaxed text-gray-400">
              TEKMEN Innovation Solutions accompanies startups, SMEs and organizations from the first idea
              to a live product — web, mobile, AI or IoT.
            </p>
            <Link
              to="/contact"
              className="rounded-full bg-gradient-to-r from-[#6366F1] to-[#7C3AED] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(124,58,237,0.7)] transition-transform duration-200 hover:scale-[1.03]"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>

        {/* Featured services grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredServices.map((s, i) => (
            <FeaturedServiceCard
              key={s.id}
              title={s.title}
              description={s.description}
              panels={featuredPanels[i]}
              index={i}
            />
          ))}
        </div>

        {/* Compact services grid: hidden on the homepage preview */}
        {!preview && (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {compactServices.map((s, i) => (
              <CompactServiceCard
                key={s.id}
                icon={compactIcons[i]}
                title={s.title}
                description={s.description}
                index={i}
              />
            ))}
          </div>
        )}

        {/* "See more" button: homepage only, links to the full Services page */}
        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-10 flex justify-center"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#7C3AED]/60 hover:bg-white/[0.05]"
            >
              See all our services
              <ArrowRight className="h-4 w-4 text-[#C4B5FD] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Services
