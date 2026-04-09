import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-base text-sm font-base whitespace-nowrap ring-offset-white transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-2 border-border bg-main text-main-foreground shadow-shadow hover:-translate-x-px hover:-translate-y-px hover:shadow-hover active:translate-x-0 active:translate-y-0 active:shadow-pressed",
        noShadow: "border-2 border-border bg-main text-main-foreground",
        neutral:
          "border-2 border-border bg-secondary-background text-foreground shadow-shadow hover:shadow-hover active:shadow-pressed",
        reverse:
          "border-2 border-border bg-main text-main-foreground hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY",
        textOnly:
          "border-0 bg-transparent text-main-foreground shadow-none hover:translate-x-0 hover:translate-y-0 hover:bg-transparent hover:shadow-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
