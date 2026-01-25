import { MovieType } from "@/types/MovieType";
import MovieList from "./_components/MovieList";
import { getAllMovies, getRandomMovie } from "@/hooks/movies";
import Navbar from "./_components/Navbar";
import BillBoard from "./_components/BillBoard";

export default async function Page() {
  const [movie, movies]: [MovieType, MovieType[]] = await Promise.all([
    getRandomMovie(),
    getAllMovies(),
  ]);
  return (
    <>
      <div className="w-full h-dvh bg-zinc-900">
        <Navbar />
        <BillBoard movie={movie} />
        <MovieList title="Trending now" data={movies} />
      </div>
      <div className="w-full h-dvh bg-zinc-900"></div>
    </>
  );
}
