import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useRandomMovie() {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/movies/getrandommovie",
    fetcher,
  );

  return {
    movie: data || {},
    isLoading,
    error,
    mutate,
  };
}
