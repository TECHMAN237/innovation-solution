import { motion } from 'framer-motion'
import { Workflow } from 'lucide-react'
import { ProcessCard } from '../ui/ProcessCard'
import { processSteps } from '../../data/content'

const Process = () => {
  return (
    <section id="approach" aria-labelledby="approach-title" className="bg-[#0B0F19] py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#C4B5FD]/20 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#C4B5FD] glow-badge">
            <Workflow className="h-3.5 w-3.5 text-[#C4B5FD] glow-icon" />
            Our Approach & Methodology
          </span>
          <h2
            id="approach-title"
            className="max-w-2xl text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]"
          >
            We don't build technology for its own sake
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-[#A1A1AA]">
            We build technology that solves real problems. Every project follows a disciplined
            five-stage engineering cycle, whatever the stack or platform.
          </p>
        </motion.header>

        {/* Desktop / Tablet: Connected Horizontal Pipeline */}
        <div className="mt-14 hidden sm:block">
          {/* Connecting line on large screens */}
          <div className="hidden lg:flex items-center justify-between mb-8 px-8 relative">
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#6366F1]/30 via-[#7C3AED]/50 to-[#28B6FF]/30" />
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center gap-2"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C4B5FD]/40 bg-[#0B0F19] text-xs font-mono font-bold text-[#C4B5FD] glow-badge">
                  {index + 1}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
                className="flex"
              >
                <ProcessCard step={step} index={index} />
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile: Vertical Engineering Roadmap Timeline (No stacked cards) */}
        <div className="mt-12 sm:hidden relative pl-6 border-l-2 border-[#7C3AED]/30 space-y-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] top-4 flex h-6 w-6 items-center justify-center rounded-full border border-[#C4B5FD]/50 bg-[#0B0F19] text-[10px] font-mono font-bold text-[#C4B5FD] shadow-[0_0_10px_rgba(196,181,253,0.5)]">
                {index + 1}
              </div>
              <ProcessCard step={step} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
