"use client"

import { useState } from "react"

import { HERO_MEDIA_CLASS, HERO_OBJECT_POSITION } from "@/lib/media"

type HomeHeroMediaProps = {
  video: string
  poster: string
}

export function HomeHeroMedia({ video, poster }: HomeHeroMediaProps) {
  const [usePoster, setUsePoster] = useState(false)

  if (usePoster) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={poster}
        alt=""
        className={HERO_MEDIA_CLASS}
        style={{ objectFit: "cover", objectPosition: HERO_OBJECT_POSITION }}
        aria-hidden="true"
      />
    )
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className={HERO_MEDIA_CLASS}
      style={{ objectPosition: HERO_OBJECT_POSITION }}
      aria-hidden="true"
      onError={() => setUsePoster(true)}
    >
      <source src={video} type="video/mp4" />
    </video>
  )
}
