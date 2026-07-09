import Link from "next/link"
import { CalendarIcon, CheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export function PromoSection() {
  const { promo } = siteConfig

  return (
    <SectionWrapper variant="muted">
      <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-10 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CalendarIcon className="size-6" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {promo.title}
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            {promo.description}
          </p>
        </div>

        <ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
          {promo.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2 text-sm text-muted-foreground md:text-base"
            >
              <CheckIcon
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href={promo.ctaHref}>{promo.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
