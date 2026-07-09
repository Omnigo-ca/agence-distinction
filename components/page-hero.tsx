import { SectionWrapper } from "@/components/section-wrapper"

type PageHeroProps = {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <SectionWrapper variant="dark" className="pt-16 md:pt-24">
      <div className="mx-auto max-w-3xl text-center">
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
    </SectionWrapper>
  )
}
