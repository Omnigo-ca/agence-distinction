"use client"

import Link from "next/link"
import { useState } from "react"

import { GoogleRatingBadge, TestimonialCard } from "@/components/testimonial-card"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { googleReviewsMeta, testimonials } from "@/lib/testimonials-data"

type TestimonialsGridProps = {
  items?: typeof testimonials
  initialCount?: number
  loadMoreCount?: number
  showLoadMore?: boolean
  showViewAllLink?: boolean
  showRating?: boolean
}

export function TestimonialsGrid({
  items = testimonials,
  initialCount = 6,
  loadMoreCount = 6,
  showLoadMore = true,
  showViewAllLink = false,
  showRating = true,
}: TestimonialsGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount)
  const visibleItems = items.slice(0, visibleCount)
  const hasMore = visibleCount < items.length

  return (
    <div className="space-y-8">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.author}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>

      {(showLoadMore && hasMore) || showViewAllLink ? (
        <div className="flex flex-wrap items-center justify-center gap-4">
          {showLoadMore && hasMore ? (
            <Button
              type="button"
              variant="outline"
              className="rounded-lg bg-[#f1f3f4] text-foreground hover:bg-[#e8eaed]"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + loadMoreCount, items.length),
                )
              }
            >
              Charger plus
            </Button>
          ) : null}
          {showViewAllLink ? (
            <Button asChild variant="secondary">
              <Link href="/temoignages">Voir tous les témoignages</Link>
            </Button>
          ) : null}
        </div>
      ) : null}

      {showRating ? (
        <GoogleRatingBadge
          rating={googleReviewsMeta.rating}
          totalCount={googleReviewsMeta.totalCount}
        />
      ) : null}
    </div>
  )
}
