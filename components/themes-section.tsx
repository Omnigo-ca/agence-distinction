import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { InteractiveBentoGallery } from "@/components/ui/interactive-bento-gallery"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { themes } from "@/lib/agence-data"
import { siteConfig } from "@/lib/site-config"
import { getBentoItemsBySlugs } from "@/lib/thematiques-bento"

type ThemesSectionProps = {
  limit?: number
  showViewAll?: boolean
}

export function ThemesSection({ limit = 6, showViewAll = true }: ThemesSectionProps) {
  const bentoItems = getBentoItemsBySlugs(
    themes.slice(0, limit).map((theme) => theme.slug)
  )

  return (
    <SectionWrapper id="thematiques">
      <SectionHeading
        title={siteConfig.themes.title}
        subtitle={siteConfig.themes.subtitle}
      />

      <InteractiveBentoGallery
        items={bentoItems}
        submissionHref={siteConfig.cta.href}
        layout="grid"
      />

      {showViewAll ? (
        <div className="mt-10 text-center">
          <Button asChild>
            <Link href={siteConfig.themes.viewAllHref}>
              {siteConfig.themes.viewAllLabel}
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      ) : null}
    </SectionWrapper>
  )
}
