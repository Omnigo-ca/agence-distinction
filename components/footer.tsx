import Link from "next/link"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import { siteConfig } from "@/lib/site-config"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const socialLinks = [
  { key: "facebook" as const, label: "Facebook", Icon: FacebookIcon },
  { key: "instagram" as const, label: "Instagram", Icon: InstagramIcon },
  { key: "linkedin" as const, label: "LinkedIn", Icon: LinkedinIcon },
  { key: "youtube" as const, label: "YouTube", Icon: YoutubeIcon },
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
            <BrandLogo
              variant="official"
              height="lg"
              onDark
              linked={false}
            />
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
              <div className="mt-6">
                <p className="mb-3 text-sm font-medium">Suivez-nous</p>
                <div className="flex flex-wrap items-center gap-3">
                  {activeSocials.map(({ key, label, Icon }) => (
                    <a
                      key={key}
                      href={siteConfig.social[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} — Agence Distinction`}
                      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    >
                      <Icon className="size-[1.15rem]" aria-hidden="true" />
                    </a>
                  ))}
                </div>
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
