import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FeaturedServiceCardProps {
  title: string
  description: string
  panels: ReactNode
  index: number
}

export function FeaturedServiceCard({ title, description, panels, index }: FeaturedServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/30 hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.35)]"
    >
      {/* Visual area */}
      <div className="relative h-[300px] overflow-hidden">
        {/* Abstract blue-violet backdrop, blurred */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_120%,rgba(99,102,241,0.35),rgba(124,58,237,0.08)_45%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_20%,rgba(167,139,250,0.14),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-black/20" />
        {panels}
      </div>

      {/* Text area */}
      <div className="border-t border-white/10 bg-white/[0.02] p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    </motion.article>
  )
}
