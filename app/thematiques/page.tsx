import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { PageHero } from "@/components/page-hero"
import { SiteLayout } from "@/components/site-layout"
import { ThematiquesPageContent } from "@/components/thematiques-page-content"
import { Button } from "@/components/ui/button"
import { mediaAssets } from "@/lib/media"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Thématiques | ${siteConfig.business.name}`,
  description:
    "Explorez des idées de spectacles, d'animations et d'expériences musicales pensées pour les résidences, les RPA, les CHSLD et les milieux de vie.",
}

export default function ThematiquesPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Trouvez la thématique parfaite pour votre prochain spectacle"
        subtitle="Explorez des idées de spectacles, d'animations et d'expériences musicales pensées pour les résidences, les RPA, les CHSLD et les milieux de vie."
        backgroundImage={mediaAssets.thematiquesHero}
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href={siteConfig.cta.href}>
              {siteConfig.cta.label}
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Link href="/soumission">Demander une recommandation</Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-primary-foreground/70">
          {siteConfig.credibility.line}
        </p>
      </PageHero>

      <ThematiquesPageContent />
    </SiteLayout>
  )
}
