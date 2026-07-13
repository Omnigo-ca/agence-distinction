import { ArtistesPageContent } from "@/components/artistes-page-content"
import { PageHero } from "@/components/page-hero"
import { SiteLayout } from "@/components/site-layout"
import { SectionWrapper } from "@/components/section-wrapper"
import { getAllArtistProfiles } from "@/lib/data/artists"
import { mediaAssets } from "@/lib/media"
import { siteConfig } from "@/lib/site-config"

export default function ArtistesPage() {
  const artists = getAllArtistProfiles()

  return (
    <SiteLayout>
      <PageHero
        title={siteConfig.pages.artistes.title}
        subtitle={siteConfig.pages.artistes.subtitle}
        backgroundImage={mediaAssets.artistesHero}
      />

      <SectionWrapper>
        <ArtistesPageContent artists={artists} />
      </SectionWrapper>
    </SiteLayout>
  )
}
