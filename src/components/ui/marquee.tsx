import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

export default function Marquee({ items }: { items: string[] }) {
  const colorsList = [
    "text-bold-yellow",
    "text-coral-pink",
    "text-sky-blue",
    "text-soft-green",
    "text-soft-orange",
  ]

  return (
    <div className="relative flex w-full overflow-x-hidden border-y-4 border-border bg-black font-base text-off-white">
      <div className="animate-marquee py-12 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={item}
            className="inline-flex items-center text-4xl font-bold uppercase italic"
          >
            {item}
            <Star
              className={cn(
                "mx-4 size-6",
                colorsList[index % colorsList.length]
              )}
            />
          </span>
        ))}
      </div>

      <div className="absolute top-0 animate-marquee2 py-12 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={item}
            className="inline-flex items-center text-4xl font-bold uppercase italic"
          >
            {item}

            <Star
              className={cn(
                "mx-4 size-6",
                colorsList[index % colorsList.length]
              )}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
