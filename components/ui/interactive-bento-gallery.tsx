"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRightIcon, PlayIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { BentoThemeItem } from "@/lib/thematiques-bento"
import { cn } from "@/lib/utils"

type InteractiveBentoGalleryProps = {
  items: BentoThemeItem[]
  submissionHref?: string
}

function BentoMedia({
  item,
  className,
  priority = false,
}: {
  item: BentoThemeItem
  className?: string
  priority?: boolean
}) {
  const [hasError, setHasError] = useState(false)

  if (item.type === "video" && !hasError) {
    return (
      <video
        src={item.url}
        poster={item.videoPoster}
        muted
        playsInline
        loop
        autoPlay={priority}
        className={cn("size-full object-cover", className)}
        style={{ objectPosition: item.imagePosition ?? "center" }}
        onError={() => setHasError(true)}
      />
    )
  }

  const useCustomZoom =
    item.imageZoom != null && item.imageZoom !== 1
  const objectFit = item.imageFit ?? "cover"

  if (hasError || !item.url) {
    return (
      <div
        className={cn(
          "flex size-full items-center justify-center bg-gradient-to-br from-primary/10 via-secondary to-accent/10 px-4 text-center text-sm text-muted-foreground",
          className
        )}
      >
        {item.title}
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.url}
      alt={`Thématique ${item.title}`}
      className={cn(
        "absolute max-w-none",
        useCustomZoom ? "object-cover" : "inset-0 size-full",
        !useCustomZoom &&
          (objectFit === "contain" ? "object-contain" : "object-cover"),
        className
      )}
      style={
        useCustomZoom
          ? {
              width: `${item.imageZoom! * 100}%`,
              height: `${item.imageZoom! * 100}%`,
              left: `${((1 - item.imageZoom!) / 2) * 100}%`,
              top: `${((1 - item.imageZoom!) / 2) * 100}%`,
              objectPosition: item.imagePosition ?? "center",
            }
          : {
              objectPosition: item.imagePosition ?? "center",
              ...(item.imageScale
                ? {
                    transform: `scale(${item.imageScale})`,
                    transformOrigin: item.imagePosition?.includes("left")
                      ? "left center"
                      : "center center",
                  }
                : {}),
            }
      }
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setHasError(true)}
    />
  )
}

function CardTextOverlay({ item }: { item: BentoThemeItem }) {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-dark/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-[#1a0c10]/97 via-[#1a0c10]/82 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
        <p className="inline-block rounded-full border border-white/10 bg-dark/55 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent backdrop-blur-sm">
          {item.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl">
          {item.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.55)]">
          {item.desc}
        </p>
        <p className="mt-2 text-xs font-medium text-white/80 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
          {item.mood}
        </p>
      </div>
    </>
  )
}

function BentoCard({
  item,
  onSelect,
}: {
  item: BentoThemeItem
  onSelect: (item: BentoThemeItem) => void
}) {
  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      onClick={() => onSelect(item)}
      className={cn(
        "group relative min-h-[220px] overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-shadow hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        item.span
      )}
      aria-label={`Voir la thématique ${item.title}`}
    >
      <div className="absolute inset-0 overflow-hidden bg-[#1a0c10]">
        <BentoMedia item={item} />
      </div>

      {item.type === "video" ? (
        <div className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full bg-dark/70 text-white backdrop-blur-sm">
          <PlayIcon className="size-4" aria-hidden="true" />
        </div>
      ) : null}

      <CardTextOverlay item={item} />
    </motion.button>
  )
}

function GalleryModal({
  item,
  onClose,
  submissionHref,
}: {
  item: BentoThemeItem
  onClose: () => void
  submissionHref: string
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bento-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-dark/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-border bg-card shadow-2xl sm:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-card/90 text-foreground shadow-md transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Fermer la fenêtre"
        >
          <XIcon className="size-5" />
        </button>

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-3xl bg-muted sm:rounded-t-3xl">
          <BentoMedia item={item} priority />
        </div>

        <div className="space-y-5 p-6 sm:p-8">
          <div>
            <p className="text-sm font-medium text-primary">{item.category}</p>
            <h2
              id="bento-modal-title"
              className="mt-1 font-heading text-2xl font-semibold sm:text-3xl"
            >
              {item.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
          </div>

          <dl className="grid gap-4 rounded-2xl border border-border bg-muted/40 p-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                Ambiance
              </dt>
              <dd className="mt-1 text-sm text-foreground">{item.mood}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                Public idéal
              </dt>
              <dd className="mt-1 text-sm text-foreground">{item.audience}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                Moment idéal
              </dt>
              <dd className="mt-1 text-sm text-foreground">{item.idealMoment}</dd>
            </div>
            {item.artists && item.artists.length > 0 ? (
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Artistes ou prestations associées
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  {item.artists.join(", ")}
                </dd>
              </div>
            ) : null}
          </dl>

          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={submissionHref}>
              {item.cta}
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function InteractiveBentoGallery({
  items,
  submissionHref = "/soumission",
}: InteractiveBentoGalleryProps) {
  const [selected, setSelected] = useState<BentoThemeItem | null>(null)

  const handleClose = useCallback(() => setSelected(null), [])

  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-muted/40 px-6 py-12 text-center text-muted-foreground">
        Aucune thématique ne correspond à ce filtre pour le moment.
      </p>
    )
  }

  return (
    <>
      <motion.div
        layout
        className="grid grid-flow-dense grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[minmax(220px,auto)] lg:grid-cols-4 lg:auto-rows-[minmax(200px,1fr)] lg:gap-4"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <BentoCard key={item.id} item={item} onSelect={setSelected} />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected ? (
          <GalleryModal
            item={selected}
            onClose={handleClose}
            submissionHref={submissionHref}
          />
        ) : null}
      </AnimatePresence>
    </>
  )
}
