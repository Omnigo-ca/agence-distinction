import Link from "next/link"

import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  variant?: "official" | "signature"
  className?: string
  height?: "sm" | "md" | "lg"
  /** Affichage lisible sur fond sombre (footer) — sans filtre CSS */
  onDark?: boolean
  /** Afficher comme lien vers l'accueil */
  linked?: boolean
}

const heightClasses = {
  sm: "h-8",
  md: "h-10",
  lg: "h-14",
}

export function BrandLogo({
  variant = "official",
  className,
  height = "md",
  onDark = false,
  linked = true,
}: BrandLogoProps) {
  const src =
    variant === "signature"
      ? siteConfig.logo.signature
      : siteConfig.logo.official

  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={siteConfig.logo.alt}
      className={cn(
        "w-auto max-w-none shrink-0 object-contain object-left",
        heightClasses[height],
        className
      )}
    />
  )

  const content = onDark ? (
    <span className="inline-flex rounded-xl bg-cream p-2.5 shadow-sm ring-1 ring-black/5">
      {image}
    </span>
  ) : (
    image
  )

  if (!linked) {
    return <span className="inline-flex shrink-0 items-center">{content}</span>
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label={`${siteConfig.business.name}, accueil`}
    >
      {content}
    </Link>
  )
}
