import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const featured = Boolean(project.featured)

  return (
    <article
      className={[
        'group relative flex h-full flex-col gap-4 rounded-2xl p-5 transition-[transform,box-shadow,border-color] duration-300 ease-out',
        'hover:-translate-y-1 focus-within:-translate-y-1',
        featured
          ? 'bg-gradient-to-br from-[#6366F1] to-[#7C3AED] text-white hover:shadow-[0_18px_40px_-18px_rgba(124,58,237,0.55)]'
          : 'border border-[#1e293b] bg-[#101524] text-white hover:border-white/20 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)]',
      ].join(' ')}
    >
      <div
        className={[
          'relative aspect-video w-full overflow-hidden rounded-xl',
          featured ? 'bg-black/10' : 'bg-[#161b2c]',
        ].join(' ')}
      >
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          // Placeholder until a real screenshot is provided for this project
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-center px-4">
            <span className={featured ? 'text-xs text-white/70' : 'text-xs text-white/30'}>
              Screenshot coming soon
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-3">
          <span
            className={[
              'inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em]',
              featured ? 'bg-black/10 text-white' : 'bg-[#161b2c] text-[#94A3B8]',
            ].join(' ')}
          >
            {project.category}
          </span>
          <span
            className={[
              'font-mono text-[11px] tracking-[0.12em]',
              featured ? 'text-white/70' : 'text-[#94A3B8]',
            ].join(' ')}
          >
            {project.year}
          </span>
        </div>

        <h3 className="text-xl font-semibold leading-snug tracking-tight md:text-2xl">
          {project.name}
        </h3>

        <p
          className={[
            'text-sm leading-relaxed md:text-[15px]',
            featured ? 'text-white/85' : 'text-[#94A3B8]',
          ].join(' ')}
        >
          {project.description}
        </p>

        {project.tech && project.tech.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className={[
                  'rounded-full px-2 py-0.5 text-[10px] font-medium',
                  featured ? 'bg-black/10 text-white/80' : 'bg-[#161b2c] text-[#94A3B8]',
                ].join(' ')}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              'mt-auto inline-flex w-fit items-center gap-2 rounded-md pt-3 text-sm font-medium outline-none',
              'focus-visible:ring-2 focus-visible:ring-offset-2',
              featured
                ? 'text-white focus-visible:ring-white focus-visible:ring-offset-[#7C3AED]'
                : 'text-white focus-visible:ring-white focus-visible:ring-offset-[#101524]',
            ].join(' ')}
          >
            <span className="underline decoration-current/40 decoration-1 underline-offset-4 transition-colors duration-300 group-hover:decoration-current">
              View project
            </span>
            <ArrowUpRight
              className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        ) : (
          <p className={['mt-auto pt-3 text-xs', featured ? 'text-white/60' : 'text-[#64748B]'].join(' ')}>
            {project.problem}
          </p>
        )}
      </div>
    </article>
  )
}
