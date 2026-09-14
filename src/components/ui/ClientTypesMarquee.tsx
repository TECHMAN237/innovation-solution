import { motion } from 'framer-motion'
import { clientTypes } from '../../data/content'

/**
 * Infinite horizontal marquee showing the types of clients TEKMEN builds
 * for (startups, SMEs, institutions...) instead of a "trusted by" logo
 * strip — we don't have real client logos to display honestly here.
 *
 * Technique: the list is rendered twice back to back, then the whole block
 * is animated from 0% to -50% (exactly the width of one list) — when the
 * animation loops, the 2nd copy sits exactly where the 1st was, giving the
 * illusion of a seamless, continuous scroll.
 */
const ClientTypesMarquee = () => {
  return (
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex items-center gap-10 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...clientTypes, ...clientTypes].map((client, index) => (
          <span
            key={`${client.id}-${index}`}
            className="text-gray-300 text-sm sm:text-base font-medium whitespace-nowrap shrink-0"
          >
            {client.label}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default ClientTypesMarquee
