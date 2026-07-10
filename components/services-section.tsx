import Link from "next/link"
import {
  Building2Icon,
  CalendarIcon,
  Flower2Icon,
  HeartIcon,
  HomeIcon,
  MusicIcon,
  SparklesIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig, type Service } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const serviceIcons = {
  home: HomeIcon,
  heart: HeartIcon,
  music: MusicIcon,
  sparkles: SparklesIcon,
  flower: Flower2Icon,
  building: Building2Icon,
  calendar: CalendarIcon,
} as const

function ServiceCard({
  service,
  tinted,
}: {
  service: Service
  tinted: boolean
}) {
  const Icon =
    service.icon && service.icon in serviceIcons
      ? serviceIcons[service.icon as keyof typeof serviceIcons]
      : SparklesIcon
  const isFeatured = service.featured

  return (
    <article
      className={cn(
        "group flex flex-col rounded-2xl p-5 transition-all duration-300 sm:p-6",
        "shadow-[0_8px_24px_rgba(117,65,70,0.06)]",
        "hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(117,65,70,0.1)]",
        isFeatured
          ? "bg-gradient-to-br from-[#FDF8F6] via-card to-[#F5EDE8]/40 sm:col-span-2 lg:col-span-2"
          : tinted
            ? "bg-[#FDF5F3]/90"
            : "bg-card",
        isFeatured && "lg:p-7"
      )}
    >
      <div
        className={cn(
          "mb-3 flex shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary",
          isFeatured ? "size-11" : "size-10"
        )}
      >
        <Icon
          className={cn(isFeatured ? "size-5" : "size-5")}
          aria-hidden="true"
        />
      </div>

      <h3
        className={cn(
          "font-heading font-semibold leading-snug text-foreground",
          isFeatured ? "text-xl md:text-2xl" : "text-lg"
        )}
      >
        {service.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      {service.links && service.links.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {service.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export function ServicesSection() {
  let regularIndex = 0

  return (
    <SectionWrapper id="services">
      <SectionHeading
        title={siteConfig.services.title}
        subtitle={siteConfig.services.subtitle}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {siteConfig.services.items.map((service: Service) => {
          const tinted = !service.featured && regularIndex++ % 2 === 1

          return (
            <ServiceCard
              key={service.title}
              service={service}
              tinted={tinted}
            />
          )
        })}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button asChild>
          <Link href={siteConfig.cta.href}>{siteConfig.cta.label}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/services">Découvrir nos spectacles</Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
