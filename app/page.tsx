import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { PortfolioSection } from "@/components/portfolio-section"
import { ProcessSection } from "@/components/process-section"
import { PromoSection } from "@/components/promo-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { isSectionEnabled } from "@/lib/site-config"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {isSectionEnabled("services") ? <ServicesSection /> : null}
        {isSectionEnabled("promo") ? <PromoSection /> : null}
        {isSectionEnabled("about") ? <AboutSection /> : null}
        {isSectionEnabled("process") ? <ProcessSection /> : null}
        {isSectionEnabled("portfolio") ? <PortfolioSection /> : null}
        {isSectionEnabled("testimonials") ? <TestimonialsSection /> : null}
        {isSectionEnabled("faq") ? <FaqSection /> : null}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
