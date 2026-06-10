import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export function AboutSection() {
  return (
    <SectionWrapper id="apropos" variant="muted">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            title={siteConfig.about.title}
            subtitle={siteConfig.about.subtitle}
            align="left"
            className="mb-6"
          />
          <div className="space-y-4 text-muted-foreground">
            {siteConfig.about.content.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div
          className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-border bg-background text-sm text-muted-foreground"
          aria-label="Photo équipe ou entreprise — à intégrer depuis le Drive client"
        >
          [Photo à intégrer]
        </div>
      </div>
    </SectionWrapper>
  )
}
