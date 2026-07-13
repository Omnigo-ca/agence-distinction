import { ImagePlaceholder } from "@/components/image-placeholder"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { galleryImages } from "@/lib/agence-data"

export function GallerySection() {
  return (
    <SectionWrapper id="galerie" variant="muted">
      <SectionHeading
        title="Des moments qui font sourire"
        subtitle="Aperçu de nos prestations en résidences, événements thématiques et animations rassembleuses."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((item) => (
          <figure
            key={item.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card"
          >
            <ImagePlaceholder
              label={item.title}
              src={item.image}
              alt={item.title}
              aspect="square"
              objectPosition={item.objectPosition}
              className="rounded-none border-0 transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-primary">
                {item.category}
              </p>
              <p className="mt-1 font-medium">{item.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionWrapper>
  )
}
