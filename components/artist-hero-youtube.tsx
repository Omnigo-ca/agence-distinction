"use client"

import { ARTIST_HERO_VIDEO_START_SECONDS } from "@/lib/artist-hero-media"
import { HERO_EMBED_FRAME_CLASS } from "@/lib/media"
import { ArtistHeroMediaCover } from "@/components/artist-hero-media-cover"

type ArtistHeroYoutubeProps = {
  videoId: string
  poster: string
  title: string
}

const IFRAME_CLASS = HERO_EMBED_FRAME_CLASS

export function ArtistHeroYoutube({ videoId, poster, title }: ArtistHeroYoutubeProps) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    start: String(ARTIST_HERO_VIDEO_START_SECONDS),
    controls: "0",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    iv_load_policy: "3",
    disablekb: "1",
    fs: "0",
    cc_load_policy: "0",
  })

  return (
    <ArtistHeroMediaCover poster={poster}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
        title={title}
        className={IFRAME_CLASS}
        allow="autoplay; encrypted-media; picture-in-picture"
        aria-hidden="true"
        tabIndex={-1}
      />
    </ArtistHeroMediaCover>
  )
}
