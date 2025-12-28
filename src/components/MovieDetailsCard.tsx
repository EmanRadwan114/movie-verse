"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MovieCategories from "@/components/ui/MovieCategories";

import type { IMovie } from "@/types/interfaces";
import React, { useEffect, useState } from "react";
import fallbackImg from "@/assets/fallback-img.jpg";
import Image from "next/image";
import Rate from "./ui/Rate";
import { baseImgURL } from "@/services/api";
import { useRouter } from "next/navigation";
import useFavorites from "@/hooks/useFavorites";
import { Heart } from "lucide-react";
import Container from "./ui/Container";

interface IProps {
  movie: IMovie;
}

const MovieDetailsCard: React.FC<IProps> = ({ movie }) => {
  const [mounted, setMounted] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  //———————————————————————————————— add to favourite ————————————————————————————————
  const { isInFavorites, toggleMovieFavoriteStatus } = useFavorites(movie);

  return (
    <section className="flex items-center justify-center">
      <Container className="py-10">
        <Card className="border-0 shadow-xl p-0 w-full bg-card">
          <CardContent className="p-0 grid grid-cols-1 md:grid-cols-3">
            <div className="w-full relative">
              <Image
                src={
                  movie?.poster_path
                    ? `${baseImgURL}${movie?.poster_path}`
                    : fallbackImg
                }
                alt={movie?.title}
                width={400}
                height={400}
                className="object-cover h-112.5 md:min-h-75 md:max-h-full w-full rounded-t-sm md:rounded-sm md:rounded-r-none"
              />
              <div className="absolute inset-0 bg-black/15"></div>
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
            <div className="p-5 col-span-2 flex flex-col">
              <h2 className="font-bold text-xl text-primary mb-2">
                {movie?.title}
              </h2>

              <div className="flex flex-col gap-y-4 text-lg flex-1">
                <p className="text-foreground/80 text-base">
                  {movie?.overview}
                </p>
                <MovieCategories categories={movie?.genres} />

                {/*———————————————————————————————— release date ————————————————————————————————*/}
                <div className="flex items-center gap-3">
                  <span className="capitalize font-bold text-base">
                    release date:{" "}
                  </span>
                  <span className="font-semibold px-3 text-foreground/80 text-sm">
                    {movie?.release_date}
                  </span>
                </div>
                {/*———————————————————————————————— time ————————————————————————————————*/}
                <div className="flex items-center gap-3">
                  <span className="capitalize font-bold text-base">time: </span>
                  <Badge
                    variant={"default"}
                    className="font-semibold text-sm py-0.5 px-3 flex items-center justify-center leading-normal"
                  >
                    {movie?.runtime} mins
                  </Badge>
                </div>

                {/*———————————————————————————————— rate ————————————————————————————————*/}
                <div className="flex items-center gap-3">
                  <span className="capitalize font-bold text-base">
                    Avg Rate:{" "}
                  </span>
                  <Rate movie={movie && movie} />{" "}
                  <span className="text-foreground/60 dark:text-foreground/40 text-base">
                    ({movie?.vote_count} rates)
                  </span>
                </div>

                <Button
                  className="capitalize font-semibold p-0! flex items-center mt-auto"
                  onClick={() => !movie?.homepage && navigate.push("/")}
                >
                  <a
                    href={movie?.homepage && movie?.homepage}
                    target={movie?.homepage ? "_blank" : "_self"}
                    className="flex-1 py-2 inline-block"
                  >
                    {movie?.homepage ? "Movie Homepage" : "Back to home"}
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default MovieDetailsCard;
