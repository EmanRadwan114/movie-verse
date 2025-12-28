import MovieList from "@/components/MovieList";
import Container from "@/components/ui/Container";
import MoviesSkeleton from "@/components/ui/MoviesSkeleton";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string; query: string };
}) {
  const { page: pageQuery, query } = await searchParams;

  return (
    <main>
      <Container className="py-10">
        <Suspense fallback={<MoviesSkeleton />}>
          <MovieList page={pageQuery} query={query} />
        </Suspense>
      </Container>
    </main>
  );
}
