import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface CompactServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export function CompactServiceCard({ icon: Icon, title, description, index }: CompactServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7C3AED]/25 hover:bg-white/[0.04]"
    >
      <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 -translate-y-0.5 translate-x-0.5 text-white/30 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[#C4B5FD] group-hover:opacity-100" />
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
        <Icon className="h-5 w-5 text-[#C4B5FD] glow-icon" />
      </div>
      <h4 className="text-base font-bold text-white">{title}</h4>
      <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{description}</p>
    </motion.div>
  )
}
