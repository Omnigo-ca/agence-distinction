import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function HeroSection() {
  const { hero } = siteConfig

  return (
    <section className="relative -mt-16 flex min-h-svh items-center justify-center overflow-hidden text-primary-foreground">
      {hero.video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={hero.image}
          className="absolute inset-0 size-full object-cover"
          aria-hidden="true"
        >
          <source src={hero.video} type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 gradient-warm opacity-80" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-16 text-center md:px-6">
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl">
            {hero.subtitle}
          </p>

          {hero.badges.length > 0 ? (
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {hero.badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-sm backdrop-blur-sm"
                >
                  {badge}
                </li>
              ))}
            </ul>
          ) : null}

          <p className="mt-6 text-sm text-primary-foreground/75">
            {hero.reassurance}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href={siteConfig.cta.href}>
                {siteConfig.cta.label}
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Link href={siteConfig.secondaryCta.href}>
                {siteConfig.secondaryCta.label}
              </Link>
            </Button>
          </div>
      </div>
    </section>
  )
}
