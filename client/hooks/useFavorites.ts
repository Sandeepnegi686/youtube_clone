import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useFavorites() {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/movies/favourites",
    fetcher,
  );

  return {
    favoriteMovies: data || [],
    isLoading,
    error,
    mutate,
  };
}
