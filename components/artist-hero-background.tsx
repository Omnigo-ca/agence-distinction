"use client"

import { useEffect, useState } from "react"

import type { ArtistProfile } from "@/lib/data/artists"
import { ArtistHeroYoutube } from "@/components/artist-hero-youtube"
import { resolveArtistHeroBackground } from "@/lib/artist-hero-media"
import {
  ARTIST_HERO_EMBED_CLASS,
  ARTIST_HERO_MEDIA_CLASS,
  HERO_OBJECT_POSITION,
} from "@/lib/media"

function HeroInteractionShield() {
  return <div className="pointer-events-none absolute inset-0" aria-hidden="true" />
}

function HeroEmbedTopMask() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-14 bg-gradient-to-b from-[#1a0c10] to-transparent"
      aria-hidden="true"
    />
  )
}

type ArtistHeroVimeoProps = {
  videoId: string
  title: string
}

async function isVimeoVideoAvailable(videoId: string): Promise<boolean> {
  const response = await fetch(`/api/vimeo-available?videoId=${encodeURIComponent(videoId)}`)
  if (!response.ok) return false
  const data = (await response.json()) as { available?: boolean }
  return data.available === true
}

function ArtistHeroVimeo({ videoId, title }: ArtistHeroVimeoProps) {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    let cancelled = false

    isVimeoVideoAvailable(videoId)
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
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?${params.toString()}`}
        title={title}
        className={ARTIST_HERO_EMBED_CLASS}
        allow="autoplay"
        aria-hidden="true"
        tabIndex={-1}
      />
      <HeroEmbedTopMask />
    </div>
  )
}

function ArtistHeroLocalVideo({ src }: { src: string }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen"
        tabIndex={-1}
        aria-hidden="true"
        onError={() => setHasError(true)}
        className={`artist-hero-video pointer-events-none ${ARTIST_HERO_MEDIA_CLASS} select-none`}
        style={{ objectPosition: HERO_OBJECT_POSITION }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

type ArtistHeroBackgroundProps = {
  artist: ArtistProfile
}

export function ArtistHeroBackground({ artist }: ArtistHeroBackgroundProps) {
  const background = resolveArtistHeroBackground(artist)

  if (background.kind === "none") return null

  if (background.kind === "video") {
    return (
      <>
        <ArtistHeroLocalVideo src={background.src} />
        <HeroInteractionShield />
      </>
    )
  }

  if (background.kind === "youtube") {
    return (
      <>
        <ArtistHeroYoutube
          videoId={background.videoId}
          title={`Vidéo de fond — ${artist.name}`}
        />
        <HeroInteractionShield />
      </>
    )
  }

  return (
    <>
      <ArtistHeroVimeo
        videoId={background.videoId}
        title={`Vidéo de fond — ${artist.name}`}
      />
      <HeroInteractionShield />
    </>
  )
}
