import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
  TimelineSpacer,
} from "@/components/ui/timeline"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import HeaderSection from "./shared/header-section"

gsap.registerPlugin(ScrollTrigger)

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
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const lineEl = sectionRef.current.querySelector("[data-slot='timeline-line']")
      const itemEls = Array.from(
        sectionRef.current.querySelectorAll<HTMLElement>("[data-career-item]")
      )
      const markerEls = sectionRef.current.querySelectorAll("[data-slot='timeline-marker']")

      if (lineEl) {
        gsap.fromTo(
          lineEl,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              end: "bottom 35%",
              scrub: true,
            },
          }
        )
      }

      itemEls.forEach((item, index) => {
        const isOdd = (index + 1) % 2 !== 0

        gsap.fromTo(
          item,
          { x: isOdd ? -70 : 70, y: 24, autoAlpha: 0 },
          {
            x: 0,
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              once: true,
            },
          }
        )
      })

      gsap.fromTo(
        markerEls,
        { scale: 0, autoAlpha: 0, transformOrigin: "center center" },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.45,
          stagger: 0.15,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative bg-pink-light px-4 py-20 sm:px-8">
      <HeaderSection
        title="CAREER HIGHLIGHTS"
        subtitle="A Journey of Growth and Impact"
      />
      <Timeline>
        {careerItems.map((item) => (
          <TimelineItem data-career-item key={`${item.period}-${item.role}`}>
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
