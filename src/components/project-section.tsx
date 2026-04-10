import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

const projects = [
  {
    id: 1,
    title: "Portfolio",
    role: "Developer",
    date: "Jan 2025 - Feb 2025",
    tags: ["AstroJS", "TailwindCSS", "Markdown"],
    points: [
      "Designed and developed a personal portfolio website using ReactJS and TailwindCSS, showcasing projects and skills with a clean and modern design.",
      "Using neu-brutalism design principles to create a visually appealing and unique user interface.",
      "Implemented responsive design to ensure optimal viewing experience across various devices and screen sizes.",
      "Optimized website performance by implementing lazy loading, code splitting, and efficient asset management.",
    ],
    github: "https://github.com/PhatJack/portfolio-2025",
    website: "https://willam2003.site/",
    color: "hover:bg-blue-light",
    link: "https://willam2003.site/",
  },
  {
    id: 2,
    title: "MedicHIMS",
    role: "Full-stack Developer | Team: 6",
    date: "Mar 2025 - Present",
    tags: ["NestJS", "Prisma", "ReactJS", "PostgreSQL"],
    points: [
      "Developed and refactored UI components to improve usability.",
      "Integrated APIs into modules: healthcare service, medicine.",
      "Maintained and optimized existing features by debugging, refactoring, and improving performance.",
      "Built reusable UI components, custom hooks, and utility functions to minimize code duplication.",
      "Developed the Healthcare Management modules following the HL7 FHIR standard.",
    ],
    color: "hover:bg-pink-light",
    link: "#",
  },
  {
    id: 3,
    title: "MedicPHR",
    role: "Full-stack Developer | Team: 6",
    date: "Mar 2025 - Present",
    tags: ["React-native", "Redux", "Supabase", "GraphQL"],
    points: [
      "Optimized user flows to reduce friction, improve usability, and increase overall customer satisfaction.",
      "Integrated APIs into modules: pills, questionnaire, conditions.",
      "Contributed to UI reviews and adjustments to enhance visual consistency and usability.",
      "Developed slices, reducers, and actions to handle complex business logic.",
    ],
    color: "hover:bg-green-light",
    link: "#",
  },
  {
    id: 4,
    title: "Onemedic.vn",
    role: "Front-end Developer | Team: 2",
    date: "Mar 2025 - Present",
    tags: ["NextJS 14", "GraphQL", "Strapi CMS"],
    points: [
      "Integrated Apollo Client with Next.js for efficient data fetching and state management.",
      "Optimized loading performance using caching, improving page load speed by 40%.",
      "Developed and configured APIs in Strapi to handle form data from the UI.",
      "Built reusable components to ensure consistency and maintainability.",
      "Created documentation and step-by-step workflows for content management.",
    ],
    website: "https://onemedic.com/vi",
    color: "hover:bg-yellow-light",
    link: "https://onemedic.com/vi",
  },
  {
    id: 5,
    title: "Tu Tien Game",
    role: "Front-end Developer",
    date: "Jul 2024 - Sep 2025",
    tags: ["ReactJS 18", "Django", "Websocket"],
    points: [
      "Developed and implemented interactive user interfaces for a cultivation game, enhancing user experience.",
      "Optimized application performance by implementing code-splitting and lazy loading.",
      "Implemented real-time communication using WebSocket to enable interactive boss battles in a multiplayer game.",
    ],
    website: "https://tutien.pro/",
    color: "hover:bg-soft-orange",
    link: "https://tutien.pro/",
  },
]

const ProjectSection = () => {
  return (
    <div className="border-y-4 border-border bg-off-white px-4 py-20 font-manrope sm:px-8">
      <div className="w-full">
        <h3 className="mb-16 text-left text-6xl uppercase md:text-8xl">
          Gallery of{" "}
          <span className="text-transparent [-webkit-text-stroke:4px_var(--bold-yellow)]">
            work
          </span>
        </h3>

        <div className="flex flex-col border-t-4 border-r-4 border-border bg-white shadow-shadow">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative flex flex-col border-b-4 border-border transition-colors duration-300 ${project.color}`}
            >
              {/* Header Row */}
              <div className="flex cursor-pointer flex-col justify-between p-6 md:p-10 lg:flex-row lg:items-center">
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-2xl text-transparent opacity-50 [-webkit-text-stroke:2px_var(--border)] md:text-4xl">
                    0{project.id}
                  </span>
                  <h4 className="text-4xl font-black tracking-tighter uppercase transition-transform duration-500 ease-out sm:text-6xl md:text-7xl lg:group-hover:translate-x-4">
                    {project.title}
                  </h4>
                </div>
                <div className="mt-6 flex flex-wrap justify-start gap-3 opacity-100 transition-opacity duration-300 group-hover:opacity-100 lg:mt-0 lg:opacity-0">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-coral-pink px-4 py-1.5 text-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Expandable Accordion Content */}
              <div className="grid transition-[grid-template-rows] duration-500 ease-in-out sm:grid-rows-[0fr] sm:group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="flex flex-col items-start gap-8 p-6 pt-0 md:p-10 lg:flex-row">
                    <div className="flex max-w-2xl flex-col gap-4">
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-black tracking-tight uppercase md:text-base">
                        <span className="text-foreground">{project.role}</span>
                        <span className="border-border text-foreground/50">
                          {project.date}
                        </span>
                      </div>

                      {(project.github || project.website) && (
                        <div className="mt-2 flex flex-wrap gap-3">
                          {project.github && (
                            <Button
                              asChild
                              variant={"default"}
                              className="bg-soft-orange"
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                              >
                                GitHub
                              </a>
                            </Button>
                          )}
                          {project.website && (
                            <Button
                              variant={"default"}
                              className="bg-bold-yellow"
                              asChild
                            >
                              <a
                                href={project.website}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Website
                              </a>
                            </Button>
                          )}
                        </div>
                      )}

                      {project.points.length > 0 && (
                        <ul className="ml-6 flex list-outside list-disc flex-col gap-1 text-base leading-relaxed text-foreground/80 md:text-lg">
                          {project.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Placeholder Image container */}
                    <div className="relative flex h-37 w-full items-center justify-center overflow-hidden border-4 border-border bg-off-white shadow-shadow sm:h-64 md:h-80 lg:flex-1">
                      <div className="bg-jigsaw absolute inset-0"></div>
                      <img
                        src={`/projects/${project.id}.png`}
                        className="absolute inset-0 size-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
