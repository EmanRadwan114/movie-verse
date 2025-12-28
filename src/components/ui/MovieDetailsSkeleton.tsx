import React from "react";
import { Skeleton } from "./skeleton";

const MovieDetailsSkeleton: React.FC = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="border-0 shadow-xl p-0 w-full mt-5 bg-card">
        <div className="p-0 grid grid-cols-1 md:grid-cols-3">
          <Skeleton className="h-112.5 md:min-h-75 md:max-h-full w-full rounded-t-sm md:rounded-sm md:rounded-r-none" />
          <div className="p-5 col-span-2 flex flex-col gap-5">
            <Skeleton className="w-1/2 h-4 rounded-sm" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-full h-4 rounded-sm" />
              <Skeleton className="w-full h-4 rounded-sm" />
              <Skeleton className="w-full h-4 rounded-sm" />
              <Skeleton className="w-1/2 h-4 rounded-sm" />
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 3 }).map((_, indx) => (
                <Skeleton className="w-16 h-4 rounded-full" key={indx} />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton className="w-1/2 h-4 rounded-sm" />
              <Skeleton className="w-1/2 h-4 rounded-sm" />
              <Skeleton className="w-1/2 h-4 rounded-sm" />
            </div>
            <Skeleton className="w-full h-8 rounded-sm mt-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsSkeleton;
