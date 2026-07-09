import Link from "next/link"

import { ImagePlaceholder } from "@/components/image-placeholder"
import { Button } from "@/components/ui/button"
import type { Artist } from "@/lib/agence-data"

type ArtistCardProps = {
  artist: Artist
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg sm:flex-row sm:items-stretch">
      <div className="relative min-h-56 w-full shrink-0 self-stretch sm:w-[42%]">
        <ImagePlaceholder
          label={`Photo de ${artist.name}`}
          src={artist.image}
          alt={artist.name}
          fill
          objectPosition={artist.imagePosition}
          className="rounded-none border-0"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-primary">
          {artist.intention}
        </p>
        <h2 className="mt-1 font-heading text-2xl font-semibold">{artist.name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{artist.style}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Public : {artist.audience}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {artist.description}
        </p>
        <Button asChild variant="link" className="mt-4 h-auto justify-start p-0">
          <Link href="/soumission">Réserver une prestation →</Link>
        </Button>
      </div>
    </article>
  )
}
