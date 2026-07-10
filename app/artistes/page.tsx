import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { ArtistCard } from "@/components/artist-card"
import { PageHero } from "@/components/page-hero"
import { SiteLayout } from "@/components/site-layout"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { getAllArtistProfiles } from "@/lib/data/artists"
import { siteConfig } from "@/lib/site-config"

export default function ArtistesPage() {
  const artists = getAllArtistProfiles()

  return (
    <SiteLayout>
      <PageHero
        title={siteConfig.pages.artistes.title}
        subtitle={siteConfig.pages.artistes.subtitle}
      />

      <SectionWrapper>
        <p className="mb-8 text-center text-muted-foreground">
          {artists.length} artistes répertoriés sur le site actuel de l&apos;Agence
          Distinction.
        </p>

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
            Décrivez l&apos;ambiance recherchée, on vous recommande le talent
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
