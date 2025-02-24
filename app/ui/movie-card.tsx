'use client';

import { useContext } from "react";
import { TmdbContext } from "./context/TmdbContext";
import Image from "next/image";
import { Movie } from "@/app/_lib/models";

interface Props {
    movie: Movie;
    small?: boolean;
}

export default function MovieCard(props: Props) {
    const { baseUrl, posterSize } = useContext(TmdbContext);
    const { movie, small = false } = props;

    return (
        <Image
            src={`${baseUrl}${posterSize}${movie.posterPath}`}
            alt={`${movie.title} movie poster`}
            width={small ? 46.25 : 185}
            height={small ? 75 : 300}
        />
    )
}