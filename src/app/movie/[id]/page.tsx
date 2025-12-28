import MovieDetails from "@/components/MovieDetails";
import Container from "@/components/ui/Container";
import MovieDetailsSkeleton from "@/components/ui/MovieDetailsSkeleton";
import React, { Suspense } from "react";

interface IProps {
  params: { id: string };
}

const Page: React.FC<IProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <main>
      <Container>
        <Suspense fallback={<MovieDetailsSkeleton />}>
          <MovieDetails id={id} />
        </Suspense>
      </Container>
    </main>
  );
};

export default Page;
