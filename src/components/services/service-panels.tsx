import { motion } from 'framer-motion'
import { Activity, Users, TrendingUp, Smartphone, Bell, Sparkles, Bot, Zap } from 'lucide-react'

const float = (delay = 0) => ({
  animate: { y: [0, -6, 0] },
  transition: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' as const, delay },
})

const glass =
  'rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)]'

/* ---------------- Panel 1: Web Applications ---------------- */
export function WebAppPanels() {
  return (
    <div className="absolute inset-0">
      {/* Dashboard */}
      <motion.div {...float(0.3)} className={`absolute left-6 top-9 flex w-[80%] gap-2 p-3 ${glass}`}>
        <div className="flex flex-col items-center gap-3 rounded-lg bg-black/30 px-2 py-3">
          {[Activity, Users, TrendingUp].map((Icon, i) => (
            <div
              key={i}
              className={`flex h-7 w-7 items-center justify-center rounded-md ${
                i === 0 ? 'bg-[#7C3AED]/25 text-[#C4B5FD]' : 'text-white/40'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
            </div>
          ))}
        </div>
        <div className="flex-1">
          <div className="mb-2 rounded-lg border border-white/10 bg-black/25 p-2">
            <p className="text-[9px] text-white/50">Active users</p>
            <div className="flex items-end justify-between">
              <span className="text-sm font-semibold text-white">2,400</span>
              <span className="text-[10px] font-medium text-[#C4B5FD]">+12%</span>
            </div>
          </div>
          {/* mini chart */}
          <div className="rounded-lg border border-white/10 bg-black/25 p-2">
            <svg viewBox="0 0 100 34" className="h-9 w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 26 L20 20 L40 24 L60 12 L80 16 L100 6" fill="none" stroke="#C4B5FD" strokeWidth="1.5" />
              <path d="M0 26 L20 20 L40 24 L60 12 L80 16 L100 6 L100 34 L0 34 Z" fill="url(#lc)" />
            </svg>
          </div>
        </div>
      </motion.div>

      <motion.div
        {...float(1.5)}
        className={`absolute bottom-8 right-6 flex items-center gap-2 px-3 py-2 ${glass}`}
      >
        <TrendingUp className="h-4 w-4 text-[#C4B5FD]" />
        <span className="text-[11px] font-medium text-white">Growth +8%</span>
      </motion.div>
    </div>
  )
}

/* ---------------- Panel 2: Mobile Applications ---------------- */
export function MobileAppPanels() {
  return (
    <div className="absolute inset-0">
      {/* Phone frame */}
      <motion.div
        {...float(0)}
        className={`absolute left-8 top-6 w-[46%] max-w-[150px] overflow-hidden p-2.5 ${glass}`}
      >
        <div className="mb-2 flex items-center justify-between px-0.5">
          <Smartphone className="h-3.5 w-3.5 text-[#C4B5FD]" />
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
          </div>
        </div>
        <div className="mb-2 h-14 rounded-lg bg-gradient-to-br from-[#6366F1]/30 to-[#7C3AED]/10" />
        <div className="space-y-1.5">
          <div className="h-2 w-[85%] rounded-full bg-white/15" />
          <div className="h-2 w-[60%] rounded-full bg-white/10" />
        </div>
      </motion.div>

      {/* Notification bubble */}
      <motion.div
        {...float(1.1)}
        className={`absolute right-6 top-16 flex items-center gap-2 px-3 py-2 ${glass}`}
      >
        <Bell className="h-4 w-4 text-[#C4B5FD]" />
        <span className="text-[11px] font-medium text-white">New order</span>
      </motion.div>

      {/* Rating / status bubble */}
      <motion.div
        {...float(2)}
        className={`absolute bottom-8 right-6 flex items-center gap-2 px-3 py-2 ${glass}`}
      >
        <Zap className="h-4 w-4 text-[#C4B5FD]" />
        <span className="text-[11px] font-medium text-white">Synced with backend</span>
      </motion.div>
    </div>
  )
}

/* ---------------- Panel 3: AI Solutions ---------------- */
export function AISolutionPanels() {
  return (
    <div className="absolute inset-0">
      {/* Assistant panel */}
      <motion.div {...float(0.6)} className={`absolute left-6 top-10 w-[78%] p-3 ${glass}`}>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Bot className="h-3.5 w-3.5 text-[#C4B5FD]" />
            <span className="text-[11px] font-medium text-white">AI Assistant</span>
          </div>
          <span className="rounded-full border border-[#C4B5FD]/40 bg-[#7C3AED]/15 px-2 py-0.5 text-[9px] font-semibold text-[#C4B5FD]">
            Live
          </span>
        </div>
        <div className="space-y-2">
          <div className="w-[70%] rounded-lg rounded-tl-sm border border-white/10 bg-black/25 px-2.5 py-1.5 text-[9px] text-white/60">
            Analyzing your data…
          </div>
          <div className="ml-auto w-[60%] rounded-lg rounded-tr-sm bg-gradient-to-br from-[#6366F1]/50 to-[#7C3AED]/40 px-2.5 py-1.5 text-[9px] text-white">
            Here's what I found ✨
          </div>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-white/10 bg-black/25 p-2">
            <p className="text-[8px] text-white/40">Accuracy</p>
            <p className="text-[11px] font-semibold text-[#C4B5FD]">96%</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/25 p-2">
            <p className="text-[8px] text-white/40">Tasks automated</p>
            <p className="text-[11px] font-semibold text-white">1.2K</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/25 p-2">
            <p className="text-[8px] text-white/40">Time saved</p>
            <p className="text-[11px] font-semibold text-white">40%</p>
          </div>
        </div>
      </motion.div>

      {/* Floating spark bubble */}
      <motion.div
        {...float(1.8)}
        className={`absolute bottom-8 right-6 flex items-center gap-2 px-3 py-2 ${glass}`}
      >
        <Sparkles className="h-4 w-4 text-[#C4B5FD]" />
        <span className="text-[11px] font-medium text-white">Smart recommendations</span>
      </motion.div>
    </div>
  )
}
