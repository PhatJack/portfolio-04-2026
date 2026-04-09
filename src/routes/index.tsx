import { createFileRoute } from "@tanstack/react-router"
import Marquee from "@/components/ui/marquee"
import ContactSection from "@/components/contact-section"
import SkillsSection from "@/components/skills-section"
import AboutSection from "@/components/about-section"

export const Route = createFileRoute("/")({ component: App })

function App() {
  const ITEMS = [
    "Builder",
    "Analytical",
    "Scalable",
    "Efficient",
    "Innovative",
    "Reliable",
    "Adaptable",
    "Problem-solver",
  ]

  return (
    <main className="min-h-svh w-full overflow-hidden">
      <div id="about" className="px-4 py-8 sm:p-8">
        <AboutSection />
      </div>
      <div className="flex-1">
        <Marquee items={ITEMS} />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="contact" className="px-4 py-8 sm:p-8">
        <ContactSection />
      </div>
    </main>
  )
}
