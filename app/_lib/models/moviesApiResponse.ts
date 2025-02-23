import { Movie } from "./movie";

export interface MoviesApiResponse {
    dates: any;
    page: number;
    results: Array<Movie>;
    total_pages: number;
    total_results: number;
}
