import { HeartIcon } from "lucide-react"

import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export function MusicofolieSection() {
  const { musicofolie } = siteConfig

  return (
    <SectionWrapper className="py-10 md:py-12">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-muted/40 px-6 py-8 text-center md:px-10">
        <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <HeartIcon className="size-5" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          {musicofolie.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {musicofolie.description}
        </p>
      </div>
    </SectionWrapper>
  )
}
