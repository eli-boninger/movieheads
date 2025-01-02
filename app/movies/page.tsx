import axios from "axios";

interface ApiResponse {
    dates: any;
    page: number;
    results: Array<ApiResponseMovie>;
    total_pages: number;
    total_results: number;
}

interface ApiResponseMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

async function Movies() {
    const nowPlaying = await axios.get<ApiResponse>(`${process.env.TMDB_API_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`)
    return (
        <>
            {nowPlaying.data.results?.map(m => <div>{m.title}</div>)}
        </>
    )
}

export default Movies;