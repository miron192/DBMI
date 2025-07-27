import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function GetLatestMovies() {
  let movies;
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();
    movies = data.results ?? [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    movies = [];
  }
  return movies;
}
export async function GetLatestShows() {
  let shows;
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();
    shows = data.results ?? [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    shows = [];
  }
  return shows;
}

export async function GetPopularShows() {
  let shows;
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();
    shows = data.results ?? [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    shows = [];
  }
  return shows;
}

export async function GetPopularMovies() {
  let shows;
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();
    shows = data.results ?? [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    shows = [];
  }
  return shows;
}

export async function fetchMovieById(id: string) {
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
  );
  if (movieRes.ok) {
    const data = await movieRes.json();
    return data;
  }

  return { type: "unknown", data: null };
}

export async function SearchMovies(query: string) {
  let movies;
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}&language=LANG&include_adult=false&page=1`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();
    movies = data.results ?? [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    movies = [];
  }
  return movies;
}
export async function SearchShows(query: string) {
  let movies;
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&query=${query}&language=LANG&include_adult=false&page=1`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();
    movies = data.results ?? [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    movies = [];
  }
  return movies;
}
