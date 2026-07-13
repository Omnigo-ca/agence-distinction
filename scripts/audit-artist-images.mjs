import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const artistsTs = fs.readFileSync(path.join(root, "lib/data/artists.ts"), "utf8")

const matches = [...artistsTs.matchAll(/image: "(\/images\/agence-distinction\/[^"]+)"/g)]
let missing = 0

for (const [, encoded] of matches) {
  const decoded = decodeURIComponent(encoded.replace("/images/agence-distinction/", ""))
  const filePath = path.join(root, "public", "images", "agence-distinction", decoded.replace(/\//g, path.sep))
  const exists = fs.existsSync(filePath)
  if (!exists) {
    missing++
    console.log("MISSING:", encoded)
  }
}

console.log(`Checked ${matches.length} local images, missing: ${missing}`)
