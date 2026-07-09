import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { ArtistCard } from "@/components/artist-card"
import { PageHero } from "@/components/page-hero"
import { SiteLayout } from "@/components/site-layout"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { artistIntentions, artists } from "@/lib/agence-data"
import { siteConfig } from "@/lib/site-config"

export default function ArtistesPage() {
  return (
    <SiteLayout>
      <PageHero
        title={siteConfig.pages.artistes.title}
        subtitle={siteConfig.pages.artistes.subtitle}
      />

      <SectionWrapper>
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {artistIntentions.map((intention) => (
            <span
              key={intention}
              className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary"
            >
              {intention}
            </span>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {artists.map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted/50 p-8 text-center">
          <h2 className="font-heading text-2xl font-semibold">
            Pas certain de l&apos;artiste?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Décrivez l&apos;ambiance recherchée — on vous recommande le talent
            idéal pour votre événement.
          </p>
          <Button asChild className="mt-6">
            <Link href="/soumission">
              Obtenir une recommandation
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </SiteLayout>
  )
}
