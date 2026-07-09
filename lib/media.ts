const BASE = "/images/agence-distinction"

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
    agency: media("Mélane et Michel", "Melane_Et_Michel_2400x1350_3.jpg"),
    performance: media("Mélane et Michel", "IMG_20230126_194117[7853].jpg"),
  },
  rpa: media("Mélane et Michel", "IMG_20230126_194117[7853].jpg"),
} as const
