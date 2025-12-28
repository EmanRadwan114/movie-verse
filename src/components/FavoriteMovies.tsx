"use client";

import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import EmptyList from "./ui/EmptyList";
import { useAppDispatch, useAppSelector } from "@/redux-toolkit/hooks";
import { clearFavorites } from "@/redux-toolkit/movieSlice";
import Container from "./ui/Container";

const FavoriteMovies: React.FC = () => {
  const { favorites } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  const clearFavoritesList = () => {
    dispatch(clearFavorites());
    toast.success("Favorite list is cleared successfully!");
  };

  return (
    <main>
      <Container className="py-10">
        {favorites.length ? (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <p className="text-foregroundfont-semibold text-xl capitalize mb-2">
                you have{" "}
                <span className="text-primary">{favorites.length}</span>{" "}
                favorite {favorites.length === 1 ? "movie" : "movies"}
              </p>
              <Button
                variant={"destructive"}
                className="w-full sm:w-fit"
                onClick={clearFavoritesList}
              >
                Clear List
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
              {favorites?.map((item) => (
                <MovieCard key={item.id} movie={item} />
              ))}
            </div>
          </>
        ) : (
          <EmptyList message="your favorite list is empty. start adding a favorite movie." />
        )}
      </Container>
    </main>
  );
};

export default FavoriteMovies;
