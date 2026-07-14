const BASE = "/images/agence-distinction"

/** Ancrage par défaut pour les portraits et photos de spectacles (visages visibles). */
export const FACE_OBJECT_POSITION = "center top"

/** Cadrage des images et vidéos hero plein écran — ancrage haut, sous la barre de navigation (h-16). */
export const HERO_OBJECT_POSITION = "center top"

/** Cadrage hero fiche artiste — centré pour voir la scène complète. */
export const ARTIST_HERO_OBJECT_POSITION = "center center"

/** Légèrement plus grand que le conteneur pour dézoomer ; démarre sous la barre h-16. */
export const HERO_MEDIA_CLASS =
  "absolute left-1/2 top-16 h-[calc(112%_-_4rem)] w-[112%] max-w-none -translate-x-1/2 object-cover"

/** Fond vidéo local hero fiche artiste — cover plein écran, sans déformation. */
export const ARTIST_HERO_MEDIA_CLASS =
  "absolute inset-0 size-full max-w-none object-cover"

/** Iframe YouTube/Vimeo fiche artiste — cover 16:9 centré, léger zoom vertical pour masquer le chrome. */
export const ARTIST_HERO_EMBED_CLASS =
  "pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-[138%] w-full min-w-[177.78vh] max-w-none -translate-x-1/2 -translate-y-[45%] border-0 select-none"

/** Cadrage des iframes vidéo hero (YouTube/Vimeo) — décalage vers le haut pour voir les visages. */
export const HERO_EMBED_FRAME_CLASS =
  "pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] min-h-full min-w-full -translate-x-1/2 -translate-y-[15%] select-none border-0"

/** Chemin URL-safe vers un asset dans public/images/agence-distinction/ */
export function media(...segments: string[]): string {
  return `${BASE}/${segments.map((s) => encodeURIComponent(s)).join("/")}`
}

/** Visuels thématiques dédiés (racine du dossier médias) */
export const themeImages = {
  stJean: media("st_jean.jpg"),
  fetePeres: media("fete-des-peres.jpg"),
  feteMeres: media("fetes-des-meres.png"),
  noel: media("noel.jpg"),
  nouvelAn: media("nouvel_an.jpg"),
  saintValentin: media("fleurs-saint-valentin.jpg"),
  carnaval: media("carnaval.jpg"),
  cabaneSucre: media("cabane-sucre.jpg"),
  anneesRetro: media("retro.jpg"),
  soireeCountry: media("country.jpg"),
  carnavalRio: media("carnaval-rio.jpg"),
  chansonsAutrefois: media("chanson-autrefois.jpg"),
  anniversairesMois: media("anniversaire-mois.jpg"),
  intergenerationnel: media("intergenerationnel.jpg"),
} as const

export const mediaAssets = {
  logos: {
    official: media("Logo_Officiel.png"),
    signature: media("Logo_Signature.png"),
  },
  hero: {
    video: media("agence-distinction-promo-01-ed.mp4"),
    poster: media("Mélane et Michel", "Melane_Et_Michel_2400x1350_9.jpg"),
  },
  about: {
    agency: media("Landry, Marie-Josée", "Marjo_2400x1350_3.jpg"),
    performance: media("Mélane et Michel", "Melane_Et_Michel_2400x1350_7.jpg"),
    hero: media("a-propos-hero.png"),
  },
  rpa: media("Mélane et Michel", "Melane_Et_Michel_2400x1350_7.jpg"),
  rpaHero: media("rpa-chsld-hero.png"),
  thematiquesHero: media("thematiques-hero.png"),
  servicesHero: media("services-hero.png"),
  artistesHero: media("artistes-hero.png"),
} as const
