import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")

const LOCAL_IMAGE_OVERRIDES = {
  "andre-lahaie": ["Lahaie, André", "André_Lahaie_Agence_Distinction_570x570.jpg"],
  "melane-et-michel-desjardins": ["Mélane et Michel", "Melane_Et_Michel_570x570_1.jpg"],
  "trio-java": ["Trio Java", "Agence_Distinction_Trio_Java_570x570.jpg"],
  "melanie-hache": ["Haché, Mélanie", "Agence_Distinction_Melanie_Hache_570x570.jpg"],
  "stephanie-roy": ["Roy, Stéphanie", "Agence_Distinction_Chanteuse_Stéphanie_Roy_570x570.jpg"],
  "clement-courtois": [
    "Courtois, Clément",
    "Chanteur_Clément_Courtois_Agence_Distinction_570x570.jpg",
  ],
  "julie-levac": ["Levac, Julie", "Agence_Distinction_Julie_Levac_570x570.jpg"],
  "olivier-morissette": [
    "Morissette, Olivier",
    "Agence_Distinction_Chansonnier_Olivier_Oli_Morissette_570x570.jpg",
  ],
  "miz-mia": ["Miz Mia", "Agence_Distinction_Chanteuse_Miz_Mia_570x570_1.jpg"],
  "france-bernard": [
    "Bernard, France",
    "Agence_Distinction_Chanteuse_France_Bernard_2400x1350_3.jpg",
  ],
  "caroline-noel": ["Noel, Caroline", "Chanteuse_Caroline_Noel_570x570.jpg"],
  "myriam-reid": ["Reid, Myriam", "Agence_Distinction_Harpiste_Myriam_Reid_570x570.jpg"],
  "samba-jeri": ["Samba Jeri", "Agence_Distinction_Samba_Jeri_570x570.jpg"],
  "samaya-baladi": [
    "Danse Orientale Samaya Baladi",
    "Agence_Distinction_Danse_Orientale_Samaya_Baladi_570x570.jpg",
  ],
  "steve-barry": ["Barry, Steve", "Agence_Distinction_Steve_Barry_570x570.jpg"],
  "robby-bolduc": ["Bolduc, Robby", "Agence_Distinction_Robby_Bolduc_570x570.jpg"],
  "anthony-lovison": [
    "Lovison, Anthony",
    "Agence_Distinction_Chanteur_Anthony_Lovison_570x570_2.jpg",
  ],
}

const SLUG_ALIASES = {
  "melane-et-michel": "melane-et-michel-desjardins",
  "danse-orientale-samaya-baladi": "samaya-baladi",
}

/** Vidéos locales confirmées dans public/ — jamais inventées */
const LOCAL_VIDEO_HERO = {
  "melane-et-michel-desjardins": {
    video: ["Mélane et Michel", "VID_20230126_194016.mp4"],
    poster: ["Mélane et Michel", "Melane_Et_Michel_2400x1350_9.jpg"],
  },
}

function localAssetExists(folder, file) {
  return fs.existsSync(
    path.join(root, "public", "images", "agence-distinction", folder, file)
  )
}

function inferVideoType(url) {
  if (/youtube\.com|youtu\.be/i.test(url)) return "youtube"
  if (/vimeo\.com/i.test(url)) return "vimeo"
  return "local"
}

function mediaPath(folder, file) {
  const segments = [folder, file].map((s) => encodeURIComponent(s))
  return `/images/agence-distinction/${segments.join("/")}`
}

function normalizeBiography(text) {
  if (!text) return undefined

  let cleaned = text
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/Lorem ipsum[\s\S]*/i, "")
    .replace(/Des spectacles authentiques[\s\S]*/i, "")
    .replace(/\r\n/g, "\n")
    .trim()

  const paragraphs = cleaned
    .split(/\n\n+/)
    .map((paragraph) =>
      paragraph
        .replace(/\s+/g, " ")
        .replace(/([.!?])([A-ZÀ-ÝÉÈÊËÎÏÔÙÛÜÇ💫])/g, "$1 $2")
        .replace(/:([A-ZÀ-ÝÉÈÊËÎÏÔÙÛÜÇ])/g, ": $1")
        .replace(/([a-zàâäéèêëïîôùûüç])([A-ZÉÈÊ][a-zàâäéèêëïîôùûüç])/g, "$1\n$2")
        .replace(/💫\s*/g, "\n💫 ")
        .trim()
    )
    .filter((p) => p.length > 0 && !p.startsWith("<!--"))

  return paragraphs.length > 0 ? paragraphs.join("\n\n") : undefined
}

function dedupeStrings(items) {
  const seen = new Set()
  return items.filter((item) => {
    const key = item.toLowerCase().trim()
    if (!key || seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function cleanProfile(p) {
  const local = LOCAL_IMAGE_OVERRIDES[p.slug]
  const image = local ? mediaPath(local[0], local[1]) : p.image
  const biography = normalizeBiography(p.biography)
  const categories = dedupeStrings(p.categories ?? [])
  const primaryCategory = p.primaryCategory || categories[0] || undefined

  const videoOverride = LOCAL_VIDEO_HERO[p.slug]
  let videoHero
  let videoPoster
  if (
    videoOverride?.video &&
    localAssetExists(videoOverride.video[0], videoOverride.video[1])
  ) {
    videoHero = mediaPath(videoOverride.video[0], videoOverride.video[1])
    if (
      videoOverride.poster &&
      localAssetExists(videoOverride.poster[0], videoOverride.poster[1])
    ) {
      videoPoster = mediaPath(videoOverride.poster[0], videoOverride.poster[1])
    }
  }

  const videos = (p.videos ?? [])
    .filter((v) => v.url)
    .map((v) => ({
      ...v,
      type: v.type ?? inferVideoType(v.url),
    }))

  return {
    ...p,
    image,
    biography,
    shortDescription: undefined,
    primaryCategory,
    categories,
    videoHero,
    videoPoster,
    themes: dedupeStrings((p.themes ?? []).filter((t) => t && !t.includes("<!--"))),
    formats: dedupeStrings(p.formats ?? []),
    eventTypes: dedupeStrings(p.eventTypes ?? []),
    audiences: p.audiences ?? [],
    videos,
    gallery: (p.gallery ?? []).filter(
      (g) => g.url && !g.url.includes("favion") && !g.url.includes("logo-agence")
    ),
  }
}

function toTsObject(obj, indent = 2) {
  const pad = " ".repeat(indent)
  if (obj === undefined || obj === null) return "undefined"
  if (typeof obj === "string") return JSON.stringify(obj)
  if (typeof obj === "number" || typeof obj === "boolean") return String(obj)
  if (Array.isArray(obj)) {
    if (obj.length === 0) return "[]"
    return `[\n${obj.map((item) => `${pad}  ${toTsObject(item, indent + 2)}`).join(",\n")}\n${pad}]`
  }
  const entries = Object.entries(obj).filter(([, v]) => v !== undefined && v !== null && v !== "")
  if (entries.length === 0) return "{}"
  return `{\n${entries
    .map(([k, v]) => {
      const key = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(k) ? k : JSON.stringify(k)
      return `${pad}  ${key}: ${toTsObject(v, indent + 2)}`
    })
    .join(",\n")}\n${pad}}`
}

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, "artists-raw.json"), "utf8"))
const profiles = raw.map(cleanProfile).sort((a, b) => a.name.localeCompare(b.name, "fr"))

const out = `/**
 * Données artistes extraites de https://agencedistinction.ca/les-artistes/
 * Généré le ${new Date().toISOString().slice(0, 10)} — ne pas éditer à la main.
 * Regénérer : node scripts/scrape-all-artists.mjs && node scripts/generate-artists-ts.mjs
 */

export type ArtistVideoType = "local" | "youtube" | "vimeo"

export type ArtistVideo = {
  title?: string
  url: string
  type?: ArtistVideoType
  thumbnail?: string
}

export type ArtistGalleryItem = {
  url: string
  alt: string
}

export type ArtistProfile = {
  id: string
  slug: string
  name: string
  image: string
  secondaryImage?: string
  videoHero?: string
  videoPoster?: string
  shortDescription?: string
  biography?: string
  primaryCategory?: string
  categories: string[]
  instruments?: string[]
  musicalStyles?: string[]
  formats?: string[]
  performanceTypes?: string[]
  themes?: string[]
  eventTypes?: string[]
  audiences?: string[]
  repertoire?: string[]
  languages?: string[]
  regions?: string[]
  videos?: ArtistVideo[]
  gallery?: ArtistGalleryItem[]
  sourceUrl?: string
}

/** Alias slug → slug canonique (ex. cartes accueil) */
export const artistSlugAliases: Record<string, string> = ${JSON.stringify(SLUG_ALIASES, null, 2)}

export const artistProfiles: ArtistProfile[] = ${toTsObject(profiles, 0)}

export function resolveArtistSlug(slug: string): string {
  return artistSlugAliases[slug] ?? slug
}

export function getArtistBySlug(slug: string): ArtistProfile | undefined {
  const resolved = resolveArtistSlug(slug)
  return artistProfiles.find((artist) => artist.slug === resolved)
}

export function getAllArtistProfiles(): ArtistProfile[] {
  return artistProfiles
}

export function getArtistById(id: string): ArtistProfile | undefined {
  return artistProfiles.find((artist) => artist.id === id)
}

/** Aperçu court pour les cartes (dérivé de la biographie, jamais tronqué avec ...) */
export function getArtistPreview(artist: ArtistProfile, maxLength = 180): string | undefined {
  if (!artist.biography) return undefined
  const firstParagraph = artist.biography.split(/\\n\\n+/)[0]?.replace(/\\s+/g, " ").trim()
  if (!firstParagraph) return undefined
  if (firstParagraph.length <= maxLength) return firstParagraph
  const cut = firstParagraph.slice(0, maxLength).replace(/\\s+\\S*$/, "")
  return cut + "…"
}

/** Catégories sans doublons ni répétition de la catégorie principale */
export function getArtistCategories(artist: ArtistProfile): string[] {
  const primary = artist.primaryCategory?.toLowerCase().trim()
  return artist.categories.filter(
    (category) => category.toLowerCase().trim() !== primary
  )
}
`

fs.mkdirSync(path.join(root, "lib", "data"), { recursive: true })
fs.writeFileSync(path.join(root, "lib", "data", "artists.ts"), out, "utf8")
console.log(`Generated lib/data/artists.ts with ${profiles.length} artists`)
