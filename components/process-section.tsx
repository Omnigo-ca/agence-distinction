import { ProcessTimeline } from "@/components/process-timeline"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export function ProcessSection() {
  return (
    <SectionWrapper id="processus" variant="muted" className="py-12 md:py-16">
      <SectionHeading
        title={siteConfig.process.title}
        subtitle={siteConfig.process.subtitle}
        className="mb-6 md:mb-8"
      />

      <ProcessTimeline
        steps={siteConfig.process.steps}
        ctaLabel={siteConfig.cta.label}
        ctaHref={siteConfig.cta.href}
      />
    </SectionWrapper>
  )
}
