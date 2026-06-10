import Link from "next/link"
import { CalendarIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function ContactSection() {
  const { contact } = siteConfig

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title={siteConfig.contactSection.title}
        subtitle={siteConfig.contactSection.subtitle}
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {contact.goal === "appeler" ? (
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <PhoneIcon className="mx-auto size-10 text-primary" aria-hidden="true" />
              <p className="mt-4 text-sm text-muted-foreground">
                Appelez-nous directement
              </p>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="mt-2 block text-3xl font-semibold text-primary hover:underline"
              >
                {contact.phone}
              </a>
            </div>
          ) : null}

          {contact.goal === "rendezVous" ? (
            <div className="rounded-2xl border border-border bg-card p-8 text-center">
              <CalendarIcon
                className="mx-auto size-10 text-primary"
                aria-hidden="true"
              />
              <p className="mt-4 text-muted-foreground">
                Réservez un créneau en ligne
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link
                  href={contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prendre rendez-vous
                </Link>
              </Button>
            </div>
          ) : null}

          {contact.goal === "formulaire" || contact.goal === "infolettre" ? (
            <ContactForm
              showPhone={contact.formFields.includes("phone")}
            />
          ) : null}

          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="hover:text-foreground"
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="hover:text-foreground">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>

        <div
          className="flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 text-sm text-muted-foreground"
          aria-label="Carte Google Maps — à intégrer si pertinent"
        >
          [Carte Google Maps — optionnel]
        </div>
      </div>
    </SectionWrapper>
  )
}
