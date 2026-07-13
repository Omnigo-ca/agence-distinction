import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function MomentEventCta() {
  return (
    <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-[#FDF8F6] via-card to-[#F5EDE8]/50 px-6 py-10 text-center shadow-[0_10px_28px_rgba(117,65,70,0.06)] md:px-12 md:py-14">
      <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
        Vous aimeriez créer un moment comme celui-ci?
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Parlez-nous de votre milieu, de votre public et de votre calendrier.
        Nous vous aiderons à trouver le spectacle adapté.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href={siteConfig.cta.href}>
            {siteConfig.cta.label}
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/soumission">Demandez une recommandation</Link>
        </Button>
      </div>
    </div>
  )
}
