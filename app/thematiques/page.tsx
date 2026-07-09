import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { PageHero } from "@/components/page-hero"
import { SiteLayout } from "@/components/site-layout"
import { ThemeCard } from "@/components/theme-card"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { themeCategories, themes } from "@/lib/agence-data"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Thématiques | ${siteConfig.business.name}`,
  description: siteConfig.pages.thematiques.subtitle,
}

export default function ThematiquesPage() {
  return (
    <SiteLayout>
      <PageHero
        title={siteConfig.pages.thematiques.title}
        subtitle={siteConfig.pages.thematiques.subtitle}
      >
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link href="/soumission">
            Demander une soumission
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </PageHero>

      <SectionWrapper>
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {themeCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <ThemeCard key={theme.slug} theme={theme} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="font-heading text-2xl font-semibold">
            Pas certain de la thématique?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Décrivez votre événement et on vous recommande la formule idéale.
          </p>
          <Button asChild className="mt-6">
            <Link href="/soumission">Obtenir une recommandation</Link>
          </Button>
        </div>
      </SectionWrapper>
    </SiteLayout>
  )
}
