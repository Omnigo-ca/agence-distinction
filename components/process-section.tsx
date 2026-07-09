import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export function ProcessSection() {
  return (
    <SectionWrapper id="processus" variant="muted">
      <SectionHeading
        title={siteConfig.process.title}
        subtitle={siteConfig.process.subtitle}
      />

      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.process.steps.map((step) => (
          <li
            key={step.step}
            className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <span className="text-sm font-semibold text-primary">{step.step}</span>
            <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-10 text-center">
        <Button asChild>
          <Link href="/soumission">Parler à l'agence</Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
