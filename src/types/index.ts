export interface Service {
  id: string
  title: string
  description: string
  icon?: string
}

export type ProjectCategory = 'Web App' | 'Mobile App' | 'AI Solution' | 'IoT' | 'Digital Platform'

export interface Project {
  id: string
  name: string
  url?: string
  displayUrl?: string
  problem: string
  description: string
  category: ProjectCategory
  imageUrl?: string
  imageAlt: string
  year: string
  tech?: string[]
  featured?: boolean
}

export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
}

export interface DifferentiationPoint {
  id: string
  title: string
  description: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  roleBadge?: string
  bio: string
  isFounder?: boolean
  /** Path to the photo, e.g. "/team/name.jpg" (public/team/ folder).
   * Optional: falls back to an initials avatar if missing or 404. */
  photo?: string
}

export interface ClientType {
  id: string
  label: string
}

export interface ContactInfo {
  whatsapp: string
  whatsappDisplay?: string
  email: string
  address: string
  city: string
  hours: string
  facebook?: string
  linkedin?: string
}

export interface Testimonial {
  id: string
  clientName: string
  message: string
  city: string
  rating?: number
  company?: string
  projectName?: string
}
