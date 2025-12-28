import React from "react";
import { Skeleton } from "./skeleton";
import { Star } from "lucide-react";

const MoviesSkeleton: React.FC = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-3 gap-y-5">
      {Array.from({ length: 16 }).map((_, indx) => (
        <div
          className="shadow-lg pt-0 pb-5 bg-card dark:bg-background border border-border rounded-sm flex flex-col gap-3"
          key={indx}
        >
          <Skeleton className="w-full h-72 rounded-t-sm rounded-b-none" />
          <div className="px-3 flex flex-col gap-5">
            <Skeleton className="w-2/3 h-4 rounded-sm" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-full h-4 rounded-sm" />
              <Skeleton className="w-full h-4 rounded-sm" />
              <Skeleton className="w-2/3 h-4 rounded-sm" />
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 3 }).map((_, indx) => (
                <Skeleton className="w-12 h-4 rounded-full" key={indx} />
              ))}
            </div>
            <div className="flex justify-between items-center">
              <Skeleton className="w-1/2 h-8 rounded-sm" />
              <Star size={20} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MoviesSkeleton;
