import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ArtistDetail } from "@/components/artist-detail"
import { ArtistHero } from "@/components/artist-hero"
import { SiteLayout } from "@/components/site-layout"
import { SectionWrapper } from "@/components/section-wrapper"
import { artistProfiles, getArtistBySlug } from "@/lib/data/artists"

type ArtistPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return artistProfiles.map((artist) => ({ slug: artist.slug }))
}

export async function generateMetadata({
  params,
}: ArtistPageProps): Promise<Metadata> {
  const { slug } = await params
  const artist = getArtistBySlug(slug)
  if (!artist) return { title: "Artiste introuvable" }

  return {
    title: `${artist.name} | Agence Distinction`,
    description: artist.shortDescription ?? artist.biography?.slice(0, 160),
  }
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { slug } = await params
  const artist = getArtistBySlug(slug)

  if (!artist) notFound()

  return (
    <SiteLayout>
      <ArtistHero artist={artist} />
      <SectionWrapper>
        <ArtistDetail artist={artist} />
      </SectionWrapper>
    </SiteLayout>
  )
}
