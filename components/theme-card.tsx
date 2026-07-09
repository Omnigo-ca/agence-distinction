import Link from "next/link"

import { ImagePlaceholder } from "@/components/image-placeholder"
import { Button } from "@/components/ui/button"
import type { Theme } from "@/lib/agence-data"

type ThemeCardProps = {
  theme: Theme
  compact?: boolean
}

export function ThemeCard({ theme, compact = false }: ThemeCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <ImagePlaceholder
        label={`Visuel thématique — ${theme.title}`}
        src={theme.image}
        alt={theme.title}
        aspect="video"
        objectPosition={theme.imagePosition}
        className="rounded-none border-0"
      />
      <div className={compact ? "p-4" : "flex flex-1 flex-col p-6"}>
        <h3 className="text-xl font-semibold">{theme.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {theme.description}
        </p>
        {!compact ? (
          <>
            <p className="mt-3 text-xs font-medium text-primary">{theme.mood}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Idéal pour : {theme.audience}
            </p>
            {theme.artists && theme.artists.length > 0 ? (
              <p className="mt-2 text-xs text-muted-foreground">
                Artistes associés : {theme.artists.join(", ")}
              </p>
            ) : null}
          </>
        ) : null}
        <Button
          asChild
          variant="link"
          className="mt-4 h-auto justify-start p-0 text-primary"
        >
          <Link href="/soumission">{theme.cta} →</Link>
        </Button>
      </div>
    </article>
  )
}
