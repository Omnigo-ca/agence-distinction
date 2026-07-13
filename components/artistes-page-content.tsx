"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRightIcon, ChevronDownIcon, SearchIcon } from "lucide-react"

import { ArtistCard } from "@/components/artist-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  filterArtistProfiles,
  getArtistThemeFilters,
  ARTIST_LIST_FILTER_ALL,
} from "@/lib/artist-filters"
import type { ArtistProfile } from "@/lib/data/artists"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type ArtistesPageContentProps = {
  artists: ArtistProfile[]
}

const INITIAL_THEME_FILTERS_VISIBLE = 8

export function ArtistesPageContent({ artists }: ArtistesPageContentProps) {
  const listedCount = siteConfig.pages.artistes.listedCount
  const [activeFilter, setActiveFilter] = useState<string>(ARTIST_LIST_FILTER_ALL)
  const [searchQuery, setSearchQuery] = useState("")
  const [showAllFilters, setShowAllFilters] = useState(false)

  const themeFilters = useMemo(() => getArtistThemeFilters(artists), [artists])

  const visibleFilters = useMemo(() => {
    if (showAllFilters) return themeFilters

    const initial = themeFilters.slice(0, INITIAL_THEME_FILTERS_VISIBLE)
    if (
      activeFilter !== ARTIST_LIST_FILTER_ALL &&
      !initial.includes(activeFilter)
    ) {
      return [...initial, activeFilter]
    }

    return initial
  }, [themeFilters, showAllFilters, activeFilter])

  const hasMoreFilters = themeFilters.length > INITIAL_THEME_FILTERS_VISIBLE

  const filteredArtists = useMemo(
    () => filterArtistProfiles(artists, activeFilter, searchQuery),
    [artists, activeFilter, searchQuery]
  )

  return (
    <>
      <div className="mx-auto mb-10 max-w-xl">
        <label htmlFor="artist-search" className="sr-only">
          Rechercher un artiste
        </label>
        <div className="relative">
          <SearchIcon
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="artist-search"
            type="search"
            placeholder="Rechercher par nom ou thématique…"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="mb-8 flex flex-col items-center gap-3">
        <div
          className="flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filtrer les artistes par thématique"
        >
          {visibleFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                activeFilter === filter
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {hasMoreFilters ? (
          <button
            type="button"
            onClick={() => setShowAllFilters((open) => !open)}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-expanded={showAllFilters}
          >
            {showAllFilters
              ? "Réduire les thématiques"
              : `Afficher toutes les thématiques (${themeFilters.length - 1})`}
            <ChevronDownIcon
              className={cn(
                "size-4 transition-transform",
                showAllFilters && "rotate-180"
              )}
              aria-hidden="true"
            />
          </button>
        ) : null}
      </div>

      <p className="mb-8 text-center text-sm text-muted-foreground">
        {activeFilter === ARTIST_LIST_FILTER_ALL && !searchQuery.trim()
          ? `${listedCount} artistes répertoriés`
          : `${filteredArtists.length} artiste${filteredArtists.length > 1 ? "s" : ""} sur ${listedCount}`}
      </p>

      {filteredArtists.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-12 text-center text-muted-foreground">
          Aucun artiste ne correspond à votre recherche. Essayez un autre nom ou
          une autre thématique.
        </p>
      )}

      <div className="mt-12 rounded-2xl border border-border bg-muted/50 p-8 text-center">
        <h2 className="font-heading text-2xl font-semibold">
          Pas certain de l&apos;artiste?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Décrivez l&apos;ambiance recherchée, on vous recommande le talent
          idéal pour votre événement.
        </p>
        <Button asChild className="mt-6">
          <Link href="/soumission">
            Obtenir une recommandation
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </div>
    </>
  )
}
