import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:block [&_svg]:shrink-0 [&_svg]:self-center [&_[data-icon='inline-start']]:rotate-180 [&_svg:not([class*='size-'])]:h-4 [&_svg:not([class*='size-'])]:w-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        primary:
          "rounded-[4px] border-2 border-transparent bg-linear-to-r from-[#d91b5a] to-[#dd2c00] font-semibold tracking-normal text-[#fafbfc] shadow-none [&_svg]:text-[#fafbfc] [&_svg_*]:fill-[#fafbfc] hover:from-[#dd2c00] hover:to-[#d91b5a] hover:text-[#fafbfc] focus-visible:outline-2 focus-visible:outline-[#51b5fc] focus-visible:outline-offset-0 focus-visible:ring-0 disabled:opacity-100 disabled:from-[rgba(221,44,0,0.12)] disabled:to-[rgba(217,27,90,0.12)] disabled:text-[rgba(69,90,100,0.24)] max-md:w-full",
        secondary:
          "rounded-[4px] border-2 border-[#e8171f] bg-white/10 font-semibold tracking-normal text-[#e8171f] shadow-none hover:border-[#b02019] hover:text-[#b02019] focus-visible:outline-2 focus-visible:outline-[#51b5fc] focus-visible:outline-offset-0 focus-visible:ring-0 disabled:opacity-100 disabled:border-[rgba(0,23,46,0.12)] disabled:text-[rgba(0,23,46,0.12)] max-md:w-full",
        tertiary:
          "rounded-[4px] border-2 border-[#00172e] bg-white/10 font-semibold tracking-normal text-[#00172e] shadow-none hover:border-[#132a43] hover:text-[#132a43] focus-visible:outline-2 focus-visible:outline-[#51b5fc] focus-visible:outline-offset-0 focus-visible:ring-0 disabled:opacity-100 disabled:border-[rgba(0,23,46,0.12)] disabled:text-[rgba(0,23,46,0.12)] max-md:w-full",
        dark:
          "rounded-[4px] border-2 border-white bg-[rgba(0,23,46,0.1)] font-semibold tracking-normal text-[#fafbfc] shadow-none hover:border-[#e5ebf0] hover:bg-[rgba(240,243,245,0.24)] hover:text-[#fafbfc] focus-visible:bg-[rgba(240,243,245,0.24)] focus-visible:text-white focus-visible:outline-2 focus-visible:outline-[#f7d640] focus-visible:outline-offset-0 focus-visible:ring-0 disabled:opacity-100 disabled:border-[rgba(255,255,255,0.12)] disabled:bg-[rgba(0,23,46,0.1)] disabled:text-[rgba(207,216,220,0.24)] max-md:w-full",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link:
          "justify-start rounded-none border-0 px-0 py-0 text-left font-semibold tracking-normal text-[#006ebb] shadow-none hover:text-[#006ebb] hover:underline focus-visible:outline-2 focus-visible:outline-[#51b5fc] focus-visible:outline-offset-0 focus-visible:no-underline focus-visible:ring-0 disabled:opacity-100 disabled:text-[rgba(0,110,187,0.24)] max-md:w-fit max-md:text-left",
        "link-dark":
          "justify-start rounded-none border-0 px-0 py-0 text-left font-semibold tracking-normal text-[#51b5fc] shadow-none hover:text-[#51b5fc] hover:underline focus-visible:outline-2 focus-visible:outline-[#51b5fc] focus-visible:outline-offset-0 focus-visible:no-underline focus-visible:ring-0 disabled:opacity-100 disabled:text-[rgba(81,181,252,0.24)] max-md:w-fit max-md:text-left",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:h-3 [&_svg:not([class*='size-'])]:w-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:h-3.5 [&_svg:not([class*='size-'])]:w-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xl: "h-10 gap-2 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:h-3 [&_svg:not([class*='size-'])]:w-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
        "icon-xl": "size-10",
      },
    },
    compoundVariants: [
      {
        variant: ["primary", "secondary", "tertiary", "dark"],
        size: "default",
        class:
          "h-auto min-h-0 gap-2 rounded-[4px] px-6 py-4 text-[1.25rem] leading-6 [&_svg:not([class*='size-'])]:h-6 [&_svg:not([class*='size-'])]:w-6",
      },
      {
        variant: ["primary", "secondary", "tertiary", "dark"],
        size: "xs",
        class:
          "h-auto min-h-0 gap-1.5 rounded-[4px] px-3 py-2 text-[0.875rem] leading-4 [&_svg:not([class*='size-'])]:h-4 [&_svg:not([class*='size-'])]:w-4",
      },
      {
        variant: ["primary", "secondary", "tertiary", "dark"],
        size: "sm",
        class:
          "h-auto min-h-0 gap-2 rounded-[4px] px-3 py-2.5 text-base leading-5 [&_svg:not([class*='size-'])]:h-5 [&_svg:not([class*='size-'])]:w-5",
      },
      {
        variant: ["primary", "secondary", "tertiary", "dark"],
        size: "lg",
        class:
          "h-auto min-h-0 gap-2 rounded-[4px] px-4 py-3 text-[1.125rem] leading-6 [&_svg:not([class*='size-'])]:h-6 [&_svg:not([class*='size-'])]:w-6",
      },
      {
        variant: ["primary", "secondary", "tertiary", "dark"],
        size: "xl",
        class:
          "h-auto min-h-0 gap-2 rounded-[4px] px-6 py-4 text-[1.25rem] leading-6 [&_svg:not([class*='size-'])]:h-6 [&_svg:not([class*='size-'])]:w-6",
      },
      {
        variant: ["link", "link-dark"],
        size: "default",
        class:
          "h-auto min-h-0 gap-2 px-0 py-0 text-[1.25rem] leading-6 [&_svg:not([class*='size-'])]:h-6 [&_svg:not([class*='size-'])]:w-6",
      },
      {
        variant: ["link", "link-dark"],
        size: "xs",
        class:
          "h-auto min-h-0 gap-1.5 px-0 py-0 text-[0.875rem] leading-4 [&_svg:not([class*='size-'])]:h-4 [&_svg:not([class*='size-'])]:w-4",
      },
      {
        variant: ["link", "link-dark"],
        size: "sm",
        class:
          "h-auto min-h-0 gap-2 px-0 py-0 text-base leading-5 [&_svg:not([class*='size-'])]:h-5 [&_svg:not([class*='size-'])]:w-5",
      },
      {
        variant: ["link", "link-dark"],
        size: "lg",
        class:
          "h-auto min-h-0 gap-2 px-0 py-0 text-[1.125rem] leading-6 [&_svg:not([class*='size-'])]:h-6 [&_svg:not([class*='size-'])]:w-6",
      },
      {
        variant: ["link", "link-dark"],
        size: "xl",
        class:
          "h-auto min-h-0 gap-2 px-0 py-0 text-[1.25rem] leading-6 [&_svg:not([class*='size-'])]:h-6 [&_svg:not([class*='size-'])]:w-6",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
