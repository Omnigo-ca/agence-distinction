import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export function ProcessSection() {
  return (
    <SectionWrapper id="processus">
      <SectionHeading
        title={siteConfig.process.title}
        subtitle={siteConfig.process.subtitle}
      />

      <ol className="grid gap-6 md:grid-cols-3">
        {siteConfig.process.steps.map((step) => (
          <li
            key={step.step}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <span className="text-sm font-semibold text-primary">{step.step}</span>
            <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  )
}
