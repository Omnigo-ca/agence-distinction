"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ClipboardCheckIcon,
  Music2Icon,
  SparklesIcon,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import type { ProcessStep } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const stepIcons: LucideIcon[] = [
  CalendarDaysIcon,
  SparklesIcon,
  ClipboardCheckIcon,
  Music2Icon,
]

type ProcessTimelineProps = {
  steps: ProcessStep[]
  ctaLabel: string
  ctaHref: string
}

function StepContent({
  step,
  index,
  className,
}: {
  step: ProcessStep
  index: number
  className?: string
}) {
  const Icon = stepIcons[index] ?? SparklesIcon

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className={cn("max-w-[15rem] text-center", className)}
    >
      <Icon
        className="mx-auto mb-2.5 size-5 text-primary/80"
        aria-hidden="true"
      />
      <h3 className="font-heading text-base font-semibold leading-snug text-foreground sm:text-lg">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </motion.div>
  )
}

function StepDot({
  step,
  index,
}: {
  step: ProcessStep
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isActive = useInView(ref, { once: true, margin: "-30px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className={cn(
        "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 font-heading text-sm font-semibold transition-colors duration-500",
        isActive
          ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/15"
          : "border-primary/25 bg-cream text-primary"
      )}
      aria-hidden="true"
    >
      {step.step}
    </motion.div>
  )
}

export function ProcessTimeline({ steps, ctaLabel, ctaHref }: ProcessTimelineProps) {
  const desktopRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: desktopScroll } = useScroll({
    target: desktopRef,
    offset: ["start 0.92", "end 0.38"],
  })
  const { scrollYProgress: mobileScroll } = useScroll({
    target: mobileRef,
    offset: ["start 0.95", "end 0.3"],
  })

  const desktopLineProgress = useTransform(
    desktopScroll,
    [0, 0.5, 1],
    [0, 1, 1]
  )
  const mobileLineProgress = useTransform(
    mobileScroll,
    [0, 0.5, 1],
    [0, 1, 1]
  )

  return (
    <div className="mt-2">
      {/* Desktop — timeline horizontale */}
      <div ref={desktopRef} className="relative hidden w-full py-4 lg:block lg:py-6">
        <div className="grid w-full grid-cols-4 gap-x-6 lg:gap-x-14 xl:gap-x-24">
          {steps.map((step, index) => (
            <div key={`top-${step.step}`} className="flex min-h-[6.5rem] items-end justify-center px-1 lg:min-h-[7rem]">
              {index % 2 === 0 ? (
                <StepContent step={step} index={index} />
              ) : null}
            </div>
          ))}
        </div>

        <div className="relative mt-1 w-full">
          <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px -translate-y-1/2 bg-border/70" />
          <motion.div
            className="absolute left-[12.5%] right-[12.5%] top-1/2 h-0.5 -translate-y-1/2 origin-left bg-gradient-to-r from-primary/70 via-[#D4A5A5] to-primary"
            style={{ scaleX: desktopLineProgress }}
          />

          <div className="relative grid w-full grid-cols-4 gap-x-6 lg:gap-x-14 xl:gap-x-24">
            {steps.map((step, index) => (
              <div
                key={`dot-${step.step}`}
                className="flex justify-center"
              >
                <StepDot step={step} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="grid w-full grid-cols-4 gap-x-6 lg:gap-x-14 xl:gap-x-24">
          {steps.map((step, index) => (
            <div
              key={`bottom-${step.step}`}
              className="flex min-h-[6.5rem] items-start justify-center px-1 lg:min-h-[7rem]"
            >
              {index % 2 === 1 ? (
                <StepContent step={step} index={index} className="mt-4" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile — timeline verticale */}
      <div ref={mobileRef} className="relative py-2 lg:hidden">
        <div className="absolute bottom-6 left-[1.45rem] top-6 w-px bg-border/70" />
        <motion.div
          className="absolute bottom-6 left-[1.45rem] top-6 w-0.5 origin-top bg-gradient-to-b from-primary/70 via-[#D4A5A5] to-primary"
          style={{ scaleY: mobileLineProgress }}
        />

        <ol className="space-y-7">
          {steps.map((step, index) => (
            <li key={step.step} className="relative flex gap-5 pl-12">
              <div className="absolute left-0 top-0">
                <StepDot step={step} index={index} />
              </div>
              <StepContent
                step={step}
                index={index}
                className="max-w-none text-left"
              />
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 text-center lg:mt-10">
        <Button asChild size="lg" variant="outline">
          <Link href={ctaHref}>
            {ctaLabel}
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
