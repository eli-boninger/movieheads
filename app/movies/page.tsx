import axios from "axios";
import { Typography } from "@mui/material";
import { Suspense } from "react";
import { MovieList } from "./movie-list";
import { ApiResponse } from "../_lib/models/apiResponse";

function Movies() {
    const data = axios.get<ApiResponse>(`${process.env.TMDB_API_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`)
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