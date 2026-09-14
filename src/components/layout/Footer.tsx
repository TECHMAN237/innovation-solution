import { Link } from 'react-router-dom'
import { Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import logo from '../../assets/logo/tekmen-logo.png'
import { companyInfo, contactInfo } from '../../data/content'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B0F19] border-t border-white/10">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + description */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <img src={logo} alt="TEKMEN Innovation Solutions" className="h-10 w-10 object-contain" />
              <span className="text-sm font-semibold tracking-tight text-white">
                TEKMEN
                <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-[#C4B5FD]">
                  Innovation Solutions
                </span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {companyInfo.description}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
              Navigation
            </h3>
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-gray-400 hover:text-white transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
              Contact
            </h3>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors w-fit"
            >
              <MessageCircle size={16} className="text-[#C4B5FD] shrink-0" />
              {contactInfo.whatsappDisplay || '+237 674 264 026'}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors w-fit"
            >
              <Mail size={16} className="text-[#C4B5FD] shrink-0" />
              {contactInfo.email}
            </a>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock size={16} className="text-[#C4B5FD] shrink-0" />
              <span>Available {contactInfo.hours}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={16} className="text-[#C4B5FD] shrink-0" />
              <span>{contactInfo.address}, {contactInfo.city}</span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 italic">
            Part of {companyInfo.parentBrand} — {companyInfo.baseline}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
