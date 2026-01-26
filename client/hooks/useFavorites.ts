import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useFavorites() {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/movies/favourites",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return {
    favoriteMovies: data || [],
    isLoading,
    error,
    mutate,
  };
}
