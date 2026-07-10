const BASE = "https://agencedistinction.ca"

async function main() {
  const html = await fetch(`${BASE}/les-artistes/`).then((r) => r.text())

  // Find ad-v2 related scripts and styles
  const adScripts = [...html.matchAll(/<script[^>]+src="([^"]*ad[^"]*)"[^>]*>/gi)]
  console.log("ad scripts:", adScripts.map((m) => m[1]))

  const allScripts = [...html.matchAll(/<script[^>]+src="([^"]+)"[^>]*>/gi)].map((m) => m[1])
  console.log("\nAll external scripts:", allScripts.filter((s) => /ad|artist|distinction|custom/i.test(s)))

  // Find ad-v2 card HTML
  const cardIdx = html.indexOf("ad-v2-card")
  console.log("\nad-v2-card index:", cardIdx)
  if (cardIdx > -1) console.log(html.slice(cardIdx, cardIdx + 3000))

  // Alternative class names
  for (const cls of ["ad-v2-artist", "ad-v2-item", "ad-v2-grid", "ad-v2-modal", "artist-card", "ad-artist"]) {
    const i = html.indexOf(cls)
    console.log(`${cls}:`, i > -1 ? "found at " + i : "not found")
  }

  // Inline script with ad-v2
  const inlineScripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((m) => m[1])
    .filter((s) => s.includes("ad-v2") || s.includes("ad_v2") || s.includes("artist"))
  console.log(`\nInline ad-v2 scripts: ${inlineScripts.length}`)
  for (const s of inlineScripts) console.log(s.slice(0, 1500), "\n---")

  // Find enqueued JS with ad
  const localized = [...html.matchAll(/var\s+(\w+)\s*=\s*(\{[\s\S]*?\});/g)]
    .filter((m) => /ad|artist|ajax/i.test(m[0]))
  console.log(`\nLocalized vars: ${localized.length}`)
  for (const m of localized.slice(0, 5)) {
    console.log(m[1], m[2].slice(0, 800))
  }

  // Fetch likely plugin JS
  const candidates = allScripts.filter((s) =>
    /ad-v2|artist|distinction|agence/i.test(s)
  )
  for (const src of candidates.length ? candidates : allScripts.slice(-10)) {
    try {
      const url = src.startsWith("http") ? src : BASE + src
      const js = await fetch(url).then((r) => r.text())
      if (/artist|ad-v2|ad_v2|ajax/i.test(js)) {
        console.log(`\n=== Relevant JS: ${url} ===`)
        // Find ajax actions
        const actions = [...js.matchAll(/action['":\s]+['"]([a-zA-Z0-9_-]+)['"]/g)]
        console.log("actions:", [...new Set(actions.map((m) => m[1]))])
        const endpoints = [...js.matchAll(/admin-ajax\.php[^"']*|wp-json\/[^"']+/g)]
        console.log("endpoints:", [...new Set(endpoints.map((m) => m[0]))].slice(0, 10))
        // Find API path for artist detail
        const artistApi = js.match(/getArtist|loadArtist|artist_detail|fetchArtist[^;]{0,200}/gi)
        if (artistApi) console.log("artist API refs:", artistApi.slice(0, 5))
        console.log(js.slice(0, 2000))
      }
    } catch (e) {
      console.log("fail", src)
    }
  }
}

main().catch(console.error)
