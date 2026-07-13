import type { ArtistProfile } from "@/lib/data/artists"

export const ARTIST_LIST_FILTER_ALL = "Tous" as const

export function getArtistThemeFilters(artists: ArtistProfile[]): string[] {
  const themeCounts = new Map<string, number>()

  for (const artist of artists) {
    for (const theme of artist.themes ?? []) {
      themeCounts.set(theme, (themeCounts.get(theme) ?? 0) + 1)
    }
  }

  const sortedThemes = [...themeCounts.entries()]
    .sort(
      ([themeA, countA], [themeB, countB]) =>
        countB - countA || themeA.localeCompare(themeB, "fr")
    )
    .map(([theme]) => theme)

  return [ARTIST_LIST_FILTER_ALL, ...sortedThemes]
}

export function filterArtistProfiles(
  artists: ArtistProfile[],
  themeFilter: string,
  searchQuery: string
): ArtistProfile[] {
  const query = searchQuery.trim().toLowerCase()

  return artists.filter((artist) => {
    const matchesTheme =
      themeFilter === ARTIST_LIST_FILTER_ALL ||
      (artist.themes?.includes(themeFilter) ?? false)

    const matchesSearch =
      !query ||
      artist.name.toLowerCase().includes(query) ||
      (artist.primaryCategory?.toLowerCase().includes(query) ?? false) ||
      artist.categories.some((category) =>
        category.toLowerCase().includes(query)
      ) ||
      (artist.themes?.some((theme) => theme.toLowerCase().includes(query)) ??
        false)

    return matchesTheme && matchesSearch
  })
}
