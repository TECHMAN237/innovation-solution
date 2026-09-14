import { useState } from 'react'
import type { TeamMember } from '../../types'

interface TeamCardProps {
  member: TeamMember
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

/**
 * Team member card: photo in grayscale at rest, turning to color (+ slight
 * zoom) on hover, with name and role in a gradient overlay at the bottom of
 * the photo.
 *
 * Photo is optional: if `member.photo` is missing OR the file 404s, we fall
 * back to an initials avatar automatically.
 */
export function TeamCard({ member }: TeamCardProps) {
  const [photoFailed, setPhotoFailed] = useState(false)
  const showPhoto = Boolean(member.photo) && !photoFailed
  const isTato = member.id === 'tato-einstein' || member.name.toLowerCase().includes('tato')
  const roleBadge =
    member.roleBadge ||
    (member.isFounder
      ? 'Founder'
      : member.id === 'yonta-beriot' || member.role.toLowerCase().includes('it')
      ? 'IT Engineer'
      : member.id === 'tato-einstein' || member.role.toLowerCase().includes('full-stack')
      ? 'Full-Stack Developer'
      : member.role)

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-[#101524] transition-all duration-300 ${
        member.isFounder
          ? 'border-2 border-[#7C3AED]/60 shadow-[0_0_24px_-4px_rgba(124,58,237,0.3)] hover:border-[#7C3AED]'
          : 'border border-[#1e293b] hover:border-[#7C3AED]/40'
      }`}
    >
      {/* Photo area: clean white frame for Tato Einstein (as original photo has transparent background), dark slate for others */}
      <div
        className={`relative aspect-[3/4] w-full overflow-hidden ${
          isTato ? 'bg-white' : 'bg-[#161b2c]'
        }`}
      >
        {showPhoto ? (
          <img
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            onError={() => setPhotoFailed(true)}
            className="team-member-image h-full w-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-[filter,transform] duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B0F19] border border-[#C4B5FD]/20 font-mono text-xl font-semibold text-[#C4B5FD] neon-text">
              {getInitials(member.name)}
            </span>
          </div>
        )}

        {roleBadge && (
          <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-[#6366F1] to-[#7C3AED] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-[0_0_12px_rgba(124,58,237,0.5)]">
            {roleBadge}
          </span>
        )}

        {/* Gradient overlay + name/role, always visible over the photo */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-4 pb-3 pt-12 pointer-events-none">
          <p className="text-sm font-bold leading-tight text-white">{member.name}</p>
          <p className="mt-0.5 truncate text-xs text-gray-300">{member.role}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="flex-1 p-5 text-sm leading-relaxed text-[#94A3B8]">{member.bio}</p>
    </article>
  )
}
