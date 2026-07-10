/**
 * One-off script to analyze artist data from agencedistinction.ca
 * Run: node scripts/scrape-artists.mjs
 */

const BASE = "https://agencedistinction.ca"

async function main() {
  // 1. Get WP routes for custom post types
  const root = await fetch(`${BASE}/wp-json/`).then((r) => r.json())
  const artistRoutes = Object.keys(root.routes).filter(
    (k) =>
      /artiste|artist|cpt|listing|jet/i.test(k) &&
      k.includes("/wp/v2/")
  )
  console.log("Artist-related routes:", artistRoutes.slice(0, 30))

  // 2. Try common CPT slugs
  for (const slug of [
    "artistes",
    "artiste",
    "artists",
    "artist",
    "nos-artistes",
    "listing",
  ]) {
    try {
      const url = `${BASE}/wp-json/wp/v2/${slug}?per_page=3&_fields=id,slug,title,content,featured_media,link`
      const res = await fetch(url)
      if (res.ok) {
        const data = await res.json()
        if (Array.isArray(data) && data.length) {
          console.log(`\nFound CPT: ${slug} (${data.length} in first page)`)
          console.log(JSON.stringify(data[0], null, 2).slice(0, 2000))
        }
      }
    } catch {
      /* ignore */
    }
  }

  // 3. Parse les-artistes page HTML
  const html = await fetch(`${BASE}/les-artistes/`).then((r) => r.text())

  // Find scripts with artist data
  const scriptMatches = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((m) => m[1])
    .filter((s) => /artiste|artist|listing|jet/i.test(s))

  console.log(`\nRelevant inline scripts: ${scriptMatches.length}`)
  for (const s of scriptMatches.slice(0, 3)) {
    console.log(s.slice(0, 500))
    console.log("---")
  }

  // Find data attributes / post IDs
  const postIds = [...html.matchAll(/data-post-id="(\d+)"/g)].map((m) => m[1])
  console.log(`\ndata-post-id count: ${postIds.length}`, postIds.slice(0, 5))

  // Find artist card pattern
  const cardPattern = /class="[^"]*jet-listing[^"]*"[^>]*>/gi
  const jetCards = html.match(cardPattern) || []
  console.log(`\njet-listing elements: ${jetCards.length}`)
  if (jetCards[0]) console.log(jetCards[0])

  // Extract artist names from select options
  const options = [...html.matchAll(/<option value="([^"]*)"[^>]*>([^<]+)<\/option>/g)]
  const artistOptions = options.filter(([, , label]) =>
    !["Tous les artistes", "Catégories d'artistes", "Types d'événement", "Thématiques"].includes(label.trim()) &&
    !label.includes("Catégor")
  )
  console.log(`\nArtist filter options: ${artistOptions.length}`)
  console.log(artistOptions.slice(0, 10).map(([, v, l]) => `${v} => ${l}`))

  // Look for popup/modal config
  const popupRefs = [...html.matchAll(/popup|modal|lightbox|jet-popup/gi)]
  console.log(`\npopup/modal refs: ${popupRefs.length}`)

  // Fetch full page content from WP API
  const page = await fetch(
    `${BASE}/wp-json/wp/v2/pages?slug=les-artistes&context=edit`
  ).then((r) => r.json())

  if (page[0]?.meta) {
    console.log("\nPage meta keys:", Object.keys(page[0].meta))
  }

  // Search for JetEngine listing ID in elementor data
  const content = page[0]?.content?.rendered || ""
  const listingIds = [...content.matchAll(/listing_id['":\s]+(\d+)/gi)]
  console.log("\nlisting_id refs:", listingIds.map((m) => m[1]))

  const jetPopup = [...content.matchAll(/jet-popup|popup-action|data-popup/gi)]
  console.log("jet-popup in content:", jetPopup.length)

  // Try JetEngine REST if listing found
  for (const endpoint of [
    "/wp-json/jet-engine/v2/items",
    "/wp-json/jet-cct/artistes",
    "/wp-json/jet-cct/artiste",
  ]) {
    try {
      const res = await fetch(`${BASE}${endpoint}`)
      console.log(`${endpoint}: ${res.status}`)
      if (res.ok) {
        const t = await res.text()
        console.log(t.slice(0, 500))
      }
    } catch (e) {
      console.log(`${endpoint}: error`)
    }
  }
}

main().catch(console.error)
