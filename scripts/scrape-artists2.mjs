const BASE = "https://agencedistinction.ca"

async function main() {
  const root = await fetch(`${BASE}/wp-json/`).then((r) => r.json())
  const routes = Object.keys(root.routes).filter((k) => k.startsWith("/wp/v2/") && !k.includes("{"))
  console.log("wp/v2 routes:", routes)

  // Try fetching André Lahaie by ID from filter
  for (const type of ["posts", "pages"]) {
    const data = await fetch(`${BASE}/wp-json/wp/v2/${type}/88?_embed`).then((r) => ({
      status: r.status,
      data: r.ok ? await r.json() : null,
    }))
    console.log(`\n${type}/88:`, data.status)
    if (data.data) {
      console.log("title:", data.data.title?.rendered)
      console.log("slug:", data.data.slug)
      console.log("link:", data.data.link)
      console.log("content length:", data.data.content?.rendered?.length)
      console.log("featured:", data.data.featured_media)
      if (data.data._embedded?.["wp:featuredmedia"]?.[0]) {
        console.log("image:", data.data._embedded["wp:featuredmedia"][0].source_url)
      }
    }
  }

  // Search all types for artist
  const types = await fetch(`${BASE}/wp-json/wp/v2/types`).then((r) => r.json())
  console.log("\nAll types:", Object.keys(types))

  // Try elementor template
  const el = await fetch(`${BASE}/wp-json/wp/v2/elementor_library?search=artiste&per_page=5`).then((r) => r.status)
  console.log("elementor_library search:", el)
}

main().catch(console.error)
