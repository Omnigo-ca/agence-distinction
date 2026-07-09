import { SectionWrapper } from "@/components/section-wrapper"
import { stats } from "@/lib/agence-data"
import { siteConfig } from "@/lib/site-config"

export function StatsSection() {
  return (
    <SectionWrapper className="py-12 md:py-16">
      <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
        {siteConfig.credibility.line}
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-border bg-card p-6 text-center"
          >
            <p className="text-4xl font-semibold text-primary">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            {stat.note ? (
              <p className="mt-1 text-xs text-muted-foreground/60">{stat.note}</p>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        {siteConfig.credibility.specialty}
      </p>
    </SectionWrapper>
  )
}
