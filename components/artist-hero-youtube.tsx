"use client"

import { useEffect, useState } from "react"

import { ARTIST_HERO_VIDEO_START_SECONDS } from "@/lib/artist-hero-media"
import { ARTIST_HERO_EMBED_CLASS } from "@/lib/media"

type ArtistHeroYoutubeProps = {
  videoId: string
  title: string
}

async function isYoutubeVideoAvailable(videoId: string): Promise<boolean> {
  const response = await fetch(`/api/youtube-available?videoId=${encodeURIComponent(videoId)}`)
  if (!response.ok) return false
  const data = (await response.json()) as { available?: boolean }
  return data.available === true
}

function HeroEmbedTopMask() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-14 bg-gradient-to-b from-[#1a0c10] to-transparent"
      aria-hidden="true"
    />
  )
}

export function ArtistHeroYoutube({ videoId, title }: ArtistHeroYoutubeProps) {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    let cancelled = false

    isYoutubeVideoAvailable(videoId)
      .then((available) => {
        if (!cancelled) setIsAvailable(available)
      })
      .catch(() => {
        if (!cancelled) setIsAvailable(false)
      })

    return () => {
      cancelled = true
    }
  }, [videoId])

  if (!isAvailable) return null

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
    <div className="absolute inset-0 overflow-hidden">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
        title={title}
        className={ARTIST_HERO_EMBED_CLASS}
        allow="autoplay; encrypted-media; picture-in-picture"
        aria-hidden="true"
        tabIndex={-1}
      />
      <HeroEmbedTopMask />
    </div>
  )
}
