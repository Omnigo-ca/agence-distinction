import Link from "next/link"
import {
  ArrowRightIcon,
  CalendarIcon,
  HeartIcon,
  MusicIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react"

import { ImagePlaceholder } from "@/components/image-placeholder"
import { PageHero } from "@/components/page-hero"
import { SiteLayout } from "@/components/site-layout"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { mediaAssets } from "@/lib/media"
import { siteConfig } from "@/lib/site-config"

const rpaBenefits = [
  {
    icon: HeartIcon,
    title: "On comprend votre réalité",
    description:
      "Horaires, budgets, publics variés — nous connaissons les défis des responsables loisirs.",
  },
  {
    icon: CalendarIcon,
    title: "Réservation simplifiée",
    description:
      "Un seul contact pour planifier, coordonner et confirmer vos activités.",
  },
  {
    icon: UsersIcon,
    title: "Artistes habitués à ce public",
    description:
      "Des talents sélectionnés pour leur bienveillance et leur capacité à créer des liens.",
  },
  {
    icon: MusicIcon,
    title: "Activités adaptées",
    description:
      "Participation, nostalgie, danse — des prestations qui font du bien aux résidents.",
  },
  {
    icon: SparklesIcon,
    title: "Programmation annuelle",
    description:
      "Bâtissez votre calendrier d'activités pour l'année entière en toute simplicité.",
  },
]

export default function RpaChsldPage() {
  return (
    <SiteLayout>
      <PageHero
        title={siteConfig.pages.rpaChsld.title}
        subtitle={siteConfig.pages.rpaChsld.subtitle}
      >
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link href="/soumission">
            Bâtir ma programmation
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </PageHero>

      <SectionWrapper>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold">
              Une programmation simple à organiser, agréable à vivre
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Vous êtes responsable des loisirs dans un établissement pour
              aînés? L&apos;Agence Distinction dynamise votre calendrier de
              spectacles avec des prestations pensées pour faire sourire, chanter
              et rassembler vos résidents.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Des moments de joie, de souvenirs, de participation et de
              bien-être — c&apos;est ce que nous créons ensemble, activité après
              activité.
            </p>
          </div>
          <ImagePlaceholder
            label="Prestation en résidence pour aînés"
            src={mediaAssets.rpa}
            alt="Animation en RPA / CHSLD"
            aspect="video"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rpaBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <benefit.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="rounded-2xl gradient-warm p-8 text-center text-primary-foreground md:p-12">
          <h2 className="font-heading text-2xl font-semibold md:text-3xl">
            Prête à planifier vos prochaines activités?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Parlez-nous de votre établissement, de votre calendrier et de
            l&apos;ambiance que vous aimeriez créer.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/soumission">Bâtir ma programmation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Link href="/thematiques">Voir les thèmes disponibles</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </SiteLayout>
  )
}
