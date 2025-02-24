'use client'

import { List, ListItem } from "@mui/material"
import MovieCard from "../ui/movie-card"
import { use, useEffect, useRef } from "react"
import { MoviesApiResponse } from "@/app/_lib/models/moviesApiResponse"
import Link from "next/link"

export const MovieList = ({ movies, scrollable = false, selectedMovie }: { movies: Promise<MoviesApiResponse>, scrollable?: boolean, selectedMovie?: number }) => {
    const data = use(movies)
    const selectedMovieRef = useRef<HTMLLIElement>(null)
    console.log(selectedMovie)

    useEffect(() => {
        selectedMovieRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'start' })
    }, [selectedMovieRef])

    return (
        <List
            sx={{
                display: 'flex',
                flexWrap: scrollable ? 'nowrap' : 'wrap',
                gap: scrollable ? '0.1rem' : '1rem',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'flex-start',
                maxWidth: scrollable ? '100%' : 'unset',
                overflowX: scrollable ? 'scroll' : 'hidden'
            }}>
            {data.results?.map(m =>
                <ListItem
                    ref={m.id === selectedMovie ? selectedMovieRef : null}
                    key={m.id}
                    sx={{
                        width: 'unset',
                        opacity: scrollable && m.id !== selectedMovie ? '0.5' : 1,
                        p: 0,
                    }}
                >
                    <Link href={`/movies/${m.id}`}><MovieCard small={scrollable} movie={m} /></Link>
                </ListItem>)}
        </List>)
}