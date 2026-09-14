import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Portfolio from '../components/sections/Portfolio'
import Testimonials from '../components/sections/Testimonials'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'

/**
 * Homepage. Services and Portfolio are shown in `preview` mode: a condensed
 * version with a "See more" button linking to their dedicated page
 * (/services, /work). Process, About and Contact are shown in full, as on
 * their own dedicated pages — they're short sections, no preview needed.
 */
const Home = () => {
  return (
    <>
      <Hero />
      <Services preview />
      <Portfolio preview />
      <Testimonials />
      <About />
      <Contact />
    </>
  )
}

export default Home
