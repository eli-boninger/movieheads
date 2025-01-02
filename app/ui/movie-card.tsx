'use client';

import { useContext } from "react";
import { TmdbContext } from "./context/TmdbContext";
import Image from "next/image";

interface Props {
    movie: Movie;
}

export default function MovieCard(props: Props) {
    const { baseUrl, posterSize } = useContext(TmdbContext);
    const { movie } = props;

    return (
        <Image
            src={`${baseUrl}${posterSize}${movie.poster_path}`}
            alt={`${movie.title} movie poster`}
            width={185}
            height={300}
        />
    )
}