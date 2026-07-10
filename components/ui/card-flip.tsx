"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type CardFlipVariant = "rose" | "burgundy" | "cream" | "gold"

export type CardFlipItem = {
  title: string
  subtitle: string
  description: string
  features: readonly string[]
  variant?: CardFlipVariant
}

type CardFlipProps = {
  item: CardFlipItem
  ctaHref: string
  ctaLabel?: string
  className?: string
}

const variantStyles: Record<
  CardFlipVariant,
  { front: string; badge: string; back: string; button: string }
> = {
  rose: {
    front: "border-primary/15 bg-card",
    badge: "bg-primary/10 text-primary",
    back: "border-primary/30 bg-gradient-to-br from-primary to-[#7A3D4D] text-primary-foreground",
    button:
      "bg-primary-foreground text-primary hover:bg-primary-foreground/90",
  },
  burgundy: {
    front: "border-dark/10 bg-card",
    badge: "bg-dark/8 text-dark",
    back: "border-dark/20 bg-dark text-dark-foreground",
    button: "bg-cream text-dark hover:bg-cream/90",
  },
  cream: {
    front: "border-border bg-secondary/50",
    badge: "bg-background text-secondary-foreground",
    back: "border-border bg-secondary text-secondary-foreground",
    button: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
  gold: {
    front: "border-[#D4A5A5]/35 bg-warm/30",
    badge: "bg-[#D4A5A5]/20 text-[#5C2D3A]",
    back: "border-[#D4A5A5]/40 bg-gradient-to-br from-[#5C2D3A] to-[#7A3D4D] text-cream",
    button: "bg-[#FFFCFA] text-[#5C2D3A] hover:bg-[#FFFCFA]/90",
  },
}

export function CardFlip({
  item,
  ctaHref,
  ctaLabel = "Découvrir notre approche",
  className,
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const variant = item.variant ?? "rose"
  const styles = variantStyles[variant]

  useEffect(() => {
    const media = window.matchMedia("(hover: none), (pointer: coarse)")
    const update = () => setIsTouch(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  const handleToggle = () => {
    if (isTouch) setIsFlipped((current) => !current)
  }

  return (
    <div
      className={cn(
        "group/flip h-[260px] w-full perspective-1000 sm:h-[270px]",
        isTouch && "cursor-pointer",
        className
      )}
      onClick={handleToggle}
      onKeyDown={(event) => {
        if (!isTouch) return
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          handleToggle()
        }
      }}
      role={isTouch ? "button" : undefined}
      tabIndex={isTouch ? 0 : undefined}
      aria-pressed={isTouch ? isFlipped : undefined}
      aria-label={
        isTouch
          ? `${item.title}. Appuyez pour retourner la carte.`
          : undefined
      }
    >
      <div
        className={cn(
          "flip-inner relative h-full w-full rounded-xl transition-transform duration-500 transform-style-3d",
          isTouch && isFlipped && "rotate-y-180",
          !isTouch && "md:group-hover/flip:rotate-y-180"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-between rounded-xl border p-4 shadow-sm backface-hidden sm:p-5",
            styles.front
          )}
        >
          <div>
            <p
              className={cn(
                "mb-2.5 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide",
                styles.badge
              )}
            >
              {item.subtitle}
            </p>
            <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
              {item.title}
            </h3>
          </div>
          <p className="text-xs text-muted-foreground">
            {isTouch ? "Appuyez pour en savoir plus" : "Survoler pour découvrir"}
          </p>
        </div>

        <div
          className={cn(
            "absolute inset-0 flex flex-col rounded-xl border p-4 shadow-md backface-hidden rotate-y-180 sm:p-5",
            styles.back
          )}
        >
          <p className="text-xs leading-relaxed opacity-95 sm:text-sm">
            {item.description}
          </p>
          <ul className="mt-2.5 flex-1 space-y-1">
            {item.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm">
                <span
                  className="mt-1.5 size-1 shrink-0 rounded-full bg-current opacity-70"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            asChild
            size="sm"
            className={cn("mt-3 h-8 w-full text-xs", styles.button)}
          >
            <Link
              href={ctaHref}
              onClick={(event) => event.stopPropagation()}
            >
              {ctaLabel}
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
