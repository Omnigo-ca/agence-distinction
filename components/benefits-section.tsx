import { CardFlip } from "@/components/ui/card-flip"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export function BenefitsSection() {
  const { benefits } = siteConfig

  return (
    <SectionWrapper id="pourquoi">
      <SectionHeading
        title={benefits.title}
        subtitle={benefits.subtitle}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {benefits.flipCards.map((card) => (
          <CardFlip
            key={card.title}
            item={card}
            ctaHref={benefits.ctaHref}
            ctaLabel={benefits.ctaLabel}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
