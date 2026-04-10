import {
  Code,
  Plane,
  Footprints,
  Mountain,
  Gamepad2,
  Music,
  Coffee,
} from "lucide-react"
import HeaderSection from "./shared/header-section"
import { cn } from "@/lib/utils"

const HOBBIES = [
  {
    name: "Coding",
    icon: <Code />,
    className:
      "md:col-span-2 md:row-span-2 shadow-bold-yellow hover:shadow-bold-yellow-hover",
  },
  {
    name: "Traveling",
    icon: <Plane />,
    className:
      "md:col-span-2 shadow-sky-blue hover:shadow-sky-blue-hover",
  },
  {
    name: "Walking",
    icon: <Footprints />,
    className: "shadow-soft-green hover:shadow-soft-green-hover",
  },
  {
    name: "Hiking",
    icon: <Mountain />,
    className:
      "md:row-span-2 shadow-coral-pink hover:shadow-coral-pink-hover",
  },
  {
    name: "Gaming",
    icon: <Gamepad2 />,
    className: "shadow-coral-pink hover:shadow-coral-pink-hover",
  },
  {
    name: "Music",
    icon: <Music />,
    className:
      "md:col-span-2 shadow-sky-blue hover:shadow-sky-blue-hover",
  },
  {
    name: "Coffee",
    icon: <Coffee />,
    className:
      "shadow-soft-orange hover:shadow-soft-orange-hover",
  },
]

const OfflineSection = () => {
  return (
    <section className="relative bg-green-light px-4 py-20 sm:px-8">
      <HeaderSection
        title="OFFLINE MODE"
        subtitle="What I do in my free time when I'm not coding?"
        className="mr-0 ml-auto text-right"
      />

      <div className="mt-12 grid auto-rows-[120px] grid-cols-2 gap-4 md:auto-rows-[140px] md:grid-cols-4">
        {HOBBIES.map((hobby, index) => (
          <div
            key={index}
            className={cn(
              `group flex flex-col justify-between border-4 border-border bg-off-white p-4 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1`,
              hobby.className
            )}
          >
            <div className="text-black">{hobby.icon}</div>

            <h3 className="text-lg font-bold text-black uppercase">
              {hobby.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OfflineSection
