import { getMovieDetails, getNowPlaying } from "@/app/_lib/services/tmdbService";
import { Typography } from "@mui/material";

export async function generateStaticParams() {
    const movies = await getNowPlaying();
    return movies.results.map(m => ({
        id: String(m.id)
    }));
}

export default async function Page({ params }: { params: Promise<{ movieId: string }> }) {
    const id = (await params).movieId;
    const movie = await getMovieDetails(id)
    return (
        <article>
            <Typography variant="h1" sx={{ mb: 4 }}> {movie.title}</Typography>
            <Typography variant="overline">Released {new Date(movie.releaseDate).toLocaleDateString()}</Typography>
            <Typography>{movie.overview}</Typography>
        </article>

    )
}