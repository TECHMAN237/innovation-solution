import type { ProcessStep } from '../../types'
import { CheckCircle2 } from 'lucide-react'

interface ProcessCardProps {
  step: ProcessStep
  index?: number
}

export function ProcessCard({ step }: ProcessCardProps) {
  return (
    <article className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#101524]/90 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C4B5FD]/40 hover:shadow-[0_12px_35px_-10px_rgba(124,58,237,0.35)]">
      {/* Top row: Number and glowing status */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-2xl font-bold text-[#C4B5FD] neon-text tracking-wider">
            {step.number}
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C4B5FD]/20 bg-[#7C3AED]/15 text-[#C4B5FD] glow-badge">
            <CheckCircle2 className="h-3.5 w-3.5" />
          </span>
        </div>

        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#C4B5FD] transition-colors">
          {step.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
          {step.description}
        </p>
      </div>

      {/* Subtle bottom tech accent bar */}
      <div className="mt-6 h-1 w-8 rounded-full bg-white/10 transition-all duration-300 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#6366F1] group-hover:via-[#7C3AED] group-hover:to-[#C4B5FD]" />
    </article>
  )
}
