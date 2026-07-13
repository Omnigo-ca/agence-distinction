import type { ArtistProfile } from "@/lib/data/artists"
import { HERO_EMBED_FRAME_CLASS, HERO_MEDIA_CLASS, HERO_OBJECT_POSITION } from "@/lib/media"
import { resolveArtistHeroBackground } from "@/lib/artist-hero-media"

type ArtistHeroProps = {
  artist: ArtistProfile
}

function HeroInteractionShield() {
  return <div className="pointer-events-none absolute inset-0" aria-hidden="true" />
}

function HeroPoster({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none ${HERO_MEDIA_CLASS} select-none`}
      style={{ objectPosition: HERO_OBJECT_POSITION }}
    />
  )
}

function HeroBackground({ artist }: { artist: ArtistProfile }) {
  const background = resolveArtistHeroBackground(artist)

  if (background.kind === "video") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <HeroPoster src={background.poster} />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen"
          poster={background.poster}
          tabIndex={-1}
          aria-hidden="true"
          className={`artist-hero-video pointer-events-none ${HERO_MEDIA_CLASS} h-full w-full select-none`}
          style={{ objectPosition: HERO_OBJECT_POSITION }}
        >
          <source src={background.src} type="video/mp4" />
        </video>
        <HeroInteractionShield />
      </div>
    )
  }

  if (background.kind === "youtube") {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      loop: "1",
      playlist: background.videoId,
      controls: "0",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
      iv_load_policy: "3",
      disablekb: "1",
      fs: "0",
    })

    return (
      <div className="absolute inset-0 overflow-hidden">
        <HeroPoster src={background.poster} />
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${background.videoId}?${params.toString()}`}
          title={`Vidéo de fond — ${artist.name}`}
          className={HERO_EMBED_FRAME_CLASS}
          allow="autoplay; encrypted-media"
          aria-hidden="true"
          tabIndex={-1}
        />
        <HeroInteractionShield />
      </div>
    )
  }

  if (background.kind === "vimeo") {
    const params = new URLSearchParams({
      background: "1",
      autoplay: "1",
      muted: "1",
      loop: "1",
      autopause: "0",
      controls: "0",
      byline: "0",
      title: "0",
    })

    return (
      <div className="absolute inset-0 overflow-hidden">
        <HeroPoster src={background.poster} />
        <iframe
          src={`https://player.vimeo.com/video/${background.videoId}?${params.toString()}`}
          title={`Vidéo de fond — ${artist.name}`}
          className={HERO_EMBED_FRAME_CLASS}
          allow="autoplay"
          aria-hidden="true"
          tabIndex={-1}
        />
        <HeroInteractionShield />
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={background.src}
      alt=""
      className={`pointer-events-none ${HERO_MEDIA_CLASS} select-none`}
      style={{ objectPosition: HERO_OBJECT_POSITION }}
      aria-hidden="true"
    />
  )
}

export function ArtistHero({ artist }: ArtistHeroProps) {
  return (
    <section className="relative -mt-16 flex min-h-svh items-center justify-center overflow-hidden text-primary-foreground">
      <HeroBackground artist={artist} />

      <div className="absolute inset-0 gradient-warm opacity-80" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-16 text-center md:px-6">
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {artist.name}
        </h1>
        {artist.primaryCategory ? (
          <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
            {artist.primaryCategory}
          </p>
        ) : null}
      </div>
    </section>
  )
}
