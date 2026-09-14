import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase } from 'lucide-react'
import { ProjectCard } from '../ui/ProjectCard'
import { projects } from '../../data/content'


interface PortfolioProps {
  /** On the homepage: shows only the first rows of projects + a "See more"
   * button linking to /work. On the dedicated Work page, all projects and
   * the category filters are shown. */
  preview?: boolean
}

const PREVIEW_COUNT = 3
const Portfolio = ({ preview = false }: PortfolioProps) => {
  const filteredProjects = useMemo(() => {
    if (preview) return projects.slice(0, PREVIEW_COUNT)
    return projects
  }, [preview])

  return (
    <section id="work" aria-labelledby="work-title" className="bg-[#0B0F19] py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#C4B5FD]/20 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#C4B5FD] glow-badge">
            <Briefcase className="h-3.5 w-3.5 text-[#C4B5FD] glow-icon" />
            Our Work
          </span>
          <h2
            id="work-title"
            className="max-w-2xl text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]"
          >
            If we built this, we can build for you too
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-[#A1A1AA]">
            Every project starts with a real problem. Here's what we've built to solve some of them —
            across web, mobile, AI and connected hardware.
          </p>
        </motion.header>



        {/* Mobile: native touch scroll, fully user-controlled */}
        <div
          className="mt-12 md:hidden -mx-5 px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {filteredProjects.map((project) => (
            <div key={project.id} className="w-64 shrink-0 snap-start">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* md+: classic grid */}
        <ul className="mt-16 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <li key={project.id} className="flex">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        {/* "See more" button: homepage only, links to the full Work page */}
        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-10 flex justify-center md:mt-14"
          >
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#7C3AED]/60 hover:bg-white/[0.05]"
            >
              See all our work
              <ArrowRight className="h-4 w-4 text-[#C4B5FD] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
