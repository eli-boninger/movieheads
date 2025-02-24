import { MoviesApiResponse, MovieDetails } from "@/app/_lib/models";
import { notFound } from "next/navigation";
import camelize from 'camelize';

export async function getMovieDetails(id: string) {
    const res = await fetch(`${process.env.TMDB_API_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`, { cache: 'force-cache' });
    const raw = await res.json();
    const movie: MovieDetails = camelize(raw);
    if (!movie) {
        notFound();
    }
    return movie;
}

export async function getNowPlaying() {
    const res = await fetch(`${process.env.TMDB_API_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`, { cache: 'force-cache' })
    const raw = await res.json();
    const movies: MoviesApiResponse = camelize(raw)
    if (!movies) {
        notFound();
    }
    return movies;
}