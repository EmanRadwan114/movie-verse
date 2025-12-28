import React from "react";
import MovieDetailsCard from "./MovieDetailsCard";
import { fetchMovies } from "@/services/moviesServices";
import { getSingleMoviesEndpoint } from "./../services/api";

interface IProps {
  id: string;
}

const MovieDetails: React.FC<IProps> = async ({ id }) => {
  const movie = await fetchMovies(getSingleMoviesEndpoint(id));

  return (
    <>
      <MovieDetailsCard movie={movie} />
    </>
  );
};

export default MovieDetails;
