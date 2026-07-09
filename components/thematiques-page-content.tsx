"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRightIcon, CalendarIcon } from "lucide-react"

import { InteractiveBentoGallery } from "@/components/ui/interactive-bento-gallery"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import {
  filterBentoItems,
  thematiquesBentoFilters,
  thematiquesBentoItems,
  type ThematiquesBentoFilter,
} from "@/lib/thematiques-bento"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function ThematiquesPageContent() {
  const [activeFilter, setActiveFilter] =
    useState<ThematiquesBentoFilter>("Toutes")

  const filteredItems = useMemo(
    () => filterBentoItems(thematiquesBentoItems, activeFilter),
    [activeFilter]
  )

  return (
    <>
      <SectionWrapper className="pt-4">
        <SectionHeading
          title="Choisissez un moment, on vous aide à créer l'ambiance"
          subtitle="Vous n'avez pas besoin de savoir exactement quel artiste choisir. L'Agence Distinction vous accompagne pour trouver la bonne thématique, la bonne ambiance et la bonne formule selon votre public, votre lieu et votre calendrier."
        />

        <div
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filtrer les thématiques par catégorie"
        >
          {thematiquesBentoFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                activeFilter === filter
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <InteractiveBentoGallery
          items={filteredItems}
          submissionHref={siteConfig.cta.href}
        />
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-card px-6 py-10 text-center md:px-10">
          <h2 className="font-heading text-2xl font-semibold md:text-3xl">
            Vous ne savez pas quelle thématique choisir ?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Parlez-nous de votre public, de votre date et de l&apos;ambiance
            recherchée. Marie-Josée vous aidera à trouver la formule la plus
            adaptée.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href={siteConfig.cta.href}>
                Obtenir une recommandation
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={siteConfig.calendly.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarIcon className="size-4" />
                {siteConfig.calendly.label}
              </a>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
