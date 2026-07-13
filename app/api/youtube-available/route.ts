import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const videoId = request.nextUrl.searchParams.get("videoId")

  if (!videoId) {
    return NextResponse.json({ available: false })
  }

  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`

  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(watchUrl)}&format=json`,
      { next: { revalidate: 86_400 } }
    )

    return NextResponse.json({ available: response.ok })
  } catch {
    return NextResponse.json({ available: false })
  }
}
