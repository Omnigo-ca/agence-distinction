import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" variant="muted">
      <SectionHeading
        title={siteConfig.portfolio.title}
        subtitle={siteConfig.portfolio.subtitle}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.portfolio.items.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-2xl border border-border bg-background"
          >
            <div
              className="flex aspect-square items-center justify-center bg-muted text-sm text-muted-foreground"
              aria-label={`Photo du projet ${item.title} — à intégrer`}
            >
              [Photo]
            </div>
            <div className="p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-primary">
                {item.category}
              </p>
              <h3 className="mt-1 font-semibold">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
