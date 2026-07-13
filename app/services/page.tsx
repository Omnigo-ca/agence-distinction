import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { PageHero } from "@/components/page-hero"
import { ServicesImageReveal } from "@/components/services-image-reveal"
import { SiteLayout } from "@/components/site-layout"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { detailedServices } from "@/lib/agence-data"
import { mediaAssets } from "@/lib/media"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        title={siteConfig.pages.services.title}
        subtitle={siteConfig.pages.services.subtitle}
        backgroundImage={mediaAssets.servicesHero}
      />

      <SectionWrapper className="overflow-x-hidden">
        <div className="grid gap-8">
          {detailedServices.map((service, index) => (
            <article
              key={service.title}
              className={cn(
                "grid items-center gap-8 lg:grid-cols-2",
                index % 2 === 1 && "lg:[&>*:first-child]:order-2",
                service.comingSoon &&
                  "rounded-2xl border border-dashed border-primary/25 bg-muted/30 p-6 md:p-8"
              )}
            >
              <ServicesImageReveal
                direction={index % 2 === 0 ? "left" : "right"}
                label={`Visuel, ${service.title}`}
                src={service.image}
                alt={service.title}
              />
              <div>
                {service.comingSoon ? (
                  <span className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary">
                    Bientôt disponible
                  </span>
                ) : null}
                <h2 className="font-heading text-2xl font-semibold md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                {!service.comingSoon ? (
                  <Button asChild className="mt-6">
                    <Link href="/soumission">{siteConfig.cta.label}</Link>
                  </Button>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl gradient-warm p-8 text-center text-primary-foreground md:p-12">
          <h2 className="font-heading text-2xl font-semibold md:text-3xl">
            Créez un moment qui restera dans les souvenirs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            On vous aide à planifier votre agenda de spectacles, choisir les
            thématiques et trouver les artistes adaptés à vos résidents.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/soumission">
              {siteConfig.cta.label}
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </SiteLayout>
  )
}
