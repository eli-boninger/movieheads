import { Genre } from './genre';
import { ProductionCompany } from './productionCompany';

export interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: Array<Genre>;
    homepage: string;
    id: number;
    imdb_id: number;
    origin_country: Array<string>;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<ProductionCompany>;
    production_countries: Array<{ iso_3166_1: string, name: string }>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<any>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}