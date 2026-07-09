type PageHeroProps = {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="-mt-16 flex min-h-svh items-center justify-center bg-dark px-4 pt-16 text-primary-foreground md:px-6">
      <div className="mx-auto w-full max-w-3xl text-center">
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
