import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import ArcGlow from '../ui/ArcGlow'
import ClientTypesMarquee from '../ui/ClientTypesMarquee'
import workspacePhoto from '../../assets/images/ece02439-9423-4b44-aaa2-11e74c1613ab.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
}

const Hero = () => {
  return (
    <section className="relative w-full max-w-none h-[100dvh] bg-[#0B0F19] overflow-hidden flex flex-col m-0 p-0">
      <div className="relative shrink-0 w-full">
        <div className="absolute inset-0">
          <ArcGlow />
        </div>

        {/* Subtle atmospheric contrast glow behind the central heading */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none -z-0 flex items-center justify-center"
        >
          <div className="w-[520px] h-[190px] max-w-full bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.14)_0%,rgba(124,58,237,0.06)_40%,transparent_75%)] blur-2xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl lg:max-w-4xl mx-auto pt-24 sm:pt-28 pb-6 sm:pb-7"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-medium mb-3 sm:mb-4"
            >
              TECHNOLOGY BRANCH OF TEKMEN REVOLUTION — BUEA, CAMEROON
            </motion.p>

            <motion.h1 variants={itemVariants} className="tracking-tight">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] [text-shadow:0_2px_8px_rgba(0,0,0,0.45)]">
                We turn ideas into
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] [text-shadow:0_2px_8px_rgba(0,0,0,0.45)]">
                real technology.
              </span>
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* Visual area: full viewport width, left edge to right edge without margin */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-none flex-1 min-h-0 m-0 p-0 overflow-hidden"
        style={{ width: '100%', maxWidth: 'none' }}
      >
        <div className="relative w-full h-full">
          <img
            src={workspacePhoto}
            alt="TEKMEN Innovation Solutions technology workspace"
            className="hero-image w-full h-full object-cover object-center absolute inset-0 max-w-none block m-0 p-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-[#0B0F19] pointer-events-none" />

          {/* Scroll button, anchored to the bottom of the visual */}
          <motion.a
            href="#services"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-24 sm:bottom-28 lg:bottom-32 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors z-10 backdrop-blur-sm"
            aria-label="Scroll to services"
          >
            <ArrowDown className="text-white" size={18} />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute bottom-0 left-0 right-0 pb-7 sm:pb-8 z-10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-xs sm:text-sm text-gray-300 uppercase tracking-widest mb-3 sm:mb-4 font-medium">
                Who we build for
              </p>
              <ClientTypesMarquee />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
