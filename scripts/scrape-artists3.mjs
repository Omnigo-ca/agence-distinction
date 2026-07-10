const BASE = "https://agencedistinction.ca"

async function main() {
  const html = await fetch(`${BASE}/les-artistes/`).then((r) => r.text())

  // Save snippet around first artist card
  const idx = html.indexOf("André Lahaie")
  if (idx > -1) {
    console.log("=== HTML around André Lahaie ===")
    console.log(html.slice(Math.max(0, idx - 800), idx + 2500))
  }

  // Find all onclick / data-popup / href patterns near artist names
  const popupPatterns = [
    /data-popup-id="([^"]+)"/g,
    /data-elementor-lightbox/g,
    /jet-popup/g,
    /popup-id/g,
    /artist-popup/g,
    /open-popup/g,
    /ad-artist/g,
    /cpt-/g,
  ]
  for (const p of popupPatterns) {
    const matches = html.match(p)
    if (matches) console.log(p, matches.length, matches.slice(0, 3))
  }

  // Find AJAX URLs
  const ajaxUrls = [...html.matchAll(/https?:\/\/[^"'\s]+(?:ajax|admin-ajax|wp-json)[^"'\s]*/g)]
  console.log("\nAJAX/API URLs in HTML:", [...new Set(ajaxUrls.map((m) => m[0]))].slice(0, 20))

  // Parse artist cards - look for elementor loop item structure
  const loopItems = [...html.matchAll(/elementor-loop-container[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g)]
  console.log("\nLoop containers:", loopItems.length)

  // Get full rendered content from WP API
  const page = await fetch(`${BASE}/wp-json/wp/v2/pages?slug=les-artistes`).then((r) => r.json())
  const content = page[0]?.content?.rendered || ""

  // Parse cards: h3 title + description pattern
  const cards = [...content.matchAll(
    /<h3[^>]*>([^<]+)<\/h3>[\s\S]*?<span[^>]*>([^<]+)<\/span>\s*[-]{2,}\s*([\s\S]*?)\s*[-]{2,}\s*<p[^>]*>([^<]*)<\/p>/gi
  )]

  console.log(`\nParsed cards from API content: ${cards.length}`)
  if (cards[0]) {
    console.log("First card:", {
      title: cards[0][1],
      name: cards[0][2],
      excerpt: cards[0][3].replace(/<[^>]+>/g, "").slice(0, 200),
      categories: cards[0][4],
    })
  }

  // Look for hidden popup content with full bios
  const hiddenSections = [...content.matchAll(/elementor-popup|elementor-hidden|display:\s*none/gi)]
  console.log("Hidden/popup sections:", hiddenSections.length)

  // Search for artist ID 88 in content
  const id88 = content.indexOf("88")
  console.log("Contains '88':", id88 > -1)

  // Fetch select element full HTML from page content  
  const selectMatch = content.match(/<select[^>]*artiste[^>]*>[\s\S]*?<\/select>/i)
  if (selectMatch) {
    const opts = [...selectMatch[0].matchAll(/value="(\d+)"[^>]*>([^<]+)/g)]
    console.log(`\nSelect options parsed: ${opts.length}`)
    console.log("Sample:", opts.slice(0, 5).map((m) => ({ id: m[1], name: m[2] })))
  }

  // Try admin-ajax with action from scripts
  const actions = [...html.matchAll(/action['":\s]+['"]([a-zA-Z0-9_-]+)['"]/g)]
  console.log("\nAJAX actions:", [...new Set(actions.map((m) => m[1]))].slice(0, 20))
}

main().catch(console.error)
