import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { HomeHeroMedia } from "@/components/home-hero-media"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

function HomeHeroOverlay() {
  return (
    <>
      {/* Dégradé horizontal : lisibilité à gauche, vidéo visible à droite */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-dark/75 via-dark/50 to-dark/25"
        aria-hidden="true"
      />
      {/* Légère teinte chaleureuse concentrée sur la zone de texte */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/25 via-primary/10 to-transparent opacity-70"
        aria-hidden="true"
      />
      {/* Assise verticale discrète pour le bas du hero */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent"
        aria-hidden="true"
      />
    </>
  )
}

export function HeroSection() {
  const { hero } = siteConfig

  return (
    <section className="relative -mt-16 flex min-h-svh items-center overflow-hidden text-primary-foreground">
      {hero.video ? (
        <HomeHeroMedia video={hero.video} poster={hero.image} />
      ) : null}

      <HomeHeroOverlay />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-16 text-center md:mx-0 md:ml-[clamp(0.5rem,1.5vw,1.5rem)] md:max-w-[620px] md:text-left lg:ml-[clamp(1rem,2.5vw,2.5rem)] lg:max-w-[680px] md:pl-4 lg:pl-6">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          {hero.headline}
        </h1>
        <p className="mt-6 text-base text-primary-foreground/90 md:text-lg">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:items-start md:justify-start">
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
            variant="outline"
            size="lg"
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
