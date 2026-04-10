import { cn } from "@/lib/utils"

interface HeaderSectionProps {
  title: string
  subtitle: string
  className?: string
}

const HeaderSection = ({ title, subtitle, className }: HeaderSectionProps) => {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto mb-12 flex max-w-2xl flex-col items-center border-4 border-border bg-off-white p-6 text-center shadow-shadow",
        className
      )}
    >
      <div className={className}>
        <p className="mb-3 inline-block border-4 border-border bg-sky-blue px-3 py-1 text-xs tracking-[0.2em] uppercase">
          {title}
        </p>
      </div>
      <h2 className="text-4xl leading-[0.95] font-heading uppercase sm:text-5xl">
        {subtitle}
      </h2>
    </div>
  )
}

export default HeaderSection
