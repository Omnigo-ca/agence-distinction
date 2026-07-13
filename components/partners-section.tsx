import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { rqraPartner, secondaryPartners } from "@/lib/partners-data"

function SecondaryPartnerCard({ partner }: { partner: (typeof secondaryPartners)[number] }) {
  return (
    <a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center rounded-xl border border-border/60 bg-card p-4 shadow-sm transition-colors hover:border-primary/20 hover:bg-card/90"
      aria-label={partner.alt}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={partner.logo}
        alt={partner.alt}
        width={360}
        height={180}
        className="h-auto max-h-16 w-full max-w-[180px] object-contain opacity-90 transition-opacity group-hover:opacity-100 md:max-h-20"
        loading="lazy"
      />
    </a>
  )
}

export function PartnersSection() {
  return (
    <SectionWrapper variant="muted">
      <SectionHeading title="Nos partenaires" />

      <a
        href={rqraPartner.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group mb-12 block rounded-3xl border-2 border-primary/35 bg-gradient-to-br from-[#FEF9F6] via-card to-primary/8 p-6 shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/55 hover:shadow-xl hover:shadow-primary/15 md:p-8 lg:p-10"
        aria-label={rqraPartner.alt}
      >
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-10 md:text-left">
          <div className="flex shrink-0 items-center justify-center rounded-2xl bg-card/80 p-4 md:p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={rqraPartner.logo}
              alt={rqraPartner.alt}
              width={360}
              height={180}
              className="h-auto w-full max-w-[200px] object-contain md:max-w-[260px] lg:max-w-[300px]"
              loading="lazy"
            />
          </div>

          <div className="max-w-2xl space-y-3 md:space-y-4">
            <p className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-primary uppercase">
              Partenaire reconnu
            </p>
            <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Partenaire du Réseau québécois des résidences pour aînés
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Une collaboration qui témoigne de notre engagement envers les
              résidences pour aînés et de notre connaissance approfondie de
              leurs réalités.
            </p>
          </div>
        </div>
      </a>

      <div className="space-y-6">
        <p className="text-center text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Ils collaborent également avec nous
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryPartners.map((partner) => (
            <SecondaryPartnerCard key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
