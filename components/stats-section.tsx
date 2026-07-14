import {
  AwardIcon,
  HandshakeIcon,
  HeartHandshakeIcon,
  type LucideIcon,
} from "lucide-react"

import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const iconMap = {
  award: AwardIcon,
  handshake: HandshakeIcon,
  "heart-handshake": HeartHandshakeIcon,
} as const satisfies Record<string, LucideIcon>

type CredibilityCard = (typeof siteConfig.credibility.cards)[number]

function CredibilityStatCard({ card }: { card: CredibilityCard }) {
  const Icon = iconMap[card.icon as keyof typeof iconMap] ?? AwardIcon

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[28px]",
        "border border-[#E8CFC9] bg-white/70 px-8 py-10",
        "shadow-[0_10px_30px_rgba(117,65,70,0.06)] backdrop-blur-sm",
        "transition-all duration-500",
        "hover:-translate-y-1.5 hover:border-[#DDA9A7]",
        "hover:bg-gradient-to-br hover:from-white/90 hover:via-[#FEF9F6] hover:to-[#F5EDE8]/80",
        "hover:shadow-[0_20px_45px_rgba(117,65,70,0.12)]"
      )}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 size-28 rounded-full bg-primary/5 blur-2xl transition-opacity duration-500 group-hover:bg-[#D4A5A5]/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-6 left-6 size-16 rounded-full bg-[#F5EDE8]/60 blur-xl transition-transform duration-500 group-hover:scale-110"
        aria-hidden="true"
      />

      <div className="relative mx-auto mb-6 flex size-14 items-center justify-center">
        <span
          className="absolute inset-0 scale-75 rounded-full bg-primary/10 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
          aria-hidden="true"
        />
        <Icon
          className="relative size-7 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          aria-hidden="true"
        />
      </div>

      {"logo" in card && card.logo ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={card.logo}
          alt={card.logoAlt ?? card.subtitle}
          className="mx-auto h-[4.5rem] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03] md:h-20"
        />
      ) : (
        <p className="font-heading text-center text-4xl font-semibold tracking-tight text-primary transition-transform duration-500 group-hover:scale-[1.03] md:text-[2.5rem]">
          {"value" in card ? card.value : ""}
        </p>
      )}

      <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/75">
        {card.subtitle}
      </p>

      <p className="mt-4 flex-1 text-center text-sm leading-relaxed text-muted-foreground">
        {card.description}
      </p>
    </article>
  )
}

export function StatsSection() {
  return (
    <SectionWrapper className="gradient-soft py-12 md:py-16">
      <p className="mb-8 text-center text-sm font-medium text-muted-foreground md:mb-10">
        {siteConfig.credibility.line}
      </p>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {siteConfig.credibility.cards.map((card) => (
          <CredibilityStatCard
            key={"value" in card ? card.value : card.subtitle}
            card={card}
          />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground md:mt-10">
        {siteConfig.credibility.specialty}
      </p>
    </SectionWrapper>
  )
}
