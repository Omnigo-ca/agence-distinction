import { ArtistsSection } from "@/components/artists-section"
import { ExperienceVideoSection } from "@/components/experience-video-section"
import { GallerySection } from "@/components/gallery-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { HeroSection } from "@/components/hero-section"
import { MomentsSection } from "@/components/moments-section"
import { MusicofolieSection } from "@/components/musicofolie-section"
import { ProcessSection } from "@/components/process-section"
import { PromoSection } from "@/components/promo-section"
import { ServicesSection } from "@/components/services-section"
import { SiteLayout } from "@/components/site-layout"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ThemesSection } from "@/components/themes-section"
import { isSectionEnabled } from "@/lib/site-config"

export default function Page() {
  return (
    <SiteLayout>
      <HeroSection />
      {isSectionEnabled("services") ? <ServicesSection /> : null}
      {isSectionEnabled("promo") ? <PromoSection /> : null}
      <MomentsSection />
      <ThemesSection limit={6} />
      <ArtistsSection />
      <GallerySection />
      <ExperienceVideoSection />
      <BenefitsSection />
      {isSectionEnabled("process") ? <ProcessSection /> : null}
      {isSectionEnabled("testimonials") ? (
        <>
          <TestimonialsSection />
          <StatsSection />
        </>
      ) : null}
      <FinalCtaSection />
      <MusicofolieSection />
      {isSectionEnabled("faq") ? <FaqSection /> : null}
    </SiteLayout>
  )
}
