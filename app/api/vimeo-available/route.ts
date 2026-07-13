import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const videoId = request.nextUrl.searchParams.get("videoId")

  if (!videoId) {
    return NextResponse.json({ available: false })
  }

  const watchUrl = `https://vimeo.com/${videoId}`

  try {
    const response = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(watchUrl)}`,
      { next: { revalidate: 86_400 } }
    )

    return NextResponse.json({ available: response.ok })
  } catch {
    return NextResponse.json({ available: false })
  }
}
