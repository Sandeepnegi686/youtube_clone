"use client";

import Navbar from "./_components/Navbar";
import BillBoard from "./_components/BillBoard";
import { useGetAllMovies } from "@/hooks/getAllMovies";
import { useFavorites } from "@/hooks/useFavorites";
import useInfoModel from "@/hooks/useInfoModel";
import MovieList from "./_components/MovieList";
import InfoModel from "./_components/InfoModel";

export default function Page() {
  const { allMovies } = useGetAllMovies();
  const { favoriteMovies } = useFavorites();

  const { isOpen } = useInfoModel();

  return (
    <>
      <div className="w-full h-dvh bg-zinc-900">
        <InfoModel visible={isOpen} />
        <Navbar />
        <BillBoard />
        <MovieList title="Trending now" data={allMovies} />
        <MovieList title="Favourite Movies" data={favoriteMovies} />
      </div>
    </>
  );
}
