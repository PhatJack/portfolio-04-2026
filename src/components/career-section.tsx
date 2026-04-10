import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
  TimelineSpacer,
} from "@/components/ui/timeline"
import HeaderSection from "./shared/header-section"

const careerItems = [
  {
    period: "Mar 2025 - PRESENT",
    role: "Full-stack Developer",
    company: "ONE MEDIC JSC",
    description: [
      "Developed UI from Figma designs using React and CoreUI.",
      "Fetched and synchronized data in the frontend using React Query.",
      "Performed client-side CRUD operations by interacting with PostgreSQL-backed APIs.",
      "Collaborated in developing core product features and improving performance.",
      "Debugged and resolved software defects to improve application stability and user experience.",
      "Improved and refined UI components based on design updates and user feedback.",
    ],
    cardClassName: "-rotate-1",
    markerClassName: "bg-bold-yellow",
    variant: "square",
  },
  {
    period: "Aug 2024 - Mar 2025",
    role: "Front-end Developer Intern",
    company: "LAGTUZ MEDIA",
    description: [
      "Participating in discussions with Designer to improve user experience.",
      "Implemented enhancements that improve web functionality and responsiveness.",
      "Developing and maintaining the front-end functionality of websites.",
    ],
    cardClassName: "rotate-1",
    markerClassName: "bg-soft-green",
    variant: "circle",
  },
  {
    period: "July 2024 - Aug 2025",
    role: "Freelance Front-end Developer",
    company: "VARIOUS CLIENTS",
    description: [
      "Collaborated with clients to understand their requirements and translate them into functional web applications.",
      "Designed and implemented user interfaces using React and Tailwind CSS.",
      "Ensured cross-browser compatibility and optimized web applications for performance and responsiveness.",
    ],
    cardClassName: "rotate-1",
    markerClassName: "bg-sky-blue",
    variant: "square",
  },
  {
    period: "2021 - 2026",
    role: "University Student",
    company: "SAI GON UNIVERSITY",
    description: [
      "Assisted in the development of static marketing pages and learned the fundamentals of semantic HTML and CSS architecture.",
    ],
    cardClassName: "-rotate-2",
    markerClassName: "bg-coral-pink",
    variant: "rhombus",
  },
] as const

const CareerSection = () => {
  return (
    <section className="relative bg-pink-light px-4 py-20 sm:px-8">
      <HeaderSection
        title="CAREER HIGHLIGHTS"
        subtitle="A Journey of Growth and Impact"
      />
      <Timeline>
        {careerItems.map((item) => (
          <TimelineItem key={`${item.period}-${item.role}`}>
            <TimelineContent>
              <div
                className={`border-4 border-border bg-off-white p-6 font-manrope shadow-shadow ${item.cardClassName}`}
              >
                <div className="mb-2 font-black text-sky-blue">
                  {item.period}
                </div>
                <h3 className="text-2xl font-black uppercase">{item.role}</h3>
                <div className="mb-4 text-lg font-bold">{item.company}</div>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  {item.description.map((desc, index) => (
                    <li key={index} className="font-medium">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </TimelineContent>
            <TimelineMarker
              className={item.markerClassName}
              variant={item.variant}
            />
            <TimelineSpacer />
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  )
}

export default CareerSection
