import * as React from "react"

import { cn } from "@/lib/utils"

type TimelineItemSide = "left" | "right"

function Timeline({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline"
      className={cn(
        "relative mx-auto max-w-5xl space-y-6 sm:space-y-12",
        className
      )}
      {...props}
    >
      <div
        data-slot="timeline-line"
        className="absolute top-0 bottom-0 left-1/2 hidden w-0.75 -translate-x-1/2 bg-black md:block"
      />
      {props.children}
    </div>
  )
}

function TimelineItem({
  className,
  side = "left",
  ...props
}: React.ComponentProps<"div"> & {
  side?: TimelineItemSide
}) {
  return (
    <div
      data-slot="timeline-item"
      data-side={side}
      className={cn(
        "relative flex flex-col items-center justify-between",
        side === "right" ? "md:flex-row-reverse" : "md:flex-row",
        className
      )}
      {...props}
    />
  )
}

function TimelineContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-content"
      className={cn("mb-8 md:mb-0 md:w-5/12", className)}
      {...props}
    />
  )
}

type MarkerVariant = "square" | "circle" | "rhombus"

interface TimelineMarkerProps extends React.ComponentProps<"div"> {
  variant?: MarkerVariant
}

function TimelineMarker({
  className,
  variant = "rhombus",
  ...props
}: TimelineMarkerProps) {
  const baseSansB = "absolute left-1/2 hidden -translate-x-1/2 md:block"
  const defaultBorder = "border-4 border-border"

  const variants: Record<MarkerVariant, string> = {
    square: `size-8 ${defaultBorder}`,
    circle: `size-8 rounded-full ${defaultBorder}`,
    rhombus: `size-8 rotate-45 ${defaultBorder}`,
  }

  return (
    <div
      data-slot="timeline-marker"
      className={cn(baseSansB, variants[variant], className)}
      {...props}
    />
  )
}
function TimelineSpacer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-spacer"
      className={cn("md:w-5/12", className)}
      {...props}
    />
  )
}

export {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineMarker,
  TimelineSpacer,
}
