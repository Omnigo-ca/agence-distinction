import {
  CalendarCheckIcon,
  HandHeartIcon,
  HeartHandshakeIcon,
  Music2Icon,
  PaletteIcon,
  ShieldCheckIcon,
  SmileIcon,
  SparklesIcon,
} from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { benefits } from "@/lib/agence-data"
import { siteConfig } from "@/lib/site-config"

const benefitIcons = [
  HandHeartIcon,
  HeartHandshakeIcon,
  Music2Icon,
  SparklesIcon,
  CalendarCheckIcon,
  ShieldCheckIcon,
  SmileIcon,
  PaletteIcon,
]

export function BenefitsSection() {
  return (
    <SectionWrapper id="pourquoi">
      <SectionHeading
        title={siteConfig.benefits.title}
        subtitle={siteConfig.benefits.subtitle}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefitIcons[index] ?? SparklesIcon
          return (
            <div
              key={benefit.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
