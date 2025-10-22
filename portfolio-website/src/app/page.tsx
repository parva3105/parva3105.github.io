import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Projects } from "@/sections/Projects"
import { Experience } from "@/sections/Experience"
import { Contact } from "@/sections/Contact"

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
