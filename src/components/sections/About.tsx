import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

import { TeamCard } from '../ui/TeamCard'
import {
  companyInfo,
  featuredServices,
  compactServices,
  differentiators,
  teamMembers,
  teamCapabilities,
} from '../../data/content'
import teamCollaborationBanner from '../../assets/images/cf502449-d582-4201-9739-f2827bf0cde5.png'

// Representative 4-pillar selection matching the reference layout
const previewServices = [
  featuredServices[0], // Web Applications
  featuredServices[1], // Mobile Applications
  featuredServices[2], // AI Solutions
  compactServices[0],  // IoT & Connected Systems
]

const About = () => {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-[#0B0F19] py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {/* Company introduction */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#C4B5FD]/20 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#C4B5FD] glow-badge">
            <Users className="h-3.5 w-3.5 text-[#C4B5FD] glow-icon" />
            About Us
          </span>
          <h2
            id="about-title"
            className="max-w-2xl text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]"
          >
            Who is {companyInfo.name}?
          </h2>
          <p className="max-w-2xl text-[15px] leading-relaxed text-[#A1A1AA] md:text-base">
            {companyInfo.description}
          </p>
        </motion.header>

        {/* What we do, at a glance (aligned to reference 4-card grid) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="mt-14 md:mt-16"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            What we do
          </h3>

          {/* Mobile: stacked sticky cards */}
          <div
            className="mt-6 h-80 overflow-y-auto rounded-2xl [&::-webkit-scrollbar]:hidden sm:hidden"
            style={{ scrollbarWidth: 'none' }}
          >
            {previewServices.map((service, index) => (
              <div
                key={service.id}
                className="sticky mb-4 rounded-2xl border border-[#1e293b] bg-[#101524] p-5 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.65)]"
                style={{ top: `${index * 14}px`, zIndex: index + 1 }}
              >
                <h4 className="text-base font-semibold text-white">{service.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{service.description}</p>
              </div>
            ))}
          </div>

          {/* sm+: classic grid matching reference 4 columns */}
          <div className="mt-6 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {previewServices.map((service) => (
              <div key={service.id} className="rounded-2xl border border-[#1e293b] bg-[#101524] p-5">
                <h4 className="text-base font-semibold text-white">{service.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{service.description}</p>
              </div>
            ))}
          </div>



        </motion.div>

        {/* Why choose us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="mt-14 md:mt-16"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Why choose us
          </h3>

          {/* Mobile: stacked sticky cards */}
          <div
            className="mt-6 h-80 overflow-y-auto rounded-2xl [&::-webkit-scrollbar]:hidden sm:hidden"
            style={{ scrollbarWidth: 'none' }}
          >
            {differentiators.map((point, index) => (
              <div
                key={point.id}
                className="sticky mb-4 rounded-2xl border border-[#1e293b] bg-[#101524] p-5 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.65)]"
                style={{ top: `${index * 14}px`, zIndex: index + 1 }}
              >
                <h4 className="text-base font-semibold text-[#C4B5FD]">{point.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{point.description}</p>
              </div>
            ))}
          </div>

          {/* sm+: classic grid */}
          <div className="mt-6 hidden gap-4 sm:grid sm:grid-cols-3">
            {differentiators.map((point) => (
              <div key={point.id} className="rounded-2xl border border-[#1e293b] p-5">
                <h4 className="text-base font-semibold text-[#C4B5FD]">{point.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{point.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full-bleed edge-to-edge photographic section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-none my-14 md:my-18 overflow-hidden m-0 p-0"
        style={{ width: '100%', maxWidth: 'none' }}
      >
        <div className="relative w-full">
          <img
            src={teamCollaborationBanner}
            alt="Technology team collaborating at TEKMEN Innovation Solutions"
            className="content-image w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover object-center max-w-none block m-0 p-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]/30 pointer-events-none" />
        </div>
      </motion.div>

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {/* Team cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            The team behind {companyInfo.name}
          </h3>

          <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {teamMembers.map((member) => (
              <li key={member.id}>
                <TeamCard member={member} />
              </li>
            ))}
          </ul>

          {/* Capabilities we mobilize per project, depending on scope */}
          <div className="mt-8 rounded-2xl border border-[#1e293b] bg-[#101524] p-6">
            <p className="text-sm text-[#94A3B8]">
              Depending on the project, we bring together a multidisciplinary team:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {teamCapabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-300"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
