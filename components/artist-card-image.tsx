import { ImagePlaceholder } from "@/components/image-placeholder"
import type { Artist } from "@/lib/agence-data"

type ArtistCardImageProps = {
  artist: Pick<Artist, "name" | "image" | "imageFill" | "slug">
}

export function ArtistCardImage({ artist }: ArtistCardImageProps) {
  const useFill = artist.imageFill === true

  if (useFill) {
    return (
      <div className="relative aspect-square w-full self-stretch sm:aspect-auto sm:h-full sm:min-h-[280px]">
        <ImagePlaceholder
          label={`Photo — ${artist.name}`}
          src={artist.image}
          alt={artist.name}
          fill
          className="rounded-none border-0"
        />
      </div>
    )
  }

  return (
    <ImagePlaceholder
      label={`Photo — ${artist.name}`}
      src={artist.image}
      alt={artist.name}
      aspect="square"
      className="w-full self-stretch rounded-none border-0 sm:aspect-auto sm:h-full"
    />
  )
}
