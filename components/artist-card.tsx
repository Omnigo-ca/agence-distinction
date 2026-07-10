import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { ImagePlaceholder } from "@/components/image-placeholder"
import { Button } from "@/components/ui/button"
import {
  getArtistCategories,
  getArtistPreview,
  type ArtistProfile,
} from "@/lib/data/artists"

type ArtistCardProps = {
  artist: ArtistProfile
}

export function ArtistCard({ artist }: ArtistCardProps) {
  const preview = getArtistPreview(artist)
  const extraCategories = getArtistCategories(artist)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg sm:flex-row sm:items-stretch">
      <Link
        href={`/artistes/${artist.slug}`}
        className="relative min-h-56 w-full shrink-0 self-stretch sm:w-[42%]"
        aria-label={`Voir la fiche de ${artist.name}`}
      >
        <ImagePlaceholder
          label={`Photo de ${artist.name}`}
          src={artist.image}
          alt={artist.name}
          fill
          className="rounded-none border-0 transition-transform duration-300 hover:scale-[1.02]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {artist.primaryCategory ? (
          <p className="text-xs font-medium uppercase tracking-wide text-primary">
            {artist.primaryCategory}
          </p>
        ) : null}
        <h2 className="mt-1 font-heading text-2xl font-semibold">
          <Link
            href={`/artistes/${artist.slug}`}
            className="transition-colors hover:text-primary"
          >
            {artist.name}
          </Link>
        </h2>
        {extraCategories.length > 0 ? (
          <p className="mt-1 text-sm text-muted-foreground">
            {extraCategories.join(" · ")}
          </p>
        ) : null}
        {preview ? (
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
            {preview}
          </p>
        ) : null}
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <Button asChild variant="link" className="h-auto justify-start p-0">
            <Link href={`/artistes/${artist.slug}`}>Voir la fiche →</Link>
          </Button>
          <Button asChild variant="link" className="h-auto justify-start p-0">
            <Link href="/soumission">Réserver une prestation →</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
