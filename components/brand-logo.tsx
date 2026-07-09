import Link from "next/link"

import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  variant?: "official" | "signature"
  className?: string
  height?: "sm" | "md" | "lg"
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
      className={cn("w-auto object-contain", heightClasses[height], className)}
    />
  )

  if (!linked) {
    return <span className="inline-flex shrink-0 items-center">{image}</span>
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label={`${siteConfig.business.name}, accueil`}
    >
      {image}
    </Link>
  )
}
