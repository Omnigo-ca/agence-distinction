"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Flower2Icon,
  HeartIcon,
  LeafIcon,
  MusicIcon,
  PartyPopperIcon,
  SparklesIcon,
} from "lucide-react"

import type { Moment } from "@/lib/agence-data"
import { cn } from "@/lib/utils"

const iconMap = {
  party: PartyPopperIcon,
  leaf: LeafIcon,
  music: MusicIcon,
  heart: HeartIcon,
  sparkles: SparklesIcon,
  flower: Flower2Icon,
  calendar: CalendarIcon,
} as const

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(1)

  useEffect(() => {
    const queries = [
      { mq: "(min-width: 1280px)", count: 4 },
      { mq: "(min-width: 1024px)", count: 3 },
      { mq: "(min-width: 640px)", count: 2 },
    ] as const

    const update = () => {
      for (const { mq, count } of queries) {
        if (window.matchMedia(mq).matches) {
          setSlidesPerView(count)
          return
        }
      }
      setSlidesPerView(1)
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return slidesPerView
}

function MomentCard({ moment }: { moment: Moment }) {
  const Icon = iconMap[moment.icon as keyof typeof iconMap] ?? SparklesIcon

  return (
    <Link
      href={moment.href}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all",
        "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      )}
    >
      <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold">{moment.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {moment.description}
      </p>
      <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
        {moment.cta} →
      </span>
    </Link>
  )
}

type MomentsCarouselProps = {
  items: Moment[]
}

export function MomentsCarousel({ items }: MomentsCarouselProps) {
  const slidesPerView = useSlidesPerView()
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const maxIndex = Math.max(0, items.length - slidesPerView)
  const dotCount = maxIndex + 1

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.min(Math.max(index, 0), maxIndex))
    },
    [maxIndex]
  )

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])

  useEffect(() => {
    if (activeIndex > maxIndex) setActiveIndex(maxIndex)
  }, [activeIndex, maxIndex])

  useEffect(() => {
    const node = trackRef.current
    if (!node) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "Numpad4") {
        event.preventDefault()
        goPrev()
      }
      if (event.key === "ArrowRight" || event.key === "Numpad6") {
        event.preventDefault()
        goNext()
      }
    }

    node.addEventListener("keydown", handleKeyDown)
    return () => node.removeEventListener("keydown", handleKeyDown)
  }, [goNext, goPrev])

  const slideOffset = useMemo(
    () => (activeIndex * 100) / slidesPerView,
    [activeIndex, slidesPerView]
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
          aria-label="Carte précédente"
        >
          <ChevronLeftIcon className="size-5" aria-hidden="true" />
        </button>

        <div
          ref={trackRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Moments et ambiances"
          className="min-w-0 flex-1 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${slideOffset}%)` }}
          >
            {items.map((moment) => (
              <div
                key={moment.title}
                className="shrink-0 px-2.5"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <MomentCard moment={moment} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={activeIndex >= maxIndex}
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
          aria-label="Carte suivante"
        >
          <ChevronRightIcon className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div
        className="flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Position dans le carousel"
      >
        {Array.from({ length: dotCount }, (_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Aller à la position ${index + 1} sur ${dotCount}`}
            onClick={() => goTo(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === activeIndex
                ? "w-6 bg-primary"
                : "w-2 bg-border hover:bg-primary/40"
            )}
          />
        ))}
      </div>
    </div>
  )
}
