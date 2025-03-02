import { ISearchedAnime } from "@/types/searchedAnime"
import { ITopAnime } from "@/types/topAnime"

const options: RequestInit = {
    method: "GET",
    headers: {
        accept: "application/json",
    },
    next: {
        revalidate: 60 * 60 * 24,
    },
};
export async function fetchAnime(url: URL, contentType?: "tv" | "movie" | "ova" | "special" | "ona" | "music" | "cm" | "pv" | "tv_special",
    filterContent?: "airing" | "upcoming" | "bypopularity" | "favorite",
) {
    url.searchParams.set("sfw", "true")
    url.searchParams.set("sort", "asc")
    url.searchParams.set("rating", "g")
    url.searchParams.set("limit", "10")
    url.searchParams.set("page", "1")
    if (contentType) { url.searchParams.set("type", contentType) }
    if (filterContent) url.searchParams.set("filter", filterContent)


    const res = await fetch(url.toString(), options);

    if (!res.ok) throw new Error("found error while fetching anime movies")

    const data = await res.json() as ITopAnime;
    return data.data
}

export const getTopAnimeMovies = async () => {
    const newURL = new URL("https://api.jikan.moe/v4/top/anime")
    const res = await fetchAnime(newURL, "movie")
    return res
}


export const getTopAnimeSeries = async () => {
    const newURL = new URL("https://api.jikan.moe/v4/top/anime")
    const res = await fetchAnime(newURL, "tv",)
    return res
}

export const getTopAnimeSeries_paginated = async () => {
    const newURL = new URL("https://api.jikan.moe/v4/top/anime")
    const res = await fetchAnime(newURL, "tv", "airing")
    return res
}

export const getUpcomingAnimeSeries = async () => {
    const newURL = new URL("https://api.jikan.moe/v4/top/anime")
    const res = await fetchAnime(newURL, "tv", "upcoming")
    return res
}

export const getUpcomingAnimeMovies = async () => {
    const newURL = new URL("https://api.jikan.moe/v4/top/anime")
    const res = await fetchAnime(newURL, "movie", "upcoming")
    return res
}

export const getSearchedAnime = async (searchTerm: string) => {
    const newURL = new URL("https://api.jikan.moe/v4/anime")
    newURL.searchParams.set("q", searchTerm)
    newURL.searchParams.set("limit", "10")
    newURL.searchParams.set("page", "1")
    newURL.searchParams.set("order_by", "popularity")

    const res = await fetch(newURL, options)
    const data = await res.json() as ISearchedAnime
    return data
}

