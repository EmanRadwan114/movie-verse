"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { IMovie } from "@/types/interfaces";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import fallbackImg from "@/assets/fallback-img.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Rate from "./ui/Rate";
import { baseImgURL } from "@/services/api";
import MovieCategories from "./ui/MovieCategories";
import { useAppDispatch, useAppSelector } from "@/redux-toolkit/hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/redux-toolkit/movieSlice";
import useFavorites from "@/hooks/useFavorites";

interface IProps {
  movie: IMovie;
}

const MovieCard: React.FC<IProps> = ({ movie }) => {
  const [mounted, setMounted] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  //———————————————————————————————— add to favourite ————————————————————————————————
  const { isInFavorites, toggleMovieFavoriteStatus } = useFavorites(movie);

  return (
    <>
      <Card
        key={movie.id}
        className="shadow-lg pt-0 pb-5 gap-2 overflow-hidden group bg-card dark:bg-background border border-border"
      >
        {/*———————————————————————————————— card header ————————————————————————————————*/}
        <CardHeader className="p-0 relative gap-0 mb-2">
          <Image
            src={
              movie.poster_path
                ? `${baseImgURL}${movie.poster_path}`
                : fallbackImg
            }
            alt={movie.title}
            width={400}
            height={400}
            className="object-cover w-full h-72 rounded-t-sm group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:scale-105 transition-transform duration-500">
            {mounted && (
              <Heart
                size={30}
                className={`absolute top-5 end-5 text-transparent cursor-pointer ${
                  !isInFavorites ? "fill-white" : "fill-red-700"
                }`}
                fill="white"
                onClick={toggleMovieFavoriteStatus}
              />
            )}
          </div>
        </CardHeader>
        {/*———————————————————————————————— card content ————————————————————————————————*/}
        <Link href={`/movie/${movie.id}`}>
          <CardContent className="px-5 mb-2 flex flex-col gap-y-2">
            <h3 className="text-foreground hover:text-primary font-semibold capitalize text-lg transition-colors duration-300">
              {movie.title}
            </h3>
            <p className="text-foreground/70 mb-1">
              {movie.overview.slice(0, 80)}...
            </p>
            <MovieCategories categories={movie.genres} />
          </CardContent>
        </Link>

        {/*———————————————————————————————— card footer ————————————————————————————————*/}
        <CardFooter className="justify-between gap-x-2 mt-auto">
          <Button
            className="capitalize font-semibold w-2/3"
            onClick={() => navigate.push(`/movie/${movie.id}`)}
          >
            View details
          </Button>
          <Rate movie={movie} />
        </CardFooter>
      </Card>
    </>
  );
};

export default MovieCard;
