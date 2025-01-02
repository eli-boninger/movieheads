'use client'
import { TmdbContext } from "./ui/context/TmdbContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <TmdbContext.Provider value={{ baseUrl: 'https://image.tmdb.org/t/p/', posterSize: 'w185' }}>{children}</TmdbContext.Provider>
    )
}