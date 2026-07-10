"use client"

import { useEffect, useState, type ReactNode } from "react"

import { ARTIST_HERO_POSTER_HIDE_MS } from "@/lib/artist-hero-media"

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
        className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${
          posterVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  )
}
