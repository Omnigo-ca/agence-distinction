import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

const isExternal = (href: string) => href.startsWith("http")

export function FinalCtaSection() {
  const { finalCta } = siteConfig

  return (
    <SectionWrapper variant="dark" className="py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          {finalCta.title}
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          {finalCta.subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href={finalCta.primaryHref}>
              {finalCta.primaryLabel}
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
          >
            {isExternal(finalCta.secondaryHref) ? (
              <a
                href={finalCta.secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {finalCta.secondaryLabel}
              </a>
            ) : (
              <Link href={finalCta.secondaryHref}>{finalCta.secondaryLabel}</Link>
            )}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
