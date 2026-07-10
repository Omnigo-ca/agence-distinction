const BASE = "https://agencedistinction.ca"

async function main() {
  const html = await fetch(`${BASE}/les-artistes/`).then((r) => r.text())

  // Parse artist cards
  const cards = [...html.matchAll(
    /<div class="ad-v2-artist-card[^"]*"([^>]*)>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g
  )]

  console.log("Cards found (regex 1):", cards.length)

  // Simpler: find all data-url on artist cards
  const cardBlocks = [...html.matchAll(
    /class="ad-v2-artist-card"([^>]*data-url="([^"]+)"[^>]*)>([\s\S]*?)<\/div>\s*<\/div>/g
  )]
  console.log("Cards with data-url:", cardBlocks.length)

  const artists = []
  for (const m of cardBlocks) {
    const attrs = m[1]
    const url = m[2]
    const inner = m[3]
    const id = attrs.match(/data-artist-id="(\d+)"/)?.[1]
    const categories = attrs.match(/data-categories="([^"]+)"/)?.[1]
    const name = inner.match(/<h3[^>]*>([^<]+)<\/h3>/)?.[1]?.trim()
    const excerpt = inner.match(/ad-v2-artist-excerpt[^>]*>([\s\S]*?)<\/div>/)?.[1]?.replace(/<[^>]+>/g, "").trim()
    const cats = inner.match(/ad-v2-artist-categories[^>]*>([^<]*)</)?.[1]?.trim()
    const img = inner.match(/src="([^"]+)"/)?.[1]
    artists.push({ id, name, url, categories, cats, excerpt: excerpt?.slice(0, 120), img })
  }

  console.log("\nSample artists:")
  console.log(JSON.stringify(artists.slice(0, 3), null, 2))
  console.log(`\nTotal: ${artists.length}`)

  // Fetch one detail page
  if (artists[0]) {
    const detailUrl = `${BASE}/${artists[0].url}`
    console.log(`\nFetching detail: ${detailUrl}`)
    const detail = await fetch(detailUrl).then((r) => r.text())
    console.log("Detail length:", detail.length)

    // Find bio sections
    for (const cls of ["adistinction", "artist", "biograph", "elementor-widget-theme-post-content"]) {
      const i = detail.indexOf(cls)
      console.log(`${cls}:`, i)
    }

    // Title
    const title = detail.match(/<title>([^<]+)<\/title>/)?.[1]
    console.log("title:", title)

    // Main content area
    const contentIdx = detail.indexOf("elementor-widget-theme-post-content")
    if (contentIdx > -1) console.log(detail.slice(contentIdx, contentIdx + 4000))

    // Images in detail
    const imgs = [...detail.matchAll(/wp-content\/uploads[^"']+\.(?:jpg|jpeg|png|webp)/gi)]
    console.log("\nDetail images:", [...new Set(imgs.map((m) => m[0]))].slice(0, 8))

    // Videos
    const vids = [...detail.matchAll(/youtube\.com|youtu\.be|vimeo\.com|\.mp4/gi)]
    console.log("Videos:", [...new Set(vids.map((m) => m[0]))])

    // Try WP API for page by slug
    const slug = artists[0].url.replace(/\/$/, "")
    const api = await fetch(`${BASE}/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug.split("/").pop())}&_embed`).then((r) => r.status)
    console.log("WP API page by slug status:", api)
  }

  // Write artist list for next step
  const fs = await import("fs")
  fs.writeFileSync(
    "scripts/artist-list-preview.json",
    JSON.stringify(artists, null, 2)
  )
  console.log("\nWrote scripts/artist-list-preview.json")
}

main().catch(console.error)
