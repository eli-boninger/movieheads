import { Typography } from "@mui/material";
import { Suspense } from "react";
import { MovieList } from "./movie-list";
import { getNowPlaying } from "@/app/_lib/services/tmdbService";


function Movies() {
    const movies = getNowPlaying();
    return (
        <section>
            <Typography variant="h1">NOW PLAYING</Typography>
            <Suspense>
                <MovieList movies={movies} />
            </Suspense>
        </section>
    )
}

export default Movies;