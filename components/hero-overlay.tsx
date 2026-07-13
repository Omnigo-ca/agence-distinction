import {
  HERO_DARK_OVERLAY_CLASS,
  HERO_WARM_OVERLAY_CLASS,
} from "@/lib/hero-overlay"

export function HeroOverlay() {
  return (
    <>
      <div className={HERO_WARM_OVERLAY_CLASS} aria-hidden="true" />
      <div className={HERO_DARK_OVERLAY_CLASS} aria-hidden="true" />
    </>
  )
}
