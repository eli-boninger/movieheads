import axios from "axios";
import MovieCard from "../ui/movie-card";

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
            <h1 className="text-xl">Now playing</h1>
            <ul className="flex flex-wrap gap-4">
                {nowPlaying.results?.map(m => <li key={m.id}><MovieCard movie={m} /></li>)}
            </ul>

        </section>
    )
}

export default Movies;