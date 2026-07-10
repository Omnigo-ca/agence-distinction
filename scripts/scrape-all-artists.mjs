const BASE = "https://agencedistinction.ca"

const EVENT_TYPE_SLUGS = new Set([
  "concert-musical",
  "concert-musical-dansant",
  "musique-dambiance",
  "troubadour-unit%c3%a9-de-soins",
  "c%c3%a9r%c3%a9monie-comm%c3%a9morative",
  "animation-et-personnages",
])

const THEME_SLUGS = new Set([
  "ann%c3%a9es-20-charleston-gatsby",
  "ann%c3%a9es-50-rock-and-roll",
  "ann%c3%a9es-70-disco",
  "atelier-musical-pour-a%c3%aen%c3%a9s",
  "bal-en-blanc",
  "beach-party",
  "cabane-%c3%a0-sucre",
  "carnaval-de-rio-br%c3%a9sil",
  "chanson-fran%c3%a7aise",
  "croisi%c3%a8re",
  "crooner",
  "festival-country",
  "f%c3%aate-des-m%c3%a8res",
  "f%c3%aate-des-p%c3%a8res",
  "f%c3%aate-du-printemps",
  "fiesta-mexicaine",
  "halloween",
  "hollywood",
  "jazz",
  "jour-de-lan",
  "kermesse",
  "no%c3%abl",
  "p%c3%a2ques",
  "r%c3%a9tro",
  "soir%c3%a9e-canadienne",
  "st-jean-baptiste",
  "st-valentin",
])

const THEME_LABELS = {
  "ann%c3%a9es-20-charleston-gatsby": "Années 20 - Charleston / Gatsby",
  "ann%c3%a9es-50-rock-and-roll": "Années 50 - Rock and Roll",
  "ann%c3%a9es-70-disco": "Années 70 - Disco",
  "atelier-musical-pour-a%c3%aen%c3%a9s": "Atelier musical pour aînés",
  "bal-en-blanc": "Bal en blanc",
  "beach-party": "Beach Party",
  "cabane-%c3%a0-sucre": "Cabane à sucre",
  "carnaval-de-rio-br%c3%a9sil": "Carnaval de Rio - Brésil",
  "chanson-fran%c3%a7aise": "Chanson française",
  "croisi%c3%a8re": "Croisière",
  "crooner": "Crooner",
  "festival-country": "Festival Country",
  "f%c3%aate-des-m%c3%a8res": "Fête des mères",
  "f%c3%aate-des-p%c3%a8res": "Fête des pères",
  "f%c3%aate-du-printemps": "Fête du printemps",
  "fiesta-mexicaine": "Fiesta Mexicaine",
  halloween: "Halloween",
  hollywood: "Hollywood",
  jazz: "Jazz",
  "jour-de-lan": "Jour de l'an",
  kermesse: "Kermesse",
  "no%c3%abl": "Noël",
  "p%c3%a2ques": "Pâques",
  "r%c3%a9tro": "Rétro",
  "soir%c3%a9e-canadienne": "Soirée canadienne",
  "st-jean-baptiste": "St-Jean-Baptiste",
  "st-valentin": "St-Valentin",
}

const EVENT_LABELS = {
  "concert-musical": "Concert musical",
  "concert-musical-dansant": "Concert musical dansant",
  "musique-dambiance": "Musique d'ambiance",
  "troubadour-unit%c3%a9-de-soins": "Troubadour (Unité de soins)",
  "c%c3%a9r%c3%a9monie-comm%c3%a9morative": "Cérémonie commémorative",
  "animation-et-personnages": "Animation et personnages",
}

const CATEGORY_LABELS = {
  accordéoniste: "Accordéoniste",
  "auteur-compositeur-interprète": "Auteur-compositeur-interprète",
  bassiste: "Bassiste",
  batteur: "Batteur",
  chanteurse: "Chanteur(se)",
  compositeur: "Compositeur",
  contrebassiste: "Contrebassiste",
  dj: "DJ",
  duo: "Duo",
  "duo-chanteursepianiste": "Duo - Chanteur(se)/Pianiste",
  "groupe-de-musique-band": "Groupe de musique (Band)",
  guitariste: "Guitariste",
  harpiste: "Harpiste",
  "musicien-de-musique-du-monde": "Musicien de musique du monde",
  percussionniste: "Percussionniste",
  pianiste: "Pianiste",
  quatuor: "Quatuor",
  saxophoniste: "Saxophoniste",
  soliste: "Soliste",
  trio: "Trio",
  ukuléliste: "Ukuléliste",
}

function decodeHtml(s) {
  return s
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
}

function slugify(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function parseCards(html) {
  const cards = []
  const re =
    /<div class="ad-v2-artist-card[^"]*"([^>]*data-url="([^"]+)"[^>]*)>([\s\S]*?)<\/div>\s*<\/div>(?=\s*<div class="ad-v2-artist-card|<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/g
  let m
  while ((m = re.exec(html)) !== null) {
    const attrs = m[1]
    const dataUrl = m[2]
    const inner = m[3]
    const id = attrs.match(/data-artist-id="(\d+)"/)?.[1] ?? ""
    const categoriesRaw = attrs.match(/data-categories="([^"]*)"/)?.[1] ?? ""
    const categories = categoriesRaw.split(" ").filter(Boolean)
    const name = decodeHtml(
      inner.match(/class="ad-v2-artist-name"[^>]*>([^<]+)/)?.[1]?.trim() ??
        inner.match(/alt="([^"]+)"/)?.[1] ??
        ""
    )
    const image = inner.match(/src="([^"]+)"/)?.[1] ?? ""
    const descHtml = inner.match(/class="ad-v2-description"[^>]*><p>([\s\S]*?)<\/p>/)?.[1] ?? ""
    const parts = descHtml
      .split(/[-]{6,}/)
      .map((p) => p.replace(/<[^>]+>/g, "").trim())
      .filter(Boolean)
    const shortDescription = parts[1] ?? parts[0] ?? ""
    const cardCategories = parts[2] ?? ""
    const slug = dataUrl.split("/").pop() ?? ""

    cards.push({
      id,
      slug: slugify(name || slug),
      name,
      image,
      dataUrl,
      sourceUrl: `${BASE}/${dataUrl}`,
      shortDescription: decodeHtml(shortDescription),
      categorySlugs: categories,
      cardCategories,
    })
  }
  return cards
}

function stripHtml(html) {
  return decodeHtml(
    html
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n\n")
      .replace(/<[^>]+>/g, "")
      .replace(/\u00a0/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  )
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

function collectYoutubeVideos(html) {
  const ids = new Set()
  const videos = []

  for (const match of html.matchAll(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/g)) {
    ids.add(match[1])
  }
  for (const match of html.matchAll(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/g)) {
    ids.add(match[1])
  }
  for (const match of html.matchAll(/youtu\.be\/([a-zA-Z0-9_-]+)/g)) {
    ids.add(match[1])
  }

  for (const id of ids) {
    videos.push({
      url: `https://www.youtube.com/watch?v=${id}`,
      type: "youtube",
    })
  }

  return videos
}

function collectMp4Videos(html) {
  const urls = new Set()

  for (const match of html.matchAll(/(?:src|href)="([^"]+\.mp4[^"]*)"/gi)) {
    urls.add(match[1])
  }

  return [...urls].map((url) => ({ url, type: "local" }))
}

function dedupeVideos(videos) {
  const seen = new Set()
  return videos.filter((video) => {
    if (!video.url || seen.has(video.url)) return false
    seen.add(video.url)
    return true
  })
}

function normalizeBiography(text) {
  if (!text) return ""
  return text
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/Lorem ipsum[\s\S]*/i, "")
    .replace(/Des spectacles authentiques[\s\S]*/i, "")
    .trim()
    .split(/\n\n+/)
    .map((p) =>
      p
        .replace(/\s+/g, " ")
        .replace(/([.!?])([A-ZÀ-ÝÉÈÊËÎÏÔÙÛÜÇ💫])/g, "$1 $2")
        .replace(/:([A-ZÀ-ÝÉÈÊËÎÏÔÙÛÜÇ])/g, ": $1")
        .replace(/([a-zàâäéèêëïîôùûüç])([A-ZÉÈÊ][a-zàâäéèêëïîôùûüç])/g, "$1\n$2")
        .replace(/💫\s*/g, "\n💫 ")
        .trim()
    )
    .filter(Boolean)
    .join("\n\n")
}

function parseDetailPage(html, card) {
  const h1 = html.match(/<h1[^>]*>([^<]+)<\/h1>/i)?.[1]
  const name = h1 ? decodeHtml(h1.trim()) : card.name

  // Extract artist profile block - look for adistinction artist content
  let biography = ""
  const profileMatch = html.match(
    /class="[^"]*artist[^"]*profile[^"]*"[\s\S]*?<\/div>\s*<\/div>/i
  )

  // Fallback: text between breadcrumb artist name and "Des spectacles authentiques"
  const bioBlock = html.match(
    /Nos artistes[\s\S]*?<h1[^>]*>[^<]+<\/h1>([\s\S]*?)(?:Des spectacles authentiques|Thématiques\s*Disponible|Disponible en formule|Demandez une soumission)/i
  )
  if (bioBlock) {
    biography = normalizeBiography(stripHtml(bioBlock[1]))
  }

  const themesMatch = html.match(
    /Thématiques\s*Disponible[s]?<\/h3>([\s\S]*?)(?:<h3|Disponible en formule|Demandez une soumission|<\/section)/i
  )
  const themes = themesMatch
    ? stripHtml(themesMatch[1])
        .split(/\s{2,}|\n/)
        .map((s) => s.trim())
        .filter((s) => s.length > 2 && !s.startsWith("<!--"))
    : []

  const formatsMatch = html.match(
    /Disponible en formule<\/h3>([\s\S]*?)(?:Demandez une soumission|<h2|<\/section)/i
  )
  const formats = formatsMatch
    ? stripHtml(formatsMatch[1])
        .split(/\n|•/)
        .map((s) => s.trim())
        .filter(Boolean)
    : []

  const categoriesFromCard = card.cardCategories
    ? dedupeStrings(
        card.cardCategories.split(/\s*-\s*/).map((s) => s.trim()).filter(Boolean)
      )
    : []

  const categoriesFromSlugs = card.categorySlugs
    .filter((s) => !EVENT_TYPE_SLUGS.has(s) && !THEME_SLUGS.has(s))
    .map((s) => CATEGORY_LABELS[s] ?? s.replace(/-/g, " "))

  const categories = categoriesFromCard.length ? categoriesFromCard : categoriesFromSlugs

  const themesFromSlugs = card.categorySlugs
    .filter((s) => THEME_SLUGS.has(s))
    .map((s) => THEME_LABELS[s] ?? s)

  const eventTypes = card.categorySlugs
    .filter((s) => EVENT_TYPE_SLUGS.has(s))
    .map((s) => EVENT_LABELS[s] ?? s)

  const mergedThemes = [...new Set([...themes, ...themesFromSlugs])].filter(
    (t) => t && !t.includes("<!--")
  )

  // Gallery: only gestion profile uploads, exclude favicons/logos
  const galleryUrls = [
    ...html.matchAll(
      /https?:\/\/gestion\.agencedistinction\.ca\/+resources\/profile_uploads\/imgs\/[^"'\s]+\.(?:jpe?g|png|webp)/gi
    ),
  ].map((m) => m[0])
  const uniqueGallery = [...new Set(galleryUrls)].filter((u) => u !== card.image)

  const videos = dedupeVideos([
    ...collectYoutubeVideos(html),
    ...collectMp4Videos(html),
  ])

  return {
    id: card.id,
    slug: card.slug,
    name,
    image: card.image,
    biography,
    primaryCategory: categories[0] ?? "",
    categories,
    themes: mergedThemes,
    formats,
    eventTypes,
    audiences: [],
    videos,
    gallery: uniqueGallery.map((url) => ({ url, alt: name })),
    sourceUrl: card.sourceUrl,
  }
}

async function main() {
  const listHtml = await fetch(`${BASE}/les-artistes/`).then((r) => r.text())
  const cards = parseCards(listHtml)
  console.log(`Parsed ${cards.length} cards`)

  const profiles = []
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i]
    process.stdout.write(`\r${i + 1}/${cards.length} ${card.name}`)
    const html = await fetch(card.sourceUrl).then((r) => r.text())
    profiles.push(parseDetailPage(html, card))
    await new Promise((r) => setTimeout(r, 150))
  }

  const fs = await import("fs")
  fs.writeFileSync("scripts/artists-raw.json", JSON.stringify(profiles, null, 2))
  console.log("\nWrote scripts/artists-raw.json")
  console.log("André bio length:", profiles.find((p) => p.slug === "andre-lahaie")?.biography?.length)
  console.log("Mélane themes:", profiles.find((p) => p.slug.includes("melane"))?.themes?.length)
}

main().catch(console.error)
