"use client";

import Navbar from "./_components/Navbar";
import BillBoard from "./_components/BillBoard";
import { useGetAllMovies } from "@/hooks/getAllMovies";
import { useFavorites } from "@/hooks/useFavorites";
import MovieList from "./_components/MovieList";

export default function Page() {
  const { allMovies } = useGetAllMovies();
  const { favoriteMovies } = useFavorites();
  console.log(favoriteMovies);
  return (
    <>
      <div className="w-full h-dvh bg-zinc-900">
        <Navbar />
        <BillBoard />
        <MovieList title="Trending now" data={allMovies} />
        <MovieList title="Favourite Movies" data={favoriteMovies} />
      </div>
      <div className="w-full h-dvh bg-zinc-900"></div>
    </>
  );
}
