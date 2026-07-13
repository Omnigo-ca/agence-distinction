import fs from "fs"

const html = fs.readFileSync(
  new URL("../tmp-trustindex-content.html", import.meta.url),
  "utf8",
)

function relativeDateFr(unixSeconds) {
  const days = Math.floor((Date.now() / 1000 - unixSeconds) / 86400)
  if (days < 1) return "aujourd'hui"
  if (days === 1) return "il y a 1 jour"
  if (days < 7) return `il y a ${days} jours`
  const weeks = Math.floor(days / 7)
  if (weeks === 1) return "il y a 1 semaine"
  if (weeks < 5) return `il y a ${weeks} semaines`
  const months = Math.floor(days / 30)
  if (months === 1) return "il y a 1 mois"
  if (months < 12) return `il y a ${months} mois`
  const years = Math.floor(days / 365)
  if (years === 1) return "il y a 1 année"
  return `il y a ${years} ans`
}

const items = []
const re =
  /<div class="ti-review-item source-Google[^"]*"[^>]*data-time="(\d+)"[^>]*>[\s\S]*?<img src="([^"]+)"[^>]*alt="[^"]*profile picture[\s\S]*?<div class="ti-name">\s*([^<]+?)\s*<\/div>[\s\S]*?<div class="ti-review-text-container ti-review-content">([\s\S]*?)<\/div>/g

let match
while ((match = re.exec(html)) !== null) {
  let text = match[4]
    .replace(/<div class="ti-review-image"[\s\S]*?<\/div>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\+0\s*/, "")

  items.push({
    author: match[3].trim(),
    date: relativeDateFr(Number(match[1])),
    time: Number(match[1]),
    avatar: match[2],
    quote: text,
  })
}

items.sort((a, b) => b.time - a.time)
fs.writeFileSync(
  new URL("../tmp-testimonials-parsed.json", import.meta.url),
  JSON.stringify({ count: items.length, items }, null, 2),
)
console.log(`Parsed ${items.length}`)
for (const item of items) console.log(`${item.author} | ${item.date}`)
