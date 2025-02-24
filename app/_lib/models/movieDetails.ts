import { Genre } from './genre';
import { ProductionCompany } from './productionCompany';

export interface MovieDetails {
    adult: boolean;
    backdropPath: string;
    belongsToCollection: any;
    budget: number;
    genres: Array<Genre>;
    homepage: string;
    id: number;
    imdbId: number;
    originCountry: Array<string>;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string;
    productionCompanies: Array<ProductionCompany>;
    productionCountries: Array<any>;
    releaseDate: string;
    revenue: number;
    runtime: number;
    spokenLanguages: Array<any>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}