import { getNowPlaying } from "@/app/_lib/services/tmdbService"
import { MovieList } from "../movie-list";
import { Suspense } from "react";

export default async function Layout({ params, children }: { params: Promise<{ movieId: string }>, children: React.ReactNode }) {
    const id = (await params).movieId;
    const movies = getNowPlaying();
    return (<>
        <Suspense>
            <MovieList movies={movies} selectedMovie={+id} scrollable />
        </Suspense>
        {children}
    </>)
}