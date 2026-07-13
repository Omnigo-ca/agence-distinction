import fs from "fs"

const parsed = JSON.parse(
  fs.readFileSync(
    new URL("../tmp-testimonials-parsed.json", import.meta.url),
    "utf8",
  ),
)

const ORDER = [
  "Luc Lepage",
  "Sébastien Loisirs",
  "Jimmy Haché",
  "Julie",
  "Cristine Toca",
  "Portugais3000",
  "Joannie Laflamme",
  "Carole Boivin",
  "Michele Guimond",
  "Carl Miousse",
  "Joanie Randlett",
  "olivia guyon",
  "Simon Maurer",
  "Sebastien Fortin",
  "Cynthia Lafortune",
  "MC Divertissement vôtre",
  "Kevin Cummings",
  "Thomas Piche",
  "Catherine Asselin",
  "Cordeau Anye",
  "léane thibaudeau",
  "letitom varin",
  "Jérémie Domenico",
  "Stephane Descamps",
  "François Pelletier",
  "Jessica Charland",
]

const QUOTE_OVERRIDES = {
  Julie:
    "Je vous remercie infiniment, c'était mémorable. Caroline a une voix magnifique ! Je la recommande vivement !",
  "Joannie Laflamme":
    "Une grande variété d'artistes pour tous les occasions.\nEfficace, professionnel et courtois",
  "Michele Guimond":
    "Une excellente performance!\nJe recommande à 100% pour une magnifique soirée!",
  "Jimmy Haché":
    "Excellent service.\nMerci pour le soutien aux organisations et aux artistes.",
  "olivia guyon":
    "quelle belle equipes ,depuis bientot 10 ans nous sommes avec cette belle equipes pour nos Évènements ,toujours un plaisir garantie ,merci a toute la belle gang et surtout a marie -josee pour cette joie et amour .",
  "Jessica Charland":
    "Excellente agence. Ils ont un choix varie. La personne au téléphone était super accueillante!",
}

const DATE_OVERRIDES = {
  "Cordeau Anye": "il y a 1 année",
  "léane thibaudeau": "il y a 1 année",
}

const avatarMap = Object.fromEntries(
  JSON.parse(
    fs.readFileSync(
      new URL("../tmp-testimonial-avatars.json", import.meta.url),
      "utf8",
    ),
  ).map((item) => [item.author, item.avatar]),
)

const byAuthor = Object.fromEntries(parsed.items.map((item) => [item.author, item]))

const ordered = ORDER.map((author) => {
  const item = byAuthor[author]
  if (!item) throw new Error(`Missing testimonial for ${author}`)
  return {
    author,
    date: DATE_OVERRIDES[author] ?? item.date,
    avatar: avatarMap[author] ?? item.avatar,
    quote: QUOTE_OVERRIDES[author] ?? item.quote,
  }
})

const lines = ordered.map((item) => {
  const quote = item.quote.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n")
  return `  {
    quote: "${quote}",
    author: "${item.author}",
    date: "${item.date}",
    avatar: "${item.avatar}",
    source: "Google",
    rating: 5,
  }`
})

const output = `import type { Testimonial } from "./site-config"

export const googleReviewsMeta = {
  rating: 5,
  totalCount: 39,
  source: "Google",
} as const

export const testimonials = [
${lines.join(",\n")},
] satisfies Testimonial[]
`

fs.writeFileSync(
  new URL("../lib/testimonials-data.ts", import.meta.url),
  output,
)
console.log(`Wrote ${ordered.length} testimonials`)
