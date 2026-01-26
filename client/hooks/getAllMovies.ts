import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useGetAllMovies() {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/movies/getAllMovies",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    },
  );

  return {
    allMovies: data || [],
    isLoading,
    error,
    mutate,
  };
}
