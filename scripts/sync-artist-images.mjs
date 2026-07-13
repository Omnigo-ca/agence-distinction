import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const mediaRoot = path.join(root, "public", "images", "agence-distinction")
const rawPath = path.join(__dirname, "artists-raw.json")

const LOCAL_IMAGE_OVERRIDES = {
  "andre-lahaie": ["Lahaie, André", "André_Lahaie_Agence_Distinction_570x570.jpg"],
  "melane-et-michel-desjardins": [
    "Mélane et Michel",
    "Duo_Chanteuse_Mélane_et_Pianiste_Michel_Desjardins_570x570.jpg",
  ],
  "trio-java": ["Trio Java", "Agence_Distinction_Trio_Java_570x570.JPG"],
  "melanie-hache": [
    "Haché, Mélanie",
    "Chanteuse_Mélanie_Haché_2_570x570_Agence_Distinction.jpg",
  ],
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
  "myriam-reid": ["Reid, Myriam", "Agence_Distinction_Myriam_Reid_Harpiste-570x570.jpg"],
  "samba-jeri": ["Samba Jeri", "Agence_Distinction_Samba_Jeri_570x570.jpg"],
  "samaya-baladi": ["Danse Orientale Samaya Baladi", "Samaya_Baladi_570x570.jpeg"],
  "steve-barry": ["Barry, Steve", "Chanteur_Steve_Barry_Agence_Distinction_570x570.jpg"],
  "robby-bolduc": ["Bolduc, Robby", "Agence_Distinction_Chansonnier_Robby_Bolduc_570x570.jpg"],
  "anthony-lovison": [
    "Lovison, Anthony",
    "Agence_Distinction_Chanteur_Anthony_Lovison_570x570_2.jpg",
  ],
}

function localAssetExists(folder, file) {
  return fs.existsSync(path.join(mediaRoot, folder, file))
}

function findBestImageInFolder(folder) {
  const dir = path.join(mediaRoot, folder)
  if (!fs.existsSync(dir)) return null

  const files = fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort((a, b) => scoreImage(b) - scoreImage(a))

  return files[0] ?? null
}

function scoreImage(filename) {
  const lower = filename.toLowerCase()
  if (lower.includes("570x570")) return 100
  if (lower.includes("avatar")) return 90
  if (lower.includes("220x500")) return 70
  if (lower.includes("2400x1350")) return 60
  if (lower.includes("370x370")) return 50
  return 10
}

function mediaPath(folder, file) {
  return `/images/agence-distinction/${[folder, file].map((s) => encodeURIComponent(s)).join("/")}`
}

function decodeHtml(s) {
  return s
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
}

async function fetchListingImages() {
  const response = await fetch("https://agencedistinction.ca/les-artistes/")
  const html = await response.text()
  const cards = []

  const re =
    /<div class="ad-v2-artist-card[^"]*"[^>]*data-artist-id="(\d+)"[^>]*data-url="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g

  let match
  while ((match = re.exec(html)) !== null) {
    const inner = match[3]
    const name = decodeHtml(
      inner.match(/class="ad-v2-artist-name"[^>]*>([^<]+)/)?.[1]?.trim() ??
        inner.match(/alt="([^"]+)"/)?.[1] ??
        ""
    )
    const image = inner.match(/src="([^"]+)"/)?.[1] ?? ""
    const slug = match[2].split("/").pop() ?? ""
    cards.push({ id: match[1], slug, name, image })
  }

  return cards
}

async function downloadImage(url, folder, filename) {
  const targetDir = path.join(mediaRoot, folder)
  fs.mkdirSync(targetDir, { recursive: true })
  const targetPath = path.join(targetDir, filename)

  const response = await fetch(url)
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`)

  const buffer = Buffer.from(await response.arrayBuffer())
  fs.writeFileSync(targetPath, buffer)
  return targetPath
}

function resolveLocalImage(slug, scrapedImage, listingBySlug) {
  const override = LOCAL_IMAGE_OVERRIDES[slug]
  if (override) {
    const [folder, file] = override
    if (localAssetExists(folder, file)) {
      return { image: mediaPath(folder, file), source: "override" }
    }

    const best = findBestImageInFolder(folder)
    if (best) {
      return { image: mediaPath(folder, best), source: "folder-scan" }
    }
  }

  if (scrapedImage?.startsWith("http")) {
    return { image: scrapedImage, source: "scraped" }
  }

  const listing = listingBySlug.get(slug)
  if (listing?.image) {
    return { image: listing.image, source: "listing" }
  }

  return { image: scrapedImage, source: "unchanged" }
}

async function main() {
  const raw = JSON.parse(fs.readFileSync(rawPath, "utf8"))
  const listing = await fetchListingImages()
  const listingBySlug = new Map(listing.map((card) => [card.slug, card]))

  const downloads = []
  const report = []

  for (const artist of raw) {
    const override = LOCAL_IMAGE_OVERRIDES[artist.slug]
    let resolved = resolveLocalImage(artist.slug, artist.image, listingBySlug)

    if (
      override &&
      !localAssetExists(override[0], override[1]) &&
      !findBestImageInFolder(override[0])
    ) {
      const listingCard = listingBySlug.get(artist.slug)
      const remoteUrl = listingCard?.image || artist.image
      if (remoteUrl?.startsWith("http")) {
        try {
          const ext = path.extname(new URL(remoteUrl).pathname) || ".jpg"
          const filename = override[1].endsWith(ext) ? override[1] : override[1]
          await downloadImage(remoteUrl, override[0], filename)
          downloads.push(`${artist.name} → ${override[0]}/${filename}`)
          resolved = { image: mediaPath(override[0], filename), source: "downloaded" }
        } catch (error) {
          report.push({ slug: artist.slug, name: artist.name, error: error.message })
        }
      }
    }

    artist.image = resolved.image
    report.push({
      slug: artist.slug,
      name: artist.name,
      image: resolved.image,
      source: resolved.source,
    })
  }

  fs.writeFileSync(rawPath, JSON.stringify(raw, null, 2))
  console.log(`Updated ${raw.length} artists in artists-raw.json`)
  console.log(`Downloaded ${downloads.length} images:`)
  downloads.forEach((line) => console.log(`  - ${line}`))
  console.log("Sample fixes:")
  report
    .filter((item) =>
      [
        "melane-et-michel-desjardins",
        "melanie-hache",
        "myriam-reid",
        "robby-bolduc",
        "samaya-baladi",
        "samba-jeri",
        "steve-barry",
      ].includes(item.slug)
    )
    .forEach((item) => console.log(`  ${item.name}: ${item.source} → ${item.image}`))
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
