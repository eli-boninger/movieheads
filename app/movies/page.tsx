import axios from "axios";
import MovieCard from "@/app/ui/movie-card";
import { crimsonPro } from "@/app/ui/fonts";
import { Typography } from "@mui/material";

interface ApiResponse {
    dates: any;
    page: number;
    results: Array<Movie>;
    total_pages: number;
    total_results: number;
}

async function Movies() {
    const { data: nowPlaying } = await axios.get<ApiResponse>(`${process.env.TMDB_API_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`)
    console.log(nowPlaying)
    return (
        <section>
            <Typography variant="h1" className={`${crimsonPro.className}`}>NOW PLAYING</Typography>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {nowPlaying.results?.map(m => <li key={m.id}><MovieCard movie={m} /></li>)}
            </ul>

        </section>
    )
}

export default Movies;