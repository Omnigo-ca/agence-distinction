import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import type { MomentEvent } from "@/lib/moments-data"
import { cn } from "@/lib/utils"

type MomentPreviewCardProps = {
  moment: Pick<
    MomentEvent,
    | "href"
    | "cardTitle"
    | "cardDescription"
    | "coverImage"
    | "coverImagePosition"
  >
  className?: string
  priority?: boolean
}

export function MomentPreviewCard({
  moment,
  className,
  priority = false,
}: MomentPreviewCardProps) {
  return (
    <Link
      href={moment.href}
      className={cn(
        "group relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl",
        "shadow-[0_10px_28px_rgba(117,65,70,0.08)]",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(117,65,70,0.14)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className
      )}
      aria-label={`${moment.cardTitle} — Découvrir ce moment`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={moment.coverImage}
        alt=""
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{ objectPosition: moment.coverImagePosition ?? "center center" }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#2a1218]/92 via-[#2a1218]/45 to-[#2a1218]/15 transition-opacity duration-500 group-hover:from-[#2a1218]/95 group-hover:via-[#2a1218]/55"
        aria-hidden="true"
      />

      <div className="relative mt-auto flex flex-col p-6 sm:p-7">
        <h3 className="font-heading text-2xl font-semibold leading-snug text-primary-foreground md:text-[1.65rem]">
          {moment.cardTitle}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/85 sm:text-[0.95rem]">
          {moment.cardDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/90">
          Découvrir ce moment
          <ArrowRightIcon
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
