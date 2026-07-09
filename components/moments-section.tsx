import Link from "next/link"
import {
  CalendarIcon,
  Flower2Icon,
  HeartIcon,
  LeafIcon,
  MusicIcon,
  PartyPopperIcon,
  SparklesIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { moments } from "@/lib/agence-data"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const iconMap = {
  party: PartyPopperIcon,
  leaf: LeafIcon,
  music: MusicIcon,
  heart: HeartIcon,
  sparkles: SparklesIcon,
  flower: Flower2Icon,
  calendar: CalendarIcon,
} as const

export function MomentsSection() {
  return (
    <SectionWrapper id="moments" variant="muted">
      <SectionHeading
        title={siteConfig.moments.title}
        subtitle={siteConfig.moments.subtitle}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {moments.map((moment) => {
          const Icon = iconMap[moment.icon as keyof typeof iconMap] ?? SparklesIcon
          return (
            <Link
              key={moment.title}
              href={moment.href}
              className={cn(
                "group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all",
                "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              )}
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{moment.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {moment.description}
              </p>
              <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
                {moment.cta} →
              </span>
            </Link>
          )
        })}
      </div>

      <div className="mt-10 text-center">
        <Button asChild variant="outline">
          <Link href="/soumission">Obtenir une recommandation</Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
