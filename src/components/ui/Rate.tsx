import { IMovie } from "@/types/interfaces";
import { Star } from "lucide-react";
import React from "react";

interface IProps {
  movie: IMovie | null;
}

const Rate: React.FC<IProps> = ({ movie }) => {
  return (
    <div className="flex gap-x-1 items-center">
      <span className="font-semibold text-lg">
        {movie?.vote_average.toFixed(1)}
      </span>
      <Star size={17} className="fill-amber-600 text-amber-600" />
    </div>
  );
};

export default Rate;
