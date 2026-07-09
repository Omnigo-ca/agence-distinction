import Link from "next/link"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import { siteConfig } from "@/lib/site-config"

const socialLinks = [
  { key: "facebook" as const, label: "Facebook" },
  { key: "instagram" as const, label: "Instagram" },
  { key: "linkedin" as const, label: "LinkedIn" },
]

export function Footer() {
  const activeSocials = socialLinks.filter(
    (social) => siteConfig.social[social.key]
  )

  return (
    <footer className="border-t border-border bg-dark text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <BrandLogo variant="signature" height="lg" linked={false} />
            <p className="mt-3 text-sm text-primary-foreground/70">
              {siteConfig.business.tagline}
            </p>
            <p className="mt-3 text-sm text-primary-foreground/60">
              {siteConfig.business.description}
            </p>
            <p className="mt-4 text-xs text-primary-foreground/50">
              {siteConfig.rqraAdvantage}
            </p>
          </div>

          <nav aria-label="Navigation pied de page">
            <p className="mb-3 text-sm font-medium">Navigation</p>
            <ul className="space-y-2">
              {siteConfig.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={siteConfig.cta.href}
                  className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
                >
                  {siteConfig.cta.label}
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.calendly.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {siteConfig.calendly.label}
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-sm font-medium">Contact</p>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-primary-foreground"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary-foreground"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            <p className="mt-6 text-sm font-medium">Régions desservies</p>
            <p className="mt-2 text-xs text-primary-foreground/60">
              {siteConfig.regions.title}
            </p>
            <p className="mt-2 text-sm text-primary-foreground/70">
              {siteConfig.regions.items.join(" · ")}
            </p>

            {activeSocials.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {activeSocials.map(({ key, label }) => (
                  <a
                    key={key}
                    href={siteConfig.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <p className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          {siteConfig.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
