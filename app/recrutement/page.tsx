import { MailIcon, PhoneIcon } from "lucide-react"

import { ArtistApplicationForm } from "@/components/artist-application-form"
import { ArtistRecruitmentSection } from "@/components/artist-recruitment-section"
import { PageHero } from "@/components/page-hero"
import { SiteLayout } from "@/components/site-layout"
import { SectionWrapper } from "@/components/section-wrapper"
import { media } from "@/lib/media"
import { siteConfig } from "@/lib/site-config"

export default function RecrutementPage() {
  const { recrutement, candidature } = siteConfig.pages

  return (
    <SiteLayout>
      <PageHero
        title={recrutement.title}
        subtitle={recrutement.subtitle}
        backgroundImage={media("saint-jean-moment.png")}
      />

      <ArtistRecruitmentSection showCtas={false} />

      <SectionWrapper variant="muted">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Pourquoi rejoindre l&apos;Agence Distinction?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            {recrutement.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-border/60 bg-card/80 p-6 shadow-sm"
              >
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="candidature" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            {candidature.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {candidature.intro}
          </p>

          <div className="mt-10 rounded-[1.75rem] border border-border/60 bg-card/90 p-6 shadow-[0_20px_50px_rgba(92,45,58,0.08)] backdrop-blur-sm md:p-10">
            <ArtistApplicationForm />
          </div>

          <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-6 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">
              Une question avant d&apos;envoyer votre candidature?
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <PhoneIcon className="size-4 shrink-0 text-primary" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-primary"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="size-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </SiteLayout>
  )
}
