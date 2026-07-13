import type { Metadata } from "next"

import { PageHero } from "@/components/page-hero"
import { SiteLayout } from "@/components/site-layout"
import { TestimonialsGrid } from "@/components/testimonials-grid"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Témoignages | Agence Distinction",
  description:
    "Découvrez ce que nos partenaires et clients disent de l'Agence Distinction. Avis Google vérifiés de résidences, CHSLD et organisateurs d'événements.",
}

export default function TestimonialsPage() {
  return (
    <SiteLayout>
      <PageHero
        title={siteConfig.pages.temoignages.title}
        subtitle={siteConfig.pages.temoignages.subtitle}
      />

      <SectionWrapper className="pb-16 md:pb-24">
        <TestimonialsGrid
          initialCount={9}
          loadMoreCount={9}
          showLoadMore
          showViewAllLink={false}
        />
      </SectionWrapper>
    </SiteLayout>
  )
}
