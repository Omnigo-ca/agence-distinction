import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { ImagePlaceholder } from "@/components/image-placeholder"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { artists } from "@/lib/agence-data"
import { resolveArtistSlug } from "@/lib/data/artists"
import { siteConfig } from "@/lib/site-config"

export function ArtistsSection() {
  return (
    <SectionWrapper id="artistes" variant="muted">
      <SectionHeading
        title={siteConfig.artists.title}
        subtitle={siteConfig.artists.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artists.slice(0, 6).map((artist) => (
          <Link
            key={artist.slug}
            href={`/artistes/${resolveArtistSlug(artist.slug)}`}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <article>
              <ImagePlaceholder
                label={`Photo artiste, ${artist.name}`}
                src={artist.image}
                alt={artist.name}
                aspect="square"
                className="rounded-none border-0 transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {artist.intention}
                </p>
                <h3 className="mt-1 text-xl font-semibold transition-colors group-hover:text-primary">
                  {artist.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{artist.style}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {artist.description}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button asChild>
          <Link href={siteConfig.artists.viewAllHref}>
            {siteConfig.artists.viewAllLabel}
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
