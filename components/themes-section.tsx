import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeCard } from "@/components/theme-card"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { themes } from "@/lib/agence-data"
import { siteConfig } from "@/lib/site-config"

type ThemesSectionProps = {
  limit?: number
  showViewAll?: boolean
}

export function ThemesSection({ limit = 6, showViewAll = true }: ThemesSectionProps) {
  const displayedThemes = themes.slice(0, limit)

  return (
    <SectionWrapper id="thematiques">
      <SectionHeading
        title={siteConfig.themes.title}
        subtitle={siteConfig.themes.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedThemes.map((theme) => (
          <ThemeCard key={theme.slug} theme={theme} />
        ))}
      </div>

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
