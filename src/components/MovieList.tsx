import { fetchMovies } from "@/services/moviesServices";
import MovieCard from "./MovieCard";
import { ICategory, IMovie, IMovieResponse } from "@/types/interfaces";
import Pagination from "./ui/Pagination";
import EmptyList from "./ui/EmptyList";
import {
  getAllMoviesEndpoint,
  getCategoriesEndpoint,
  getSearchEndpoint,
} from "@/services/api";
import { Suspense } from "react";
import MoviesSkeleton from "./ui/MoviesSkeleton";

interface IProps {
  page: string;
  query: string;
}

const MovieList: React.FC<IProps> = async ({ page, query }) => {
  const fetchAPI = () =>
    query === undefined
      ? getAllMoviesEndpoint(+page || 1)
      : getSearchEndpoint(query, +page);

  const {
    page: currentPage,
    results: movies,
    total_pages: totalPages,
  }: IMovieResponse = await fetchMovies(fetchAPI());

  const { genres: categories }: { genres: ICategory[] } = await fetchMovies(
    getCategoriesEndpoint()
  );

  const getMovieCateg = (genres: number[]) =>
    categories.filter((item) => genres?.includes(item.id));

  return (
    <>
      {movies?.length ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-3 gap-y-5">
            {movies.map((item: IMovie) => (
              <MovieCard
                movie={{ ...item, genres: getMovieCateg(item.genre_ids) }}
                key={item.id}
              />
            ))}
          </div>
          <Suspense>
            <Pagination
              currentPage={currentPage}
              totalPages={query ? totalPages : 500}
            />
          </Suspense>
        </>
      ) : (
        <EmptyList message="no movies found" />
      )}
    </>
  );
};

export default MovieList;
