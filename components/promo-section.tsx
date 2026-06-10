import Link from "next/link"
import { SparklesIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export function PromoSection() {
  return (
    <SectionWrapper variant="muted">
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-10 text-center md:px-12">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <SparklesIcon className="size-6" aria-hidden="true" />
        </div>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {siteConfig.promo.title}
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            {siteConfig.promo.description}
          </p>
        </div>
        <Button asChild size="lg">
          <Link href={siteConfig.cta.href}>{siteConfig.promo.ctaLabel}</Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
