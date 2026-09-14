import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Clock, Send, Mail } from 'lucide-react'
import { contactInfo } from '../../data/content'

const whatsappBaseUrl = `https://wa.me/${contactInfo.whatsapp}`

const Contact = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const text = `Hi TEKMEN Innovation Solutions, my name is ${name || '—'}.\n\n${message}`
    const url = `${whatsappBaseUrl}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-[#0B0F19] py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#C4B5FD]/20 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#C4B5FD] glow-badge">
            <Mail className="h-3.5 w-3.5 text-[#C4B5FD] glow-icon" />
            Contact
          </span>
          <h2
            id="contact-title"
            className="max-w-2xl text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]"
          >
            Let's talk about your project
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-[#A1A1AA]">
            Tell us about your idea or problem — whatever stage it's at. We'll get back to you quickly
            to figure out the right way to build it.
          </p>
        </motion.header>

        <div className="mt-14 grid grid-cols-1 gap-8 md:mt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          {/* Contact info column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col gap-4"
          >
            <a
              href={whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#6366F1] to-[#7C3AED] p-5 text-white transition-transform duration-300 hover:-translate-y-1 shadow-[0_8px_30px_-8px_rgba(124,58,237,0.7)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.1em]">
                  WhatsApp
                </span>
                <span className="block text-sm font-bold text-white">
                  {contactInfo.whatsappDisplay || '+237 674 264 026'}
                </span>
                <span className="block text-xs text-white/80">Chat with us directly</span>
              </span>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-[#1e293b] bg-[#101524] p-5 transition-colors duration-300 hover:border-[#7C3AED]/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#161b2c] border border-white/5">
                <Mail className="size-5 text-[#C4B5FD] glow-icon" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.1em] text-white">
                  Email
                </span>
                <span className="mt-1 block text-sm font-medium leading-relaxed text-[#94A3B8] group-hover:text-white transition-colors">
                  {contactInfo.email}
                </span>
              </span>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-[#1e293b] bg-[#101524] p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#161b2c] border border-white/5">
                <Clock className="size-5 text-[#C4B5FD] glow-icon" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.1em] text-white">
                  Opening Hours
                </span>
                <span className="mt-1 block text-sm font-medium leading-relaxed text-white">
                  {contactInfo.hours}
                </span>
                <span className="block text-xs text-[#94A3B8]">Round-the-clock availability</span>
              </span>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-[#1e293b] bg-[#101524] p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#161b2c] border border-white/5">
                <MapPin className="size-5 text-[#C4B5FD] glow-icon" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.1em] text-white">
                  Location
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-[#94A3B8]">
                  Buea, Cameroon
                </span>
              </span>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="flex flex-col gap-5 rounded-2xl border border-[#1e293b] bg-[#101524] p-6 md:p-8"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-sm font-medium text-white">
                Your name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="E.g. Jane Doe"
                className="rounded-xl border border-[#1e293b] bg-[#0B0F19] px-4 py-3 text-sm text-white placeholder:text-[#64748B] outline-none transition-colors focus:border-[#7C3AED]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-sm font-medium text-white">
                Your message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Describe your idea or problem: type of solution, timeline, approximate budget..."
                className="resize-none rounded-xl border border-[#1e293b] bg-[#0B0F19] px-4 py-3 text-sm text-white placeholder:text-[#64748B] outline-none transition-colors focus:border-[#7C3AED]"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#7C3AED] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(124,58,237,0.7)] transition-transform duration-300 hover:scale-[1.02]"
            >
              Send on WhatsApp
              <Send className="size-4" aria-hidden="true" />
            </button>

            <p className="text-xs leading-relaxed text-[#94A3B8]">
              Clicking "Send" opens WhatsApp with your message pre-filled — you stay in control of
              sending it.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
