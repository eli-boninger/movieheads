import { ApiResponse } from "@/app/_lib/models/apiResponse";
import { Typography } from "@mui/material";
import { notFound } from "next/navigation";

async function getMovie(id: string) {
    const res = await fetch(`${process.env.TMDB_API_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`, { cache: 'force-cache' });
    const movie = await res.json();
    if (!movie) {
        notFound();
    }
    return movie;
}

export async function generateStaticParams() {
    const res = await fetch(`${process.env.TMDB_API_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`, { cache: 'force-cache' });
    const movies: ApiResponse = await res.json();
    return movies.results.map(m => ({
        id: String(m.id)
    }));
}

export default async function Page({ params }: { params: Promise<{ movieId: string }> }) {
    const id = (await params).movieId;
    const movie = await getMovie(id)
    return (
        <article>
            <Typography variant="h1"> Movie ID: {id}</Typography><p>{JSON.stringify(movie)}</p></article>

    )
}