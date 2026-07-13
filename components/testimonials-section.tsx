import { TestimonialsGrid } from "@/components/testimonials-grid"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export function TestimonialsSection() {
  return (
    <SectionWrapper id="temoignages">
      <SectionHeading
        title={siteConfig.testimonials.title}
        subtitle={siteConfig.testimonials.subtitle}
      />

      <TestimonialsGrid initialCount={6} showViewAllLink />
    </SectionWrapper>
  )
}
