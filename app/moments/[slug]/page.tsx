import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"

import { MomentEventCta } from "@/components/moment-event-cta"
import { MomentEventHero } from "@/components/moment-event-hero"
import { MomentEventTestimonials } from "@/components/moment-event-testimonials"
import { MomentGallery } from "@/components/moment-gallery"
import { SiteLayout } from "@/components/site-layout"
import { SectionWrapper } from "@/components/section-wrapper"
import {
  getAllMomentSlugs,
  getMomentBySlug,
} from "@/lib/moments-data"
import { siteConfig } from "@/lib/site-config"

type MomentPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllMomentSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: MomentPageProps): Promise<Metadata> {
  const { slug } = await params
  const moment = getMomentBySlug(slug)

  if (!moment) {
    return { title: "Moment introuvable" }
  }

  return {
    title: `${moment.heroTitle} | ${siteConfig.business.name}`,
    description: moment.heroIntro,
  }
}

export default async function MomentPage({ params }: MomentPageProps) {
  const { slug } = await params
  const moment = getMomentBySlug(slug)

  if (!moment) {
    notFound()
  }

  const hasGalleryVideo = moment.gallery.some((item) => item.type === "video")

  return (
    <SiteLayout>
      <MomentEventHero
        title={moment.heroTitle}
        intro={moment.heroIntro}
        date={moment.date}
        venue={moment.venue}
        backgroundImage={moment.heroImage}
        imagePosition={moment.coverImagePosition}
      />

      <SectionWrapper variant="muted" className="py-6 md:py-10">
        <Link
          href="/a-propos"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:mb-8"
        >
          <ArrowLeftIcon className="size-4" aria-hidden="true" />
          Retour à À propos
        </Link>

        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight md:mb-8">
          {hasGalleryVideo ? "Galerie" : "En images"}
        </h2>
        <MomentGallery images={moment.gallery} />
      </SectionWrapper>

      <SectionWrapper className="py-12 md:py-16">
        <MomentEventTestimonials testimonials={moment.testimonials} />
      </SectionWrapper>

      <SectionWrapper className="pb-12 pt-0 md:pb-16">
        <MomentEventCta />
      </SectionWrapper>
    </SiteLayout>
  )
}
