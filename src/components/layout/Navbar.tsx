import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo/tekmen-logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-20 w-full"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        {/* Logo (left) */}
        <div className="flex items-center justify-start">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src={logo}
              alt="TEKMEN Innovation Solutions"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <span className="hidden sm:block text-sm font-semibold tracking-tight text-white leading-tight">
              TEKMEN
              <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-[#C4B5FD]">
                Innovation Solutions
              </span>
            </span>
          </Link>
        </div>

        {/* Center nav pill — md and up, locked to the exact visual center axis */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={
                    isActive
                      ? 'text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#7C3AED] rounded-full px-4 py-1.5 transition-all'
                      : 'text-sm font-medium text-gray-300 hover:text-white px-4 py-1.5 transition-colors'
                  }
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Right CTA & mobile toggle */}
        <div className="flex items-center justify-end gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-block px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#7C3AED] text-white font-semibold text-sm shadow-[0_8px_30px_-8px_rgba(124,58,237,0.7)] hover:scale-105 transition-transform duration-300"
          >
            Start a Project
          </Link>

          {/* Hamburger — mobile/tablet only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white shrink-0"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0B0F19]/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={
                      isActive
                        ? 'text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#7C3AED] rounded-full px-4 py-2.5 text-center'
                        : 'text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full px-4 py-2.5 text-center transition-colors'
                    }
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#7C3AED] text-white font-semibold text-sm text-center"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
