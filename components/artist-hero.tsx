import { getArtistFeaturedThemes, type ArtistProfile } from "@/lib/data/artists"
import { ArtistHeroBackground } from "@/components/artist-hero-background"
import { HeroOverlay } from "@/components/hero-overlay"

type ArtistHeroProps = {
  artist: ArtistProfile
}

export function ArtistHero({ artist }: ArtistHeroProps) {
  const featuredThemes = getArtistFeaturedThemes(artist)

  return (
    <section className="relative -mt-16 flex min-h-svh items-center justify-center overflow-hidden bg-dark text-primary-foreground">
      <ArtistHeroBackground artist={artist} />

      <HeroOverlay />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-16 text-center md:px-6">
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {artist.name}
        </h1>
        {artist.primaryCategory ? (
          <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
            {artist.primaryCategory}
          </p>
        ) : null}
        {featuredThemes.length > 0 ? (
          <ul
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
            aria-label="Thématiques principales"
          >
            {featuredThemes.map((theme) => (
              <li
                key={theme}
                className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-sm text-primary-foreground/90 backdrop-blur-sm"
              >
                {theme}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}
