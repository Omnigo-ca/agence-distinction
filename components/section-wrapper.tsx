import { cn } from "@/lib/utils"

type SectionWrapperProps = {
  id?: string
  children: React.ReactNode
  className?: string
  variant?: "default" | "muted" | "dark"
  "aria-labelledby"?: string
}

export function SectionWrapper({
  id,
  children,
  className,
  variant = "default",
  "aria-labelledby": ariaLabelledby,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "scroll-mt-20 px-4 py-16 md:px-6 md:py-24",
        variant === "muted" && "bg-muted/50",
        variant === "dark" && "bg-dark text-primary-foreground",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}
