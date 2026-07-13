import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const parsed = JSON.parse(
  fs.readFileSync(path.join(root, "tmp-testimonials-parsed.json"), "utf8"),
)
const outDir = path.join(root, "public", "images", "testimonials")

function slugify(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

fs.mkdirSync(outDir, { recursive: true })

const downloaded = []

for (const item of parsed.items) {
  const slug = slugify(item.author)
  const hiResUrl = item.avatar.replace("w40-h40", "w80-h80")
  const outPath = path.join(outDir, `${slug}.jpg`)
  const publicPath = `/images/testimonials/${slug}.jpg`

  const response = await fetch(hiResUrl)
  if (!response.ok) {
    console.error(`Failed ${item.author}: ${response.status}`)
    continue
  }

  const buffer = Buffer.from(await response.arrayBuffer())
  fs.writeFileSync(outPath, buffer)
  downloaded.push({ author: item.author, avatar: publicPath })
  console.log(`Saved ${item.author} -> ${publicPath}`)
}

fs.writeFileSync(
  path.join(root, "tmp-testimonial-avatars.json"),
  JSON.stringify(downloaded, null, 2),
)
console.log(`Downloaded ${downloaded.length} avatars`)
