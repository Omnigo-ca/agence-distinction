"use client"

import { BadgeCheck, Star } from "lucide-react"
import { useState } from "react"

import type { Testimonial } from "@/lib/site-config"

const CLAMP_LENGTH = 160

type TestimonialCardProps = {
  testimonial: Testimonial
}

function GoogleMark() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
      alt="Google"
      width={20}
      height={20}
      className="size-5 shrink-0"
      loading="lazy"
    />
  )
}

function AuthorAvatar({ testimonial }: { testimonial: Testimonial }) {
  const [failed, setFailed] = useState(false)

  if (testimonial.avatar && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={testimonial.avatar}
        alt=""
        width={40}
        height={40}
        className="size-10 shrink-0 rounded-full object-cover"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    )
  }

  const initial = testimonial.author.trim().charAt(0).toUpperCase() || "?"

  return (
    <div
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary"
    >
      {initial}
    </div>
  )
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false)
  const isLong = testimonial.quote.length > CLAMP_LENGTH
  const displayQuote =
    expanded || !isLong
      ? testimonial.quote
      : `${testimonial.quote.slice(0, CLAMP_LENGTH).trimEnd()}...`

  return (
    <figure className="flex h-full flex-col rounded-xl border border-border/50 bg-[#f8f9fa] p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <AuthorAvatar testimonial={testimonial} />
          <div className="min-w-0">
            <p className="truncate font-semibold text-foreground">
              {testimonial.author}
            </p>
            {testimonial.date ? (
              <p className="text-xs text-muted-foreground">{testimonial.date}</p>
            ) : null}
          </div>
        </div>
        <GoogleMark />
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        {Array.from({ length: testimonial.rating ?? 5 }).map((_, index) => (
          <Star
            key={index}
            className="size-4 fill-[#fbbc04] text-[#fbbc04]"
            aria-hidden="true"
          />
        ))}
        <BadgeCheck
          className="size-4 fill-[#4285f4] text-white"
          aria-label="Avis vérifié"
        />
      </div>

      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
        {displayQuote}
      </blockquote>

      {isLong ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 self-start text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {expanded ? "Cacher" : "Lire la suite"}
        </button>
      ) : null}
    </figure>
  )
}

type GoogleRatingBadgeProps = {
  rating: number
  totalCount: number
}

export function GoogleRatingBadge({ rating, totalCount }: GoogleRatingBadgeProps) {
  return (
    <p className="text-center text-sm text-muted-foreground">
      Évaluation <strong className="text-foreground">Google</strong> :{" "}
      <strong className="text-foreground">{rating.toFixed(1)}</strong> sur 5,
      basée sur{" "}
      <strong className="text-foreground underline decoration-muted-foreground/50">
        {totalCount} avis
      </strong>
    </p>
  )
}
