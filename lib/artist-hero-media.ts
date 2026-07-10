import type { ArtistProfile, ArtistVideo } from "@/lib/data/artists"

export type ArtistVideoType = "local" | "youtube" | "vimeo"

export type ArtistHeroBackground =
  | { kind: "video"; src: string; poster: string }
  | { kind: "youtube"; videoId: string; poster: string }
  | { kind: "vimeo"; videoId: string; poster: string }
  | { kind: "image"; src: string }

export function detectVideoType(url: string): ArtistVideoType {
  if (/youtube\.com|youtu\.be/i.test(url)) return "youtube"
  if (/vimeo\.com/i.test(url)) return "vimeo"
  return "local"
}

export function parseYoutubeId(url: string): string | null {
  const match =
    url.match(/youtube\.com\/embed\/([^?&]+)/i) ??
    url.match(/youtube\.com\/watch\?v=([^&]+)/i) ??
    url.match(/youtu\.be\/([^?&]+)/i)
  return match?.[1] ?? null
}

export function parseVimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i)
  return match?.[1] ?? null
}

function resolveFromUrl(
  url: string,
  type: ArtistVideoType | undefined,
  poster: string
): ArtistHeroBackground | null {
  const resolvedType = type ?? detectVideoType(url)

  if (resolvedType === "youtube") {
    const videoId = parseYoutubeId(url)
    return videoId ? { kind: "youtube", videoId, poster } : null
  }

  if (resolvedType === "vimeo") {
    const videoId = parseVimeoId(url)
    return videoId ? { kind: "vimeo", videoId, poster } : null
  }

  if (/\.(mp4|webm|mov)(\?|$)/i.test(url) || url.startsWith("/")) {
    return { kind: "video", src: url, poster }
  }

  return null
}

function resolveFromVideo(
  video: ArtistVideo,
  poster: string
): ArtistHeroBackground | null {
  return resolveFromUrl(video.url, video.type, poster)
}

export function resolveArtistHeroBackground(
  artist: ArtistProfile
): ArtistHeroBackground {
  const poster = artist.videoPoster ?? artist.image

  if (artist.videoHero) {
    const fromHero = resolveFromUrl(
      artist.videoHero,
      detectVideoType(artist.videoHero),
      poster
    )
    if (fromHero) return fromHero
  }

  const videos = artist.videos ?? []

  const localVideo = videos.find(
    (video) => (video.type ?? detectVideoType(video.url)) === "local"
  )
  if (localVideo) {
    const fromLocal = resolveFromVideo(localVideo, poster)
    if (fromLocal) return fromLocal
  }

  for (const video of videos) {
    const fromVideo = resolveFromVideo(video, poster)
    if (fromVideo) return fromVideo
  }

  return { kind: "image", src: poster }
}
