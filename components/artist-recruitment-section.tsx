"use client"

import Link from "next/link"
import { HeartIcon, MusicIcon, StarIcon, type LucideIcon } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const
const REVEAL_DURATION = 0.65

const qualityIcons: LucideIcon[] = [MusicIcon, HeartIcon, StarIcon]

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  prefersReducedMotion: boolean | null
}

function Reveal({
  children,
  className,
  delay = 0,
  prefersReducedMotion,
}: RevealProps) {
  const hidden = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 }
  const visible = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.3, margin: "-60px" }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : REVEAL_DURATION,
        ease: REVEAL_EASE,
        delay: prefersReducedMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export function ArtistRecruitmentSection() {
  const { recruitment } = siteConfig.about
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionWrapper
      aria-labelledby="artist-recruitment-title"
      className="border-y border-border/50 bg-gradient-to-b from-background via-[#FDF8F6]/80 to-background py-20 md:py-28 lg:py-32"
    >
      <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 xl:gap-20">
        <motion.figure
          className={cn(
            "order-1 lg:order-2",
            "group relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end"
          )}
          initial={
            prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 32 }
          }
          whileInView={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.25, margin: "-40px" }}
          transition={{
            duration: prefersReducedMotion ? 0.2 : 0.75,
            ease: REVEAL_EASE,
          }}
          whileHover={
            prefersReducedMotion
              ? undefined
              : { y: -6, transition: { duration: 0.35, ease: REVEAL_EASE } }
          }
        >
          <div className="overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_rgba(92,45,58,0.14)] ring-1 ring-border/40 transition-shadow duration-500 group-hover:shadow-[0_32px_72px_rgba(92,45,58,0.18)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={recruitment.image}
              alt={recruitment.imageAlt}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              style={{ objectPosition: recruitment.imagePosition }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.figure>

        <div className="order-2 max-w-[650px] lg:order-1">
          <Reveal prefersReducedMotion={prefersReducedMotion}>
            <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-primary/80 uppercase">
              {recruitment.label}
            </p>
          </Reveal>

          <Reveal prefersReducedMotion={prefersReducedMotion} delay={0.08}>
            <h2
              id="artist-recruitment-title"
              className="mt-5 font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-foreground"
            >
              {recruitment.title}
            </h2>
          </Reveal>

          <Reveal prefersReducedMotion={prefersReducedMotion} delay={0.14}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              {recruitment.description}
            </p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {recruitment.qualities.map((quality, index) => {
              const Icon = qualityIcons[index] ?? MusicIcon

              return (
                <Reveal
                  key={quality.label}
                  prefersReducedMotion={prefersReducedMotion}
                  delay={0.2 + index * 0.06}
                >
                  <li className="flex items-center gap-3.5 rounded-2xl border border-border/55 bg-card/70 px-4 py-3.5 shadow-sm shadow-primary/5 backdrop-blur-sm transition-colors duration-300 hover:border-primary/20 hover:bg-card">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-foreground md:text-base">
                      {quality.label}
                    </span>
                  </li>
                </Reveal>
              )
            })}
          </ul>

          <Reveal
            prefersReducedMotion={prefersReducedMotion}
            delay={0.38}
            className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-full px-8 text-sm font-semibold shadow-md shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 motion-reduce:hover:translate-y-0 sm:w-auto"
            >
              <Link href={recruitment.primaryCta.href}>
                {recruitment.primaryCta.label}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-primary/25 bg-background/70 px-8 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background motion-reduce:hover:translate-y-0 sm:w-auto"
            >
              <Link href={recruitment.secondaryCta.href}>
                {recruitment.secondaryCta.label}
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
