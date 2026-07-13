import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { ImagePlaceholder } from "@/components/image-placeholder"
import { PageHero } from "@/components/page-hero"
import { RpaBenefitsZigzag } from "@/components/rpa-benefits-zigzag"
import { SiteLayout } from "@/components/site-layout"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { mediaAssets } from "@/lib/media"
import { siteConfig } from "@/lib/site-config"

export default function RpaChsldPage() {
  return (
    <SiteLayout>
      <PageHero
        title={siteConfig.pages.rpaChsld.title}
        subtitle={siteConfig.pages.rpaChsld.subtitle}
        backgroundImage={mediaAssets.rpaHero}
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
              bien-être, c&apos;est ce que nous créons ensemble, activité après
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

      <SectionWrapper variant="muted" className="pt-8 pb-16 md:pt-12 md:pb-24">
        <RpaBenefitsZigzag />
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
