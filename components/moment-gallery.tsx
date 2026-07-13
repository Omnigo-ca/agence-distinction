"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react"

import type { MomentGalleryImage } from "@/lib/moments-data"
import { cn } from "@/lib/utils"

type MomentGalleryProps = {
  images: MomentGalleryImage[]
}

function layoutClass(layout?: MomentGalleryImage["layout"]) {
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

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-border/60 bg-muted/30",
              "transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              layoutClass(image.layout)
            )}
            aria-label={`Agrandir : ${image.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: image.objectPosition ?? "center center" }}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a0c10]/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photo"
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
            aria-label="Photo précédente"
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
            aria-label="Photo suivante"
          >
            <ChevronRightIcon className="size-6" aria-hidden="true" />
          </button>

          <figure
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="mx-auto max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-primary-foreground/80">
              {images[activeIndex].alt}
            </figcaption>
            <p className="mt-2 text-center text-xs text-primary-foreground/55">
              {activeIndex + 1} / {images.length}
            </p>
          </figure>
        </div>
      ) : null}
    </>
  )
}
