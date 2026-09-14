import { Quote, Star } from 'lucide-react'
import type { Testimonial } from '../../types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = testimonial.rating ?? 5

  return (
    <article className="flex h-full flex-col gap-5 rounded-2xl border border-[#1e293b] bg-[#101524] p-6 transition-colors duration-300 hover:border-white/20">
      <Quote className="size-6 text-[#A78BFA]" aria-hidden="true" />

      <p className="flex-1 text-sm leading-relaxed text-[#A1A1AA] md:text-[15px]">
        {testimonial.message}
      </p>

      <div
        className="flex items-center gap-1"
        role="img"
        aria-label={`Rating: ${rating} out of 5`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={
              index < rating
                ? 'size-4 fill-[#A78BFA] text-[#A78BFA] luminous-star'
                : 'size-4 text-[#1e293b]'
            }
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="flex items-center gap-3 border-t border-[#1e293b] pt-5">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#7C3AED]/20 font-mono text-sm font-semibold text-[#C4B5FD]"
          aria-hidden="true"
        >
          {getInitials(testimonial.clientName)}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.clientName}</p>
          <p className="text-xs text-[#A1A1AA]">
            {testimonial.company ?? testimonial.projectName} · {testimonial.city}
          </p>
        </div>
      </div>
    </article>
  )
}
