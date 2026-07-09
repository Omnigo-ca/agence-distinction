import Link from "next/link"
import { CalendarIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { PageHero } from "@/components/page-hero"
import { SiteLayout } from "@/components/site-layout"
import { SubmissionForm } from "@/components/submission-form"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export default function SoumissionPage() {
  return (
    <SiteLayout>
      <PageHero
        title={siteConfig.pages.soumission.title}
        subtitle={siteConfig.pages.soumission.subtitle}
      />

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SubmissionForm />
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-heading text-xl font-semibold">
                Parler à l&apos;agence
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Vous préférez échanger directement? Contactez-nous par téléphone
                ou courriel, on vous répond rapidement.
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="hover:text-primary"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-primary"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">
                    {siteConfig.contact.address}
                  </span>
                </li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full">
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

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="font-semibold">Besoin d&apos;aide pour choisir?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Cochez l&apos;option « J&apos;aimerais une recommandation » dans
                le formulaire. On vous guidera vers la thématique, l&apos;artiste
                et la formule qui conviennent.
              </p>
            </div>

            <p className="text-xs text-muted-foreground">
              {siteConfig.rqraAdvantage}
            </p>
          </aside>
        </div>
      </SectionWrapper>
    </SiteLayout>
  )
}
