import { MomentPreviewCard } from "@/components/moment-preview-card"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { momentEvents, recentMomentsSection } from "@/lib/moments-data"

export function RecentMomentsSection() {
  return (
    <SectionWrapper>
      <SectionHeading
        title={recentMomentsSection.title}
        subtitle={recentMomentsSection.subtitle}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        {momentEvents.map((moment, index) => (
          <MomentPreviewCard
            key={moment.slug}
            moment={moment}
            priority={index === 0}
            className="min-h-[380px] lg:min-h-[440px]"
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
