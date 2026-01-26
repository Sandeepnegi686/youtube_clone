import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useRandomMovie() {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/movies/getrandommovie",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return {
    movie: data || {},
    isLoading,
    error,
    mutate,
  };
}
