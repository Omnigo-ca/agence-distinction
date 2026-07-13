"use client"

import {
  CalendarIcon,
  HeartIcon,
  MusicIcon,
  SparklesIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

type RpaBenefit = {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
}

const rpaBenefits: RpaBenefit[] = [
  {
    icon: HeartIcon,
    eyebrow: "COMPRÉHENSION",
    title: "On comprend votre réalité",
    description:
      "Horaires, budgets, publics variés, nous connaissons les défis des responsables loisirs.",
  },
  {
    icon: CalendarIcon,
    eyebrow: "SIMPLICITÉ",
    title: "Réservation simplifiée",
    description:
      "Un seul contact pour planifier, coordonner et confirmer vos activités.",
  },
  {
    icon: UsersIcon,
    eyebrow: "EXPERTISE HUMAINE",
    title: "Artistes habitués à ce public",
    description:
      "Des talents sélectionnés pour leur bienveillance et leur capacité à créer des liens.",
  },
  {
    icon: MusicIcon,
    eyebrow: "ADAPTATION",
    title: "Activités adaptées",
    description:
      "Participation, nostalgie, danse, des prestations qui font du bien aux résidents.",
  },
  {
    icon: SparklesIcon,
    eyebrow: "PLANIFICATION",
    title: "Programmation annuelle",
    description:
      "Bâtissez votre calendrier d'activités pour l'année entière en toute simplicité.",
  },
]

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const
const REVEAL_OFFSET = 48
const REVEAL_DURATION = 0.55

function BenefitHeading({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: LucideIcon
  eyebrow: string
  title: string
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <div className="max-w-[min(100%,28rem)]">
        <p className="mb-1 font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] text-primary/70">
          {eyebrow}
        </p>
        <h3 className="font-heading text-[clamp(1.7rem,2.2vw,2.4rem)] font-medium leading-[1.15] text-dark">
          {title}
        </h3>
      </div>
    </div>
  )
}

export function RpaBenefitsZigzag() {
  const prefersReducedMotion = useReducedMotion() ?? false

  return (
    <div className="divide-y divide-border/60">
      {rpaBenefits.map((benefit) => {
        const Icon = benefit.icon

        const titleInitial = prefersReducedMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              x: -REVEAL_OFFSET,
            }

        const descriptionInitial = prefersReducedMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              x: REVEAL_OFFSET,
            }

        const revealVisible = prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 1, x: 0 }

        return (
          <article
            key={benefit.title}
            className={cn(
              "grid grid-cols-1 items-start gap-5 py-8 first:pt-0 last:pb-0",
              "md:grid-cols-[minmax(0,0.9fr)_minmax(0,0.9fr)] md:items-center md:gap-y-0",
              "md:gap-x-[clamp(2rem,4vw,5rem)] md:py-10",
              "lg:py-12"
            )}
          >
            <motion.div
              className="justify-self-start"
              initial={titleInitial}
              whileInView={revealVisible}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: prefersReducedMotion ? 0.2 : REVEAL_DURATION,
                ease: REVEAL_EASE,
              }}
            >
              <BenefitHeading
                icon={Icon}
                eyebrow={benefit.eyebrow}
                title={benefit.title}
              />
            </motion.div>

            <motion.p
              className="max-w-[520px] justify-self-start font-sans text-[clamp(1rem,1.3vw,1.25rem)] font-normal leading-[1.65] text-[rgba(101,55,65,0.78)]"
              initial={descriptionInitial}
              whileInView={revealVisible}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: prefersReducedMotion ? 0.2 : REVEAL_DURATION,
                ease: REVEAL_EASE,
                delay: prefersReducedMotion ? 0 : 0.1,
              }}
            >
              {benefit.description}
            </motion.p>
          </article>
        )
      })}
    </div>
  )
}
