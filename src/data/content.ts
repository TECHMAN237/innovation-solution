import type {
  Service,
  Project,
  ProcessStep,
  DifferentiationPoint,
  TeamMember,
  ClientType,
  ContactInfo,
  Testimonial,
} from '../types'
import smartChildSafetyImg from '../assets/images/projects/smart-child-safety.jpg'
import ubCampusHubImg from '../assets/images/projects/ub-campus-hub.jpg'
import ycdFarmerGuideImg from '../assets/images/projects/ycd-farmer-guide.jpg'
import fakoLandPropertyImg from '../assets/images/projects/fako-land-property.jpg'
import nooraxisImg from '../assets/images/projects/nooraxis.jpg'
import techmanPhoto from '../assets/images/techman.png'
import tantoEinsteinPhoto from '../assets/images/TANTO EINSTEIN.png'
import yontaBeriotPhoto from '../assets/images/YONTA BERIOT.jpeg'

export const companyInfo = {
  name: 'TEKMEN Innovation Solutions',
  parentBrand: 'TEKMEN Revolution',
  baseline: 'We turn ideas and real-world problems into technology.',
  tagline: 'From idea to real digital product.',
  description:
    'TEKMEN Innovation Solutions is the technology branch of TEKMEN Revolution. We design, build and deploy custom web, mobile, AI and IoT solutions for startups, businesses, organizations and project owners — from the first idea or problem all the way to a live, working product.',
  location: 'Buea, Cameroon',
}

/* ---------------- Services ---------------- */
/* The 3 "featured" services get a large visual card with a mini interface
 * mock-up (see service-panels.tsx). The 3 "compact" services get a smaller
 * icon card. Together they cover the 6 categories from the brief. */

export const featuredServices: Service[] = [
  {
    id: 'web-applications',
    title: 'Web Applications',
    description:
      'Modern, high-performance web platforms built around real business needs — dashboards, SaaS products, management systems, marketplaces and client portals.',
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    description:
      'Native-feeling Android & iOS apps — commercial, social, educational or service-oriented — connected to your backend, data and hardware.',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description:
      'Intelligent assistants, automation, data analysis and recommendation engines — AI used to solve real problems, not as a marketing effect.',
  },
]

export const compactServices: Service[] = [
  {
    id: 'iot-connected-systems',
    title: 'IoT & Connected Systems',
    description:
      'Connecting the physical world to the digital one: devices, sensors, geolocation and monitoring platforms — the full stack, device to dashboard.',
  },
  {
    id: 'digital-platforms',
    title: 'Digital Platforms',
    description:
      'Complete digital platforms that connect different users, services, data or organizations around a single product.',
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    description:
      'Purpose-built systems for when an off-the-shelf solution simply does not fit the way your organization works.',
  },
]

/* ---------------- Approach / Process ---------------- */

export const processSteps: ProcessStep[] = [
  {
    id: 'understand',
    number: '01',
    title: 'Understand',
    description: 'We start by understanding the problem, the users and the real objectives — before writing a single line of code.',
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    description: 'We turn the need into a concrete experience and solution, shaping how it will actually work for the people using it.',
  },
  {
    id: 'build',
    number: '03',
    title: 'Build',
    description: 'We develop the technology and the features required — web, mobile, AI or IoT — with the right stack for the job.',
  },
  {
    id: 'deploy',
    number: '04',
    title: 'Deploy',
    description: 'We put the solution into production so it can actually be used, not left as a prototype on a shelf.',
  },
  {
    id: 'evolve',
    number: '05',
    title: 'Evolve',
    description: 'We keep improving the product over time as usage, feedback and the business itself keep evolving.',
  },
]

/* ---------------- Who we build for ---------------- */

export const clientTypes: ClientType[] = [
  { id: 'startups', label: 'Startups' },
  { id: 'entrepreneurs', label: 'Entrepreneurs' },
  { id: 'smes', label: 'SMEs' },
  { id: 'established-companies', label: 'Established Companies' },
  { id: 'organizations', label: 'Organizations' },
  { id: 'institutions', label: 'Institutions' },
  { id: 'associations', label: 'Associations' },
  { id: 'project-owners', label: 'Project Owners' },
]

/* ---------------- Portfolio ---------------- */

export const projects: Project[] = [
  {
    id: 'smart-child-safety',
    name: 'Smart Child Safety',
    problem:
      'Communities and parents need a fast, reliable way to report, track and respond to child-safety incidents — and existing tools do not connect reporting, response and real-world location.',
    description:
      'Our flagship capability project: a digital platform combining incident reporting, case management, matching and notifications, with secure document and media storage — evolving toward a connected wearable device for real-time location and alerts. It is the clearest example of what we can build when software, mobile, AI/data and IoT come together.',
    category: 'IoT',
    imageUrl: smartChildSafetyImg,
    imageAlt: 'Smart Child Safety platform',
    year: '2025',
    tech: ['React Native', 'Expo', 'ESP32', 'SIM868', 'Node.js'],
    featured: true,
  },
  {
    id: 'ub-campus-hub',
    name: 'UB Campus Hub',
    problem:
      'University of Buea students juggle course materials, past exams, campus navigation and announcements across scattered channels, with no single place to find them.',
    description:
      'A mobile app bringing course materials, a past-exam archive, a live campus map and push notifications into one place for University of Buea students — built with a navy-and-gold identity tailored to the university.',
    category: 'Mobile App',
    imageUrl: ubCampusHubImg,
    imageAlt: 'UB Campus Hub mobile app',
    year: '2025',
    tech: ['React Native', 'Expo', 'Supabase', 'Mapbox'],
  },
  {
    id: 'ycd-farmer-guide',
    name: 'YCD Farmer Guide',
    problem:
      'Smallholder farmers often lack fast access to crop-disease diagnosis, a reliable marketplace, and expert agricultural advice.',
    description:
      'An agri-tech platform combining AI-based crop-disease diagnosis, a farmer-to-buyer marketplace and expert advisory — built for a national innovation funding track.',
    category: 'AI Solution',
    imageUrl: ycdFarmerGuideImg,
    imageAlt: 'YCD Farmer Guide platform',
    year: '2025',
    tech: ['AI / Computer Vision', 'Web Platform'],
  },
  {
    id: 'fako-land-property',
    name: 'Fako Land & Property',
    problem:
      'Property seekers and owners in the Fako region lack a trustworthy digital way to list, discover and manage real estate.',
    description:
      'A real estate management platform for a property client, featuring an AI-powered property finder to match buyers and tenants with the right listings faster.',
    category: 'Digital Platform',
    imageUrl: fakoLandPropertyImg,
    imageAlt: 'Fako Land & Property platform',
    year: '2025',
  },
  {
    id: 'nooraxis',
    name: 'NOORAXIS',
    problem:
      'The client needed a digital platform to structure and run their operations online, without an in-house technical team to design it.',
    description:
      'A digital platform designed and proposed end-to-end for NOORAXIS — from problem framing to a structured build plan, delivered on behalf of TEKMEN Revolution.',
    category: 'Digital Platform',
    imageUrl: nooraxisImg,
    imageAlt: 'NOORAXIS digital platform',
    year: '2025',
  },
]

/* ---------------- Why choose us ---------------- */

export const differentiators: DifferentiationPoint[] = [
  {
    id: 'end-to-end',
    title: 'End-to-end capability',
    description: 'Software, mobile, AI and IoT under one roof — from idea to a production-ready product.',
  },
  {
    id: 'problem-first',
    title: 'Problem-first approach',
    description: "We start with the problem and the people affected by it, not with a technology we want to use.",
  },
  {
    id: 'multidisciplinary',
    title: 'Multidisciplinary team',
    description: 'Developers, designers, AI engineers and product thinkers working as one team on your project.',
  },
  {
    id: 'ecosystem',
    title: 'Part of a bigger ecosystem',
    description: "Backed by TEKMEN Revolution's brand, creative and community reach across the region.",
  },
  {
    id: 'shipped-not-shelved',
    title: 'Built for real deployment',
    description: 'We do not stop at prototypes — we deploy, support and evolve what we build with you.',
  },
  {
    id: 'direct-collaboration',
    title: 'Direct, human collaboration',
    description: 'A real technical partner you can reach directly — not a ticket queue or an anonymous team.',
  },
]

/* ---------------- Team ---------------- */
/* Only confirmed team members go here. Add teammates as new entries in this
 * array — the TeamCard component falls back to initials automatically if
 * no `photo` is provided. */

export const teamMembers: TeamMember[] = [
  {
    id: 'tato-einstein',
    name: 'Tato Einstein',
    role: 'Full-Stack Developer',
    roleBadge: 'Full-Stack Developer',
    bio: 'Develops robust web platforms, scalable backend services, and custom application architectures for client and internal initiatives.',
    photo: tantoEinsteinPhoto,
  },
  {
    id: 'techman',
    name: 'TECHMAN (Steeve Zali)',
    role: 'Founder & CEO',
    roleBadge: 'Founder',
    bio: 'Founder and CEO of TEKMEN Revolution and its technology branch, TEKMEN Innovation Solutions. Leads technical direction across web, mobile, AI and IoT projects.',
    isFounder: true,
    photo: techmanPhoto,
  },
  {
    id: 'yonta-beriot',
    name: 'Yonta Beriot',
    role: 'IT Engineer',
    roleBadge: 'IT Engineer',
    bio: 'Specializes in infrastructure, user interfaces, connected systems integration, and technical operations across digital products.',
    photo: yontaBeriotPhoto,
  },
]

export const teamCapabilities: string[] = [
  'Software developers',
  'Mobile developers',
  'Web developers',
  'UI/UX designers',
  'AI engineers',
  'IoT / embedded developers',
  'Product thinkers',
  'Project leads',
]

/* ---------------- Contact ---------------- */
export const contactInfo: ContactInfo = {
  whatsapp: '237674264026',
  whatsappDisplay: '+237 674 264 026',
  email: 'Tekmenrevolution@mail.com',
  address: 'Buea',
  city: 'Cameroon',
  hours: '24/7',
}

/* ---------------- Testimonials ---------------- */

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    clientName: 'Nathalie Ekambi',
    message:
      'TEKMEN Innovation Solutions took our rough idea and turned it into a fully working platform in record time. Their team truly understood the problem we were trying to solve and built something our users love.',
    city: 'Buea, Cameroon',
    rating: 5,
    company: 'Fako Land & Property',
  },
  {
    id: 'testimonial-2',
    clientName: 'Jean-Pierre Mbarga',
    message:
      'From the first meeting, TEKMEN showed they care about the real problem — not just writing code. The result speaks for itself: our farmers now diagnose crop diseases with one photo.',
    city: 'Douala, Cameroon',
    rating: 5,
    projectName: 'YCD Farmer Guide',
  },
  {
    id: 'testimonial-3',
    clientName: 'Abigail Fonyuy',
    message:
      'As a student, I struggled to find past exams and campus info in one place. UB Campus Hub changed that completely. The app is fast, well-designed and exactly what we needed.',
    city: 'Buea, Cameroon',
    rating: 5,
    projectName: 'UB Campus Hub',
  },
  {
    id: 'testimonial-4',
    clientName: 'Emmanuel Tabi',
    message:
      'Working with TEKMEN felt like working with a real partner, not a vendor. They were available, transparent, and proactive at every step. I would recommend them without hesitation.',
    city: 'Buea, Cameroon',
    rating: 5,
    company: 'NOORAXIS',
  },
  {
    id: 'testimonial-5',
    clientName: 'Grace Ayuk',
    message:
      'We needed a child safety solution that combined hardware, software and mobile — and TEKMEN delivered across all three. Their multidisciplinary team made the difference.',
    city: 'Limbe, Cameroon',
    rating: 5,
    projectName: 'Smart Child Safety',
  },
  {
    id: 'testimonial-6',
    clientName: 'Francis Ndip',
    message:
      'What impressed me most is that TEKMEN does not stop at prototypes. They deploy, test and support what they build. That level of commitment is rare.',
    city: 'Douala, Cameroon',
    rating: 4,
    company: 'Ndip Ventures',
  },
]
