"use client"

import { useCallback, useEffect, useState } from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  XIcon,
} from "lucide-react"

import type { MomentGalleryItem } from "@/lib/moments-data"
import { cn } from "@/lib/utils"

type MomentGalleryProps = {
  images: MomentGalleryItem[]
}

function layoutClass(layout?: MomentGalleryItem["layout"]) {
  switch (layout) {
    case "hero":
      return "col-span-2 row-span-2 md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-[360px]"
    case "wide":
      return "col-span-2 min-h-[200px] md:min-h-[240px]"
    case "tall":
      return "row-span-2 min-h-[280px] md:min-h-[320px]"
    default:
      return "min-h-[200px] md:min-h-[220px]"
  }
}

function isVideoItem(item: MomentGalleryItem) {
  return item.type === "video"
}

export function MomentGallery({ images }: MomentGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])

  const showPrevious = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + images.length) % images.length
    )
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % images.length
    )
  }, [images.length])

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") showPrevious()
      if (event.key === "ArrowRight") showNext()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex, close, showNext, showPrevious])

  const activeItem = activeIndex !== null ? images[activeIndex] : null

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {images.map((item, index) => {
          const video = isVideoItem(item)

          return (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border/60 bg-muted/30",
                "transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                layoutClass(item.layout)
              )}
              aria-label={
                video ? `Lire la vidéo : ${item.alt}` : `Agrandir : ${item.alt}`
              }
            >
              {video ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.poster ?? item.src}
                    alt=""
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{
                      objectPosition: item.objectPosition ?? "center center",
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute inset-0 bg-[#1a0c10]/20 transition-colors duration-300 group-hover:bg-[#1a0c10]/30" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex size-14 items-center justify-center rounded-full border border-primary-foreground/25 bg-dark/55 text-primary-foreground shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 md:size-16">
                      <PlayIcon
                        className="ml-1 size-6 fill-current md:size-7"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={item.src}
                  alt={item.alt}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{
                    objectPosition: item.objectPosition ?? "center center",
                  }}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </button>
          )
        })}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a0c10]/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie média"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/20 bg-dark/60 text-primary-foreground transition-colors hover:bg-dark/80"
            aria-label="Fermer la galerie"
          >
            <XIcon className="size-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPrevious()
            }}
            className="absolute left-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/20 bg-dark/60 text-primary-foreground transition-colors hover:bg-dark/80 md:left-6"
            aria-label="Élément précédent"
          >
            <ChevronLeftIcon className="size-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            className="absolute right-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/20 bg-dark/60 text-primary-foreground transition-colors hover:bg-dark/80 md:right-6"
            aria-label="Élément suivant"
          >
            <ChevronRightIcon className="size-6" aria-hidden="true" />
          </button>

          <figure
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {isVideoItem(activeItem) ? (
              <video
                key={activeItem.src}
                src={activeItem.src}
                poster={activeItem.poster}
                controls
                playsInline
                autoPlay
                className="mx-auto max-h-[78vh] w-full max-w-full rounded-2xl bg-dark object-contain shadow-2xl"
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="mx-auto max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              />
            )}
            <figcaption className="mt-4 text-center text-sm text-primary-foreground/80">
              {activeItem.alt}
            </figcaption>
            <p className="mt-2 text-center text-xs text-primary-foreground/55">
              {(activeIndex ?? 0) + 1} / {images.length}
            </p>
          </figure>
        </div>
      ) : null}
    </>
  )
}
