import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Extras } from "@/components/extras"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-8 md:py-16 max-w-6xl space-y-16 md:space-y-24">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Extras />
        <Contact />
      </main>
      <footer className="border-t-4 border-foreground py-8 mt-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold">© 2025 Arpita Srivastava. Built with Next.js</p>
        </div>
      </footer>
    </div>
  )
}
