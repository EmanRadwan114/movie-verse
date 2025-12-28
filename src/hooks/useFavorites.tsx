import { useAppDispatch, useAppSelector } from "@/redux-toolkit/hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/redux-toolkit/movieSlice";
import { IMovie } from "@/types/interfaces";
import { useEffect, useMemo } from "react";
import { toast } from "react-toastify";

const useFavorites = (movie: IMovie) => {
  //———————————————————————————————— add to favourite ————————————————————————————————
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.movies);

  const isInFavorites = useMemo(
    () => favorites.findIndex((item) => item.id === movie.id) !== -1,
    [favorites, movie.id]
  );

  // save to local storage
  useEffect(() => {
    // if (typeof window !== undefined)
    localStorage.setItem("movie-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleMovieFavoriteStatus = () => {
    if (!isInFavorites) {
      toast.success("Movie is added to favorites");
      dispatch(addToFavorites(movie));
    } else {
      toast.success("Movie is removed from favorites");
      dispatch(removeFromFavorites(movie.id));
    }
  };

  return { toggleMovieFavoriteStatus, isInFavorites };
};

export default useFavorites;
