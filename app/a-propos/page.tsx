import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { ImagePlaceholder } from "@/components/image-placeholder"
import { PageHero } from "@/components/page-hero"
import { SiteLayout } from "@/components/site-layout"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { mediaAssets } from "@/lib/media"
import { siteConfig } from "@/lib/site-config"

const values = [
  {
    title: "Bienveillance",
    description:
      "Chaque interaction, chaque prestation est guidée par le respect et l'écoute.",
  },
  {
    title: "Excellence artistique",
    description:
      "Des artistes professionnels, fiables et passionnés par leur art.",
  },
  {
    title: "Impact humain",
    description:
      "La musique et le spectacle comme vecteurs de joie et de bien-être.",
  },
  {
    title: "Accompagnement",
    description:
      "Un partenaire de confiance, pas seulement un intermédiaire.",
  },
]

export default function AProposPage() {
  return (
    <SiteLayout>
      <PageHero
        title={siteConfig.pages.aPropos.title}
        subtitle={siteConfig.pages.aPropos.subtitle}
      />

      <SectionWrapper>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            {siteConfig.about.content.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <ImagePlaceholder
            label="Marie-Josée Landry"
            src={siteConfig.about.image}
            alt="Marie-Josée Landry, fondatrice de l'Agence Distinction"
            aspect="auto"
            className="mx-auto w-full max-w-md"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="mb-8 text-center font-heading text-3xl font-semibold">
          Nos valeurs
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <h3 className="font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ImagePlaceholder
            label="Artiste en prestation avec des résidents"
            src={mediaAssets.about.performance}
            alt="Prestation artistique en résidence"
            aspect="video"
          />
          <div>
            <h2 className="font-heading text-3xl font-semibold">
              Le lien entre artistes, résidents et partenaires
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Mon rôle comme agente de spectacle, ce n&apos;est pas juste de
              booker des dates. C&apos;est de connaître mes artistes, de
              comprendre mes clients, de faire les bons jumelages et de
              m&apos;assurer que tout le monde arrive à l&apos;événement avec
              les bonnes informations.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Quand vous passez par l&apos;Agence Distinction, vous
              bénéficiez d&apos;un accompagnement, d&apos;une expertise, d&apos;un
              réseau d&apos;artistes de confiance et de beaucoup de travail fait
              en coulisses pour que, le jour venu, tout semble simple, fluide
              et agréable.
            </p>
            <Button asChild className="mt-6">
              <Link href="/soumission">
                Planifier un appel découverte
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </SiteLayout>
  )
}
