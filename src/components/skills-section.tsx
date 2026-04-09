import { Code, Layers2, Wrench } from "lucide-react"
import { Badge } from "./ui/badge"
import { cn } from "@/lib/utils"
import { useRef } from "react"

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const skills = [
    {
      label: "LANGUAGES",
      icon: <Code />,
      tone: "bg-sky-blue",
      cardTone: "bg-blue-light",
      items: ["JavaScript", "TypeScript", "Python", "HTML5/CSS3", "GRAPHQL"],
    },
    {
      label: "FRAMEWORKS & LIBRARIES",
      icon: <Layers2 />,
      tone: "bg-soft-green",
      cardTone: "bg-green-light",
      items: [
        "React",
        "Next.js",
        "NestJS",
        "React-native",
        "Tailwind CSS",
        "Prisma",
        "Astro",
        "Shadcn UI",
        "Core UI",
      ],
    },
    {
      label: "TOOLS & PLATFORMS",
      icon: <Wrench />,
      tone: "bg-bold-yellow",
      cardTone: "bg-yellow-light",
      items: ["Git/Github", "Docker", "Vercel", "Figma", "Postman", "Vite"],
    },
  ]
  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-orange-light px-4 py-20 sm:px-6 md:px-10"
    >
      <div className="skills-heading relative z-10 mb-12 max-w-2xl border-4 border-border bg-off-white p-5 shadow-shadow md:p-8">
        <p className="mb-3 inline-block border-4 border-border bg-bold-yellow px-3 py-1 text-xs tracking-[0.2em]">
          SKILL STACK
        </p>
        <h2 className="text-4xl leading-[0.95] font-heading uppercase sm:text-5xl md:text-6xl">
          Tools I Build With
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-12">
        {skills.map((skill, index) => (
          <article
            key={skill.label}
            className={cn(
              "skill-card flex flex-col gap-5 border-4 border-border p-4 shadow-shadow",
              skill.cardTone,
              index === 0 && "md:col-span-5 rotate-[-1.1deg]",
              index === 1 && "md:col-span-4 md:mt-10 rotate-[0.9deg]",
              index === 2 && "md:col-span-3 md:-mt-4 rotate-[-0.6deg]"
            )}
          >
            <div className="flex items-center gap-3 border-b-4 border-border pb-3">
              <div
                className={cn(
                  "grid h-9 w-9 place-items-center border-4 border-border",
                  skill.tone
                )}
              >
                {skill.icon}
              </div>
              <h3 className="text-lg leading-tight font-heading uppercase sm:text-xl">
                {skill.label}
              </h3>
            </div>

            <ul className="grid grid-cols-2 gap-6">
              {skill.items.map((item) => (
                <li key={item} className="skill-chip">
                  <Badge
                    className={cn(
                      "w-full border-[3px] border-border px-3 py-2 text-center font-manrope text-xs font-bold uppercase sm:text-sm",
                      skill.tone
                    )}
                  >
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
