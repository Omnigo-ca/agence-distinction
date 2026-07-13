import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type ValuesCardProps = {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
}

export function ValuesCard({
  icon: Icon,
  title,
  subtitle,
  description,
}: ValuesCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[28px]",
        "border border-[#E8CFC9] bg-gradient-to-br from-white/95 via-[#FEF9F6] to-[#F5EDE8]/60",
        "px-8 py-12 text-center shadow-[0_10px_30px_rgba(117,65,70,0.06)] backdrop-blur-sm",
        "transition-all duration-500",
        "hover:-translate-y-1.5 hover:border-[#DDA9A7]",
        "hover:bg-gradient-to-br hover:from-white/90 hover:via-[#FEF9F6] hover:to-[#F5EDE8]/80",
        "hover:shadow-[0_20px_45px_rgba(117,65,70,0.12)]"
      )}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 size-28 rounded-full bg-primary/5 blur-2xl transition-opacity duration-500 group-hover:bg-[#D4A5A5]/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-6 left-6 size-16 rounded-full bg-[#F5EDE8]/60 blur-xl transition-transform duration-500 group-hover:scale-110"
        aria-hidden="true"
      />

      <div className="relative mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-[#F5EDE8]/90">
        <Icon className="relative size-7 text-primary" aria-hidden="true" />
      </div>

      <h3 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
        {title}
      </h3>

      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/75">
        {subtitle}
      </p>

      <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  )
}
