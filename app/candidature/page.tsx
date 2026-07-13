import Link from "next/link"
import { ArrowLeftIcon, MailIcon, PhoneIcon } from "lucide-react"

import { ArtistApplicationForm } from "@/components/artist-application-form"
import { PageHero } from "@/components/page-hero"
import { SiteLayout } from "@/components/site-layout"
import { SectionWrapper } from "@/components/section-wrapper"
import { mediaAssets } from "@/lib/media"
import { siteConfig } from "@/lib/site-config"

export default function CandidaturePage() {
  const { candidature } = siteConfig.pages

  return (
    <SiteLayout>
      <PageHero
        title={candidature.title}
        subtitle={candidature.subtitle}
        backgroundImage={mediaAssets.artistesHero}
      />

      <SectionWrapper className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/a-propos"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeftIcon className="size-4" aria-hidden="true" />
            Retour à À propos
          </Link>

          <div className="rounded-[1.75rem] border border-border/60 bg-card/90 p-6 shadow-[0_20px_50px_rgba(92,45,58,0.08)] backdrop-blur-sm md:p-10">
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {candidature.intro}
            </p>

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
