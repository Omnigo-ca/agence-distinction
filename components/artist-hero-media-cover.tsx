"use client"

import { useEffect, useState, type ReactNode } from "react"

import { ARTIST_HERO_POSTER_HIDE_MS } from "@/lib/artist-hero-media"
import { HERO_MEDIA_CLASS, HERO_OBJECT_POSITION } from "@/lib/media"

type ArtistHeroMediaCoverProps = {
  poster: string
  children: ReactNode
}

export function ArtistHeroMediaCover({ poster, children }: ArtistHeroMediaCoverProps) {
  const [posterVisible, setPosterVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setPosterVisible(false), ARTIST_HERO_POSTER_HIDE_MS)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      {children}
      {/* Cache les contrôles du lecteur pendant le chargement et le seek initial */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className={`${HERO_MEDIA_CLASS} transition-opacity duration-1000 ${
          posterVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ objectPosition: HERO_OBJECT_POSITION }}
      />
    </>
  )
}
