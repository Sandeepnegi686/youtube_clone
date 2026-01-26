import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useGetAllMovies() {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/movies/getAllMovies",
    fetcher,
  );

  return {
    allMovies: data || [],
    isLoading,
    error,
    mutate,
  };
}
