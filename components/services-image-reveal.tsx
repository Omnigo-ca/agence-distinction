"use client"

import { motion, useReducedMotion } from "framer-motion"

import { ImagePlaceholder } from "@/components/image-placeholder"

type ServicesImageRevealProps = {
  direction: "left" | "right"
  label: string
  src?: string
  alt?: string
}

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const
const REVEAL_OFFSET = 90
const REVEAL_DURATION = 0.6

export function ServicesImageReveal({
  direction,
  label,
  src,
  alt,
}: ServicesImageRevealProps) {
  const prefersReducedMotion = useReducedMotion() ?? false
  const xOffset = direction === "left" ? -REVEAL_OFFSET : REVEAL_OFFSET

  return (
    <motion.div
      initial={
        prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: xOffset }
      }
      whileInView={
        prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
      }
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : REVEAL_DURATION,
        ease: REVEAL_EASE,
      }}
      className="overflow-hidden"
    >
      <ImagePlaceholder
        label={label}
        src={src}
        alt={alt}
        aspect="video"
      />
    </motion.div>
  )
}
