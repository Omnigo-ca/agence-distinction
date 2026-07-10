const BASE = "https://agencedistinction.ca"

async function main() {
  const html = await fetch(`${BASE}/les-artistes/`).then((r) => r.text())
  console.log(html.slice(58300, 62000))
}

main()
