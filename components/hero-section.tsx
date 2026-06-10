import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export function HeroSection() {
  return (
    <SectionWrapper variant="dark" className="pt-20 md:pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          {siteConfig.hero.headline}
        </h1>
        <p className="mt-6 text-lg text-primary-foreground/80 md:text-xl">
          {siteConfig.hero.subtitle}
        </p>

        {siteConfig.hero.badges.length > 0 ? (
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {siteConfig.hero.badges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm"
              >
                {badge}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <Link href={siteConfig.cta.href}>
              {siteConfig.cta.label}
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
