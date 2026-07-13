import { HERO_MEDIA_CLASS, HERO_OBJECT_POSITION } from "@/lib/media"

type PageHeroProps = {
  title: string
  subtitle?: string
  backgroundImage?: string
  children?: React.ReactNode
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  children,
}: PageHeroProps) {
  return (
    <section
      className={`relative -mt-16 flex min-h-svh items-center justify-center overflow-hidden px-4 pt-16 text-primary-foreground md:px-6 ${
        backgroundImage ? "" : "bg-dark"
      }`}
    >
      {backgroundImage ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={backgroundImage}
            alt=""
            className={HERO_MEDIA_CLASS}
            style={{ objectPosition: HERO_OBJECT_POSITION }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 gradient-warm opacity-80"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"
            aria-hidden="true"
          />
        </>
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
            {subtitle}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  )
}
