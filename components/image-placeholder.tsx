"use client"

import { useState } from "react"
import { FACE_OBJECT_POSITION } from "@/lib/media"
import { cn } from "@/lib/utils"

type ImagePlaceholderProps = {
  label: string
  src?: string
  alt?: string
  className?: string
  aspect?: "video" | "square" | "portrait" | "wide" | "auto"
  objectPosition?: string
  objectFit?: "cover" | "contain"
  /** Remplit entièrement un conteneur parent positionné en relative */
  fill?: boolean
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
}

export function ImagePlaceholder({
  label,
  src,
  alt,
  className,
  aspect = "video",
  objectPosition = FACE_OBJECT_POSITION,
  objectFit = "cover",
  fill = false,
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false)

  const showPlaceholder = !src || hasError

  if (fill) {
    if (showPlaceholder) {
      return (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 text-sm text-muted-foreground",
            className
          )}
          aria-label={label}
        >
          <span className="px-4 text-center">{label}</span>
        </div>
      )
    }

    return (
      <div
        className={cn("absolute inset-0 overflow-hidden bg-muted", className)}
        aria-label={label}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? label}
          className="block size-full"
          style={{ objectFit, objectPosition }}
          onError={() => setHasError(true)}
        />
      </div>
    )
  }

  if (showPlaceholder) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl border border-dashed border-border bg-gradient-to-br from-primary/5 to-accent/5 text-sm text-muted-foreground",
          aspectClasses[aspect],
          className
        )}
        aria-label={label}
      >
        <span className="px-4 text-center">{label}</span>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted",
        aspect !== "auto" && aspectClasses[aspect],
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt ?? label}
        className={aspect === "auto" ? "block h-auto w-full" : "size-full"}
        style={aspect === "auto" ? undefined : { objectFit, objectPosition }}
        onError={() => setHasError(true)}
      />
    </div>
  )
}
