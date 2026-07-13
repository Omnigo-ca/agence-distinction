import { HeroOverlay } from "@/components/hero-overlay"
import { HERO_MEDIA_CLASS } from "@/lib/media"

type MomentEventHeroProps = {
  title: string
  intro: string
  date: string
  venue: string
  backgroundImage: string
  imagePosition?: string
}

export function MomentEventHero({
  title,
  intro,
  date,
  venue,
  backgroundImage,
  imagePosition = "center center",
}: MomentEventHeroProps) {
  return (
    <section className="relative -mt-16 flex min-h-[52svh] items-end overflow-hidden px-4 pt-16 pb-10 text-primary-foreground md:min-h-[58svh] md:px-6 md:pb-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={backgroundImage}
        alt=""
        className={HERO_MEDIA_CLASS}
        style={{ objectPosition: imagePosition }}
        aria-hidden="true"
      />
      <HeroOverlay />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
          {intro}
        </p>
        <p className="mt-6 text-sm font-medium tracking-wide text-primary-foreground/75 md:text-base">
          {date} · {venue}
        </p>
      </div>
    </section>
  )
}
