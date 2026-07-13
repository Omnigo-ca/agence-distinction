import type { MomentTestimonial } from "@/lib/moments-data"

type MomentEventTestimonialsProps = {
  testimonials: MomentTestimonial[]
}

export function MomentEventTestimonials({
  testimonials,
}: MomentEventTestimonialsProps) {
  return (
    <div>
      <h2 className="font-heading text-3xl font-semibold tracking-tight">
        Ce qu&apos;ils en ont pensé
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={`${testimonial.author}-${testimonial.quote.slice(0, 24)}`}
            className="flex h-full flex-col rounded-2xl border border-[#E8CFC9] bg-gradient-to-br from-white/95 via-[#FEF9F6] to-[#F5EDE8]/60 p-6 shadow-[0_8px_24px_rgba(117,65,70,0.06)]"
          >
            <blockquote className="flex-1 text-base leading-relaxed text-foreground/90">
              « {testimonial.quote} »
            </blockquote>
            <figcaption className="mt-5 border-t border-border/60 pt-4">
              <p className="font-medium text-foreground">{testimonial.author}</p>
              {testimonial.role ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
