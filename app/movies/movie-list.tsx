import { List, ListItem } from "@mui/material"
import MovieCard from "../ui/movie-card"
import { use } from "react"
import { MoviesApiResponse } from "@/app/_lib/models/moviesApiResponse"
import Link from "next/link"

export const MovieList = ({ movies }: { movies: Promise<MoviesApiResponse> }) => {
    const data = use(movies)
    return (<List sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', alignContent: 'center', justifyContent: 'space-around' }}>
        {data.results?.map(m => <ListItem key={m.id} sx={{ width: 'unset', p: 0, flexGrow: 2 }}><Link href={`/movies/${m.id}`}><MovieCard movie={m} /></Link></ListItem>)}
    </List>)
}