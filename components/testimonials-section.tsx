import { QuoteIcon } from "lucide-react"

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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.testimonials.items.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <QuoteIcon
              className="size-8 text-primary/30"
              aria-hidden="true"
            />
            <blockquote className="mt-4 text-base leading-relaxed text-foreground">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-semibold">{testimonial.author}</p>
              {testimonial.role ? (
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionWrapper>
  )
}
