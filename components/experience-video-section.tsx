import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { agencyVideos } from "@/lib/agence-data"
import { FACE_OBJECT_POSITION } from "@/lib/media"
import { cn } from "@/lib/utils"

export function ExperienceVideoSection() {
  return (
    <SectionWrapper id="videos">
      <SectionHeading
        title="Vivez l'expérience Distinction"
        subtitle="Des prestations chaleureuses qui transforment chaque événement en moment mémorable."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {agencyVideos.map((video) => (
          <article
            key={video.title}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <video
              controls
              playsInline
              preload="metadata"
              poster={video.poster}
              className={cn(
                "aspect-video w-full bg-dark",
                video.objectFit === "contain" ? "object-contain" : "object-cover"
              )}
              style={{
                objectPosition: video.objectPosition ?? FACE_OBJECT_POSITION,
              }}
            >
              <source src={video.src} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold">{video.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {video.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
