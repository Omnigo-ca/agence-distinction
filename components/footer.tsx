import Link from "next/link"

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
            <p className="text-lg font-semibold">{siteConfig.business.name}</p>
            <p className="mt-2 text-sm text-primary-foreground/70">
              {siteConfig.business.tagline}
            </p>
          </div>

          <nav aria-label="Navigation pied de page">
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
            </ul>
          </nav>

          <div>
            <p className="text-sm text-primary-foreground/70">
              {siteConfig.contact.address}
            </p>
            <p className="mt-1 text-sm">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="text-primary-foreground/70 hover:text-primary-foreground"
              >
                {siteConfig.contact.phone}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-primary-foreground/70 hover:text-primary-foreground"
              >
                {siteConfig.contact.email}
              </a>
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
