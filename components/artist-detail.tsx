import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from "lucide-react"

import { ImagePlaceholder } from "@/components/image-placeholder"
import { Button } from "@/components/ui/button"
import type { ArtistProfile } from "@/lib/data/artists"
import { siteConfig } from "@/lib/site-config"

type ArtistDetailProps = {
  artist: ArtistProfile
}

function MetaList({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  if (items.length === 0) return null

  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-wide text-primary">
        {title}
      </h2>
      <ul className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ArtistDetail({ artist }: ArtistDetailProps) {
  const biographyParagraphs = artist.biography
    ? artist.biography.split(/\n\n+/).filter(Boolean)
    : []

  const metaSections = [
    { title: "Catégories", items: artist.categories },
    { title: "Formules", items: artist.formats ?? [] },
    { title: "Types d'événement", items: artist.eventTypes ?? [] },
    { title: "Thématiques", items: artist.themes ?? [] },
  ].filter((section) => section.items.length > 0)

  return (
    <div className="space-y-10">
      <Button asChild variant="ghost" className="h-auto px-0 text-muted-foreground">
        <Link href="/artistes">
          <ArrowLeftIcon className="size-4" />
          Retour aux artistes
        </Link>
      </Button>

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,380px)_1fr]">
        <div className="space-y-4">
          <ImagePlaceholder
            label={`Photo de ${artist.name}`}
            src={artist.image}
            alt={artist.name}
            aspect="square"
            className="mx-auto w-full max-w-sm"
          />

          {artist.gallery && artist.gallery.length > 0 ? (
            <div className="grid grid-cols-3 gap-2">
              {artist.gallery.slice(0, 6).map((item) => (
                <ImagePlaceholder
                  key={item.url}
                  label={artist.name}
                  src={item.url}
                  alt={item.alt}
                  aspect="square"
                  className="rounded-lg"
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-6">
          {artist.primaryCategory ? (
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              {artist.primaryCategory}
            </p>
          ) : null}

          {biographyParagraphs.length > 0 ? (
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {biographyParagraphs.map((paragraph, index) => (
                <p key={`${artist.slug}-bio-${index}`} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}

          {metaSections.length > 0 ? (
            <div className="grid gap-6 rounded-2xl border border-border bg-muted/30 p-6 sm:grid-cols-2">
              {metaSections.map((section) => (
                <MetaList key={section.title} title={section.title} items={section.items} />
              ))}
            </div>
          ) : null}

          {artist.videos && artist.videos.length > 0 ? (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-primary">
                Vidéos
              </h2>
              <ul className="mt-3 space-y-2">
                {artist.videos.map((video) => (
                  <li key={video.url}>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      Voir la vidéo
                      <ExternalLinkIcon className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <Link href={siteConfig.cta.href}>
                {siteConfig.cta.label}
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            {artist.sourceUrl ? (
              <Button asChild size="lg" variant="outline">
                <a href={artist.sourceUrl} target="_blank" rel="noopener noreferrer">
                  Voir la fiche originale
                  <ExternalLinkIcon className="size-4" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
