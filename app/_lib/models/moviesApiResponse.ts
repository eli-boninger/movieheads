import { Movie } from "./movie";

export interface MoviesApiResponse {
    dates: any;
    page: number;
    results: Array<Movie>;
    totalPages: number;
    totalResults: number;
}
