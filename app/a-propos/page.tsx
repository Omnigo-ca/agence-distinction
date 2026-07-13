import Link from "next/link"
import {
  ArrowRightIcon,
  AwardIcon,
  HandshakeIcon,
  HeartIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react"

import { ArtistRecruitmentSection } from "@/components/artist-recruitment-section"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { PageHero } from "@/components/page-hero"
import { PartnersSection } from "@/components/partners-section"
import { RecentMomentsSection } from "@/components/recent-moments-section"
import { SiteLayout } from "@/components/site-layout"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { ValuesCard } from "@/components/values-card"
import { mediaAssets } from "@/lib/media"
import { siteConfig } from "@/lib/site-config"

const values: {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: "Bienveillance",
    subtitle: "VALEUR FONDAMENTALE",
    description:
      "Chaque interaction, chaque prestation est guidée par le respect et l'écoute.",
    icon: HeartIcon,
  },
  {
    title: "Excellence artistique",
    subtitle: "ENGAGEMENT QUALITÉ",
    description:
      "Des artistes professionnels, fiables et passionnés par leur art.",
    icon: AwardIcon,
  },
  {
    title: "Impact humain",
    subtitle: "NOTRE MISSION",
    description:
      "La musique et le spectacle comme vecteurs de joie et de bien-être.",
    icon: UsersIcon,
  },
  {
    title: "Accompagnement",
    subtitle: "PARTENAIRE DE CONFIANCE",
    description:
      "Un partenaire de confiance, pas seulement un intermédiaire.",
    icon: HandshakeIcon,
  },
]

export default function AProposPage() {
  return (
    <SiteLayout>
      <PageHero
        title={siteConfig.pages.aPropos.title}
        subtitle={siteConfig.pages.aPropos.subtitle}
        backgroundImage={mediaAssets.about.hero}
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
            objectFit="contain"
            objectPosition="center"
            className="mx-auto w-full max-w-lg"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="mb-8 text-center font-heading text-3xl font-semibold">
          Nos valeurs
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {values.map((value) => (
            <ValuesCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              subtitle={value.subtitle}
              description={value.description}
            />
          ))}
        </div>
      </SectionWrapper>

      <RecentMomentsSection />

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

      <ArtistRecruitmentSection />

      <PartnersSection />
    </SiteLayout>
  )
}
