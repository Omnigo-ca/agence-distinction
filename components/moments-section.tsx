import Link from "next/link"

import { MomentsCarousel } from "@/components/moments-carousel"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { moments } from "@/lib/agence-data"
import { siteConfig } from "@/lib/site-config"

export function MomentsSection() {
  return (
    <SectionWrapper id="moments" variant="muted">
      <SectionHeading
        title={siteConfig.moments.title}
        subtitle={siteConfig.moments.subtitle}
      />

      <MomentsCarousel items={moments} />

      <div className="mt-10 text-center">
        <Button asChild variant="outline">
          <Link href="/soumission">Obtenir une recommandation</Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
