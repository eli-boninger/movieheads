import { Typography } from "@mui/material";
import { Suspense } from "react";
import { MovieList } from "./movie-list";
import { ApiResponse } from "../_lib/models/apiResponse";
import { notFound } from "next/navigation";


async function getNowPlaying() {
    const res = await fetch(`${process.env.TMDB_API_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`, { cache: 'force-cache' })
    const movies: ApiResponse = await res.json();
    if (!movies) {
        notFound();
    }
    return movies;
}

function Movies() {
    const data = getNowPlaying();
    return (
        <section>
            <Typography variant="h1">NOW PLAYING</Typography>
            <Suspense>
                <MovieList movies={data} />
            </Suspense>
        </section>
    )
}

export default Movies;